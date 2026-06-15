# Sahiel Bose Portfolio

Personal portfolio site for Sahiel Bose. Built as a single page React application, served as static files, and deployed on Vercel.

Live site: https://sahiel-bose.vercel.app

## Overview

This repository contains the full source for my personal portfolio. The site presents my background, experience, projects, and skills on a single page, along with a downloadable resume. It is intentionally lightweight. There is no bundler or package manager: React is loaded from a CDN, the interface lives in a single component file, and the page is served as plain static assets.

## Tech Stack

- React 18, loaded from a CDN with no build tooling required to run the site
- Plain CSS with custom typography and an oklch based color system
- A static HTML entry point
- Deployed on Vercel

## Project Structure

```
Sahiel-Bose-Website/
├── README.md
├── LICENSE
└── SahielBose_Website/
    ├── index.html             Entry point loaded by the browser
    ├── app.jsx                React source, written in JSX
    ├── app.compiled.js        Browser ready build that index.html loads
    ├── styles.css             Site styles
    ├── Deep Dive.html         Standalone supporting page
    ├── SB Logo Options.html   Standalone logo reference page
    ├── favicon.svg
    ├── apple-touch-icon.png
    └── assets/
        ├── SahielBose_Resume.pdf
        └── og-badge-light.png
```

## Running Locally

The site is fully static, so any static file server works. From the repository root:

```bash
cd SahielBose_Website
python3 -m http.server 3000
```

Then open http://localhost:3000 in your browser.

If you prefer Node, any static server works as well:

```bash
cd SahielBose_Website
npx serve .
```

## Editing the Site

The browser loads `app.compiled.js`, which is the compiled output of `app.jsx`. To change the content or layout:

1. Edit `SahielBose_Website/app.jsx`. Most page content lives in the `DATA` object near the top of the file.
2. Recompile the JSX into `app.compiled.js` so the browser picks up your changes. Any JSX to JavaScript compiler works. For example, with Babel:
   ```bash
   npx babel app.jsx --presets @babel/preset-react -o app.compiled.js
   ```
3. Reload the page to confirm the result.

Styles live in `SahielBose_Website/styles.css`.

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a branch for your change:
   ```bash
   git checkout -b your-feature-branch
   ```
3. Make your edits inside the `SahielBose_Website/` directory.
4. Commit and push:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push origin your-feature-branch
   ```
5. Open a pull request describing what you changed and why.

If you would rather suggest a change without writing code, open an issue at https://github.com/sahielbose/Sahiel-Bose-Website/issues and describe what you have in mind.

## Deployment

The site is deployed on Vercel. Changes merged into the `main` branch are deployed automatically to the live site.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for the full text.

## Contact

For contact details, visit the live site at https://sahiel-bose.vercel.app
