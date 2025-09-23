# Jinha Park – React Portfolio (COMP229 Assignment 1)

## Pages
- Home: Welcome & mission
- About: Legal name, profile image, short bio, Resume (PDF)
- Projects: 3 highlight projects (image, role/short desc, GitHub link)
- Services: 3 services with images
- Contact: Contact info panel + interactive form (captures input, redirects Home)

## Tech
- React + Vite, React Router v6, CSS (App.css)

## Scripts
- `npm install`
- `npm run dev` — local dev
- `npm run build` — production build
- `npm run preview` — serve built files

## Project Structure
src/
  assets/ (images, resume.pdf)
  components/ (Layout, Home)
  App.jsx, App.css, index.css, MainRouter.jsx
  about.jsx, project.jsx, services.jsx, contact.jsx

## How to Run
1. `npm install`
2. `npm run dev` → http://localhost:5173

## Deployment
- Build: `npm run build` → `dist/`
- Vercel or Netlify (publish dir: `dist`) – details below

