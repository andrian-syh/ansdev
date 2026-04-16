# AnS_Dev | Professional Roblox Developer Portfolio

Dynamic portfolio website designed to showcase game development expertise, technical contributions, and professional services within the Roblox ecosystem.

> [!NOTE]
> This repository is the source of truth for my professional presence. It is built with a focus on modularity, performance, and modern web aesthetics.

## Project Overview

This platform serves as a comprehensive digital showroom for **Muhammad Andriansyah (AnS_Dev)**. It highlights specialized expertise in **Luau scripting**, system architecture, and full-stack Roblox game development.

The primary objectives of this project are:
- To present a curated gallery of high-impact Roblox projects.
- To provide a transparent overview of development services and pricing.
- To facilitate secure service agreements through an integrated Terms of Service system.
- To offer direct communication channels for potential clients and collaborators.

## Core Tech Stack

- **Frontend**: Semantic HTML5, Vanilla JavaScript (ES6+).
- **Styling**: Modular CSS3 utilizing CSS Variables for theme consistency.
- **Backend & Persistence**: Firebase Firestore for secure digital record-keeping.
- **Tools & Libraries**: 
  - Font Awesome for iconography.
  - Google Fonts (Inter) for typography.
  - jsPDF for dynamic contract generation.
  - Google reCAPTCHA v2 for security.

## Key Features

- **Modular Web Architecture**: Deeply optimized loading efficiency with specialized scripts (`core.js`, `portfolio.js`, etc.), drastically accelerating secondary page loads.
- **Data-Driven Core**: UI content is decoupled from the structure via `js/config.js`, allowing for seamless content updates.
- **Glassmorphism Design**: High-fidelity interface utilizing blurred transparencies and smooth gradients.
- **Responsive & Mobile-First**: Fully optimized for various screen sizes, featuring a custom glass-overlay mobile navigation.
- **Interactive Showcase**: Dynamic portfolio tracking with filtering, pagination, and detailed project modals.
- **Automated Service Workflow**: Integrated ToS acceptance module with Firestore logging and PDF service contract generation (`jsPDF`).
- **Rich Embed Metadata**: Implements Open Graph and Twitter Cards for premium previews when sharing links via Discord, WhatsApp, or Twitter.

## Project Structure

```text
ansdev/
├── assets/             # Images, icons, and downloadable documents
├── css/                # Modular stylesheets (base, components, home, etc.)
├── js/
│   ├── config.js       # Centralized content configuration and data management
│   ├── core.js         # Core UI interactions, scroll spy, and counters
│   ├── portfolio.js    # Dynamic project grid, filtering, and project modals
│   ├── testimonials.js # Client review rendering and pagination logic
│   ├── services.js     # Rate card pricing logic and dynamic currency
│   ├── info-modal.js   # Split-panel modals, ToS acceptance, Firebase logging
│   └── contact.js      # Premium contact form and reCAPTCHA implementations
├── index.html          # Main landing page
└── projects.html       # Full project gallery and archives
```

## Live Deployment

The live version of this portfolio can be accessed at:
**[ansdev.site](https://ansdev.site/)**

## License & Intellectual Property

Copyright © 2026 Muhammad Andriansyah (AnS_Dev). All Rights Reserved.

This is a **private and proprietary** project. The source code, assets, and design systems are not licensed for public use, redistribution, or modification. Any unauthorized reproduction or use of this codebase without express written permission is strictly prohibited.

## Contact Information

I am available for professional inquiries and collaboration opportunities.

- **Email**: mhmd.andriansyah07@gmail.com
- **LinkedIn**: [mhmdandriansyh](https://linkedin.com/in/mhmdandriansyh)
- **Roblox**: [@AnS_Dev](https://www.roblox.com/users/677682595/profile)
- **Discord**: `ans_dev` (ID: 693102105950683179)