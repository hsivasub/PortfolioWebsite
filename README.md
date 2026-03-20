# Portfolio Website

A personal portfolio website hosted on GitHub Pages, built with vanilla HTML, CSS, and JavaScript. **No build tools required.**

---

## 🚀 Live Site

`https://yourusername.github.io/PortfolioWebsite/`

---

## ➕ Adding a New Project

1. **Add your screenshot** → copy the image into `assets/images/`

2. **Edit `projects.js`** → open the file and add a new entry to the array:

```js
{
  title: "My Awesome Project",
  description: "What does this project do? Keep it to 1–2 sentences.",
  image: "assets/images/my-project.png",   // path to your image
  github: "https://github.com/yourusername/my-project",
  tags: ["Python", "ML"],   // shown in filter bar
  featured: false           // set true to pin to top with a badge
},
```

3. **Push to GitHub** → the site updates automatically. That's it!

---

## ➖ Removing a Project

Open `projects.js` and delete (or comment out) the project's `{ ... }` block.

---

## 🏷️ Using Tags

Tags appear in the filter bar at the top of the Projects section. Use any strings you like — they're collected automatically from all projects.

Common tags: `Python`, `JavaScript`, `TypeScript`, `React`, `ML`, `Data Science`, `Web`, `API`, `Docker`, `Rust`, etc.

---

## ⭐ Featured Projects

Set `featured: true` on a project to:
- Pin it to the **top** of the grid
- Show a ⭐ Featured badge
- Highlight it with a gradient top border

---

## 🌐 GitHub Pages Setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under *Source*, choose `Deploy from a branch`
4. Select `main` (or `master`) branch, `/ (root)` folder
5. Click **Save** — your site will be live in ~60 seconds

---

## 📁 File Structure

```
PortfolioWebsite/
├── index.html        # Page structure (you don't need to edit this)
├── style.css         # All styling  (you don't need to edit this)
├── main.js           # Rendering logic (you don't need to edit this)
├── projects.js       # ← ONLY FILE YOU EDIT to manage projects
├── assets/
│   └── images/       # Drop your project screenshots here
└── README.md         # This file
```

---

## ✏️ Customising Your Info

To change your name, tagline, or GitHub profile URL, open `index.html` and search for `yourusername` — there are only 3 places to update.
