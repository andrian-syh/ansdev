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
      name: "JJE (@0x000101)",
      title: "Owner of Sunday Studios.",
      avatar: "https://api.newstargeted.com/roblox/users/v1/avatar-headshot?userid=6048903818&size=150x150&format=Png&isCircular=false",
      rating: 5,
      link: "https://www.roblox.com/users/6048903818/profile",
      text: "This developer demonstrates highly professional and consistent performance. Not only do they deliver work on time, but they also consistently bring creative and innovative solutions to every project they undertake."
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
        "MessagingService Logic",
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
      icon: "fas fa-file-contract",
      sections: [
        {
          label: "Payment Upfront",
          icon: "fas fa-money-bill-wave",
          content: "A 50% non-refundable down payment is strictly required to secure your slot and commence development. The remaining 50% balance must be cleared upon project completion, prior to the handover of the final place/file."
        },
        {
          label: "Scope of Work",
          icon: "fas fa-clipboard-list",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>General Scope:</strong> Development is strictly based on the initially agreed-upon brief or Game Design Document (GDD). Any new mechanics, UI changes, or feature requests made after development has started will be quoted and billed as a separate task.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Rushed Deadlines:</strong> The initial deadline is mutually agreed upon before the down payment. Any subsequent requests to significantly expedite the delivery date will be evaluated based on my current availability. Such requests will incur an additional "Rush Fee" (25%-50% of the total quote) or may be respectfully declined to maintain the quality of the work.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Confidentiality & Portfolio Rights:</strong> Your game ideas, mechanics, and unreleased content are kept strictly confidential during development. However, I reserve the right to display visual snippets, screenshots, or video demonstrations of the completed systems in my personal portfolio <i>only after</i> the project has been officially released to the public or explicitly approved by you.</li>
            </ul>
          `
        },
        {
          label: "Revisions & Bugs",
          icon: "fas fa-bug",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Post-Delivery Warranty:</strong> I provide a 7-day warranty post-delivery for minor bug patches and logical tweaks related to the original scope. Major feature modifications or out-of-scope revisions will incur additional flat or hourly charges.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Bug vs. Feature:</strong> A "bug" is strictly defined as code that produces errors or fails to function as explicitly outlined in the initial brief. Changes to the logic, visual design, or overall "feel" of a mechanic after it has been approved are classified as revisions—not bug fixes—and may be billed separately.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Long-Term Maintenance & Roblox Updates:</strong> After the 7-day warranty expires, the project is considered finalized. Any future breakages caused by official Roblox engine updates, API deprecations, or modifications made by other scripters are not covered under free support. Fixing these issues will require a new commission or a separate maintenance contract.</li>
            </ul>
          `
        },
        {
          label: "Code Ownership",
          icon: "fas fa-key",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Rights Transfer:</strong> All commercial rights, source code, and assets remain my property during development. Complete ownership is officially transferred to the client only after the final 50% payment is fully cleared.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Testing Security:</strong> All playtesting will be conducted in a heavily secured, server-sided environment owned by me. No edit access, Team Create invitations, or uncopylocked files will be provided until the final payment is cleared. Any attempt to exploit or steal assets during the testing phase will result in immediate project termination without a refund.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Anti-Reselling & Distribution:</strong> The final scripts, systems, and UI configurations are strictly licensed for use in your specific game or studio only. Reselling, leaking, open-sourcing, or distributing my code to third parties without explicit written permission is strictly prohibited and will result in a DMCA takedown.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Attribution & White-Label Service:</strong> In-game crediting (such as in the game's description or UI) is entirely optional and left to your discretion. By default, I retain the right to showcase visual snippets or video demonstrations of the completed systems in my personal portfolio after the game is publicly released. If you require a strict Non-Disclosure Agreement (NDA) or a "White-Label" service—meaning I am completely prohibited from claiming, discussing, or showcasing the work publicly anywhere—an additional privacy fee (e.g., 20% of the total quote) will be applied to the final invoice.</li>
            </ul>
          `
        },
        {
          label: "Cancellations",
          icon: "fas fa-ban",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Client Cancellations:</strong> If the project is cancelled by the client after development has begun, the 50% down payment is strictly non-refundable as it covers initial time, research, and labor.</li>
              <li><strong>Developer Cancellations:</strong>
                <ul style="list-style: circle; margin-left: 1.5rem; margin-top: 0.5rem;">
                  <li style="margin-bottom: 0.5rem;"><strong>Due to Unforeseen Circumstances:</strong> If I must cancel the project due to unavoidable schedule conflicts, emergencies, or an inability to meet the standard of quality required, you will receive a 100% full refund of your down payment.</li>
                  <li><strong>Due to Client Breach:</strong> If the project is terminated on my end due to client hostility, extreme scope creep without renegotiation, or violation of these terms, development will cease and the 50% down payment remains non-refundable.</li>
                  <li><strong>Project Dormancy:</strong> If the client fails to respond or provide necessary assets for more than 14 consecutive days without prior notice, the project will be considered abandoned. The down payment will be forfeited, and resuming the work will require a new schedule slot.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          label: "Communication",
          icon: "fas fa-comments",
          content: "Regular progress updates will be provided. Please allow up to 24-48 hours for responses to inquiries, as development schedules are balanced alongside other daily commitments. Constant spamming or rushing will not be tolerated."
        },
        {
          label: "Client Responsibilities",
          icon: "fas fa-user-check",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Asset Provision:</strong> Unless explicitly agreed otherwise, the client is solely responsible for providing all necessary 3D models, meshes, sound effects, and specific external graphic assets required for the script integration.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Asset Liability:</strong> The client guarantees that all 3D models, audio, UI graphics, or concepts provided for integration are original, legally acquired, and fully comply with Roblox's Terms of Use. I am not liable for any moderation actions or account strikes taken against games utilizing client-provided assets.</li>
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
          label: "General Terms",
          icon: "fas fa-file-invoice-dollar",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Payment Structure:</strong> A 50% non-refundable down payment is required to secure your slot and commence work, with the remaining 50% due upon project completion prior to the final handover.</li>
              <li><strong>Currency:</strong> Quotes are primarily provided in USD or IDR.</li>
            </ul>
          `
        },
        {
          label: "Accepted Methods",
          icon: "fas fa-wallet",
          content: `
            <ul style="list-style: disc; margin-left: 1.5rem;">
              <li style="margin-bottom: 0.8rem;"><strong>Robux (Group Funds):</strong> Preferred method for Robux. No tax deductions apply. <em>(Note: Roblox requires users to be in a group for 14 days before receiving payouts)</em>.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Robux (T-Shirt/Gamepass):</strong> Accepted, but the client must cover the 30% Roblox marketplace fee. The final payment amount must be adjusted to ensure the net payout matches the agreed-upon quote.</li>
              <li style="margin-bottom: 0.8rem;"><strong>Wise (Preferred for International):</strong> Highly recommended for international clients. It offers transparent exchange rates and lower transfer fees. Payments are sent directly to my local bank account.</li>
              <li style="margin-bottom: 0.8rem;"><strong>PayPal:</strong> Accepted for international clients. Please note that the client is strictly responsible for covering any additional PayPal transaction fees (e.g., Goods & Services fee) so that the received net amount is exact.</li>
              <li><strong>Bank Transfer & E-Wallet (Indonesia Only):</strong> Local transfers via BCA, BRI, Jago, DANA, and GoPay are accepted for domestic clients using standard IDR pricing.</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "process",
      text: "Work Process & Guidelines",
      title: "How I Work",
      subtitle: "From Vision to Deployment",
      icon: "fas fa-project-diagram",
      sections: [
        {
          label: "Consultation & Planning",
          icon: "fas fa-handshake",
          content: "We will discuss your game's vision, specific mechanics, and finalize a clear deadline and quote. Providing a detailed brief, Game Design Document (GDD), and any ready-to-use assets (3D models/UI) upfront is highly recommended to ensure an accurate timeline and avoid misunderstandings."
        },
        {
          label: "Down Payment & Scheduling",
          icon: "fas fa-file-invoice-dollar",
          content: "Once the 50% upfront payment is secured, I will officially lock your project into my schedule. This guarantees dedicated development time and prevents your slot from being taken by other client inquiries."
        },
        {
          label: "Development & Updates",
          icon: "fas fa-code",
          content: "Development begins on a secure, private baseplate. To keep you consistently in the loop while maintaining a highly focused coding workflow, I will provide comprehensive progress updates (videos/screenshots) at least twice a week via Discord or our mutually agreed communication platform."
        },
        {
          label: "Testing & Feedback",
          icon: "fas fa-vial",
          content: "You will be invited to a live testing place to experience the mechanics firsthand. During this phase, you can point out necessary adjustments or bug fixes to ensure the final product meets your expectations (adjustments must remain within the originally agreed-upon scope)."
        },
        {
          label: "Final Payment & Handover",
          icon: "fas fa-box-open",
          content: "Once you are fully satisfied with the final product and the remaining 50% balance is cleared, I will officially transfer the uncopylocked .rbxl file or securely integrate the scripts and native UI directly into your Team Create place."
        }
      ]
    }
  ]
};
