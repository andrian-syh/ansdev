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
    image: "assets/images/about-img.webp",
    paragraphs: [
      "Hello! I'm Muhammad Andriansyah, but you can call me <strong>Andri</strong>. I dive deep into the world of Roblox game development, driven by a passion for crafting engaging and technically sound experiences. My core strength lies in <strong>Luau scripting</strong>, where I transform complex ideas into seamless gameplay mechanics, robust game systems, and user-friendly interfaces.",
      "I thrive on challenges and continuously seek to expand my knowledge in game design principles, performance optimization, and innovative Roblox features. My goal is to not just build games, but to create worlds that players love to explore and interact with."
    ],
    skills: ["Expert Luau Programmer", "Full-Stack Developer", "Clean & Modular Code", "Roblox Studio Specialist"],
    cvLink: "assets/docs/MUHAMMAD ANDRIANSYAH (CV).pdf"
  },

  // Portfolio & Projects Repository
  portfolioData: {
    projects: [
      {
        id: "pulau-indo",
        title: "Pulau Indo",
        genre: "Social",
        visits: "1.6M+",
        likes: "2.7K+",
        favorites: "5.5K+",
        duration: "Jul 2025 — Present",
        image: "assets/images/projects/pulau-indo.webp",
        tags: ["Voice Chat", "Hangout"],
        link: "https://www.roblox.com/games/116271475876333",
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
        visits: "7.7M+",
        likes: "8.2K+",
        favorites: "124K+",
        duration: "Jul 2020 — Jul 2021",
        image: "assets/images/projects/rohangan.webp",
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
        likes: "4.7K+",
        favorites: "37.4K+",
        duration: "Jan 2020 — Jul 2020",
        image: "assets/images/projects/the-monox.webp",
        tags: ["First-Person", "Escape"],
        link: "https://www.roblox.com/games/6030554423",
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
        visits: "503K+",
        likes: "600+",
        favorites: "2.2K+",
        duration: "Jul 2021 — Jul 2022",
        image: "assets/images/projects/living-doll.webp",
        tags: ["Mystery", "Chapter-based"],
        link: "https://www.roblox.com/games/11916439633",
        description: "A chapter-based horror story game that immerses players into deeply developed scenes and storylines, exploring themes of mystery and impending dread.",
        contributions: [
          "Engineered dynamic gameplay mechanics.",
          "Scripted sophisticated narrative cutscenes.",
          "Managed complex character states and inventories.",
          "Developed responsive interactive systems."
        ]
      },
      {
        id: "steal-an-animal",
        title: "Steal An Animal",
        genre: "Simulator",
        visits: "2.3M+",
        likes: "10K+",
        favorites: "177K+",
        duration: "May 2025 — Jul 2025",
        image: "assets/images/projects/steal-an-animal.webp",
        tags: ["Simulator", "Pet", "Multiplayer"],
        link: "https://www.roblox.com/games/98847387964862",
        description: "Steal An Animal is a high-stakes competitive simulator where players manage their own plots while engaging in bold pet-thievery. Participants can honestly acquire pets from a central distribution conveyor or infiltrate rival bases to seize valuable collections, all while deploying chaotic 'troll' tools like slap mechanics to stun and outmaneuver the competition.",
        contributions: [
          "Architected the full-stack game framework, encompassing all core loop mechanics.",
          "Developed a robust plot-based saving and loading system for player bases.",
          "Engineered the intricate pet stealing and conveyor-based acquisition logic.",
          "Programmed a scalable pet rarity and randomized spawning system.",
          "Integrated comprehensive progression systems including rebirths, shops, and dynamic events.",
          "Scripted interactive troll tools and engagement mechanics, such as the synchronized slap system."
        ]
      },
      {
        id: "unknown-story",
        title: "Unknown [STORY]",
        genre: "Story",
        visits: "150K+",
        likes: "12K+",
        favorites: "5.5K+",
        duration: "Nov 2020 — Dec 2020",
        image: "assets/images/projects/unknown-story.webp",
        tags: ["Story-Driven", "Adventure"],
        link: "https://www.roblox.com/games/6116792985",
        description: "A story-driven adventure game where players embark on a journey filled with mysteries and unexpected plot twists, guided through carefully crafted events and scenes.",
        contributions: [
          "Engineered dynamic cinematic cutscenes.",
          "Developed event-driven systems mapping narrative progression.",
          "Implemented interactive quest tracking.",
          "Managed comprehensive game state architecture."
        ]
      },
      {
        id: "mesmerizer-troll-tower",
        title: "✨Mesmerizer✨ Troll Tower",
        genre: "Obby",
        visits: "16.1K+",
        likes: "60+",
        favorites: "60+",
        duration: "Jun 2025 — Jul 2025",
        image: "assets/images/projects/mesmerizer-troll-tower.webp",
        tags: ["Parkour", "Troll", "Anime"],
        link: "https://www.roblox.com/games/137196281991681",
        description: "Mesmerizer Troll Tower is a chaotic vertical obby experience where players race to the summit while navigating a field of unpredictable traps. The gameplay centers on a unique social dynamic where participants must either skillfully dodge obstacles to reach the finish line or embrace the role of a 'troll' to strategically hinder their rivals' progress.",
        contributions: [
          "Engineered the complete library of modular obby obstacles and hazards.",
          "Programmed localized and server-synced kill-brick and damage-volume systems.",
          "Developed dynamic moving platform mechanics and physics-based traps.",
          "Scripted the win-condition logic and finish-line validation systems.",
          "Optimized obstacle performance for high-player-count tower instances."
        ]
      },
      {
        id: "master-sambung-kata",
        title: "Master Sambung Kata",
        genre: "Puzzle",
        visits: "18K+",
        likes: "35+",
        favorites: "50+",
        duration: "Feb 2026 — Mar 2026",
        image: "assets/images/projects/sambung-kata.webp",
        tags: ["Word Puzzle", "Minigame"],
        link: "https://www.roblox.com/games/100603276708946",
        description: "Master Sambung Kata is an adrenaline-pumping word-chain puzzle game where players compete to connect words in real-time. Whether facing off against other players or an AI bot, the experience is intensified by strategic abilities that can shift the momentum of each match.",
        contributions: [
          "Architected the core word-connection system and real-time validation logic.",
          "Integrated a strategic ability system featuring custom symbols and gameplay modifiers.",
          "Engineered the global leaderboard and data persistence architecture.",
          "Managed comprehensive game-state transitions and lobby management systems."
        ]
      },
    ]
  },

  testimonials: [
    {
      id: 1,
      name: "JJE (@0x000101)",
      title: "Owner of Sunday Studios.",
      avatar: "https://api.newstargeted.com/roblox/users/v1/avatar-headshot?userid=6048903818&size=150x150&format=Png&isCircular=false",
      rating: 5,
      link: "https://www.roblox.com/users/6048903818/profile",
      text: "This developer demonstrates highly professional and consistent performance. Not only do he deliver work on time, but he also consistently bring creative and innovative solutions to every project he undertake."
    },
    {
      id: 2,
      name: "Ndraa (@andra1106)",
      title: "Students of ISI Surakarta",
      avatar: "https://api.newstargeted.com/roblox/users/v1/avatar-headshot?userid=126234819&size=150x150&format=Png&isCircular=false",
      rating: 5,
      link: "https://www.roblox.com/users/126234819/profile",
      text: "Awesome work, man! Contributed a ton to the development. Decisive and fast—hands down the best scripter I've met so far, haha!"
    },
    {
      id: 3,
      name: "Gusti (@GustiXFZ)",
      title: "Brand Strategist at Volumetric",
      avatar: "https://api.newstargeted.com/roblox/users/v1/avatar-headshot?userid=2536237406&size=150x150&format=Png&isCircular=false",
      rating: 5,
      link: "https://www.roblox.com/users/2536237406/profile",
      text: "The best scripter I’ve ever met! He’s contributed to several games that consistently generate high CCU numbers, and his performance is truly outstanding. If you’re planning to create a perfect game, you’ve found the right person!"
    },
  ],

  services: [
    {
      id: "basic-scripting",
      title: "Quick Fixes",
      icon: "fas fa-bolt",
      price: {
        default: "Start at $10",
        ID: "Start at IDR 100K"
      },
      recommended: false,
      btnLabel: "Start Simple",
      features: [
        "Minor Bug Squashing",
        "UI Button Logic",
        "Simple Tween Animations",
        "Tool & Item Setup",
        "Basic Givers & Doors",
        "Asset/Model Integration",
      ]
    },
    {
      id: "advanced-mechanics",
      title: "Core Systems",
      icon: "fas fa-code-branch",
      price: {
        default: "Start at $80",
        ID: "Start at IDR 800K"
      },
      recommended: true,
      btnLabel: "Level Up Game",
      features: [
        "DataStore Integration",
        "Services Logic",
        "Code Refactoring/Cleanup",
        "Shop & Inventory UI",
        "Round-Based Game Loops",
        "Custom Leaderboards",
      ]
    },
    {
      id: "custom-solutions",
      title: "Full Projects",
      icon: "fas fa-hands-helping",
      price: {
        default: "$400+ / Quote",
        ID: "IDR 6.500K+ / Quote"
      },
      recommended: false,
      btnLabel: "Request Project",
      features: [
        "From-Scratch Development",
        "Deep Server Optimization",
        "Full UI/UX Implementation",
        "Massive Code Refactoring",
        "Long-Term Maintenance",
        "Large-Scale Game Logic",
      ]
    }
  ],

  // Service Information Entries — Each entry contains navigable sub-sections
  serviceInfo: [
    {
      id: "tos",
      text: "Terms of Service",
      title: "Terms of Service",
      subtitle: "Last updated: April 2026",
      version: "v1.0",
      icon: "fas fa-file-contract",
      sections: [
        {
          label: "Agreement",
          icon: "fas fa-file-signature",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Electronic Signature & Authorization:</strong> By typing your signature, checking the agreement box, and clicking the "Accept Terms" button, you (The Client) provide a legally binding electronic signature. This action carries the same legal weight and enforceability as a physical, handwritten signature.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Digital Record Keeping:</strong> You acknowledge and consent that my system will log your metadata (including but not limited to: Email/Discord ID, Timestamp, Browser Info, and ToS Version) as definitive evidence of your acceptance. This digital record shall be admissible as primary evidence in any legal proceeding, payment dispute (e.g., PayPal Resolution Center), or platform arbitration.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Document of Record (PDF):</strong> Upon acceptance, the system generates an official "Service Contract" in PDF format. This document serves as the master copy of our agreement. You are responsible for retaining a copy of this file, though it may be retrieved via this portal as long as your record exists in my database.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Non-Repudiation:</strong> Once authorized, you waive any right to claim that this agreement is invalid, was not signed by you, or was signed without your consent, provided the logged metadata matches your digital footprints at the time of the transaction.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Final Authority (Superseding Clause):</strong> This signed agreement serves as the final and only source of truth for our collaboration. It nullifies all prior verbal discussions, screenshots, or casual text messages. Any specific features or promises must be explicitly written in the final project brief to be valid.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Financial Representation:</strong> You warrant that you are the authorized owner of the funds used and are of legal age (or have guardian consent). Due to the nature of digital labor, you explicitly waive your right to initiate a chargeback or unauthorized transaction claim once development has commenced.</li>
            </ul>
          `
        },
        {
          label: "Ethics",
          icon: "fas fa-gavel",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Platform Compliance:</strong> I strictly do not accept projects that violate Roblox’s Terms of Use or Community Standards. This includes, but is not limited to, unauthorized gambling systems, "condo" or adult-themed content, and extremist or hate-speech related materials.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Legal & Moral Boundaries:</strong> I reserve the right to decline any project that involves scams, phishing, illegal activities, or content that promotes harassment and social harm.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Right of Refusal & Termination:</strong> If a project is found to have a hidden malicious intent after development has begun (e.g., a "backdoor" for stealing assets or deceptive monetization), I will terminate the project immediately. In such cases, the upfront payment is <strong>non-refundable</strong> due to the breach of ethical terms.</li>
            </ul>
          `
        },
        {
          label: "Project Scope",
          icon: "fas fa-crosshairs",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Strict Adherence to Baseline:</strong> Development is executed strictly based on the mutually agreed-upon brief, Game Design Document (GDD), or final feature list documented in our text chat before the upfront payment is made. Casual discussions or verbal ideas not explicitly listed in the final agreement are not considered part of the scope.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Specialization & Limitations:</strong> My primary expertise lies in full-stack Luau programming, server-client architecture, data management, and core game logic. I do <strong>not</strong> specialize in advanced Roblox physics (e.g., complex vehicle suspensions, custom character controllers), frame-perfect melee combat frameworks, or highly aesthetic visual scripting. Projects relying heavily on these mechanics must be discussed transparently beforehand, and I reserve the right to decline them or request that you hire a specialized developer for those specific modules.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Handling Scope Creep:</strong> Any requests for new mechanics, UI alterations, or functionality expansions made <em>after</em> development has commenced are classified as "Scope Creep." These requests will not be accommodated under the original invoice. They will be evaluated, quoted, and billed as entirely separate tasks, and may require the current development phase to be paused until the new invoice is settled.</li>
            </ul>
          `
        },
        {
          label: "Payments",
          icon: "fas fa-money-check-alt",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Payment Structure & Non-Refundability:</strong> A 50% down payment is strictly required to secure your slot on my schedule and initiate development. This deposit is entirely <strong>non-refundable</strong> as it compensates for the immediate reservation of my time, preliminary research, and initial labor. The remaining 50% balance must be fully cleared before any final files, uncopylocked places, or source scripts are handed over.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Large-Scale Milestone Payments:</strong> For Full Projects or frameworks exceeding a specific tier, a milestone-based structure (e.g., 30% upfront, 30% mid-development, 40% prior to final delivery) will be enforced to minimize risk for both parties.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Chargeback Fraud & Payment Disputes:</strong> Any attempt to forcefully reverse a payment, open an unauthorized dispute, or initiate a chargeback (e.g., via PayPal or Bank) after the delivery of functional digital goods is considered a severe breach of contract. Such actions will result in an immediate Roblox DMCA takedown against your game, public blacklisting, and a formal scam report submitted to developer communities (e.g., DevForum, HiddenDevs).</li>
            </ul>
          `
        },
        {
          label: "Timelines",
          icon: "fas fa-clock",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Dynamic Deadlines:</strong> Provided delivery dates are highly educated estimates. While I strive to meet them consistently, unforeseen technical roadblocks or engine limitations may occasionally require extensions. You will be promptly notified if such situations arise.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Client-Caused Delays:</strong> The agreed-upon timeline operates under the assumption that you will provide all necessary assets and feedback promptly. If development is halted because I am waiting for your assets or approval, the final deadline will be automatically extended by the exact number of days delayed, plus any additional time required to re-accommodate your project into my shifted schedule.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Expedited & Rushed Delivery:</strong> Sudden requests to significantly shorten the agreed-upon deadline disrupt workflow. Such requests will incur a mandatory "Rush Fee" ranging from 25% to 50% of the total quote, depending on severity, or may be strictly declined if my schedule does not permit it.</li>
            </ul>
          `
        },
        {
          label: "Client Duties",
          icon: "fas fa-user-check",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Asset Provision & Quality:</strong> Unless a specific Full Project agreement states otherwise, you are solely responsible for supplying all necessary 3D models, animations, audio, and UI graphics. These assets must be organized, properly formatted, and ready for integration (e.g., properly rigged models, logically named UI elements). I reserve the right to reject messy or unusable assets that severely hinder the scripting process.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Visuals, VFX & Animations (Creative Limits):</strong> I am a logic programmer, not a Technical Artist or Animator. If your system requires visual effects (e.g., particles, beams, camera shakes, lighting changes) or animations, you must provide the pre-made assets. I will script the underlying logic to <em>trigger</em> them perfectly, but I will not create, design, or endlessly tweak the aesthetic "feel" of these assets. If no visual assets are provided, I will use standard Roblox placeholders (e.g., basic parts or output prints) to demonstrate that the underlying logic is fully functional.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Asset Legality & Liability Exemption:</strong> You explicitly guarantee that all assets provided for me to integrate are originally created by you, legally purchased, or appropriately licensed, and fully comply with Roblox's Terms of Use. I hold absolutely zero liability for any moderation actions, account terminations, or copyright strikes taken against your game due to stolen, leaked, or inappropriate assets provided by you or your team.</li>
            </ul>
          `
        },
        {
          label: "Bugs & Warranty",
          icon: "fas fa-bug",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Defining Bugs vs. Revisions:</strong> A "bug" is strictly defined as code that produces explicit console errors or objectively fails to execute the mechanics detailed in the initial brief. Subjective changes to the visual design, timing, or overall "feel" of a system after it has been approved are classified as "Revisions" and will incur separate hourly or flat-rate charges.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Tiered Warranty Coverage:</strong> Upon final delivery, I provide a 7-day warranty for Core Systems and a 14-day warranty for Full Projects exclusively for patching minor bugs related to the original scope. <em>(Quick Fixes are considered complete and final immediately upon your approval during the playtesting phase).</em> Valid bug reports must include clear reproduction steps or video evidence.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Technical Limitations & Unresolvable Bugs:</strong> While I strive for flawless execution, certain bugs may be fundamentally unresolvable due to underlying Roblox engine limitations (e.g., physics glitches, network latency) or extreme technical constraints. If I exhaust a reasonable amount of effort and determine a bug cannot be fixed cleanly, I reserve the right to implement a functional workaround.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Feature Scrapping:</strong> If an unresolvable bug prevents a specific feature from working entirely and no workaround is viable, that specific feature will be scrapped. A fair, partial discount strictly relative to the value of that specific feature will be deducted from your final invoice, rather than refunding or canceling the entire project.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Strict Warranty Voidance:</strong> The free warranty is immediately and permanently voided if you, another developer, or any third-party script modify, tamper with, delete, or overwrite any part of my delivered source code. Bug reports will only be entertained if they are reproducible on the original, unmodified version of the file I delivered.</li>
            </ul>
          `
        },
        {
          label: "Maintenance",
          icon: "fas fa-tools",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>RevShare Update Limits:</strong> A Hybrid RevShare agreement covers the payment for the <em>initial</em> agreed-upon scope of work. Earning a percentage of the game's revenue does <strong>not</strong> entitle the client to demand infinite free content updates, DLCs, bug fixes after the warranty, or new systems post-launch. Future updates require a separate negotiation, an hourly pay rate, or a renegotiated share percentage.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Exclusion of Future Roblox Updates:</strong> Once the designated warranty period expires, the delivered system is considered a finalized product. Any future breakages caused by official Roblox engine updates, Luau syntax changes, API deprecations, or updates to third-party modules (e.g., ProfileStore) are entirely outside of my responsibility.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Long-Term Support:</strong> Resolving outdated code or fixing systems broken by future Roblox updates will require a brand new commission quote, an hourly repair rate, or the establishment of a separate, ongoing maintenance contract.</li>
            </ul>
          `
        },
        {
          label: "Ownership",
          icon: "fas fa-shield-alt",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Secure Testing & Rights Transfer:</strong> All testing during development will be strictly conducted in a heavily secured, server-sided place owned by me. No edit access, Team Create invitations, or uncopylocked files will be provided under any circumstances until the final invoice is paid in full. Complete commercial ownership of the code is transferred only upon payment clearance.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Single-Use Licensing & Anti-Theft:</strong> The source code and systems provided are licensed exclusively for use in your specific game or studio. Reselling, leaking, open-sourcing, distributing my code to asset marketplaces, or sharing it with third parties without explicit written permission is strictly prohibited and will be met with immediate legal/DMCA action.</li>
              <li style="margin-bottom: 0.8rem;"><strong>RevShare Breach & License Revocation:</strong> For Hybrid RevShare projects, your right to use my source code is explicitly contingent on the continuous fulfillment of the agreed payout percentage. Arbitrarily removing me from the group payout, hiding revenue, or failing to distribute funds without a mutually agreed-upon buyout will result in the immediate revocation of the software license and a formal DMCA takedown notice against the game.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Portfolio Display & White-Label Service:</strong> I retain the baseline right to showcase visual snippets, screenshots, or video demonstrations of the completed systems in my personal portfolio after your game is officially public. If your project requires absolute secrecy (Non-Disclosure Agreement) or a "White-Label" service where I am prohibited from claiming the work publicly, a mandatory Privacy Fee (typically 20% of the total quote) will be added to the invoice.</li>
            </ul>
          `
        },
        {
          label: "Cancellations",
          icon: "fas fa-ban",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Client-Initiated Cancellation:</strong> If you decide to cancel the project at any point after development has begun, the initial down payment is entirely forfeit and non-refundable.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Developer-Initiated Cancellation:</strong> If I am forced to cancel the project due to unforeseen real-life emergencies or unavoidable schedule conflicts, you will receive a pro-rated refund reflecting the amount of unfinished work, alongside the current progress of the source code. However, if I terminate the project due to a breach of ToS, extreme scope creep without renegotiation, or a hostile work environment (e.g., harassment, insults), development will cease immediately, and no refund will be provided.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Project Dormancy & Ghosting:</strong> Consistent communication is vital. If I require your feedback, approval, or assets to proceed, and you fail to respond for 14 consecutive days, the project will be temporarily frozen. A final 48-hour warning will be sent. If unheeded, the project is officially declared abandoned, all deposits are forfeited, and resuming the work at a later date will require a "Reactivation Fee" or a complete requote, subject to my availability.</li>
            </ul>
          `
        },
        {
          label: "Communication",
          icon: "fas fa-comments",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Working Hours & Timezones:</strong> Please note that my primary working timezone is <strong>[WIB / GMT+7]</strong>. While I provide regular progress updates, please allow a grace period of 24-48 hours for responses to general inquiries, particularly during weekends or national holidays.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Professional Conduct:</strong> All communication must be kept professional and strictly within our designated text channel (e.g., Discord) for documentation purposes. Voice calls are not mandatory and must be scheduled in advance. Constant spamming, demanding instant replies, or aggressive behavior will not be tolerated and may result in project termination.</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "payments",
      text: "Payment Details",
      title: "Payment Details",
      subtitle: "Secure & Flexible Options",
      icon: "fas fa-credit-card",
      sections: [
        {
          label: "Pricing",
          icon: "fas fa-tags",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Flat-Rate (Per Project):</strong> The standard model. A non-refundable 50% down payment is required to begin. The remaining 50% is due upon completion. Large projects may use a 30/30/40 milestone structure.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Hourly Rate:</strong> Ideal for complex R&D or consulting. Invoiced weekly. <strong>Important:</strong> The current invoice must be cleared before work for the subsequent week begins. Unpaid invoices will result in an immediate pause.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Monthly Retainer:</strong> Guarantees a set number of hours/deliverables per month. The fee must be paid <strong>upfront</strong> at the start of each cycle. Exceeding the agreed scope is billed as overtime.</li>
            </ul>
          `
        },
        {
          label: "RevShare",
          icon: "fas fa-chart-pie",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Hybrid Model Requirement:</strong> I strictly <strong>do not</strong> accept 100% Revenue Share (0% upfront) projects. A hybrid model (a reduced flat-rate upfront payment + a negotiated percentage of game revenue) is required. The upfront fee compensates for my initial labor and is non-refundable, regardless of the game's future commercial success or failure.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Gross vs. Net Revenue:</strong> The agreed-upon RevShare percentage must be calculated based on the game's <strong>Gross Robux Income</strong> (after Roblox's standard 30% marketplace tax), prior to the deduction of the client's arbitrary advertising budgets, sponsor payouts, or other staff salaries, unless a strict net-profit formula is transparently documented and mutually signed.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Payout Distribution:</strong> RevShare must be distributed via automated recurring Group Payouts on Roblox. I must be granted permission to view the group's revenue analytics for transparency.</li>
            </ul>
          `
        },
        {
          label: "Currencies",
          icon: "fas fa-file-invoice-dollar",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Base Currencies:</strong> Standard quotes are strictly issued in USD (international) or IDR (domestic).</li>
              <li style="margin-bottom: 0.8rem;"><strong>Exchange Rates & Fees:</strong> Conversion rates are determined when the invoice is generated. You are strictly responsible for covering any cross-border transaction fees, PayPal taxes, or conversion markups so the net amount I receive perfectly matches the quoted price.</li>
            </ul>
          `
        },
        {
          label: "Fiat Methods",
          icon: "fas fa-globe",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Wise (Highly Recommended):</strong> The preferred method for international clients. Deposits directly into my local bank account with low fees.</li>
              <li style="margin-bottom: 0.8rem;"><strong>PayPal:</strong> Accepted, provided you fully cover the Goods & Services (G&S) fee. You must confirm receipt of the functional digital goods in our text chat before final handover to prevent chargeback fraud.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Indonesian Locals (IDR Only):</strong> Direct bank transfers (BCA, BRI, Jago) and E-Wallets (DANA, GoPay) are accepted. Proof of transfer is required.</li>
            </ul>
          `
        },
        {
          label: "Robux Methods",
          icon: "fas fa-coins",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Group Funds:</strong> Preferred for Robux. <em>Note: Roblox mandates a 14-day waiting period for new group members before payouts can be issued.</em></li>
              <li style="margin-bottom: 0.8rem;"><strong>T-Shirt / Gamepass:</strong> Accepted, but you <strong>must</strong> cover the 30% Roblox marketplace tax to ensure the net payout matches the quote (e.g., paying 1,429 Robux for a 1,000 Robux quote).</li>
              <li style="margin-bottom: 0.8rem;"><strong>The "Pending" Rule:</strong> T-Shirt/Gamepass payments are "Pending" for 3-7 days. <strong>Final files will NOT be granted until the Robux has officially cleared and is usable in my account.</strong> Use Fiat methods for immediate delivery.</li>
            </ul>
          `
        },
        {
          label: "Security",
          icon: "fas fa-shield-alt",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>File Retention:</strong> I retain absolute ownership of all written code. No source scripts or uncopylocked places will be granted while there is an outstanding upfront balance.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Fraud Prevention:</strong> Any unauthorized payment reversal, dispute, or chargeback initiated after the delivery of functional work is considered theft. This will result in an immediate Roblox DMCA takedown and public scam reports on developer forums.</li>
            </ul>
          `
        },
      ]
    },
    {
      id: "faq",
      text: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Common Questions Answered",
      icon: "fas fa-question-circle",
      sections: [
        {
          label: "The Development Workflow",
          icon: "fas fa-route",
          content: `
            <h3 style="margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold; color: #ffffff;">How We Work Together (Start to Finish)</h3>
            <p style="margin-bottom: 1.8rem; line-height: 1.6; color: #cbd5e1;">To ensure a smooth and professional collaboration, every project strictly follows this 5-step development pipeline:</p>
            
            <div style="margin-bottom: 1.5rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">1. Discovery & Quoting</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">We discuss your game's vision. You provide a detailed Game Design Document (GDD) and a final feature list. I will then provide a fixed quote and an estimated timeframe.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">2. Deposit & Scheduling</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">Once the 50% non-refundable down payment is cleared, your project is officially locked into my schedule. Development officially begins.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">3. Active Development</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">I will write the core logic in a secured private baseplate. You will receive progress updates (screenshots/videos) at least twice a week. Any required assets (UI/Models) must be provided now.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">4. Playtesting & Polishing</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">You will be invited to a live, secured Roblox server to test the mechanics firsthand. We will polish the systems and patch any explicit bugs that deviate from the original brief.</p>
            </div>

            <div style="margin-bottom: 0;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">5. Final Handover</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">After you are 100% satisfied with the testing phase and the remaining 50% balance is fully cleared, I will securely hand over the uncopylocked <code>.rbxl</code> file or the final scripts.</p>
            </div>
          `
        },
        {
          label: "Project Requirements",
          icon: "fas fa-clipboard-check",
          content: `
            <h3 style="margin-bottom: 1rem; font-size: 1.2rem; color: #fff;">What do I need to provide before we start?</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">To prevent delays and scope misunderstandings, I highly recommend having the following ready before paying the initial deposit:</p>
            <ul style="list-style: disc; margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.8rem;"><strong>A Clear Brief or GDD:</strong> A written document detailing exactly how the mechanics should work. The more specific, the better. (e.g., instead of "Make a combat system," use "Make a 3-hit combo combat system with blocking and stamina drain").</li>
              <li style="margin-bottom: 0.8rem;"><strong>Required Assets (Visuals):</strong> I am a logic programmer, not a 3D Modeler, UI Designer, or VFX Artist. You must provide all necessary visual assets (UI screens, rigged models, animations, sound effects). If no assets are provided, I will use basic Roblox placeholder parts to build the logic.</li>
            </ul>
          `
        },
        {
          label: "Pricing & RevShare",
          icon: "fas fa-chart-pie",
          content: `
            <h3 style="margin-bottom: 1rem; font-size: 1.2rem; color: #fff;">How do you calculate prices, and do you accept RevShare?</h3>
            <p style="margin-bottom: 0.8rem; line-height: 1.6;"><strong>Quote Calculation:</strong> Every project is uniquely quoted based on the complexity of the logic, the estimated hours required, and the level of server-client security needed to prevent exploiters.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Revenue Share Policy:</strong> I <strong>do not</strong> accept projects that offer 100% Revenue Share (0% upfront money). Building games takes massive amounts of time and energy, and an upfront payment is required to reserve my schedule. However, I am open to <strong>Hybrid Models</strong> (a discounted upfront flat-rate + a smaller percentage of the game's gross revenue) for serious, long-term studio projects. Please read the "Payment Details" section for complete rules on RevShare.</p>
          `
        },
        {
          label: "Adding Features Later",
          icon: "fas fa-plus-circle",
          content: `
            <h3 style="margin-bottom: 1rem; font-size: 1.2rem; color: #fff;">Can I add new ideas midway through development?</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Yes, but it will be treated as a separate task. This is commonly known as <strong>Scope Creep</strong>.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6;">The initial quote and deadline are strictly calculated based on the <em>original agreement</em>. If you suddenly want to add a Pet System while I am halfway through coding your Combat System, I will gladly do it! However, I will need to generate a <strong>new quote</strong> for the Pet System, and the final project deadline will be extended.</p>
            <p style="line-height: 1.6;">This ensures that I can maintain the quality of the current code without being overwhelmed by endless free additions.</p>
          `
        },
        {
          label: "Bugs & Future Updates",
          icon: "fas fa-tools",
          content: `
            <h3 style="margin-bottom: 1rem; font-size: 1.2rem; color: #fff;">What happens if the code breaks or Roblox updates?</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>The Warranty Period:</strong> I provide a free 7-to-14 day warranty post-delivery (depending on project size) exclusively to patch any minor bugs related to the original code I wrote. A bug is defined as an explicit error, not a request to change how a feature "feels."</p>
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong>Future Maintenance:</strong> Roblox constantly updates its engine, deprecates old APIs, and changes Luau syntax. If my code breaks 6 months from now because of an official Roblox update, that is outside of the warranty scope. You can hire me for a quick maintenance session (hourly rate) to repair the outdated code.</p>
            <p style="line-height: 1.6;"><em>Note: The warranty is immediately voided if you or another scripter modify the core code I delivered before reporting the bug.</em></p>
          `
        },
        {
          label: "Restrictions",
          icon: "fas fa-shield-virus",
          content: `
            <h3 style="margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold; color: #ffffff;">What kind of projects do you NOT accept?</h3>
            <p style="margin-bottom: 1.5rem; line-height: 1.6; color: #cbd5e1;">To maintain a professional and safe environment, I have a zero-tolerance policy for certain types of content. I will <strong>not</strong> work on:</p>
            
            <div style="margin-bottom: 1.2rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #f87171; margin-bottom: 0.4rem;">• Illegal & Policy Violations</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">Anything that violates Roblox's ToS, such as unregulated gambling, "black market" systems, or malicious scripts designed to exploit other users.</p>
            </div>

            <div style="margin-bottom: 1.2rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #f87171; margin-bottom: 0.4rem;">• NSFW & Harmful Content</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">Explicit/NSFW materials, extreme gore, or games that promote hate speech, harassment, and discrimination against any group.</p>
            </div>

            <div style="margin-bottom: 0;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #f87171; margin-bottom: 0.4rem;">• Scams & Deceptive Mechanics</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">Systems built specifically to deceive players for Robux (Scam games) or phishing tools. My services are for legitimate game development only.</p>
            </div>
          `
        },
      ]
    }
  ]
};
