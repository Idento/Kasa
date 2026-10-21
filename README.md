# Kasa

A React single-page application for an apartment rental platform, built from a desktop and mobile mockup.

**Live site:** https://idento.github.io/Kasa/

| Desktop | Mobile |
| --- | --- |
| ![Kasa on desktop](docs/desktop.jpg) | ![Kasa on mobile](docs/mobile.jpg) |

## What was done

- **Home page**: banner and a grid of rental cards generated from JSON data.
- **Rental page** (`/logement/:id`): photo carousel (previous and next arrows, counter), title, location, tags, host, star rating, and collapsible description and equipment sections.
- **About page**: collapsible sections for the company values.
- **404 page** for unknown addresses and unknown rental ids.
- Reusable React components (card, carousel, collapsible section, rating, tag), styles in Sass, responsive from desktop to mobile.

Changes made in 2026 to publish it on GitHub Pages:

- the router uses hash URLs (`/Kasa/#/about`), so reloading a page or opening a shared link works on static hosting;
- two components read the current address from `react-router` instead of `window.location`, which gave wrong results once the site lived in a sub-folder.

## Stack

React 18, React Router 6, Sass, Create React App. Deployed on GitHub Pages with GitHub Actions.

## Run locally

```sh
npm install
npm start
```
