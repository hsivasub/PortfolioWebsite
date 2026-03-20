# Portfolio Website — Harish Siva Subramanian

🔗 **Live Site:** https://hsivasub.github.io/PortfolioWebsite/

---

## ➕ Adding a New Project

1. **Add your screenshot** → copy the image into `assets/images/`

2. **Edit `projects.js`** → add a new entry:

```js
{
  title: "My Project",
  description: "What it does in 1–2 sentences.",
  image: "assets/images/my-project.png",
  github: "https://github.com/hsivasub/my-project",
  tags: ["Python", "ML"],
  featured: false
},
```

3. **Push to GitHub:**
```bash
git add .
git commit -m "add project: My Project"
git push
```

The site updates automatically within ~60 seconds.

---

## ➖ Removing a Project

Delete the project's `{ ... }` block from `projects.js`, then push.

---

## 📁 File Structure

```
PortfolioWebsite/
├── index.html        # Page structure (no need to edit)
├── style.css         # All styling   (no need to edit)
├── main.js           # Rendering     (no need to edit)
├── projects.js       # ← ONLY FILE YOU EDIT
├── assets/images/    # Drop screenshots here
└── README.md
```
