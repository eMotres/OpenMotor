# OpenMotor Landing Page

Landing page for **OpenMotor** - High-Voltage Motors for Agriculture, Logistics, and Manned Aviation. 
An Open Source Hardware project.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hosting:** Configured for [Firebase Hosting](https://firebase.google.com/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate the static output in the `out` directory (configured in `firebase.json`).

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: UI components (Hero, ProductMatrix, BusinessModel, etc.)
- `public/`: Static assets
