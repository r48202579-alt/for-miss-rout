/**
 * -------------------------------------------------------------
 *              "FOR MISS ROUT 🌙" - WEBSITE CONTROLLER
 *                      Vanilla JavaScript
 * -------------------------------------------------------------
 */

const initializeApp = () => {
  // Retrieve config from content.js (window.APP_CONTENT)
  const config = window.APP_CONTENT;
  if (!config) {
    console.error("Config not found. Please ensure content.js is loaded first.");
    return;
  }

  // Safe DOM selection helper to avoid any null errors
  const safeGet = (id) => document.getElementById(id);

  // Define target DOM elements using unique IDs as per framework instructions
  const pswdScreen = safeGet("password-screen");
  const pswdForm = safeGet("password-form");
  const pswdInput = safeGet("password-input");
  const pswdFeedback = safeGet("password-feedback");
  const lockQuestion = safeGet("lock-question");
  const lockHint = safeGet("lock-hint");
  const mainPortal = safeGet("main-portal");

  const heroTitle = safeGet("hero-title");
  const heroMsg = safeGet("hero-message");
  const heroSupport = safeGet("hero-support");
  const heroPrimaryBtn = safeGet("hero-primary-btn");
  const heroSecondaryBtn = safeGet("hero-secondary-btn");
  const dynamicGreetingBadge = safeGet("dynamic-greeting-badge");

  const openWhenTitle = safeGet("open-when-title");
  const openWhenSubtitle = safeGet("open-when-subtitle");
  const openWhenGrid = safeGet("open-when-grid");

  const complimentsTitle = safeGet("compliments-title");
  const complimentsSubtitle = safeGet("compliments-subtitle");
  const complimentText = safeGet("compliment-text");
  const complimentCount = safeGet("compliment-count");
  const getComplimentBtn = safeGet("get-compliment-btn");
  const getComplimentBtnText = safeGet("get-compliment-btn-text");

  const memoriesTitle = safeGet("memories-title");
  const memoriesSubtitle = safeGet("memories-subtitle");
  const timelineFlow = safeGet("timeline-flow");
  const memoriesEnding = safeGet("memories-ending");

  const songsTitle = safeGet("songs-title");
  const songsSubtitle = safeGet("songs-subtitle");
  const songsInstruction = safeGet("songs-instruction");
  const songsListContainer = safeGet("songs-list-container");

  const smileTitle = safeGet("smile-title");
  const smileSubtitle = safeGet("smile-subtitle");
  const smileMsgDisplay = safeGet("smile-msg-display");
  const emergencySmileBtn = safeGet("emergency-smile-btn");
  const emergencySmileBtnText = safeGet("emergency-smile-btn-text");

  const futureTitle = safeGet("future-title");
  const futureSubtitle = safeGet("future-subtitle");
  const futureListContainer = safeGet("future-list-container");
  const futureEndingQuote = safeGet("future-ending-quote");

  const interactiveMoon = safeGet("interactive-moon");
  const secretMoonModal = safeGet("secret-moon-modal");
  const secretModalContent = safeGet("secret-modal-content");
  const secretCloseBtn = safeGet("secret-close-btn");
  const secretDismissBtn = safeGet("secret-dismiss-btn");

  const infoModal = safeGet("info-modal");
  const modalHeadingText = safeGet("modal-heading-text");
  const modalBodyContent = safeGet("modal-body-content");
  const modalCloseBtn = safeGet("modal-close-btn");
  const modalDismissBtn = safeGet("modal-dismiss-btn");

  const bgAudio = safeGet("bg-audio");
  const musicToggleBtn = safeGet("music-toggle-btn");
  const audioToast = safeGet("audio-toast");
  const audioToastMsg = safeGet("audio-toast-msg");

  const journalTitle = safeGet("journal-title");
  const journalSubtitle = safeGet("journal-subtitle");
  const journalTextarea = safeGet("journal-textarea");
  const saveNoteBtn = safeGet("save-note-btn");
  const saveNoteBtnText = safeGet("save-note-btn-text");
  const charCount = safeGet("char-count");
  const journalEntriesContainer = safeGet("journal-entries-container");

  // -------------------------------------------------------------
  // INITIAL STATIC TEXT COUPLINGS (FROM content.js with extreme safety checks)
  // -------------------------------------------------------------
  try {
    if (lockQuestion) lockQuestion.textContent = config.security.questionText;
    if (lockHint) lockHint.textContent = config.security.hintText;
    if (pswdInput) pswdInput.placeholder = config.security.inputPlaceholder;

    if (heroTitle) heroTitle.textContent = config.hero.mainTitle;
    if (heroMsg) heroMsg.textContent = config.hero.mainMessage;
    if (heroSupport) heroSupport.textContent = `“${config.hero.supportText}”`;
    if (heroPrimaryBtn) heroPrimaryBtn.innerHTML = `<span>${config.hero.primaryButtonText}</span>`;
    if (heroSecondaryBtn) heroSecondaryBtn.innerHTML = `<span>${config.hero.secondaryButtonText}</span>`;

    if (openWhenTitle) openWhenTitle.textContent = config.openWhen.title;
    if (openWhenSubtitle) openWhenSubtitle.textContent = config.openWhen.subtitle;

    if (complimentsTitle) complimentsTitle.textContent = config.compliments.title;
    if (complimentsSubtitle) complimentsSubtitle.textContent = config.compliments.subtitle;
    if (getComplimentBtnText) getComplimentBtnText.textContent = config.compliments.buttonText;

    if (memoriesTitle) memoriesTitle.textContent = config.memories.title;
    if (memoriesSubtitle) memoriesSubtitle.textContent = config.memories.subtitle;
    if (memoriesEnding) memoriesEnding.textContent = config.memories.endingQuote;

    if (songsTitle) songsTitle.textContent = config.songs.title;
    if (songsSubtitle) songsSubtitle.textContent = config.songs.subtitle;
    if (songsInstruction) songsInstruction.textContent = config.songs.musicInstruction;

    if (smileTitle) smileTitle.textContent = config.emergencySmile.title;
    if (smileSubtitle) smileSubtitle.textContent = config.emergencySmile.subtitle;
    if (emergencySmileBtnText) emergencySmileBtnText.textContent = config.emergencySmile.btnText;

    if (futureTitle) futureTitle.textContent = config.futureUs.title;
    if (futureSubtitle) futureSubtitle.textContent = config.futureUs.subtitle;
    if (futureEndingQuote) futureEndingQuote.textContent = config.futureUs.endingText;

    if (config.journal) {
      if (journalTitle) journalTitle.textContent = config.journal.title;
      if (journalSubtitle) journalSubtitle.textContent = config.journal.subtitle;
      if (journalTextarea) journalTextarea.placeholder = config.journal.inputPlaceholder;
      if (saveNoteBtnText) saveNoteBtnText.textContent = config.journal.saveBtnText;
    }
  } catch (err) {
    console.error("Critical: text bindings failed gracefully: ", err);
  }

  // -------------------------------------------------------------
  // TWINKLING STARFIELD BACKGROUND CANVAS
  // -------------------------------------------------------------
  const canvas = safeGet("stars-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    let stars = [];
    const maxStars = 80;

    class Star {
      constructor(w, h) {
        this.reset(w, h);
      }

      reset(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.radius = Math.random() * 1.5 + 0.3;
        this.baseAlpha = Math.random() * 0.4 + 0.4;
        this.alpha = this.baseAlpha;
        this.twinkleFactor = Math.random() * 0.02 + 0.005;
        this.speed = Math.random() * 0.15 + 0.05;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 204, 242, ${this.alpha})`;
        ctx.fill();
      }

      update(w, h) {
        this.y += this.speed;
        if (this.y > h) {
          this.y = -10;
          this.x = Math.random() * w;
        }
        this.alpha += this.twinkleFactor;
        if (this.alpha > 0.95 || this.alpha < 0.2) {
          this.twinkleFactor = -this.twinkleFactor;
        }
      }
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width || window.innerWidth;
        const height = entry.contentRect.height || window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        if (stars.length === 0) {
          for (let i = 0; i < maxStars; i++) {
            stars.push(new Star(width, height));
          }
        }
      }
    });
    resizeObserver.observe(document.body);

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let s of stars) {
        s.update(canvas.width, canvas.height);
        s.draw();
      }
      requestAnimationFrame(animateStars);
    }
    requestAnimationFrame(animateStars);
  }

  // -------------------------------------------------------------
  // DYNAMIC GREETING LOGIC (TIME DEPENDENT)
  // -------------------------------------------------------------
  function getDynamicGreeting() {
    try {
      const hours = new Date().getHours();
      if (hours >= 5 && hours < 12) {
        return config.hero.greetings.morning;
      } else if (hours >= 12 && hours < 17) {
        return config.hero.greetings.afternoon;
      } else if (hours >= 17 && hours < 21) {
        return config.hero.greetings.evening;
      } else {
        return config.hero.greetings.night;
      }
    } catch (e) {
      return "Hi Miss Rout 🌙";
    }
  }
  
  // Set real-time greeting initially
  if (dynamicGreetingBadge) {
    dynamicGreetingBadge.textContent = getDynamicGreeting();
  }

  // -------------------------------------------------------------
  // PASSWORD GATE ENTRY & TRANSITIONS (FORGIVING & BULLETPROOF DEPLOYMENT)
  // -------------------------------------------------------------
  let passwordAttempts = 0;

  const performUnlock = () => {
    console.log("Password accepted / Unlock sequence starting");
    
    if (pswdFeedback) {
      pswdFeedback.classList.remove("show");
    }
    
    if (pswdScreen) {
      pswdScreen.classList.add("dismissed");
    }
    
    // Explicit visibility overrides to rescue mobile paint states
    if (mainPortal) {
      mainPortal.style.display = "block";
      mainPortal.style.opacity = "1";
      mainPortal.style.pointerEvents = "auto";
      mainPortal.classList.remove("hidden-init");
      mainPortal.classList.add("fade-in-delayed");
    }
    
    setTimeout(() => {
      if (pswdScreen) {
        pswdScreen.style.display = "none";
      }
      
      console.log("Main content shown - Portal opened successfully");
      
      // Dispatch resize/scrolling events to wake up layouts & IntersectionObserver
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
      
      try {
        initScrollReveals();
      } catch (err) {
        console.error("Scroll reveal init encountered issue: ", err);
      }
      
      // MOBILE-FAILSAFE: Auto-reveal all content sections after 1.5 seconds if IntersectionObserver fails
      setTimeout(() => {
        const sections = document.querySelectorAll(".content-section");
        sections.forEach(sec => {
          if (!sec.classList.contains("reveal") || window.getComputedStyle(sec).opacity === "0") {
            sec.classList.add("reveal");
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
          }
        });
      }, 1500);

    }, 800);
  };

  // Multiple Fallback Unlock Elements
  if (lockQuestion) {
    lockQuestion.style.cursor = "pointer";
    lockQuestion.addEventListener("click", () => {
      console.log("Portal opened via lock-question tap.");
      performUnlock();
    });
  }
  if (lockHint) {
    lockHint.style.cursor = "pointer";
    lockHint.addEventListener("click", () => {
      console.log("Portal opened via lock-hint tap.");
      performUnlock();
    });
  }
  const miniMoonGlow = document.querySelector(".mini-moon-glow");
  if (miniMoonGlow) {
    miniMoonGlow.style.cursor = "pointer";
    miniMoonGlow.addEventListener("click", () => {
      console.log("Portal opened via mini-moon-glow tap.");
      performUnlock();
    });
  }
  const lockDecorative = document.querySelector(".lock-decorative");
  if (lockDecorative) {
    lockDecorative.style.cursor = "pointer";
    lockDecorative.addEventListener("click", () => {
      console.log("Portal opened via lock-decorative tap.");
      performUnlock();
    });
  }

  // Handle submit key binding safely
  if (pswdForm) {
    pswdForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const typedRaw = pswdInput ? pswdInput.value : "";
      const typed = (typedRaw || "").trim().toLowerCase();
      const correct = (config.security.correctPassword || "miss rout").trim().toLowerCase();

      // Standardize matches
      const simplifiedTyped = typed.replace(/[\s\-_]/g, "");
      const simplifiedCorrect = correct.replace(/[\s\-_]/g, "");

      // Accept absolutely anything close or 2+ chars
      const isMatched = (
        typed === correct || 
        simplifiedTyped === simplifiedCorrect || 
        typed.includes("rout") || 
        typed.includes("miss") || 
        typed.includes("love") || 
        typed.includes("priya") ||
        typed.length >= 2 ||
        passwordAttempts >= 2
      );

      if (isMatched) {
        performUnlock();
      } else {
        passwordAttempts++;
        
        if (pswdFeedback) {
          pswdFeedback.textContent = "Unlocking the romantic space for you anyway... Welcome Miss Rout 🌙";
          pswdFeedback.classList.add("show");
        }
        
        // Gentle shaking effect on the lock card
        const card = document.querySelector(".lock-card");
        if (card) {
          card.style.animation = "none";
          setTimeout(() => {
            card.style.animation = "shake 0.4s ease-in-out";
          }, 5);
        }

        // Automatically unlock after 1.2 seconds anyway so they are never stranded
        setTimeout(() => {
          performUnlock();
        }, 1200);
      }
    });
  }

  // Inject beautiful password shake keyframe
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-10px); }
      40%, 80% { transform: translateX(10px); }
    }
  `;
  document.head.appendChild(styleEl);

  // -------------------------------------------------------------
  // BUILDING DYNAMIC GRID: OPEN WHEN...
  // -------------------------------------------------------------
  config.openWhen.cards.forEach(cardData => {
    const card = document.createElement("div");
    card.classList.add("comfort-card", "glassmorphism");
    card.id = `card-${cardData.id}`;
    
    card.innerHTML = `
      <div class="comfort-card-glow"></div>
      <div>
        <div class="card-icon">${getEmojiForCard(cardData.id)}</div>
        <h3 class="serif-title">${cardData.title}</h3>
        <p>${cardData.shortDesc}</p>
      </div>
      <div class="card-action-hint">open card ✨</div>
    `;

    card.addEventListener("click", () => {
      openCardModal(cardData.title, cardData.modalContent);
    });

    openWhenGrid.appendChild(card);
  });

  function getEmojiForCard(id) {
    switch (id) {
      case "sad": return "🌧️";
      case "overthinking": return "🌙";
      case "not-enough": return "🤍";
      case "forget-here": return "🫂";
      case "motivation": return "🌻";
      case "miss-me": return "💌";
      default: return "🤍";
    }
  }

  // Open general interactive modals
  function openCardModal(title, bodyHtml) {
    if (modalHeadingText) modalHeadingText.textContent = title;
    if (modalBodyContent) modalBodyContent.innerHTML = bodyHtml;
    if (infoModal) infoModal.classList.add("open");
  }

  // Modal dismissal click bindings
  const closeModal = () => {
    if (infoModal) infoModal.classList.remove("open");
  };
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener("click", closeModal);
  if (infoModal) {
    infoModal.addEventListener("click", (e) => {
      if (e.target === infoModal) closeModal();
    });
  }

  // -------------------------------------------------------------
  // RANDOM COMPLIMENT SYSTEM
  // -------------------------------------------------------------
  let revealedList = [];
  let clickCount = 0;

  if (getComplimentBtn) {
    getComplimentBtn.addEventListener("click", () => {
      clickCount++;
      let selected = "";

      // Trigger special highlight compliment after configured clicks
      if (clickCount === config.compliments.specialTriggerCount) {
        selected = config.compliments.specialEyesMessage;
      } else {
        // Filter out reasons already displayed to prevent immediate duplicates
        let pool = config.compliments.list.filter(item => !revealedList.includes(item));
        if (pool.length === 0) {
          revealedList = []; // reset once complete cycle done
          pool = config.compliments.list;
        }
        const randIdx = Math.floor(Math.random() * pool.length);
        selected = pool[randIdx];
        revealedList.push(selected);
      }

      // Apply soft fade transition of text inside card
      if (complimentText) {
        complimentText.style.opacity = "0";
        setTimeout(() => {
          complimentText.textContent = selected;
          complimentText.style.opacity = "1";
          if (complimentCount) complimentCount.textContent = clickCount;
        }, 250);
      }
    });
  }

  // -------------------------------------------------------------
  // INTERACTIVE MEMORY WAY TIMELINE
  // -------------------------------------------------------------
  if (timelineFlow && config.memories && config.memories.list) {
    config.memories.list.forEach((memory, index) => {
      const item = document.createElement("div");
      item.classList.add("timeline-item");
      
      // Aligns alternating alignments
      if (index % 2 === 0) {
        item.classList.add("left-alignment");
      } else {
        item.classList.add("right-alignment");
      }

      item.innerHTML = `
        <div class="timeline-node"></div>
        <div class="timeline-card-wrapper">
          <div class="timeline-card glassmorphism">
            <span class="timeline-number">${memory.number}</span>
            <h4 class="serif-title">${memory.title}</h4>
            <p>${memory.description}</p>
          </div>
        </div>
      `;

      timelineFlow.appendChild(item);
    });
  }

  // -------------------------------------------------------------
  // SONGS SHOWCASE ACCORDION (Interactive Playable tracks)
  // -------------------------------------------------------------
  if (songsListContainer && config.songs && config.songs.list) {
    config.songs.list.forEach((song, idx) => {
      const songCard = document.createElement("div");
      songCard.classList.add("song-card", "glassmorphism");
      songCard.id = `song-card-${idx}`;

      songCard.innerHTML = `
        <div class="song-basic-row">
          <div class="song-left-desc">
            <div class="music-badge-icon">🎵</div>
            <div class="song-title-group">
              <h4>${song.title}</h4>
              <span class="song-artist-txt">${song.artist}</span>
            </div>
          </div>
          <div class="song-disclosure-indicator">view reason 🌙</div>
        </div>
        <div class="song-reason-reveal">
          <div class="song-reason-content">
            <p class="song-reason-quote">"${song.reason}"</p>
            <div class="song-actions">
              <button class="song-play-btn" data-url="${song.trackUrl}">
                ▶️ Listen on Site
              </button>
              <a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="song-yt-btn">
                📺 Listen on YouTube
              </a>
            </div>
          </div>
        </div>
      `;

    // Only toggle accordion expansion when not clicking on the action buttons
    songCard.addEventListener("click", (e) => {
      if (e.target.closest(".song-actions")) {
        return;
      }
      
      const isExpanded = songCard.classList.contains("expanded");
      document.querySelectorAll(".song-card").forEach(sc => sc.classList.remove("expanded"));
      
      if (!isExpanded) {
        songCard.classList.add("expanded");
      }
    });

    // Audio Play/Pause Trigger logic
    const playBtn = songCard.querySelector(".song-play-btn");
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Stop click from collapsing/expanding accordion

      const trackUrl = song.trackUrl;
      const isCurrentActive = (bgAudio.src === trackUrl);

      if (isCurrentActive) {
        if (!bgAudio.paused) {
          bgAudio.pause();
          isMusicPlaying = false;
          if (musicToggleBtn) {
            musicToggleBtn.classList.remove("playing");
            musicToggleBtn.querySelector(".music-text").textContent = "Play music 🎧";
          }
          showToastNotification(`Paused: "${song.title}" 🌙`);
        } else {
          bgAudio.play().then(() => {
            isMusicPlaying = true;
            if (musicToggleBtn) {
              musicToggleBtn.classList.add("playing");
              musicToggleBtn.querySelector(".music-text").textContent = "Pause keys 🎹";
            }
            showToastNotification(`Playing: "${song.title}" 🌸✨`);
          }).catch(err => {
            console.log("Play error: ", err);
          });
        }
      } else {
        // Switch audio source to selected song
        bgAudio.src = trackUrl;
        bgAudio.play().then(() => {
          isMusicPlaying = true;
          if (musicToggleBtn) {
            musicToggleBtn.classList.add("playing");
            musicToggleBtn.querySelector(".music-text").textContent = "Pause keys 🎹";
          }
          showToastNotification(`Playing: "${song.title}" 🌸✨`);
        }).catch(err => {
          console.log("Play error on new track: ", err);
        });
      }
    });

    songsListContainer.appendChild(songCard);
  });
  }

  // Re-synchronise inline play/pause button labels active in background or from main toggles
  function updateSongCardPlayStateUI() {
    if (!bgAudio) return;
    const currentSrc = bgAudio.src;
    const isPaused = bgAudio.paused;

    document.querySelectorAll(".song-play-btn").forEach(btn => {
      const btnUrl = btn.getAttribute("data-url");
      // Match full or partial URL matching to allow bulletproof checks
      const isMatch = (currentSrc && btnUrl && (currentSrc === btnUrl || currentSrc.endsWith(btnUrl) || btnUrl.endsWith(currentSrc)));
      if (isMatch && !isPaused) {
        btn.innerHTML = "⏸️ Playing...";
        btn.classList.add("playing");
      } else {
        btn.innerHTML = "▶️ Listen on Site";
        btn.classList.remove("playing");
      }
    });
  }

  // Bind reactive checks directly into native audio events
  if (bgAudio) {
    bgAudio.addEventListener("play", updateSongCardPlayStateUI);
    bgAudio.addEventListener("pause", updateSongCardPlayStateUI);
    bgAudio.addEventListener("ended", updateSongCardPlayStateUI);
  }

  // -------------------------------------------------------------
  // EMERGENCY SMILE CABINET CONTROLLER (Mood prescription engine)
  // -------------------------------------------------------------
  let currentMood = "overthinking";
  let smileHistoryByCategory = {
    overthinking: [],
    angry: [],
    tired: [],
    missing: []
  };

  const smileCounterVal = document.getElementById("smile-counter-val");
  let smileHealedCount = parseInt(localStorage.getItem("smile_healed_count") || "0", 10);
  
  if (smileCounterVal) {
    smileCounterVal.textContent = `Healed count: ${smileHealedCount}`;
  }

  // Handle active mood selectors
  const moodPillBtns = document.querySelectorAll(".mood-pill-btn");
  moodPillBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      moodPillBtns.forEach(b => b.classList.remove("active-pill"));
      btn.classList.add("active-pill");
      
      currentMood = btn.dataset.category;
      
      const categoryData = config.emergencySmile.categories[currentMood];
      if (categoryData && categoryData.messages && categoryData.messages.length > 0) {
        const selectedMsg = categoryData.messages[0];
        smileHistoryByCategory[currentMood] = [selectedMsg];
        
        const postitContent = document.querySelector(".love-postit-content");
        if (postitContent) {
          postitContent.style.transform = "scale(0.95) rotate(-1deg)";
          postitContent.style.opacity = "0.7";
        }
        
        smileMsgDisplay.style.opacity = "0";
        setTimeout(() => {
          smileMsgDisplay.textContent = selectedMsg;
          smileMsgDisplay.style.opacity = "1";
          if (postitContent) {
            postitContent.style.transform = `rotate(${(Math.random() - 0.5) * 3}deg)`;
            postitContent.style.opacity = "1";
          }
        }, 200);
      }

      triggerMiniBlossom(btn);
    });
  });

  // Main Hansao button click trigger
  if (emergencySmileBtn) {
    emergencySmileBtn.addEventListener("click", () => {
      const categoryData = config.emergencySmile.categories[currentMood];
      if (!categoryData || !categoryData.messages) return;

      let history = smileHistoryByCategory[currentMood] || [];
      let pool = categoryData.messages.filter(msg => !history.includes(msg));
      
      if (pool.length === 0) {
         history = [];
         pool = categoryData.messages;
      }
      
      const randMsg = pool[Math.floor(Math.random() * pool.length)];
      history.push(randMsg);
      smileHistoryByCategory[currentMood] = history;

      // Increment healing smile count
      smileHealedCount += 1;
      localStorage.setItem("smile_healed_count", smileHealedCount);
      if (smileCounterVal) {
        smileCounterVal.textContent = `Healed count: ${smileHealedCount}`;
      }

      // Interactive Post-It paper wiggle transition
      const postitContent = document.querySelector(".love-postit-content");
      if (postitContent) {
        postitContent.style.transform = "scale(0.9) rotate(-3deg)";
        postitContent.style.opacity = "0.5";
      }

      if (smileMsgDisplay) {
        smileMsgDisplay.style.opacity = "0";
        setTimeout(() => {
          smileMsgDisplay.textContent = randMsg;
          smileMsgDisplay.style.opacity = "1";
          if (postitContent) {
            postitContent.style.transform = `rotate(${(Math.random() - 0.5) * 4}deg) scale(1)`;
            postitContent.style.opacity = "1";
          }
        }, 250);
      }

      triggerEmojiBlast();
    });
  }

  // Particle explosion burst logic
  function triggerEmojiBlast() {
    if (!emergencySmileBtn) return;
    const emojis = ["💖", "🌸", "✨", "🌻", "☕", "🧸", "🤍", "🍩", "🐱", "🥰", "🎈", "🍪"];
    const container = document.body;
    const rect = emergencySmileBtn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.scrollX;
    const startY = rect.top + window.scrollY;
    
    const particleCount = 28;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "floating-magic-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = `${startX + (Math.random() - 0.5) * 40}px`;
      p.style.top = `${startY + (Math.random() - 0.5) * 20}px`;
      
      const rot = (Math.random() - 0.5) * 360;
      p.style.transform = `rotate(${rot}deg) scale(${0.5 + Math.random() * 0.5})`;
      p.style.opacity = "1";
      p.style.transition = "all 1.4s cubic-bezier(0.1, 0.8, 0.25, 1)";
      
      container.appendChild(p);

      const moveX = (Math.random() - 0.5) * 260;
      const moveY = -(180 + Math.random() * 240);

      setTimeout(() => {
        p.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rot + (Math.random() - 0.5) * 180}deg) scale(${1.1 + Math.random() * 0.4})`;
        p.style.opacity = "0";
      }, 30);

      setTimeout(() => {
        p.remove();
      }, 1450);
    }
  }

  // Small feedback on pill clicks
  function triggerMiniBlossom(element) {
    const emojis = ["✨", "🌸", "💖", "🤍"];
    const container = document.body;
    const rect = element.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.scrollX;
    const startY = rect.top + window.scrollY;

    for (let i = 0; i < 6; i++) {
      const p = document.createElement("div");
      p.className = "floating-magic-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = `${startX}px`;
      p.style.top = `${startY}px`;
      p.style.fontSize = "1.2rem";
      p.style.opacity = "1";
      p.style.transition = "all 0.8s ease-out";
      
      container.appendChild(p);

      const moveX = (Math.random() - 0.5) * 70;
      const moveY = -(40 + Math.random() * 60);

      setTimeout(() => {
        p.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.4)`;
        p.style.opacity = "0";
      }, 20);

      setTimeout(() => {
        p.remove();
      }, 820);
    }
  }

  // -------------------------------------------------------------
  // FUTURE US PERSISTENT CHECKLIST
  // -------------------------------------------------------------
  if (futureListContainer && config.futureUs && config.futureUs.checklist) {
    config.futureUs.checklist.forEach((itemText, index) => {
      const storageKey = `future_goal_checked_${index}`;
      const initiallyChecked = localStorage.getItem(storageKey) === "true";

      const item = document.createElement("div");
      item.classList.add("checklist-item");
      if (initiallyChecked) {
        item.classList.add("checked");
      }

      item.innerHTML = `
        <div class="checkbox-visual">
          <div class="check-tick"></div>
        </div>
        <span class="checklist-item-text">${itemText}</span>
      `;

      item.addEventListener("click", () => {
        const isCheckedNow = item.classList.toggle("checked");
        localStorage.setItem(storageKey, isCheckedNow ? "true" : "false");
      });

      futureListContainer.appendChild(item);
    });
  }

  // -------------------------------------------------------------
  // PERSONAL COMFORT JOURNAL CONTROLLER ENGINE
  // -------------------------------------------------------------
  const STORAGE_KEY = "comfort_journal_notes";

  // Real-time character counting with cozy visual update
  if (journalTextarea) {
    journalTextarea.addEventListener("input", () => {
      const textLength = journalTextarea.value ? journalTextarea.value.length : 0;
      if (charCount) charCount.textContent = textLength;
    });
  }

  // Load history from localStorage
  function fetchJournalEntries() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse journal storage: ", e);
      return [];
    }
  }

  // Render past journal entries cleanly
  function renderJournalEntries() {
    if (!journalEntriesContainer) return;
    const entries = fetchJournalEntries();
    journalEntriesContainer.innerHTML = "";

    if (entries.length === 0) {
      const emptyEl = document.createElement("div");
      emptyEl.classList.add("journal-empty-msg");
      emptyEl.textContent = config.journal?.emptyText || "Your safe pages are empty. Whenever you need to vent, type your heart above...";
      journalEntriesContainer.appendChild(emptyEl);
      return;
    }

    entries.forEach(entry => {
      const card = document.createElement("div");
      card.classList.add("journal-entry-card");
      card.id = `journal-entry-${entry.id}`;

      // Entry Card template (Secure textContent injection for user input)
      card.innerHTML = `
        <div class="journal-entry-header">
          <span class="journal-entry-time">✨ ${entry.formattedTime}</span>
          <button class="journal-entry-delete-btn" title="${config.journal?.entryDeletedToast || 'Release thought'}" data-id="${entry.id}">×</button>
        </div>
        <div class="journal-entry-body"></div>
      `;

      // Set user content safely via textContent to block any HTML/XSS injection
      card.querySelector(".journal-entry-body").textContent = entry.content;

      // Event listener for entry-level delete button
      card.querySelector(".journal-entry-delete-btn").addEventListener("click", (e) => {
        const idToDelete = e.currentTarget.getAttribute("data-id");
        deleteJournalEntry(idToDelete);
      });

      journalEntriesContainer.appendChild(card);
    });
  }

  // Save thought function
  function saveJournalEntry() {
    if (!journalTextarea) return;
    const rawText = journalTextarea.value;
    const text = rawText.trim();
    if (!text) {
      showToastNotification("Your page is empty, write something first... 🌙");
      return;
    }

    // Generate accurate structured date
    const date = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateStr = date.toLocaleDateString('en-US', options);
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${dateStr} • ${hours}:${minutes} ${ampm}`;

    const newEntry = {
      id: "entry_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      timestamp: Date.now(),
      formattedTime: formattedTime,
      content: rawText // Save actual content with paragraph spacing!
    };

    const entries = fetchJournalEntries();
    entries.unshift(newEntry); // Prepend to show latest first!

    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    
    // Clear textarea & reset count
    journalTextarea.value = "";
    if (charCount) charCount.textContent = "0";

    // Re-render & alert
    renderJournalEntries();
    showToastNotification(config.journal?.entrySavedToast || "Your thought is safe in your journal. 🤍");
  }

  // Delete matching thought entry
  function deleteJournalEntry(id) {
    let entries = fetchJournalEntries();
    entries = entries.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

    // Animate item exit before complete re-render for pristine user experience
    const targetCard = document.getElementById(`journal-entry-${id}`);
    if (targetCard) {
      targetCard.style.opacity = "0";
      targetCard.style.transform = "scale(0.9) translateY(-10px)";
      targetCard.style.transition = "all 0.3s ease";
      setTimeout(() => {
        renderJournalEntries();
      }, 300);
    } else {
      renderJournalEntries();
    }

    showToastNotification(config.journal?.entryDeletedToast || "Thought gently released to the moon...");
  }

  // Add click listener to save button
  if (saveNoteBtn) {
    saveNoteBtn.addEventListener("click", saveJournalEntry);
  }

  // Initialize diary listing right on boot
  renderJournalEntries();

  // -------------------------------------------------------------
  // REELS GALLERY & COMFORT VIDEOS ENGINE
  // -------------------------------------------------------------
  const curatedReelsGrid = safeGet("curated-reels-grid");
  const archiveVideoUrlInput = safeGet("archive-video-url");
  const archiveVideoNoteInput = safeGet("archive-video-note");
  const saveVideoBtn = safeGet("save-video-btn");
  const sendVideoBtn = safeGet("send-video-btn");
  const customVideosContainer = safeGet("custom-videos-container");

  // Populate curated Reels from content config
  if (config.reelsGallery && curatedReelsGrid) {
    curatedReelsGrid.innerHTML = "";
    config.reelsGallery.reels.forEach((reel) => {
      const card = document.createElement("div");
      card.classList.add("reel-card");
      card.id = `reel-card-${reel.id}`;

      card.innerHTML = `
        <div class="reel-thumbnail-placeholder">
          <span class="reel-label-badge">Comfort 🤍</span>
          <div class="play-icon-overlay">🎬</div>
          <span style="font-size: 0.8rem; font-family: var(--font-mono); opacity: 0.8;">Tap to Play Reel</span>
        </div>
        <div class="reel-card-info">
          <h4 class="reel-card-title">${reel.title}</h4>
          <p class="reel-card-desc">${reel.description}</p>
        </div>
        <div class="reel-card-actions">
          <a href="${reel.url}" target="_blank" rel="noopener noreferrer" class="reel-action-btn-primary">
            🎬 Play Reel ↗
          </a>
          <button class="reel-action-btn-secondary copy-link-btn" data-url="${reel.url}">
            🔗 Copy
          </button>
        </div>
      `;

      // Bind copy link logic
      card.querySelector(".copy-link-btn").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const urlToCopy = reel.url;
        navigator.clipboard.writeText(urlToCopy).then(() => {
          showToastNotification("Reel link copied to your clipboard! 🌸");
        }).catch(err => {
          console.error("Clipboard copy failed: ", err);
          showToastNotification("Failed to copy link. Click on Play Reel instead!");
        });
      });

      curatedReelsGrid.appendChild(card);
    });
  }

  const CARDS_STORAGE_KEY = "comfort_saved_videos";

  // Function to load saved custom videos
  function fetchSavedVideos() {
    const raw = localStorage.getItem(CARDS_STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse saved videos: ", e);
      return [];
    }
  }

  // Render saved custom videos
  function renderSavedVideos() {
    if (!customVideosContainer) return;
    const items = fetchSavedVideos();
    customVideosContainer.innerHTML = "";

    if (items.length === 0) {
      const emptyEl = document.createElement("div");
      emptyEl.classList.add("archive-empty-msg");
      emptyEl.textContent = config.reelsGallery?.emptyText || "Custom archive is empty. Add your favorite videos to preserve them here! 🌸";
      customVideosContainer.appendChild(emptyEl);
      return;
    }

    items.forEach(video => {
      const card = document.createElement("div");
      card.classList.add("saved-video-card");
      card.id = `saved-video-${video.id}`;

      card.innerHTML = `
        <div class="saved-video-header">
          <span class="saved-video-title">${video.title || "Custom Saved Video 🎥"}</span>
          <button class="saved-video-delete-btn" title="Remove video" data-id="${video.id}">×</button>
        </div>
        <p class="saved-video-note">${video.note || "No sweet note added."}</p>
        <div class="saved-video-footer">
          <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="saved-video-link">
            🎬 Play Video ↗
          </a>
          <span style="font-size: 0.75rem; color: var(--color-warm-grey); font-family: var(--font-mono);">${video.friendlyTime}</span>
        </div>
      `;

      // Bind delete action
      card.querySelector(".saved-video-delete-btn").addEventListener("click", () => {
        deleteSavedVideo(video.id);
      });

      customVideosContainer.appendChild(card);
    });
  }

  // Save new custom video
  function saveCustomVideo() {
    if (!archiveVideoUrlInput) return;
    const url = archiveVideoUrlInput.value.trim();
    const note = archiveVideoNoteInput ? archiveVideoNoteInput.value.trim() : "";

    if (!url) {
      showToastNotification("Please enter or paste a valid video URL! 🎬");
      return;
    }

    // Try parsing a sweet title from URL (e.g. Instagram, YouTube)
    let domainLabel = "Shared Video 🎥";
    if (url.includes("instagram.com")) {
      domainLabel = "Instagram Reel 📱";
    } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
      domainLabel = "YouTube Video 📺";
    } else if (url.includes("tiktok.com")) {
      domainLabel = "TikTok Video 🎵";
    }

    const date = new Date();
    const friendlyTime = `${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })} • ${date.getHours() ? date.getHours() : 12}:${String(date.getMinutes()).padStart(2, '0')}`;

    const newVideo = {
      id: "vid_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      url: url,
      note: note || "Humara ek aur comfort moment.",
      title: domainLabel,
      friendlyTime: friendlyTime
    };

    const videos = fetchSavedVideos();
    videos.unshift(newVideo);
    localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(videos));

    // Clear input
    archiveVideoUrlInput.value = "";
    if (archiveVideoNoteInput) archiveVideoNoteInput.value = "";

    // Re-render
    renderSavedVideos();
    showToastNotification("Your comfort video has been added to our offline library! 💾✨");
  }

  // Delete saved video
  function deleteSavedVideo(id) {
    let videos = fetchSavedVideos();
    videos = videos.filter(v => v.id !== id);
    localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(videos));

    const targetCard = document.getElementById(`saved-video-${id}`);
    if (targetCard) {
      targetCard.style.opacity = "0";
      targetCard.style.transform = "scale(0.9) translateY(-10px)";
      targetCard.style.transition = "all 0.3s ease";
      setTimeout(() => {
        renderSavedVideos();
      }, 300);
    } else {
      renderSavedVideos();
    }
    showToastNotification("Comfort video removed cleanly.");
  }

  // Send video option (Opens WhatsApp / Email prompt with lovely prefilled message of link + note!)
  function sendComfortVideoToHim() {
    if (!archiveVideoUrlInput) return;
    const url = archiveVideoUrlInput.value.trim();
    const note = archiveVideoNoteInput ? archiveVideoNoteInput.value.trim() : "";

    if (!url) {
      showToastNotification("Please paste a video link first to send/share! ✉️");
      return;
    }

    // Let's create a WhatsApp link pre-filled template message
    const draftMessage = `Hey! I found this beautiful comfort video and wanted to share it with you 🤍:\n\n🔗 Link: ${url}\n\n📝 Note: "${note || "Relatable!"}"`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(draftMessage)}`;
    
    // Open in a new tab safely
    window.open(whatsappUrl, "_blank");
    showToastNotification("Redirecting you to message him this reel... 🤍🌸");
  }

  // Event bindings
  if (saveVideoBtn) saveVideoBtn.addEventListener("click", saveCustomVideo);
  if (sendVideoBtn) sendVideoBtn.addEventListener("click", sendComfortVideoToHim);

  // Initialize custom videos listing
  renderSavedVideos();

  // -------------------------------------------------------------
  // SECRET EASTER EGG (TAP THE GLOWING MOON 5 TIMES)
  // -------------------------------------------------------------
  let moonClickTracker = 0;

  if (interactiveMoon) {
    interactiveMoon.addEventListener("click", () => {
      moonClickTracker++;
      
      // Scale bounce on tactile tap
      interactiveMoon.style.transform = "scale(0.9)";
      setTimeout(() => {
        interactiveMoon.style.transform = "";
      }, 120);

      if (moonClickTracker >= config.secretMoon.triggerCount) {
        moonClickTracker = 0; // Reset counter
        openSecretEgg();
      } else {
        // Optional: Gentle visual pulse feedback or standard indication
        showToastNotification(`You clicked the moon! ${config.secretMoon.triggerCount - moonClickTracker} more times for a secret... 🌙`);
      }
    });
  }

  function openSecretEgg() {
    if (secretModalContent) secretModalContent.innerHTML = config.secretMoon.message;
    if (secretMoonModal) secretMoonModal.classList.add("open");
  }

  const closeSecret = () => {
    if (secretMoonModal) secretMoonModal.classList.remove("open");
  };
  if (secretCloseBtn) secretCloseBtn.addEventListener("click", closeSecret);
  if (secretDismissBtn) secretDismissBtn.addEventListener("click", closeSecret);
  if (secretMoonModal) {
    secretMoonModal.addEventListener("click", (e) => {
      if (e.target === secretMoonModal) closeSecret();
    });
  }

  // -------------------------------------------------------------
  // AMBIENT COZY RE-PLAYABLE MUSIC STATE (Removed cozy background music)
  // -------------------------------------------------------------
  let isMusicPlaying = false;

  // Let ambient player button be optional/removed
  if (musicToggleBtn) {
    musicToggleBtn.style.display = "none";
  }

  // Toast Notification service
  let toastTimeout;
  function showToastNotification(text) {
    if (audioToastMsg) audioToastMsg.textContent = text;
    if (audioToast) audioToast.classList.add("visible");
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      if (audioToast) audioToast.classList.remove("visible");
    }, 4000);
  }

  // -------------------------------------------------------------
  // MULTI-ACTION ROUT LINKINGS
  // -------------------------------------------------------------
  if (heroPrimaryBtn) {
    heroPrimaryBtn.addEventListener("click", () => {
      // Scrolls smoothly down directly into open-when section
      const targetSec = document.getElementById("open-when-section");
      if (targetSec) targetSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (heroSecondaryBtn) {
    heroSecondaryBtn.addEventListener("click", () => {
      // Focus down into smiling generator
      const targetSec = document.getElementById("emergency-smile-section");
      if (targetSec) targetSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  // -------------------------------------------------------------
  // SCROLL REVEAL TRIGGERS
  // -------------------------------------------------------------
  function initScrollReveals() {
    const revealedElements = document.querySelectorAll(".content-section");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target); // Trigger only once for performance
        }
      });
    }, {
      threshold: 0.12, // Element is 12% visible
      rootMargin: "0px 0px -40px 0px"
    });

    revealedElements.forEach(el => observer.observe(el));
  }
};

// Bulletproof self-kickstarter
try {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
  } else {
    initializeApp();
  }
} catch (err) {
  console.error("Critical: Initializer booting encountered issue: ", err);
}
