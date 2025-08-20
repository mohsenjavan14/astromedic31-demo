# Astromedic Demo (Next.js 14 + Tailwind)

## Local run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel (Dashboard)
1) Create a GitHub repo and push this project.
2) Go to https://vercel.com/new, import the repo.
3) Framework Preset: **Next.js** (auto-detected).
4) Click Deploy.
5) After deploy, set your custom domain: **astromedic.com** (later).

## Deploy to Vercel (CLI)
```bash
npm i -g vercel
vercel
# answer the prompts (link/create project), then:
vercel --prod
```
