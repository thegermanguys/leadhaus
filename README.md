# Leadhaus – Homepage

Static marketing site for Leadhaus CRM.  
Built by TGG (The German Guy) · Est. 2026

---

## 📁 File Structure

```
leadhaus/
├── index.html          ← Page skeleton (HTML only, no content here)
├── README.md
│
├── css/
│   ├── variables.css   ← Design tokens: colors, fonts, shadows, spacing
│   ├── nav.css         ← Navigation bar + all shared button styles
│   ├── hero.css        ← Hero section + dashboard preview
│   └── sections.css    ← Stats, Features, Journey, Pricing, Footer, CTA
│
└── js/
    ├── config.js       ← ✏️  ALL SITE CONTENT IS HERE — edit this file
    └── main.js         ← Reads config.js and builds the page
```

---

## ✏️ How to Edit Content

**All text, links, plans, testimonials, and the footer description live in one file:**

```
js/config.js
```

Open it and change any value. The site rebuilds automatically when you reload the page.

### Common edits:

| What you want to change | Where in config.js |
|---|---|
| Footer description | `SITE.footer.description` |
| App URL (CRM link) | `SITE.brand.appUrl` |
| TGG website link | `SITE.brand.tggUrl` |
| Hero headline | `SITE.hero.heading` / `SITE.hero.highlight` |
| Pricing amounts | `SITE.plans[n].monthly` / `.yearly` |
| Testimonials | `SITE.testimonials` array |
| Nav links | `SITE.nav` array |
| Stats bar | `SITE.stats` array |
| Journey pipeline | `SITE.journey.pipeline` |
| Footer column links | `SITE.footerCols` |

---

## 🎨 How to Edit Styles

| What you want to change | Which CSS file |
|---|---|
| Brand colors, fonts, shadows | `css/variables.css` |
| Nav bar, buttons | `css/nav.css` |
| Hero section | `css/hero.css` |
| Features, Pricing, Footer, etc. | `css/sections.css` |

---

## 🚀 Deployment

This is a fully static site — no build step needed.

### GitHub Pages
1. Push the `leadhaus/` folder to a GitHub repo
2. Go to **Settings → Pages → Source: main branch / root**
3. Done ✅

### Netlify / Vercel
1. Drag and drop the `leadhaus/` folder into Netlify Drop
   → https://app.netlify.com/drop
2. Or connect your Git repo in Vercel and deploy

### Any web server
Upload all files maintaining the folder structure. Serve `index.html` as the root.

> ⚠️ Because `main.js` uses `fetch`-free DOM injection (no server required), the site works from `file://` locally too — just open `index.html` in a browser.

---

## 🔗 Links

- Live CRM app: https://app.leadhaus.io
- TGG IT Consulting: https://thegermanguy.org/it-consulting
