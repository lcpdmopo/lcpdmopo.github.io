# Sentinel Intelligence Forum — clean-room AFIO-style website starter

This repository is a **clean-room, GitHub-ready recreation** of the public information architecture and general UX patterns visible on AFIO's website. It is **not a code scrape** and does **not** include AFIO logos, proprietary images, or copied site source.

## What it includes

- Multi-page responsive static website
- Sticky header with desktop dropdown navigation and mobile menu
- Homepage slider/hero
- Data-driven news cards
- Membership tier cards and corporate package section
- Events page with RSVP demo
- Media/publications page
- Scholarships page with application-interest demo
- Contact page with local form handling
- Sponsor tiers
- LocalStorage-backed forms so the prototype behaves like a functioning front-end

## Tech stack

- Plain HTML/CSS/JavaScript
- JSON-style data object in `assets/js/data.js`
- No build step required

## Run locally

### Option 1
Open `index.html` directly in your browser.

### Option 2
Serve it locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`

## Deploy

This repo can be dropped directly into:

- GitHub Pages
- Netlify
- Vercel static hosting

## Productionizing the forms

The current forms write to `localStorage` for demo purposes. For live deployment, connect them to one of:

- Formspree
- Netlify Forms
- Supabase
- Airtable
- Firebase
- custom API/backend

## Customization

Edit `assets/js/data.js` to change:

- organization name and contact info
- hero slides
- news items
- membership plans
- events
- media modules
- scholarship listings
- sponsor tiers

## Source note

The public AFIO site’s visible structure informed the following design choices:

- menu hierarchy and page groupings
- homepage hero/news/membership/events/sponsors/footer sequence
- membership categories and corporate-package framing
- media/publications lane ideas
- scholarship positioning
- contact/footer information layout

Reference pages used for architectural study:

- Homepage
- Mission / history page
- Membership page
- News page
- Media/interviews page

## Legal / branding note

Replace all placeholder branding and content with your own before public use if you want a true production deployment.
