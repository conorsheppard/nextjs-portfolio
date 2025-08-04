# Next.js Portfolio

A modern, responsive personal portfolio and CV website built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

## ✨ Features

- ⚡ Lightning-fast static site powered by Next.js App Router
- 🎨 Beautiful, minimal UI with Tailwind and shadcn/ui components
- 📱 Fully responsive layout (mobile/tablet/desktop)
- 💼 Projects section with tech stack and GitHub/demo links
- 🧑‍💻 About section with downloadable resume/CV
- 🌐 SEO-friendly metadata and Open Graph tags
- 🚀 Deployed on [Vercel](https://vercel.com/)
- ✅ GitHub Actions CI for linting and formatting

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Linting & Formatting**: ESLint, Prettier
- **Deployment**: Vercel
- **CI**: GitHub Actions

## 🐳 Docker Development

This project is containerized for easy development without requiring Node.js or npm installed locally.

### Quick Start

```bash
# Start development server with Docker
make docker-dev

# Or build and start development server
make docker-dev-build
```

### Docker Commands

```bash
# Development
make docker-dev              # Start dev server
make docker-dev-build        # Build and start dev server
make docker-stop             # Stop all containers

# Production
make docker-prod             # Start production server
make docker-prod-build       # Build and start production server
make docker-clean            # Clean up all containers and images
```

### Manual Docker Commands

```bash
# Development
docker-compose up nextjs-dev

# Production
docker-compose up nextjs-prod

# Build and run
docker-compose up --build nextjs-dev
```

## 📦 Scripts

```bash
npm run dev           # Start local dev server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run format:check  # Check formatting
```
