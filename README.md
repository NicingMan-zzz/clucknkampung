# Cluckin' Kampung

A Y2K-themed static website for **Cluckin' Kampung Sdn. Bhd.**, built with pure HTML, CSS, and vanilla JavaScript for **TSP 3243 Assignment 1**.

**Live Site:** https://nicingman-zzz.github.io/CluckNKampung/

## Pages & Features
- **Home (`index.html`)** — Hero showcase, marquee banner, featured items, and the interactive Chicken Wisdom generator.
- **About (`about.html`)** — Flagship shop showcase, company timeline (2023–2026), and service list.
- **Menu & Services (`products.html`)** — Signature menu table (`CK-01` to `CK-05`), catering packages, downloadable PDF menu, and an interactive Bucket Calculator with a 10% bulk discount on 10+ items.
- **Contact (`contact.html`)** — Booking and catering inquiry form with client-side validation, spice-level slider, and shop contact details.
- **Global UI (`css/style.css`, `js/script.js`)** — Responsive mobile navigation menu, persistent `localStorage` visitor counter, and sparkle cursor trail with `prefers-reduced-motion` support.

## Project Structure
- `index.html`, `about.html`, `products.html`, `contact.html` — Main pages
- `css/style.css` — Retro Y2K stylesheet and responsive breakpoints
- `js/script.js` — Client-side interactivity and form validation
- `images/` — Custom SVG assets (`logo.svg`, `chicken.svg`, `shop.svg`)
- `files/menu.pdf` — Printable offline menu and catering rate card

## Local Preview
No build step is required. Open `index.html` directly in a browser, or run a local server from the project root:

```bash
python3 -m http.server 8000
