/**
 * Global Configuration Hub
 * Centralized data object for managing portfolio content dynamically.
 * Modifying these values will automatically reflect across the UI components.
 */

const CONFIG = {
  // Core Profile Data
  profile: {
    name: "AnS_Dev",
    titles: ["Roblox Game Developer", "Luau Scripter"],
    description: "A passionate Roblox Game Developer focused on creating immersive and innovative gaming experiences. Specializing in Luau scripting to bring unique game mechanics to life.",
    avatar: "assets/images/hero-img.jpg"
  },

  // Quantitative Statistics (Mini Flex Stats)
  stats: [
    { target: 6, suffix: "+", label: "Years Exp" },
    { target: 37, suffix: "M+", label: "Total Visits" },
    { target: 11, suffix: "", label: "Projects" }
  ],

  // Social Media Endpoints
  socials: {
    roblox: "https://www.roblox.com/users/677682595/profile",
    discord: "https://discordapp.com/users/693102105950683179",
    linkedin: "https://linkedin.com/in/mhmdandriansyh"
  },

  // About Section Configuration
  about: {
    eyebrow: "WHO I AM",
    title: "About Me",
    image: "assets/images/about-img.jpg",
    paragraphs: [
      "Hello! I'm Muhammad Andriansyah, but you can call me <strong>Andri</strong>. I dive deep into the world of Roblox game development, driven by a passion for crafting engaging and technically sound experiences. My core strength lies in <strong>Luau scripting</strong>, where I transform complex ideas into seamless gameplay mechanics, robust game systems, and user-friendly interfaces.",
      "I thrive on challenges and continuously seek to expand my knowledge in game design principles, performance optimization, and innovative Roblox features. My goal is to not just build games, but to create worlds that players love to explore and interact with."
    ],
    skills: ["Luau Scripting", "Game Mechanics", "System Architecture", "Performance Optimization", "UI/UX Systems"],
    cvLink: "assets/docs/MUHAMMAD ANDRIANSYAH (ATS CV).pdf"
  },

  // Portfolio & Projects Repository
  portfolioData: {
    filters: ["All", "Social", "Horror", "Story"],
    projects: [
      {
        id: "pulau-indo",
        title: "Pulau Indo",
        genre: "Social",
        visits: "1.1M+",
        image: "assets/images/projects/pulau-indo.png",
        tags: ["Voice Chat", "Hangout"],
        link: "https://www.roblox.com/games/11627147587/Voice-Chat-Pulau-Indo-Hangout-ID",
        description: "Pulau Indo invites players into a vibrant voice-chat enabled hangout space designed to emulate the lively social dynamics of Indonesian culture.",
        contributions: [
          "Architected core framework optimizing real-time server-client interactions.",
          "Designed UI enhancing in-game navigation and user engagement.",
          "Implemented diverse mini-games elevating the overall player experience.",
          "Mastered cross-platform optimization ensuring seamless gameplay on Mobile, PC, and Console."
        ]
      },
      {
        id: "rohangan",
        title: "ROHANGAN",
        genre: "Horror",
        visits: "7.5M+",
        image: "assets/images/projects/rohangan.png",
        tags: ["First-Person", "Mystery"],
        link: "https://www.roblox.com/games/8662629736",
        description: "ROHANGAN challenges players in a first-person horror thriller, demanding exploration of an enigmatic facility armed only with a flashlight, where narrative elements are discovered dynamically.",
        contributions: [
          "Scripted immersive narrative sequences.",
          "Managed intricate game states and event flows.",
          "Developed interactive gameplay systems and AI enemies.",
          "Integrated audio-visual effects for a suspenseful atmosphere."
        ]
      },
      {
        id: "the-monox",
        title: "The Monox",
        genre: "Horror",
        visits: "2M+",
        image: "assets/images/projects/the-monox.png",
        tags: ["First-Person", "Escape"],
        link: "https://www.roblox.com/games/6030554423/THE-MONOX",
        description: "The Monox is a chapter-based horror escape experience. Players traverse various distinct areas, uncovering narratives and confronting unique challenges in a gripping sequence of events.",
        contributions: [
          "Developed dynamic quest and objective systems.",
          "Designed interactive gameplay flow and tracking logic.",
          "Managed comprehensive game state transitions.",
          "Scripted immersive narrative and cutscene sequences."
        ]
      },
      {
        id: "living-doll",
        title: "Living Doll",
        genre: "Story",
        visits: "450k+",
        image: "assets/images/projects/living-doll.png",
        tags: ["Mystery", "Chapter-based"],
        link: "https://www.roblox.com/games/11916439633/STORY-Living-Doll-BETA",
        description: "A chapter-based horror story game that immerses players into deeply developed scenes and storylines, exploring themes of mystery and impending dread.",
        contributions: [
          "Engineered dynamic gameplay mechanics.",
          "Scripted sophisticated narrative cutscenes.",
          "Managed complex character states and inventories.",
          "Developed responsive interactive systems."
        ]
      },
      {
        id: "unknown-story",
        title: "Unknown [STORY]",
        genre: "Story",
        visits: "150k+",
        image: "assets/images/projects/unknown-story.png",
        tags: ["Story-Driven", "Adventure"],
        link: "https://www.roblox.com/games/6116792985/Unknown-STORY",
        description: "A story-driven adventure game where players embark on a journey filled with mysteries and unexpected plot twists, guided through carefully crafted events and scenes.",
        contributions: [
          "Engineered dynamic cinematic cutscenes.",
          "Developed event-driven systems mapping narrative progression.",
          "Implemented interactive quest tracking.",
          "Managed comprehensive game state architecture."
        ]
      }
    ]
  },

  testimonials: [
    {
      id: 1,
      name: "JJE",
      title: "Owner of Sunday Studios.",
      avatar: "https://api.newstargeted.com/roblox/users/v1/avatar-headshot?userid=6048903818&size=150x150&format=Png&isCircular=false",
      rating: 5,
      link: "https://www.roblox.com/users/6048903818/profile",
      text: "Absolutely stunning work! The narrative systems implemented for our Horror game completely transformed the player experience. Always delivers ahead of schedule."
    },
  ],

  services: [
    {
      id: "basic-scripting",
      title: "Basic Scripting",
      icon: "fas fa-bolt",
      price: {
        default: "$30 - $150",
        ID: "IDR 400 Ribu - IDR 2.3 Juta"
      },
      recommended: false,
      btnLabel: "Start Simple",
      features: [
        "Quick Bug Fixes",
        "Interactive UI/UX",
        "Basic Asset Integration"
      ]
    },
    {
      id: "advanced-mechanics",
      title: "Advanced Mechanics",
      icon: "fas fa-code-branch",
      price: {
        default: "$150 - $750",
        ID: "IDR 2.3 Juta - IDR 11.5 Juta"
      },
      recommended: true,
      btnLabel: "Level Up Game",
      features: [
        "Core Gameplay Systems",
        "Saving & Leaderboards",
        "Advanced UI/UX Systems",
        "Clean Modular Code"
      ]
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      icon: "fas fa-hands-helping",
      price: {
        default: "$800+ / Quote",
        ID: "IDR 12 Juta+ / Quote"
      },
      recommended: false,
      btnLabel: "Request Project",
      features: [
        "Full Custom Game Build",
        "Full Game Optimization",
        "Long-Term Partnership"
      ]
    }
  ],
  serviceInfo: [
    {
      id: "tos",
      text: "Terms of Service",
      title: "Terms of Service",
      content: `
        <ul style="list-style: disc; margin-left: 1.5rem; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.8rem;"><strong>Payment Upfront:</strong> A 50% non-refundable down payment is strictly required before any development begins to secure your slot and prevent project abandonment.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Revisions & Bugs:</strong> Free bug patches and minor tweaks are guaranteed for 7 days after the final product is delivered. Major feature requests or out-of-scope revisions will incur additional hourly/flat charges.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Code Ownership:</strong> All commercial rights, source code, and assets are officially transferred to the client only <em>after</em> the final 50% payment is cleared.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Cancellations:</strong> If the project is cancelled by the client when development is over 50% complete, no refunds will be issued.</li>
        </ul>
      `
    },
    {
      id: "payments",
      text: "Accepted Payments",
      title: "Payment Methods",
      content: `
        <ul style="list-style: disc; margin-left: 1.5rem; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.8rem;"><strong>Robux (Group Funds):</strong> Preferred method. No tax deductions apply.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Robux (T-Shirt/Gamepass):</strong> Accepted, but the client must cover the 30% Roblox marketplace fee.</li>
          <li style="margin-bottom: 0.8rem;"><strong>PayPal (International):</strong> Accepted for international clients. Conversion rates to USD apply.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Bank Transfer & E-Wallet (ID Only):</strong> For Indonesian clients, local bank transfers (BCA, Mandiri) and E-Wallets (OVO, Dana, GoPay) are accepted at standard IDR rates.</li>
        </ul>
      `
    },
    {
      id: "process",
      text: "Work Process & Guidelines",
      title: "How I Work",
      content: `
        <ol style="list-style: decimal; margin-left: 1.5rem; margin-bottom: 1rem;">
          <li style="margin-bottom: 0.8rem;"><strong>Consultation:</strong> We discuss your game's vision, specific mechanics, and negotiate a clear deadline and quote.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Down Payment:</strong> You provide the 50% upfront payment, and I will strictly lock my schedule for your project.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Development & Updates:</strong> I begin programming in a private baseplate. You will receive progress updates (videos/screenshots) at least twice a week via Discord.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Testing Phase:</strong> You will be invited to a testing place to try out the mechanics firsthand and point out any necessary adjustments.</li>
          <li style="margin-bottom: 0.8rem;"><strong>Handover:</strong> Upon your satisfaction and the transfer of the final 50% payment, I will deliver the uncopylocked <code>.rbxl</code> file or directly insert the assets into your team-create place.</li>
        </ol>
      `
    }
  ]
};
