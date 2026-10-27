# Shopsmart

Shopsmart is a modern, responsive e-commerce web platform built across five sequential milestones.

---

## Active Milestone: Milestone 1 — Static UI (HTML5, CSS3 & Bootstrap)

In Milestone 1, the complete responsive static user interface for Shopsmart is implemented across 9 pages with no custom JavaScript, utilizing Bootstrap 5.3.3 components via declarative `data-bs-*` attributes and vanilla CSS custom properties.

### Project Structure

```
shopsmart/
├── static-site/                  # M1–M2 (Vanilla HTML/CSS/JS)
│   ├── index.html                # Landing page: hero, value propositions, CTA
│   ├── auth.html                 # Tabbed Login & Register forms
│   ├── home.html                 # Hero carousel, featured grid, new arrivals, promos
│   ├── products.html             # Product catalog, filter sidebar / offcanvas, grid
│   ├── product-detail.html       # Gallery, pricing, specs, quantity selector, CTAs
│   ├── cart.html                 # Item list, quantity controls, promo code, totals, empty state
│   ├── checkout.html             # Shipping form, payment method selector, order summary
│   ├── profile.html              # User details, Active Orders & History tabs, status badges
│   ├── support.html              # Help categories, 6-item FAQ accordion, contact form
│   ├── css/
│   │   ├── bootstrap.min.css     # Local Bootstrap 5.3.3 CSS
│   │   └── style.css             # Design tokens (--ss-*) and custom styling
│   ├── js/
│   │   └── bootstrap.bundle.min.js # Local Bootstrap 5.3.3 JS (vendor only)
│   └── assets/images/            # 22 local SVG vector placeholders
├── .gitignore                    # Root gitignore (node_modules, .env, dist, .DS_Store)
└── README.md                     # Documentation and run instructions
```

---

## How to Run

Because the project utilizes standard HTML5, CSS3, and local vendor bundles, you can preview the static site using any local HTTP server or by opening HTML files in a modern web browser.

### Option 1: Using `npx serve` (Recommended)

```bash
npx serve static-site
```
Then navigate to:
- Landing Page: `http://localhost:3000/index.html` (or `http://localhost:5000/index.html`)
- Store Home: `http://localhost:3000/home.html`
- Catalog: `http://localhost:3000/products.html`
- Cart: `http://localhost:3000/cart.html`

### Option 2: Using Python HTTP Server

```bash
python -m http.server 8000 --directory static-site
```
Then open `http://localhost:8000/index.html` in your browser.

---

## Design System Tokens

The application design is powered by consistent CSS custom properties defined in `static-site/css/style.css`:

- `--ss-primary`: `#4f46e5`
- `--ss-primary-dark`: `#3730a3`
- `--ss-accent`: `#f59e0b`
- `--ss-bg`: `#f8fafc`
- `--ss-surface`: `#ffffff`
- `--ss-text`: `#0f172a`
- `--ss-muted`: `#64748b`
- `--ss-success`: `#16a34a`
- `--ss-danger`: `#dc2626`
- `--ss-radius`: `0.75rem`

---

## Pages and Key Features

1. **index.html**: Hero headline with two CTAs, 3 value-proposition cards, closing call-to-action band.
2. **auth.html**: Tabbed Login and Register forms with HTML5 validation (`required`, `minlength`, `pattern`, `type`).
3. **home.html**: Bootstrap carousel with 3 slides, 4 featured products, 4 new arrivals, and 2 promo cards.
4. **products.html**: Search input, category checkboxes, sort dropdown, responsive offcanvas filter on mobile, 8-product card grid with disabled button state on out-of-stock item.
5. **product-detail.html**: Image gallery with active thumbnail selector, specs table, quantity controls (− / input / +), Add to Cart and Buy Now CTAs.
6. **cart.html**: 3 sample items with quantity counters, promo coupon input for `SAVE10`, totals summary, and reachable `#empty-cart` state via CSS `:target`.
7. **checkout.html**: Multi-step shipping form, payment selector (Card, UPI, COD), mock card inputs, order summary, and disabled button state illustration.
8. **profile.html**: User profile summary, tabbed Active Orders & Order History, rendering all 4 order status badges (`Pending`, `Processing`, `Shipped`, `Delivered`).
9. **support.html**: 4 topic cards, 6-item collapsible FAQ accordion, and inquiry contact form.
