# Chisom Darlynton Steve-Oko — Portfolio

A React (Vite) portfolio site with a developer-terminal aesthetic, light/dark mode,
and a live animated background.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Edit your content

All resume content lives in one place: `src/data/resume.js`.
Edit that file to update your summary, skills, experience, projects, and links —
no need to touch the components.

To add a downloadable résumé button, drop a PDF at `public/resume.pdf`
(the "download résumé" button already points there).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

See the deployment guide from Claude, or:
1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → Import your GitHub repo.
3. Framework preset: Vite. Leave build settings as default.
4. Deploy.
