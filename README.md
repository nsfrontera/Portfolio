# Souls-Inspired Interactive Resume (React)

A premium, dark cinematic resume website inspired by Elden Ring / Dark Souls menu language.

## Run locally

1. `npm install`
2. `npm run dev`
3. Open the local URL shown by Vite.

## Where to edit your real resume data

All content is centralized in:

- `/Users/nestorsfrontera/Documents/New project/src/data/resumeData.js`

Update these keys:

- `identity`: name, class title, summary, quick stats, and `resumePdfUrl`
- `status`: profile paragraph and directives
- `attributes`: RPG-style skills and evidence bullets
- `equipment`: tool stack categories
- `achievements`: impact bullets
- `chronicle`: timeline entries
- `bossFights`: project cards + lore modal details
- `summonSigns`: GitHub/LinkedIn/email links

## PDF resume button

The `Summon Resume (PDF)` button uses `identity.resumePdfUrl`.

Recommended setup:

1. Put your PDF in `/Users/nestorsfrontera/Documents/New project/public/`
2. Set `resumePdfUrl` to `"/your-file-name.pdf"`

Example:

- `public/Nestor-S-Frontera-Rocher-Resume.pdf`
- `resumePdfUrl: '/Nestor-S-Frontera-Rocher-Resume.pdf'`

## Component structure

- `src/App.jsx` - app shell, active tab state, modal state, bonfire button
- `src/components/HeroScreen.jsx` - title screen and top CTAs
- `src/components/SoulsMenu.jsx` - vertical/horizontal archive menu
- `src/components/QuestModal.jsx` - cinematic project lore overlay
- `src/components/sections/*` - individual archive sections
- `src/components/BackgroundFX.jsx` - gradient, vignette, dust particles
- `src/styles.css` - full visual theme + responsive behavior
