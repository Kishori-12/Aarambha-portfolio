# Aarambh Portfolio

A premium startup portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **React Router v6** — Client-side routing

## Project Structure

```
src/
├── animations/     # Reusable Framer Motion variants
├── components/
│   ├── layout/     # Navbar, Footer, Container
│   ├── sections/   # Hero, About, TechStack, Projects, Team, Contact
│   └── ui/         # Button, Card, Badge, SectionTitle
├── data/           # Static data (team, projects, techStack)
├── pages/          # Route-level page components
├── styles/         # Global CSS
└── utils/          # Constants and helpers
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Sections

| Section    | ID           |
|------------|--------------|
| Hero       | `#hero`      |
| About      | `#about`     |
| Tech Stack | `#tech-stack`|
| Projects   | `#projects`  |
| Team       | `#team`      |
| Contact    | `#contact`   |
