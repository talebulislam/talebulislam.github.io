# Talebul Islam | Portfolio

A responsive personal portfolio for **Talebul Islam**, a full-stack software engineer. The site presents professional experience, certifications, technical skills, selected projects, and contact links.

**Live site:** [https://talebulislam.github.io/](https://talebulislam.github.io/)

## Features

- Responsive portfolio layout with a mobile navigation menu
- About, certifications, experience, skills, projects, and contact sections
- Filterable skills, including .NET, Angular, React, Node.js, cloud platforms, Agile, CI/CD, and SDLC practices
- Keyboard-accessible navigation and reduced-motion support
- No build step or package installation required

## Project Structure

```text
.
├── index.html       # Page content and entry point for GitHub Pages
├── portfolio.css    # Layout, visual design, and responsive styles
├── script.js        # Navigation, skill filters, and scroll interactions
├── images/
│   ├── favicon.ico  # Browser tab icon
│   └── profile.jpg  # Profile photograph
└── README.md        # Project overview and development workflow
```

The root-level `index.html` is intentional: GitHub Pages serves it as the site entry point. Keep the current relative paths when adding assets or editing page references. Add future images and other static media under `images/`.

## Run Locally

Open `index.html` directly in a browser, or use any local static file server. There is no dependency installation or compilation step. Google Fonts and Font Awesome are loaded from CDNs, so those assets require an internet connection.

## Development Lifecycle

Use this lightweight SDLC for changes to the portfolio:

1. **Plan:** Identify the audience, the content or behavior being changed, and clear acceptance criteria. Verify personal, employment, certification, and project details before publishing.
2. **Design:** Decide how the change fits the existing visual system. Consider desktop and mobile layouts, keyboard use, contrast, and reduced-motion preferences before implementation.
3. **Implement:** Keep content in `index.html`, presentation in `portfolio.css`, and interactions in `script.js`. Preserve the static-site approach and root entry point unless the GitHub Pages configuration is deliberately changed.
4. **Verify:** Open the site locally and check the items in the quality checklist below. Review browser developer tools for missing assets and runtime errors.
5. **Review and release:** Review the changed files and test the deployed site after pushing to the branch configured in **Settings → Pages**. Confirm that the deployment completed successfully.
6. **Maintain:** Keep experience, skills, projects, and contact information current. Recheck external links and CDN resources when updating the page.

### Quality Checklist

- [ ] Content is accurate, current, and free of placeholder links.
- [ ] The layout works at narrow mobile, tablet, and desktop widths without horizontal scrolling.
- [ ] Navigation links reach the correct sections; the mobile menu works with keyboard and touch.
- [ ] Skill filters show the expected skills, including newly added skills.
- [ ] Images load and have useful alternative text; links and buttons have accessible names.
- [ ] Reduced-motion settings are respected and text remains readable with adequate contrast.
- [ ] Browser console has no page errors, and the deployed GitHub Pages site passes a quick smoke test.

There is currently no automated test suite or build pipeline. Use the browser-based checks above for each change; add automated tooling only when the project grows enough to benefit from it.

## GitHub Pages Deployment

This repository name (`talebulislam.github.io`) is configured as a GitHub user-site repository. In the repository's **Settings → Pages**, use the intended publishing source and keep `index.html` at the repository root. After publishing, verify the live URL above and check the Pages deployment status if the latest changes are not visible.
