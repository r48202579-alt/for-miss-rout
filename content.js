/**
 * =========================================================================
 *              "FOR MISS ROUT 🌙" - EDITABLE CONTENT CONFIGURATION
 * =========================================================================
 * You can edit any text, songs, memories, and compliments below.
 * Everything is organized here so you don't have to touch the core code!
 */

const APP_CONTENT = {
  // -------------------------------------------------------------
  // PASSWORD GATE CONFIGURATION
  // -------------------------------------------------------------
  security: {
    questionText: "Who’s here? 🌙",
    hintText: "What he calls you...",
    correctPassword: "miss rout", // Case-insensitive comparison
    errorFeedback: "Hmm... that doesn't sound right 🌙",
    inputPlaceholder: "Type your name..."
  },

  // -------------------------------------------------------------
  // HERO SECTION CONFIGURATION
  // -------------------------------------------------------------
  hero: {
    greetings: {
      morning: "Good morning Miss Rout ☀️",
      afternoon: "Hey there Miss Rout, hope your day is kind to you 🌻",
      evening: "Good evening Miss Rout 🌙",
      night: "If your thoughts are loud tonight, stay here for a while 🌙",
      default: "Hi Miss Rout 🤍"
    },
    mainTitle: "Hi Miss Rout 🌙",
    mainMessage: "This little corner exists for the days life feels heavy, for the moments you underestimate yourself, and for the times you forget there’s someone quietly standing beside you.",
    supportText: "You don’t have to carry everything alone anymore.",
    primaryButtonText: "Take care of me today 🤍",
    secondaryButtonText: "Make me smile 😭"
  },

  // -------------------------------------------------------------
  // SECTION 1: "OPEN WHEN..." COMFORT CARDS
  // -------------------------------------------------------------
  openWhen: {
    title: "Open When...",
    subtitle: "Because sometimes words are needed the most in specific moments.",
    cards: [
      {
        id: "sad",
        title: "Open when you’re sad 🌧️",
        shortDesc: "For the moments where a heavy cloud sits over your chest.",
        modalTitle: "A safe place for your tears...",
        modalContent: `
          <p>Hi love. I wish I was right next to you to hold your hand, wipe your tears, or just sit beside you in quiet solidarity. But since I'm here, I want you to take a slow, deep breath.</p>
          <p>It is perfectly okay to not be okay. You don't have to be strong all the time. You spend so much energy holding things together, but with me, you can let go. Your sadness isn't a burden to me, and it never will be.</p>
          <p>Let it out. I am right here. I'm not going anywhere.</p>
        `
      },
      {
        id: "overthinking",
        title: "Open when you’re overthinking 🌙",
        shortDesc: "For when your thoughts are running faster than your breath.",
        modalTitle: "Hey, breathe with me...",
        modalContent: `
          <p>Your mind is a beautiful place, but sometimes it tries to play tricks on you. If your brain is screaming "what if" or spinning a thousand scenarios, let's step off that carousel for a second.</p>
          <p>Follow this: Breathe in for 4 seconds, hold for 4, exhale for 4. Feel the ground beneath you. You are safe. You are cared for. The world is huge, but right here, right now, nothing is more important than your peace.</p>
          <p>None of those loud, terrifying thoughts change the truth: you are doing beautifully, you are loved, and we will face whatever comes tomorrow, <em>together</em>.</p>
        `
      },
      {
        id: "not-enough",
        title: "Open when you feel not enough 🤍",
        shortDesc: "Read this to remember exactly who you are.",
        modalTitle: "The truth about you...",
        modalContent: `
          <p>It breaks my heart to think that a mind as kind as yours could ever feel like it isn't enough. You have this incredible capacity to care so deeply for everyone around you, often forgetting to save any of that kindness for yourself.</p>
          <p class="highlight-quote">“You care so deeply for everyone. I only wish you’d remember that you deserve that same care too.”</p>
          <p>You don't need to perform, to be perfect, or to achieve anything to be worthy of love or respect. Your worth is inherent. You are a gentle, lovely, irreplaceable person. You are more than enough. You're everything.</p>
        `
      },
      {
        id: "forget-here",
        title: "Open when you forget I’m here 🫂",
        shortDesc: "A small reminder of my commitment to you.",
        modalTitle: "I'm staying...",
        modalContent: `
          <p>Sometimes the distance, the busyness of life, or your own fears can make you feel isolated. You might think you're walking this path alone. But please, look to your side.</p>
          <p class="highlight-quote">“I’m staying.”</p>
          <p>I am not a fleeting season in your life. I am here for the sunny afternoons, the messy thunderstorms, and the freezing winters. Whenever you feel lonely, remember this little corner. Remember my promise. I am quietly, steadily, standing right here beside you.</p>
        `
      },
      {
        id: "motivation",
        title: "Open when you need motivation 🌻",
        shortDesc: "A little spark of wind under your wings.",
        modalTitle: "You've got this, Miss Rout!",
        modalContent: `
          <p>I know the path looks steep right now. I know you might feel overwhelmed by responsibilities, classes, tasks, or just life in general. But you have survived 100% of your hardest days so far.</p>
          <p>Take it one step at a time, one day, one hour, or even one task at a time. I believe in your strength, even on the days you can't find it in yourself. Go do your best, and remember, no matter the outcome, I will be here to celebrate you or to cheer you up.</p>
        `
      },
      {
        id: "miss-me",
        title: "Open when you miss me 💌",
        shortDesc: "A warm, playful hug through the screen.",
        modalTitle: "Missing you too...",
        modalContent: `
          <p>If you're reading this, you're probably missing my voice, my jokes, or just my silliness. Well, guess what? I am probably missing you ten times more!</p>
          <p>Close your eyes for three seconds. Imagine me wrapping my arms around you in a warm hug, resting my chin on your head, and whispering how lucky I am to have you. Did you feel it? 😭</p>
          <p>Go send me a quick text, even if it's just a silly emoji. I'm always looking forward to hearing from you!</p>
        `
      }
    ]
  },

  // -------------------------------------------------------------
  // SECTION 2: THINGS I LOVE ABOUT YOU (Random Compliment Generator)
  // -------------------------------------------------------------
  compliments: {
    title: "Things I Love About You",
    subtitle: "A little drawer of reminders when you forget your magic.",
    buttonText: "Tell me something nice 🔮",
    specialTriggerCount: 8, // Triggers custom eyes message after several clicks
    specialEyesMessage: "If I had to explain comfort without using words, I’d probably just show someone your eyes. ✨",
    list: [
      "Your endless patience when I'm being silly or dramatic.",
      "Your absolute sweetness that makes my hardest days feel lighter.",
      "Your pure, kind heart that wants everyone around you to be happy.",
      "The beautiful, sensitive way you understand things without me needing to explain.",
      "Your comforting nature—how just your presence is a safe haven.",
      "The selfless way you care for everyone, checking in and holding space.",
      "Your adorable, childlike side that comes out when you are comfortable.",
      "Your cute cheeks that I just want to squish forever 😭",
      "The soft, gentle way you say my name or share your thoughts.",
      "Your cute little angry face when you are annoyed but still adorable.",
      "The funny look in your irritated eyes when I tease you too much.",
      "The profound softness in your heart that hides behind your outer shield.",
      "Your overwhelming cuteness when you don't even try to be cute.",
      "Your deep level of understanding and emotional intelligence.",
      "Your eyes. They hold a quiet universe of safety.",
      "Especially your eyes—they look like home."
    ]
  },

  // -------------------------------------------------------------
  // SECTION 3: MEMORY LANE (Interactive Timeline)
  // -------------------------------------------------------------
  memories: {
    title: "Memory Lane 📍",
    subtitle: "Humare waqt ke haseen aur pyaare pal, sunehre panno ki tarah.",
    endingQuote: "Kuch yaadein chupke se humara sukoon ban jaati hain... 🌙",
    list: [
      {
        number: "01",
        title: "Woh Pehli Shuruat",
        description: "Ek waqt tha jab hum ek doosre ke baare me jaante tak nahi the. Aur ab dekho… hum yahan hain. Kitna ajeeb aur pyaara hai na?"
      },
      {
        number: "02",
        title: "Chupke Se Confession 😭",
        description: "Woh confession jo sach me confession nahi lag raha tha. Maine apni saari feelings bol di thi, aur tumko pata hi nahi chala ki yeh tumhare baare me hai!"
      },
      {
        number: "03",
        title: "Standard Protective Mode",
        description: "Mera thoda protective ghussa roop: Jab bhi koi ladka tumse faltu baat karne aata hai, mera dimaag bas bolta hai— 'Bhai respectfully, dur raho please usse 😭'"
      },
      {
        number: "04",
        title: "Secrets Ka Bharosa",
        description: "Woh din jab maine tumpe poora bharosa karke apne sabse gehre raaz bataye. Tumne bina kisi judgment ke mujhe aise samjha jaise koi aur kabhi nahi samajh saka. 🤍"
      },
      {
        number: "05",
        title: "Woh Cousin Wala Incident 😭",
        description: "Jab tumne mujhe tease kiya tha us relative ke name pe—aur baad me pata chala ki woh literally tumhara cousin hi tha! Mujhe aaj bhi tumhari woh hansi sunayi deti hai."
      },
      {
        number: "06",
        title: "Tumhare Chhote Hints",
        description: "Tumhara kabhi bhi baat ko seedhe na bolna. Jaise 'mat jao' ya 'aur baat karo' dabe lafzo me kehna. Tum jitna bhi chupao, mai sab samajh jata hoon, Miss Rout!"
      }
    ]
  },

  // -------------------------------------------------------------
  // SECTION 4: SONGS THAT REMIND ME OF YOU (Music Showcase)
  // -------------------------------------------------------------
  songs: {
    title: "Songs That Remind Me of You 🎧",
    subtitle: "A custom soundtrack for your mind, selected with love.",
    musicInstruction: "Tap the ambient player on the top right to play soft background music while you read. Below is my heart in chords.",
    // Royalty free ambient background track to keep standard audio loop safe and cozy
    ambientMusicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Standard helix or alternative soft track. Let's use a beautiful soft piano sound
    ambientTrackAlternative: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    list: [
      {
        title: "Main Hoon Sath Tere",
        artist: "Arijit Singh",
        reason: "Because if there’s one thing I want you to remember, it’s that you don’t carry life alone anymore.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Main+Hoon+Sath+Tere+Arijit+Singh"
      },
      {
        title: "Jo Tum Mere Ho",
        artist: "Anuv Jain",
        reason: "This song literally feels like a warm, soft blanket of comfort on a freezing winter night.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Jo+Tum+Mere+Ho+Anuv+Jain"
      },
      {
        title: "Aaj Se Teri",
        artist: "Arijit Singh",
        reason: "Because all your small worries, your bad days, and your tasks belong to me to share now.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Aaj+Se+Teri+Arijit+Singh"
      },
      {
        title: "Tu Jaane Na",
        artist: "Atif Aslam",
        reason: "For the depth of feelings that words fail to express, but the eyes convey effortlessly.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Tu+Jaane+Na+Atif+Aslam"
      },
      {
        title: "Chori Kiya Re Jiya",
        artist: "Shreya Ghoshal & Sonu Nigam",
        reason: "It reminds me of the gentle, stealthy way you snuck into my life and took over my heart.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Chori+Kiya+Re+Jiya"
      },
      {
        title: "Dooron Dooron",
        artist: "Saby Singh",
        reason: "For the quiet adoration, watching over you, admiring your resilience from any distance.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Dooron+Dooron+Saby+Singh"
      },
      {
        title: "Kitab",
        artist: "Local Indie",
        reason: "You are like a beautiful storybook I want to read over and over, finding new meanings in every sentence.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Kitab+Local+Indie"
      },
      {
        title: "Janiye",
        artist: "Vishal Mishra",
        reason: "Because having you in my life feels like finding the absolute rhythmic core of peace.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Janiye+Vishal+Mishra"
      },
      {
        title: "Valam",
        artist: "Arijit Singh",
        reason: "A beautiful acoustic reminder of how you bring spring into my soul when life gets dry.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Valam+Arijit+Singh"
      },
      {
        title: "Subhanallah",
        artist: "Sreeram Chandra",
        reason: "The sheer awe of looking at you, your innocence, and realizing how lucky I am.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Subhanallah+Yeh+Jawaani+Hai+Deewani"
      },
      {
        title: "Tera Rasta Chhodo Na",
        artist: "Amitabh Bhattacharya",
        reason: "My simple, quiet way of saying: no matter where life leads, my direction remains you.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Tera+Rasta+Chhodo+Na"
      },
      {
        title: "Dulhan Banami",
        artist: "Traditional Folk",
        reason: "For those sneaky future daydreams I keep to myself when I think of us down the road.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Dulhan+Banami"
      },
      {
        title: "Pal Pal Dil Ke Paas",
        artist: "Kishore Kumar",
        reason: "The classic proof that distance is irrelevant; you reside in every regular heartbeat of mine.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Pal+Pal+Dil+Ke+Paas+Kishore+Kumar"
      },
      {
        title: "Maula Maula",
        artist: "Sufi Song",
        reason: "A quiet prayer of gratitude for bringing me a soul as pure and understanding as yours.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=Maula+Maula+Sufi"
      },
      {
        title: "What Makes You Beautiful",
        artist: "One Direction",
        reason: "You genuinely don’t realize how beautiful you are—not just to me, but in everything you do.",
        trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        youtubeUrl: "https://www.youtube.com/results?search_query=What+Makes+You+Beautiful+One+Direction"
      }
    ]
  },

  // -------------------------------------------------------------
  // SECTION 5: EMERGENCY SMILE CABINET
  // -------------------------------------------------------------
  emergencySmile: {
    title: "Emergency Smile Cabinet 😭💊",
    subtitle: "Thoda pareshaan ho? Mood kharab hai? Apna precise mood select karo aur sukoon paao!",
    btnText: "Hansaao Mujhe Aur 😭✨",
    categories: {
      overthinking: {
        label: "Overthinking 🧠",
        desc: "Dimaag chal raha hai",
        messages: [
          "Dhyan se suno: Tumhara dimaag bohot saari ajeeb kahaniyan bana raha hai jo bilkul jhoot hain! Breathe in, breathe out... Tum bohot pyaari ho aur sab ek dum perfect chal raha hai. Mai hoon na yahan! 🤍",
          "Stop overthinking right now! Mere pass ek hi functional dimaag ka cell hai aur maine usme bhi tumhare liye dher saara sukoon save karke rakha hai. Please relax karo aur sweet, innocent Miss Rout ban jao. 🧠🌸",
          "Jab bhi dimaag me dher saare ulte-seedhe sawal aayein, bas aankhein band karke yaad rakhna—tum mere liye sabse zyaada special ho. Baaki duniya ki baatein bilkul moh-maaya hain! 🌟",
          "Mera dimaag: 'Sona chahiye.' Tumhara dimaag overthinking mode me: 'Agar hum achanak bhediya ban gaye toh kya hoga?' Please dimag thakao mat aur smile karo! 😂"
        ]
      },
      angry: {
        label: "Angry Bean 😡",
        desc: "Gussa naak pe hai",
        messages: [
          "Suno gussewaley tamatar! 🍅 Respectfully, itna cutely gussa hona bilkul gair-kanooni hai. Jaldi se gussa thanda karo aur ek pyaari si smile de do! 🤍",
          "Aww, sorry na! Ab gussa thanda bhi kar do please? Dekho, mai kaan pakad ke aur aankhein bade karke ek dum shareef aur suljha hua baccha ban ke khada hoon aur tumhari pyari si smile ka wait kar raha hoon. 🥺🧸",
          "Pehle khud bohot gussa karti ho, fir dabe lafzo me demand karti ho 'mujhe manaao'. Toh lo, mai haazir hoon! Gussa chodo, ek pyaari smile do aur chalo hum dher saari baatein karte hain! 🤍"
        ]
      },
      tired: {
        label: "Tired / Low 🥱",
        desc: "Exhausted din",
        messages: [
          "Aww, thak gayi ho kya? 🥱 Jaldi se phone thoda side me rakho, cozy blanket me jao aur aankhein band karo. Aapne aaj bohot mehnat ki hai, so please thoda rest kar lo! 🌙",
          "Sending you a huge virtual hug right now! 🤗 100% warm comfort and strength successfully delivered in real-time. Power through or just rest—aap hamesha humari favorite ho!",
          "Ek cup garam meethi adrak wali chai ☕ aur dher saara sukoon... tumhare is sweet-exhausted dimaag ke liye. Ek dum befikar hokar deep breath lo, tum sab bohot acche se handle kar rhi ho. Proud of you!"
        ]
      },
      missing: {
        label: "Missing Him 🥺",
        desc: "Doori satane lage",
        messages: [
          "Doori chahe kitni bhi ho, har ek minor heartbeat me tumhara hi naam rehta hai. Kuch yaadein chupke se humara sukoon ban jaati hain... Mai toh har pal tumhare bare me soch raha hoon! 🥺🤍",
          "Kaash mai abhi tumhare bilkul paas hota, tumhara naram haath pakad ke baitha hota aur tumhari aankhon me dekh kar kehta ki tum kitni pyaari ho. Coziness overload with real feelings! 🫂",
          "Ye jo temporary distance hai na, ise bas ek cute test samjho. Hum bohot jald milenge aur fir mai tumhe ek second ke liye bhi khud se dur jaane nahi dunga! Direct tight hug forever. Pinky promise. ✨"
        ]
      }
    }
  },

  // -------------------------------------------------------------
  // SECTION 6: FUTURE US (Goal checklist)
  // -------------------------------------------------------------
  futureUs: {
    title: "Future Us 🌙",
    subtitle: "A small blueprint of the beautiful things waiting for us.",
    endingText: "I’m looking forward to moments we haven’t even lived yet.",
    checklist: [
      "Late night chai date.",
      "Watching terrible movies together just to make fun of them.",
      "Random, directionless evening walks holding hands.",
      "Deep late-night talks till the birds start singing.",
      "Teaching each other weird things we are obsessed with.",
      "A peaceful day where you finally let me take care of you properly.",
      "More beautiful memories we don't even know exist yet."
    ]
  },

  // -------------------------------------------------------------
  // SECTION 7: SECRET MOON MODAL (Hidden Easter Egg)
  // -------------------------------------------------------------
  secretMoon: {
    triggerCount: 5,
    message: `
      <p class="secret-header">In case nobody reminded you today—</p>
      <p class="secret-highlight">I’m proud of you.</p>
      <p class="secret-body">For surviving things quietly.</p>
      <p class="secret-body">For caring so much about everyone.</p>
      <p class="secret-body">For trying your absolute best.</p>
      <p class="secret-body">And for simply existing.</p>
      <p class="secret-outro">Also...</p>
      <p class="secret-signature">I’m staying. 🌙</p>
    `
  },

  // -------------------------------------------------------------
  // SECTION 8: PERSONAL COMFORT JOURNAL
  // -------------------------------------------------------------
  journal: {
    title: "Personal Comfort Journal 🌙",
    subtitle: "A silent, cozy space for your daily whispers. No server, no judgments—only saved locally on your own browser.",
    inputPlaceholder: "How was your day? Write down any thoughts, heavy worries, or sweet highlights here...",
    saveBtnText: "Save my thoughts 🤍",
    emptyText: "Your safe pages are empty. Whenever you need to vent, type your heart above...",
    countText: "Characters: ",
    entrySavedToast: "Your thought is safe in your journal. 🤍",
    entryDeletedToast: "Thought gently released to the moon..."
  },

  // -------------------------------------------------------------
  // SECTION 9: REELS GALLERY & SAVED VIDEOS
  // -------------------------------------------------------------
  reelsGallery: {
    title: "Our Comfort Reels & Videos 🎬",
    subtitle: "Humare sabse relatable aur pyaare Instagram reels ka ek cozy collection, aur aapke liye apna personal video archive!",
    addPlaceholder: "Paste any Instagram reel, YouTube link, or video URL...",
    addLabelPlaceholder: "Write a small sweet note or reason for this video...",
    addBtnText: "Save to Archive 💾",
    sendBtnText: "Send to him ✉️",
    emptyText: "Custom archive is empty. Add your favorite videos to preserve them here! 🌸",
    reels: [
      {
        id: "reel-1",
        url: "https://www.instagram.com/reel/DZA2L0LOCj9/?igsh=MW5maDU4Z2gwNDd4MQ==",
        title: "Pyaara Pal ✨",
        description: "Ek meethi si cute yaad jo hamesha chehre par smile le aati hai."
      },
      {
        id: "reel-2",
        url: "https://www.instagram.com/reel/DZTwJdoTQx8/?igsh=MWpmY21zMTZ3MGxqZQ==",
        title: "Sufi Sukoon 🤍",
        description: "Kuch lamhe aur sangeet jo seedhe humare dil ko chhu jaate hain."
      },
      {
        id: "reel-3",
        url: "https://www.instagram.com/reel/DZU4ExiSAaB/?igsh=MWl1MjJ4Z2JueHZxbw==",
        title: "Silent Comfort 🌙",
        description: "Yeh adaa aur cozy vibe jo humare har shaam ko sukoon de."
      },
      {
        id: "reel-4",
        url: "https://www.instagram.com/reel/DZRsP8MJ-eR/?igsh=MTVlYTVvOWxiNXp1bg==",
        title: "Literally Us! 😭",
        description: "Yeh reel toh bilkul hum dono ki chemistry par bani lagti hai!"
      },
      {
        id: "reel-5",
        url: "https://www.instagram.com/reel/DZUaED_P0pH/?igsh=MWNxNWg0Y3I2OXA4bg==",
        title: "Pyari Si Ched-Chad ☕",
        description: "Tera gusse se mujhe dekhna aur mera tujhe manaane lagna."
      },
      {
        id: "reel-6",
        url: "https://www.instagram.com/reel/DZVLLFZPgNu/?igsh=anNlNW16YjlnNHc=",
        title: "Always Stay 🫂",
        description: "Vaada karo ki tum hamesha mere sath rahogi, Miss Rout."
      }
    ]
  }
};

// Make it available to the global window object
window.APP_CONTENT = APP_CONTENT;
