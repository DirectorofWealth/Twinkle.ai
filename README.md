# Twinkle AI

> A modern AI-powered customer engagement landing page built collaboratively with React, Vite, and Tailwind CSS.

## Overview

**Twinkle AI** is a collaborative frontend project that recreates a modern AI product landing page. The interface presents Twinkle AI's platform, customer experience, AI capabilities, results, and supporting product sections through a clean, responsive design.

The project was developed using a feature-branch workflow, with each team member responsible for specific sections of the page.

---

## ✨ Key Sections

The finished page is organized into the following major sections:

- Navbar
- Hero
- Product Showcase
- Logo Strip
- Statement Block
- Agent CTA
- Testimonials
- Results
- Build with AI
- Closing Counter
- Footer

---

## 👥 Team Members & Work Split

| Member | Section | Feature Branch |
|---|---|---|
| **Kidd** | Navbar | `feature/navbar` |
| **Kidd** | Hero | `feature/hero` |
| **Joseph** | Product Showcase | `feature/product-showcase` |
| **Joseph** | Logo Strip | `feature/logo-strip` |
| **Wealth** | Statement Block | `feature/statement` |
| **Wealth** | Agent CTA | `feature/agent-cta` |
| **Favour** | Testimonial | `feature/testimonial` |
| **Favour** | Results | `feature/results` |
| **Prince** | Build with AI | `feature/build-ai` |
| **Prince** | Closing Counter | `feature/closing-counter` |
| **Prince** | Footer | `feature/footer` |

---

## 🖥️ Finished Page

### Hero Section

![Twinkle AI Hero](./screenshots/twinkle-ai-hero.png)

The hero section introduces Twinkle AI with the main headline:

> **Plan more with Twinkle AI**

It also includes the product rating badge, supporting statement, and primary/secondary calls to action.

### Build With AI Section

![Twinkle AI Build With AI](./screenshots/twinkle-ai-build-with-ai.png)

The Build With AI section communicates how users can create, automate, and improve workflows using AI. It combines feature cards with a visual product mockup.

---

## 🛠️ Tech Stack

- **React** — UI component development
- **Vite** — Development server and production build tool
- **Tailwind CSS** — Styling and responsive layout
- **JavaScript (JSX)** — Application logic and components
- **Lucide React** — Interface icons
- **Git** — Version control
- **GitHub** — Repository and collaboration
- **Netlify** — Deployment

---

## 📁 Project Structure

```text
Twinkle-ai/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.jsx
│   │   │   └── Button.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Productshowcase.jsx
│   │   ├── Logostrip.jsx
│   │   ├── StatementBlock.jsx
│   │   ├── Agentcta.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Results.jsx
│   │   ├── BuildWithAI.jsx
│   │   ├── ClosingCounter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/DirectorofWealth/Twinkle.ai.git
```

### 2. Enter the project directory

```bash
cd Twinkle-ai
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

### 5. Create a production build

Before deployment, verify that the project builds successfully:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

### 6. Preview the production build

```bash
npm run preview
```

---

## 🌿 Git & Collaboration Workflow

The project uses a feature-branch workflow.

Each team member works on their assigned branch rather than directly modifying `main`.

### Create or switch to a feature branch

```bash
git checkout feature/your-feature
```

### Check your changes

```bash
git status
```

### Stage changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "Add your feature"
```

### Push the feature branch

```bash
git push origin feature/your-feature
```

After the work has been reviewed, the feature branch can be merged into `main`.

### Important

Before beginning work, it is recommended to update your local `main` branch:

```bash
git checkout main
git pull origin main
```

Then switch back to your feature branch.

---

## 🧩 Component Guidelines

The project is divided into reusable React components.

Shared UI components are stored inside:

```text
src/components/ui/
```

For example:

```text
src/components/ui/Button.jsx
src/components/ui/Badge.jsx
```

This allows common UI elements to be reused across different page sections without duplicating their implementation.

---

## 📦 Production Build

The project uses Vite for production builds.

Netlify should use the following settings:

| Setting | Value |
|---|---|
| **Branch to deploy** | `main` |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |

The production deployment should always be based on the latest successfully merged version of `main`.

---

## 🌐 Deployment

The project can be deployed through Netlify by connecting the GitHub repository.

### Netlify configuration

```text
Build command: npm run build
Publish directory: dist
```

Once the `main` branch contains the desired production code, Netlify can build and deploy that branch automatically.

---

## ✅ Before Creating a Pull Request

Each contributor should verify:

- [ ] The assigned section is complete.
- [ ] The page is responsive.
- [ ] No console errors are present.
- [ ] Imports use the correct file names and casing.
- [ ] `npm run build` completes successfully.
- [ ] Only relevant files are included in the commit.
- [ ] Changes are pushed to the correct feature branch.

---

## 📌 Project Notes

This project was developed as a collaborative frontend implementation. Each member was assigned specific sections to encourage parallel development, reusable components, and Git-based collaboration.

The final `main` branch represents the combined implementation of all assigned sections.

---

## 👨‍💻 Team

**Twinkle AI Team**

Built collaboratively with React, Vite, Tailwind CSS, GitHub, and Netlify.
