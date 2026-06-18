import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

// Ensure storage directories exist
const DATA_DIR = path.join(process.cwd(), "server_data");
const UPLOAD_DIR = path.join(process.cwd(), "uploads");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Helper: Read/Write JSON database files safely
const getDb = (filename: string): any[] => {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return [];
  }
};

const saveDb = (filename: string, data: any[]): void => {
  const filePath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error(`Error saving ${filename}:`, err);
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Static directory for uploaded files
  app.use("/uploads", express.static(UPLOAD_DIR));

  // --- API ROUTE: HEALTH CHECK ---
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  // --- API ROUTES: COMPATIBILITY / SHARED COMFORT JOURNAL ---
  app.get("/api/journal", (req, res) => {
    const journal = getDb("comfort_journal_notes.json");
    res.json(journal);
  });

  app.post("/api/journal", (req, res) => {
    const { content, formattedTime, id } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    const journal = getDb("comfort_journal_notes.json");
    const newEntry = {
      id: id || `journal_${Date.now()}`,
      content,
      formattedTime: formattedTime || new Date().toLocaleString(),
      createdAt: new Date().toISOString(),
    };
    journal.unshift(newEntry);
    saveDb("comfort_journal_notes.json", journal);
    res.json(journal);
  });

  app.delete("/api/journal/:id", (req, res) => {
    const { id } = req.params;
    let journal = getDb("comfort_journal_notes.json");
    journal = journal.filter((item) => item.id !== id);
    saveDb("comfort_journal_notes.json", journal);
    res.json(journal);
  });

  // --- API ROUTES: SHARED COMFORT VIDEOS ---
  app.get("/api/videos", (req, res) => {
    const videos = getDb("comfort_saved_videos.json");
    res.json(videos);
  });

  app.post("/api/videos", (req, res) => {
    const { url, note, title, friendlyTime, id } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }
    const videos = getDb("comfort_saved_videos.json");
    const newVideo = {
      id: id || `video_${Date.now()}`,
      url,
      note: note || "",
      title: title || "Custom Archive Item",
      friendlyTime: friendlyTime || new Date().toLocaleString(),
      createdAt: new Date().toISOString(),
    };
    videos.unshift(newVideo);
    saveDb("comfort_saved_videos.json", videos);
    res.json(videos);
  });

  app.delete("/api/videos/:id", (req, res) => {
    const { id } = req.params;
    let videos = getDb("comfort_saved_videos.json");
    videos = videos.filter((item) => item.id !== id);
    saveDb("comfort_saved_videos.json", videos);
    res.json(videos);
  });

  // --- API ROUTES: SHARED FILE UPLOAD CABINET ---
  app.get("/api/files", (req, res) => {
    const files = getDb("uploaded_files.json");
    res.json(files);
  });

  app.delete("/api/files/:id", (req, res) => {
    const { id } = req.params;
    let files = getDb("uploaded_files.json");
    const foundFile = files.find((f) => f.id === id);

    if (foundFile) {
      const physicalPath = path.join(UPLOAD_DIR, foundFile.filename);
      if (fs.existsSync(physicalPath)) {
        try {
          fs.unlinkSync(physicalPath);
        } catch (err) {
          console.error(`Error deleting physical file ${foundFile.filename}:`, err);
        }
      }
    }

    files = files.filter((f) => f.id !== id);
    saveDb("uploaded_files.json", files);
    res.json(files);
  });

  // Native streaming file upload (no Multer bottleneck)
  app.post("/api/upload-file", (req, res) => {
    const rawFilename = (req.headers["x-filename"] as string) || "file";
    const contentType = (req.headers["content-type"] as string) || "application/octet-stream";

    // Sanitize filename
    const parsedFilename = path.parse(rawFilename);
    const safeBaseName = parsedFilename.name.replace(/[^a-zA-Z0-9_\- ]/g, "").replace(/\s+/g, "_");
    const extension = parsedFilename.ext.toLowerCase();
    const safeFilename = `${Date.now()}_${safeBaseName}${extension}`;

    const filePath = path.join(UPLOAD_DIR, safeFilename);
    const writeStream = fs.createWriteStream(filePath);

    req.pipe(writeStream);

    writeStream.on("finish", () => {
      const stats = fs.statSync(filePath);
      const files = getDb("uploaded_files.json");
      const newFile = {
        id: `file_${Date.now()}`,
        filename: safeFilename,
        originalName: rawFilename,
        contentType,
        size: stats.size,
        uploadedAt: new Date().toISOString(),
      };
      files.unshift(newFile);
      saveDb("uploaded_files.json", files);
      res.json({ success: true, files });
    });

    writeStream.on("error", (err) => {
      console.error("Write stream error:", err);
      res.status(500).json({ error: "File upload stream writing error" });
    });
  });

  // Integrate Vite dynamically based on running mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully running on http://localhost:${PORT}`);
  });
}

startServer();
