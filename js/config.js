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
        default: "Start at $15",
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
        default: "Start at $100",
        ID: "Start at IDR 900K"
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
        default: "$450+ / Quote",
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
      version: "v1.1",
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
              <li style="margin-bottom: 0.8rem;"><strong>Future Policy Shifts:</strong> I guarantee compliance with Roblox's Terms of Use at the exact time of development. However, if Roblox updates its Community Standards or monetization policies (e.g., lootbox regulations, gambling bans) <em>after</em> the code has been written, rendering a previously approved feature non-compliant, I am not responsible for redesigning the system for free. Making the game compliant with new retroactive rules requires a separate quote.</li>
              </ul>
          `
        },
        {
          label: "Project Scope",
          icon: "fas fa-crosshairs",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Strict Adherence to Baseline:</strong> Development is executed strictly based on the mutually agreed-upon brief, Game Design Document (GDD), or final feature list documented in our text chat before the upfront payment is made. Casual discussions or verbal ideas not explicitly listed in the final agreement are not considered part of the scope.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Specialization & Limitations:</strong> My primary expertise lies in full-stack Luau programming, server-client architecture, data management, and core game logic. I do <strong>not</strong> specialize in advanced Roblox physics (e.g., complex vehicle suspensions, custom character controllers), frame-perfect melee combat frameworks, or highly aesthetic visual scripting. Projects relying heavily on these mechanics must be discussed transparently beforehand.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Experimental Features & R&D (Skill Boundaries):</strong> I am highly skilled, but I am human and do not possess infinite knowledge of every possible algorithm. If a requested feature involves highly experimental mechanics, complex advanced mathematics, or uncharted technical territory outside my core expertise, I will transparently inform you beforehand. We can either simplify the mechanic, or initiate a paid "Research & Development" phase. If the R&D proves the feature is beyond my current technical purview, we will pivot to a viable alternative without penalty.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Existing Codebases (The "Spaghetti Code" Clause):</strong> If you are hiring me to add features to an existing game, I am not responsible for fixing, debugging, or integrating with undocumented, poorly written, or "spaghetti" code left by previous developers. If I determine that your existing codebase is unworkable, I reserve the right to either rewrite the system entirely (which will require a new quote) or decline the project. I cannot be forced to perform miracles on broken foundations.</li>
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
              <li style="margin-bottom: 0.8rem;"><strong>Final Acceptance & Payment Deadline:</strong> Once the final build is presented on the testing server, you have a <strong>maximum of 7 days</strong> to conduct playtesting, report valid bugs, and clear the remaining 50% balance. If you fail to pay within this 7-day window without a renegotiated extension, the project will be classified as 'Completed but Unpaid'. Late fees of 5% per week may apply, and access to the testing server will be revoked until the invoice is settled.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Chargeback Fraud & Payment Disputes:</strong> Any attempt to forcefully reverse a payment, open an unauthorized dispute, or initiate a chargeback (e.g., via PayPal or Bank) after the delivery of functional digital goods is considered a severe breach of contract. Such actions will result in an immediate Roblox DMCA takedown against your game, public blacklisting, and a formal scam report submitted to developer communities (e.g., DevForum, HiddenDevs). This strict anti-fraud policy applies universally, <strong>including claims of 'unauthorized transactions by a minor'</strong>. By proceeding with the payment, you affirm you are the authorized cardholder. If a parent or bank forces a reversal, it is still classified as digital theft against my business. The game, group, and associated Roblox accounts utilizing my code will face immediate DMCA takedown and public reporting without exception.</li>
            </ul>
          `
        },
        {
          label: "Timelines",
          icon: "fas fa-clock",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Dynamic Deadlines:</strong> Provided delivery dates are highly educated estimates. While I strive to meet them consistently, unforeseen technical roadblocks or engine limitations may occasionally require extensions. You will be promptly notified if such situations arise.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Human Factors & Force Majeure:</strong> I operate as a solo independent contractor, not a corporation. Therefore, timelines are subject to human limitations. In the event of severe illness, physical/mental burnout, internet/power grid outages (Force Majeure), or real-life family emergencies, the project timeline will be paused. I will notify you as soon as physically possible. You agree to grant reasonable grace periods for these unavoidable life events without demanding penalties or immediate refunds.</li>
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
              <li style="margin-bottom: 0.8rem;"><strong>Asset Legality & Liability Exemption:</strong> You explicitly guarantee that all assets provided for me to integrate are originally created by you, legally purchased, or appropriately licensed, and fully comply with Roblox's Terms of Use. I hold absolutely zero liability for any moderation actions, account terminations, or copyright strikes taken against your game due to stolen, leaked, or inappropriate assets provided by you or your team. To protect my personal developer account from moderation risks, <strong>I will not upload raw image files, meshes, or audio files on your behalf.</strong> You must upload all custom assets to your own Roblox account or group and provide me exclusively with the generated Asset IDs to implement into the code.</li>
            </ul>
          `
        },
        {
          label: "Bugs & Warranty",
          icon: "fas fa-bug",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Defining Bugs vs. Revisions:</strong> A "bug" is strictly defined as code that produces explicit console errors or objectively fails to execute the mechanics detailed in the initial brief. Subjective changes to the visual design, timing, or overall "feel" of a system after it has been approved are classified as "Revisions" and will incur separate hourly or flat-rate charges.</li>
              <li style="margin-bottom: 0.8rem;"><strong>The Burden of Proof for Bugs:</strong> To claim a free fix under warranty, the burden of proof lies with the client. You must objectively demonstrate that the system fails to perform the explicit actions written in the original Game Design Document. "I thought it would work differently," "It doesn't feel right," or "Can we just make it do [X] instead?" are strictly classified as Revisions, not bugs, and are subject to hourly billing. I will not be pressured into doing free labor disguised as bug fixes.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Tiered Warranty Coverage:</strong> Upon final delivery, I provide a 7-day warranty for Core Systems and a 14-day warranty for Full Projects exclusively for patching minor bugs related to the original scope. <em>(Quick Fixes are considered complete and final immediately upon your approval during the playtesting phase).</em> Valid bug reports must include clear reproduction steps or video evidence.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Technical Limitations & Unresolvable Bugs:</strong> While I strive for flawless execution, certain bugs may be fundamentally unresolvable due to underlying Roblox engine limitations (e.g., physics glitches, network latency) or extreme technical constraints. If I exhaust a reasonable amount of effort and determine a bug cannot be fixed cleanly, I reserve the right to implement a functional workaround.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Feature Scrapping:</strong> If an unresolvable bug prevents a specific feature from working entirely and no workaround is viable, that specific feature will be scrapped. A fair, partial discount strictly relative to the value of that specific feature will be deducted from your final invoice, rather than refunding or canceling the entire project. The monetary value of the scrapped feature and the subsequent discount amount will be calculated and determined at the <strong>sole discretion of the Developer</strong>, based exclusively on the estimated hours originally allocated to that specific task, not its perceived value to the game's overall success.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Strict Warranty Voidance:</strong> The free warranty is immediately and permanently voided if you, another developer, or any third-party script modify, tamper with, delete, or overwrite any part of my delivered source code. Bug reports will only be entertained if they are reproducible on the original, unmodified version of the file I delivered.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Third-Party API & Service Outages:</strong> Many systems rely on Roblox Core APIs (e.g., DataStores, MessagingService) or external third-party services (e.g., Discord Webhooks, external databases). I am not liable for any game breakages, data loss, or feature failures caused by the downtime, rate-limiting, API changes, or permanent shutdown of these external services. Fixing systems broken by external outages will be billed as a new maintenance task.</li>
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
              <li style="margin-bottom: 0.8rem;"><strong>Single-Use Licensing & Anti-Theft:</strong> The source code and systems provided are licensed exclusively for use in your specific game or studio. Reselling, leaking, open-sourcing, distributing my code to asset marketplaces, or sharing it with third parties without explicit written permission is strictly prohibited and will be met with immediate legal/DMCA action. Please note that while your specific game mechanics, map, and proprietary assets belong to you, I retain the right to reuse my own underlying, generic code frameworks (e.g., basic data-saving modules, standard inventory math, core server architectures) for future projects. You are paying for the implementation of my logic into your game, not a monopoly on my fundamental programming techniques.</li>
              <li style="margin-bottom: 0.8rem;"><strong>RevShare Breach & License Revocation:</strong> For Hybrid RevShare projects, your right to use my source code is explicitly contingent on the continuous fulfillment of the agreed payout percentage. Arbitrarily removing me from the group payout, hiding revenue, or failing to distribute funds without a mutually agreed-upon buyout will result in the immediate revocation of the software license and a formal DMCA takedown notice against the game.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Portfolio Display & White-Label Service:</strong> I retain the baseline right to showcase visual snippets, screenshots, or video demonstrations of the completed systems in my personal portfolio after your game is officially public. If your project requires absolute secrecy (Non-Disclosure Agreement) or a "White-Label" service where I am prohibited from claiming the work publicly, a mandatory Privacy Fee (typically 20% of the total quote) will be added to the invoice.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Playtesting Liability & Invitees:</strong> During the playtesting phase on my secure server, you may request to invite co-developers, staff, or friends to test the mechanics. You take 100% legal and financial responsibility for the actions of your invitees. If anyone you bring into the testing server attempts to exploit, steal assets, or leak the game architecture, the testing session will be permanently terminated, all deposits forfeited, and it will be prosecuted as a severe breach of contract.</li>
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
              <li style="margin-bottom: 0.8rem;"><strong>Technical Impasse (The Win-Win Off-Ramp):</strong> Transparency is my priority. If, mid-development, I discover that a core requested feature is fundamentally beyond my current technical expertise and no viable workaround exists, I will honestly disclose this limitation. In this specific scenario, a mutual termination will occur. I will hand over all functional source code written up to that point <strong>in an 'As-Is' condition (void of any post-delivery warranties)</strong>, and issue a fair, pro-rated refund for the undone portion of the work. This ensures you only pay for what actually works, and we part ways professionally.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Project Dormancy & Ghosting:</strong> Consistent communication is vital. If I require your feedback, approval, or assets to proceed, and you fail to respond for 14 consecutive days, the project will be temporarily frozen. A final 48-hour warning will be sent. If unheeded, the project is officially declared abandoned, all deposits are forfeited, and resuming the work at a later date will require a "Reactivation Fee" (10% to 20% of the initial quote) or a complete requote, subject to my availability.</li>
            </ul>
          `
        },
        {
          label: "Communication",
          icon: "fas fa-comments",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Working Hours & Timezones:</strong> Please note that my primary working timezone is <strong>[WIB / GMT+7]</strong>. While I provide regular progress updates, please allow a grace period of 24-48 hours for responses to general inquiries, particularly during weekends or national holidays.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Single Source of Truth & Conduct:</strong> To prevent scattered documentation, all project-related approvals, asset handovers, and feature discussions must occur strictly in our primary, designated text channel (e.g., a specific Discord DM or Ticket). Messages or requests sent through alternative platforms (Twitter, DevForum, secondary accounts) will be ignored to ensure a legally verifiable Document of Record. Furthermore, constant spamming, demanding instant replies, or aggressive behavior will not be tolerated and may result in immediate project termination.</li>
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
              <li style="margin-bottom: 0.8rem;"><strong>Hourly Rate:</strong> Ideal for complex R&D or consulting. Invoiced weekly. Time is tracked internally and billed in minimum increments of 30 minutes. You will receive a summary of hours worked alongside the invoice. <strong>Important:</strong> The current invoice must be cleared before work for the subsequent week begins. Unpaid invoices will result in an immediate pause in development.</li>
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
              <li style="margin-bottom: 0.8rem;"><strong>Base Currencies:</strong> Standard quotes are strictly issued in USD (international) or IDR (domestic). Payments made in cryptocurrency are strictly not accepted.</li>
              <li style="margin-bottom: 0.8rem;"><strong>The DevEx Conversion Standard:</strong> If you receive a quote in USD but wish to pay using Robux, the conversion will be strictly calculated using the official <strong>Roblox Developer Exchange (DevEx) rate</strong> (e.g., $3.50 USD = 1,000 Robux), NOT the consumer catalog purchasing rate. This ensures the fiat value of my labor remains consistent regardless of the payment medium.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Exchange Rates & Fees:</strong> You are strictly responsible for covering any cross-border transaction fees, PayPal taxes, or conversion markups so the net amount I receive perfectly matches the quoted price. In the event of a pro-rated refund (e.g., mutual cancellation), any network or transaction fees incurred during the reversal will be deducted directly from the final refund amount.</li>
            </ul>
          `
        },
        {
          label: "Fiat Methods",
          icon: "fas fa-globe",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Wise (Highly Recommended):</strong> The preferred method for international clients. Deposits directly into my local bank account with low fees.</li>
              <li style="margin-bottom: 0.8rem;"><strong>PayPal & Security Holds:</strong> Accepted, provided you fully cover the Goods & Services (G&S) fee. You must confirm receipt of the functional digital goods in our text chat. <strong>Important:</strong> If PayPal places a "21-Day Security Hold" on your transaction, the payment is NOT considered cleared. Final files will not be handed over until the hold is lifted and the funds are fully withdrawable to my bank account. Use Wise to avoid this issue.</li>
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
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">The Development Workflow: A Step-by-Step Guide</h3>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">To ensure absolute clarity and professionalism, every project follows a strict, predictable pipeline. Here’s exactly what you can expect from start to finish:</p>
            
            <div style="margin-bottom: 1.2rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">Step 1: Discovery & Quoting</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">We begin with a detailed discussion about your game's vision. I will analyze your feature list or Game Design Document (GDD) to provide a fixed price quote and a realistic delivery timeframe. <strong>Your role:</strong> Provide a clear, written brief. The more detailed your document, the more accurate my quote will be.</p>
            </div>

            <div style="margin-bottom: 1.2rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">Step 2: Deposit & Scheduling</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">Once the 50% non-refundable down payment is cleared, your project is officially locked into my development schedule. This deposit secures my time exclusively for your project for the estimated duration. <strong>Your role:</strong> Settle the initial invoice promptly to begin development.</p>
            </div>

            <div style="margin-bottom: 1.2rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">Step 3: Active Development & Progress Updates</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">I will write and architect the core logic in my private, secured baseplate. You will receive progress updates (videos or screenshots) at least twice a week to see the systems come to life. <strong>Your role:</strong> Provide any required visual assets (UI, models, etc.) during this phase so they can be integrated.</p>
            </div>

            <div style="margin-bottom: 1.2rem;">
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">Step 4: Live Playtesting & Revisions</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">You and your team will be invited to a live, secure Roblox server to test the mechanics firsthand. We will work together to patch any explicit bugs (code errors) and make minor polishes to ensure the system functions exactly as described in the original brief. <strong>Your role:</strong> Provide clear, consolidated feedback and bug reports.</p>
            </div>

            <div>
              <h4 style="font-size: 1.05rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.4rem;">Step 5: Final Payment & Handover</h4>
              <p style="line-height: 1.5; margin: 0; color: #94a3b8;">After you are 100% satisfied with the playtesting and the final 50% balance is fully cleared, I will securely hand over the uncopylocked <code>.rbxl</code> file or the final packaged scripts. Ownership is officially transferred. <strong>Your role:</strong> Settle the final invoice to receive your product.</p>
            </div>
          `
        },
        {
          label: "Project Requirements",
          icon: "fas fa-clipboard-check",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Project Requirements: What You Need to Provide</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What is the single most important thing I need?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">A <strong>Clear Written Brief or Game Design Document (GDD)</strong>. This is non-negotiable. It prevents misunderstandings and serves as our "source of truth." Vague ideas like "make a cool sword system" are not enough. A good brief would be "make a sword system with a 3-hit combo, a 2-second block cooldown, and stamina drain of 10 per swing."</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What about visual assets like UI, models, and sounds?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">You must provide all necessary visual assets. I am a programmer responsible for logic, not a 3D Modeler, UI Designer, or VFX Artist. If you provide no assets, I will build the system with functional placeholder parts (e.g., grey blocks for swords, basic text buttons for UI) to prove the underlying code works perfectly.</p>
          `
        },
        {
          label: "Pricing & RevShare",
          icon: "fas fa-chart-pie",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Pricing Models & Revenue Share Policy</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: How do you determine the price of a project?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">My quotes are based on three factors: <strong>Complexity</strong> (how difficult is the logic?), <strong>Time Estimate</strong> (how many hours will it take?), and <strong>Security Needs</strong> (how much work is required to make it anti-exploit). A simple leaderboard is cheap; a complex inventory system with trading is expensive.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Will you work for 100% Revenue Share (no upfront payment)?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;"><strong>No, never.</strong> Developing a game requires a massive time investment, and an upfront payment is essential to secure my schedule and guarantee my initial labor is compensated.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Do you offer any kind of RevShare deal?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">Yes, I am open to <strong>Hybrid Models</strong> for serious, long-term projects. This involves a reduced upfront flat-rate payment PLUS a small, negotiated percentage of the game's gross revenue. This model is reserved for established studios or clients with a proven track record.</p>
          `
        },
        {
          label: "Adding Features Later",
          icon: "fas fa-plus-circle",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Scope Creep: Adding New Features Mid-Development</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Can I add a new feature after we've already started?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;"><strong>Yes, absolutely!</strong> However, it must be treated as a separate task. This is called "Scope Creep." The original quote and deadline are only for the features agreed upon at the start.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: How will the new feature be handled?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">I will pause development on the current task, evaluate your new request, and provide a <strong>brand new, separate quote and timeline extension</strong> for it. This ensures fairness and allows me to maintain code quality without being rushed by unexpected additions.</p>
          `
        },
        {
          label: "Bugs & Future Updates",
          icon: "fas fa-tools",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Warranty, Bugs, and Future-Proofing</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What is the difference between a "Bug" and a "Revision"?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">A <strong>Bug</strong> is an objective, demonstrable error where the code fails to perform a function outlined in the original brief (e.g., a button gives an error in the console). A <strong>Revision</strong> is a subjective change of mind (e.g., "Can you make the sword swing faster?"). Bug fixes are free under warranty; revisions are new paid tasks.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: How long is the free warranty period?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">I provide a <strong>7-day warranty for Core Systems</strong> and a <strong>14-day warranty for Full Projects</strong>, starting from the moment of final handover. This covers minor bug fixes for the original code.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What happens if a Roblox update breaks my game months later?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">That is considered <strong>Future Maintenance</strong> and falls outside the warranty. Roblox frequently changes its engine. I am not responsible for breakages caused by official Roblox updates post-warranty. You can hire me at an hourly rate to repair and modernize the outdated code.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What voids the warranty?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">The warranty is <strong>instantly and permanently voided</strong> if you or another developer modifies, tampers with, or overwrites any part of my delivered source code. I can only guarantee my own work, not code that has been altered by others.</p>
          `
        },
        {
          label: "Restrictions",
          icon: "fas fa-shield-virus",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Project Restrictions & Ethical Boundaries</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Are there any types of games you refuse to work on?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">Yes. I have a zero-tolerance policy for projects that violate my ethical standards or Roblox's Terms of Service. This includes, but is not limited to:</p>
            <ul style="list-style: disc; margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.5rem;">Unregulated gambling or "black market" systems.</li>
              <li style="margin-bottom: 0.5rem;">NSFW, "condo," or explicit/gore-related content.</li>
              <li style="margin-bottom: 0.5rem;">Games promoting hate speech, harassment, or discrimination.</li>
              <li>Scam games, phishing tools, or malicious scripts.</li>
            </ul>
          `
        },
        {
          label: "Security & Testing Access",
          icon: "fas fa-lock",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Development Security & Client Access</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Can I get Team Create access to watch you code?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;"><strong>No.</strong> To protect my intellectual property and prevent premature asset leaks, all development is conducted in my private, secure server environment. You will receive frequent video/image updates instead.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Will I get the game file (.rbxl) before I pay the full amount?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;"><strong>No.</strong> The uncopylocked game file or final scripts are the final product. They will only be handed over after the final 50% invoice has been fully paid and cleared, without exception.</p>
          `
        },
        {
          label: "Starting Without Assets",
          icon: "fas fa-cube",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Asset Provision & Development Start</h3>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Can we begin development even if my UI/models aren't ready?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;"><strong>Yes.</strong> I can build and test the entire logical framework using basic Roblox placeholder parts. This is actually a very efficient way to work, as it separates logic from aesthetics.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What happens if my asset delivery is delayed?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">If development is paused because I am waiting for you to provide necessary assets, the final delivery deadline will be extended by the exact number of days I was delayed. My timeline relies on your prompt cooperation.</p>
          `
        },
        {
          label: "NDAs & Project Secrecy",
          icon: "fas fa-user-secret",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Portfolio Rights & Non-Disclosure Agreements (NDA)</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Will you show my game in your portfolio?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">By default, I reserve the right to showcase visual snippets (videos, screenshots) of the work I did for you in my portfolio, but only <em>after</em> your game has been publicly launched.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What if I need the project to be a complete secret?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">I offer a "White-Label" or NDA service for projects requiring absolute secrecy. If you need me to sign an NDA or agree not to claim the work publicly, a mandatory <strong>Privacy Fee (typically 20% of the total quote)</strong> will be added to the final invoice.</p>
          `
        },
        {
          label: "Expedited Delivery",
          icon: "fas fa-shipping-fast",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Rush Fees & Expedited Timelines</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: I have a tight deadline. Can you work faster?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">It depends entirely on my current schedule. Rushing a project often requires me to work overtime, push back other clients, or cut personal time, which disrupts my workflow.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Is there an extra cost for rushing?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">Yes. If I agree to an expedited timeline, a mandatory <strong>Rush Fee of 25% to 50%</strong> of the total project cost will be applied. This fee compensates for the disruption and overtime. In some cases, I may have to decline the rush request if my schedule is completely full.</p>
          `
        },
        {
          label: "Engine Limits & Impossible Features",
          icon: "fas fa-exclamation-triangle",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Technical Limitations & Unresolvable Issues</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What if a feature is too difficult or impossible due to Roblox engine bugs?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">The Roblox engine has its own limitations (e.g., physics glitches, network latency). If a feature proves to be unachievable after a reasonable amount of effort, I will first attempt to create a functional workaround.</p>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What happens if there is no workaround? Do I get a refund?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">If a specific feature must be scrapped entirely, you will receive a <strong>fair, partial discount</strong> on the final invoice, strictly proportional to the value of that single feature. The entire project will not be canceled or fully refunded over one unresolvable component.</p>
          `
        },
        {
          label: "Voice Calls & Meetings",
          icon: "fas fa-headset",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Communication Policy: Voice Calls vs. Text</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Why do you prefer text-based communication (like Discord)?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">Written chat serves as a permanent, searchable "Document of Record." It protects both of us by providing clear, undeniable proof of all agreements, feature requests, and approvals. This avoids "he-said, she-said" misunderstandings.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Can we ever have a voice call?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">Voice calls are not mandatory and must be scheduled in advance to respect my timezone (WIB/GMT+7). Any critical decisions or feature changes agreed upon during a voice call must be summarized in our text channel afterward to become officially binding.</p>
          `
        },
        {
          label: "Developer Capabilities",
          icon: "fas fa-brain",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Developer Skills & Limitations</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What happens if I request a feature you don't know how to code?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">My primary strength is professional transparency. If a request is outside my area of deep expertise (e.g., complex custom character physics), I will inform you directly during the quoting phase and may decline the project to avoid wasting your time and money.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What if this discovery is made mid-development?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">In the rare event we hit an unforeseen technical impasse, I will enact the "Win-Win Off-Ramp" clause from my ToS. We can either simplify the mechanic, or I will hand over all completed work and provide a fair, pro-rated refund for the single feature I could not complete. You only pay for what works.</p>
          `
        },
        {
          label: "Modifying Existing Games",
          icon: "fas fa-code-branch",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Working on Pre-Existing Codebases</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: My game is half-done. Can you fix or finish the scripts from another developer?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">As a general policy, <strong>no</strong>. Working with another developer's undocumented, disorganized, or inefficient "spaghetti code" is often more time-consuming and frustrating than starting from scratch. I cannot guarantee the quality or security of code I did not write.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Are there any exceptions?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">If your project is professionally organized and documented, I may consider it. However, this requires an initial, paid hourly session for me to conduct a full "Code Audit." Based on the audit, I will either approve the project, recommend a full rewrite, or decline.</p>
          `
        },
        {
          label: "Robux Pricing & Conversion Rates",
          icon: "fas fa-exchange-alt",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Understanding Robux vs. Real Money (USD/IDR)</h3>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Why is your Robux price much higher than the website rate?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">When you buy Robux, you use the "Purchase Rate" (e.g., $10 ≈ 1,000 Robux). When I, as a developer, cash out Robux to real money, I am forced to use the <strong>Developer Exchange (DevEx) rate</strong>, which is only <strong>$3.50 per 1,000 Robux</strong>.</p>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Can you give me an example?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">Sure. To earn <strong>$100 USD</strong>, I need to cash out roughly <strong>28,571 Robux</strong>. If you pay via a T-Shirt, Roblox also takes a 30% tax, so you would need to pay ~40,816 Robux for me to receive that amount. This isn't a markup; it's the required math to get paid fairly.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: So which payment method is cheapest for me?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;"><strong>Paying in Fiat (USD/IDR via Wise or Bank Transfer) is always significantly cheaper for you.</strong> You avoid the DevEx conversion and Roblox's marketplace tax.</p>
          `
        },
        {
          label: "Age Requirements & Parents",
          icon: "fas fa-child",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Clients Under 18 & Parental Consent</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: I'm a teen. Can I still commission you?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;"><strong>Yes.</strong> I work with talented developers of all ages. However, I operate as a professional business and will treat you as a responsible business partner.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What if my parents find out and want a refund?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">By making a payment, you legally warrant that you either own the funds or have full permission from your parents. My non-refundable deposit policy is absolute. If a parent forces a chargeback via their bank, it is considered a breach of contract and digital theft. This will result in an immediate Roblox DMCA takedown against your game and a public blacklisting of your account.</p>
          `
        },
        {
          label: "Reselling & Game Flipping",
          icon: "fas fa-store-slash",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Code Ownership & Reselling Rights</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: What can I do with the code after I buy it?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">You are purchasing a <strong>"Single-Use License."</strong> This gives you the right to use the code in one specific game or studio to generate revenue from players. You own the implementation.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Can I sell the scripts to my friends or on a marketplace?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;"><strong>Absolutely not.</strong> Leaking, open-sourcing, or reselling my source code is a direct violation of the license agreement and intellectual property law. Any attempt to distribute my code will be met with immediate legal and DMCA action.</p>
          `
        },
        {
          label: "Open-Source Modules vs Free Models",
          icon: "fas fa-cogs",
          content: `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; color: #fff;">Code Quality: Free Models vs. Open-Source Libraries</h3>
            
            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: Do you use any code that you didn't write yourself?</h4>
            <p style="margin-bottom: 1.2rem; line-height: 1.6;">I write 100% of the core, unique logic for your game. I <strong>never</strong> use low-quality, virus-infected "Free Models" from the Roblox toolbox.</p>

            <h4 style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.4rem;">Q: So what's the difference with "Open-Source Modules"?</h4>
            <p style="margin-bottom: 0rem; line-height: 1.6;">Like all professional software engineers, I leverage proven, industry-standard <strong>Open-Source Libraries</strong> to handle common, complex tasks. For example, using <em>ProfileService</em> for data saving is infinitely safer and more robust than building a custom data system from scratch. Using these respected tools is a sign of a high-quality, efficient developer, not a lazy one.</p>
          `
        }
      ]
    }
  ]
};