/**
 * main.js — Reads window.projects from projects.js and renders cards.
 * Also handles navbar scroll, hero typing animation, tag filter, and search.
 */

/* ── Navbar scroll effect ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Hero typing animation ─────────────────────────────────────── */
(function typeWriter() {
  const el      = document.getElementById('hero-subtitle');
  const phrases = [
    'Software Engineer',
    'ML Enthusiast',
    'Open Source Builder',
  ];
  let pi = 0, ci = 0, deleting = false;

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  el.appendChild(cursor);

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.firstChild
        ? (el.firstChild.textContent = phrase.slice(0, ci))
        : el.insertBefore(document.createTextNode(phrase.slice(0, ci)), cursor);

      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 70);
    } else {
      ci--;
      if (el.firstChild) el.firstChild.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 38);
    }
  }

  setTimeout(tick, 900);
})();

/* ── Build project cards ───────────────────────────────────────── */
(function renderProjects() {
  const grid       = document.getElementById('projects-grid');
  const filterBar  = document.getElementById('filter-bar');
  const searchInput= document.getElementById('search-input');
  const emptyState = document.getElementById('empty-state');
  const resetBtn   = document.getElementById('reset-filter');

  /** Normalise projects — sort featured first */
  const allProjects = [...(window.projects || [])].sort((a) => a.featured ? -1 : 1);

  /** Collect unique tags */
  const tagSet = new Set();
  allProjects.forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));

  /** Build filter buttons */
  [...tagSet].forEach(tag => {
    const btn = document.createElement('button');
    btn.className   = 'filter-btn';
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.id          = `filter-${tag.replace(/\s+/g, '-')}`;
    filterBar.appendChild(btn);
  });

  /** Active filter state */
  let activeTag  = 'all';
  let searchTerm = '';

  function getFiltered() {
    return allProjects.filter(p => {
      const matchTag    = activeTag === 'all' || (p.tags || []).includes(activeTag);
      const haystack    = `${p.title} ${p.description} ${(p.tags || []).join(' ')}`.toLowerCase();
      const matchSearch = !searchTerm || haystack.includes(searchTerm);
      return matchTag && matchSearch;
    });
  }

  /** Build one card element */
  function buildCard(p) {
    const a = document.createElement('a');
    a.href   = p.github || '#';
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    a.className = 'project-card' + (p.featured ? ' featured' : '');

    /* Image */
    const imgWrap = document.createElement('div');
    imgWrap.className = 'card-img-wrap';

    if (p.image) {
      const img   = document.createElement('img');
      img.src     = p.image;
      img.alt     = p.title;
      img.className = 'card-img';
      img.loading = 'lazy';
      imgWrap.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'card-img-placeholder';
      placeholder.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4 4-6 4 9"/>
        <circle cx="8.5" cy="13.5" r="1.5"/>
      </svg>`;
      imgWrap.appendChild(placeholder);
    }

    /* Body */
    const body = document.createElement('div');
    body.className = 'card-body';

    if (p.featured) {
      body.innerHTML += `<span class="card-featured-badge">⭐ Featured</span>`;
    }

    body.innerHTML += `<h3 class="card-title">${escapeHTML(p.title)}</h3>`;

    if (p.description) {
      body.innerHTML += `<p class="card-desc">${escapeHTML(p.description)}</p>`;
    }

    if (p.tags && p.tags.length) {
      const tagRow = document.createElement('div');
      tagRow.className = 'card-tags';
      p.tags.forEach(t => {
        tagRow.innerHTML += `<span class="card-tag">${escapeHTML(t)}</span>`;
      });
      body.appendChild(tagRow);
    }

    body.innerHTML += `
      <div class="card-footer">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
          -1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998
          .108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22
          -.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803
          c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176
          .765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222
          0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12
          c0-6.63-5.37-12-12-12z"/>
        </svg>
        View on GitHub →
      </div>`;

    a.appendChild(imgWrap);
    a.appendChild(body);
    return a;
  }

  /** Render filtered list */
  function render() {
    grid.innerHTML = '';
    const filtered = getFiltered();

    if (filtered.length === 0) {
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
      filtered.forEach(p => grid.appendChild(buildCard(p)));
    }
  }

  /** Filter button click */
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTag = btn.dataset.tag;
    render();
  });

  /** Search */
  searchInput.addEventListener('input', e => {
    searchTerm = e.target.value.trim().toLowerCase();
    render();
  });

  /** Reset from empty state */
  resetBtn.addEventListener('click', () => {
    activeTag  = 'all';
    searchTerm = '';
    searchInput.value = '';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('filter-all').classList.add('active');
    render();
  });

  /** Initial render */
  render();
})();

/* ── Utility ───────────────────────────────────────────────────── */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
