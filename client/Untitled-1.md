# Manishfolio – Project Overview

## Summary
Interactive, terminal-style portfolio built with React + Vite + Tailwind. Includes a left info panel (card, header, socials) and a right terminal that accepts commands. A resume opens in a right-side panel at 70% width.

## Tech Stack
- React 18, Vite
- Tailwind CSS, shadcn/ui + Radix primitives
- Wouter for routing

## Key Features
- Terminal commands: help, about, projects, skills, experience, contact, education, certifications, leadership, sudo, clear, resume
- Resume side panel: 70% width, full height, scrollable PDF
- 3D-style ID card with hover tilt

## File Map
- `client/src/pages/portfolio.tsx`: Page layout and panel state
- `client/src/components/terminal.tsx`: Terminal UI and command handling
- `client/src/components/ResumeSidePanel.tsx`: PDF panel implementation
- `client/src/hooks/use-terminal.ts`: Command outputs
- `client/vite.config.js` and root `vite.config.ts`: Vite config and aliases

## How to Run
1. From project root: `npm run dev` (server) or `cd client && npm run dev` (client only)
2. Open the displayed URL in a browser

## Deployment Notes
- PDF is imported as an asset; Vite bundles and serves it. If moving to `public/`, update the iframe/link src to `/MANISHRESUME2.pdf`.


