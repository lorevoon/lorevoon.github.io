// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id);
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

// Timeline interactions: progress rail + reveal on view
const timeline = document.querySelector('.timeline');
if (timeline) {
  const progressEl = timeline.querySelector('.timeline-progress');
  const events = Array.from(timeline.querySelectorAll('.timeline-event'));

  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

  const updateProgress = () => {
    const r = timeline.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    // Progress from when top enters viewport to when bottom leaves
    const start = clamp(viewportH * 0.15 - r.top, 0, r.height);
    if (progressEl) progressEl.style.height = `${start}px`;
  };

  const updateActive = () => {
    if (!events.length) return;
    const center = (window.innerHeight || document.documentElement.clientHeight) * 0.48;
    let best = { d: Infinity, el: null };
    for (const ev of events) {
      const b = ev.getBoundingClientRect();
      const mid = b.top + b.height * 0.5;
      const d = Math.abs(mid - center);
      if (d < best.d) best = { d, el: ev };
    }
    events.forEach(ev => ev.classList.remove('active'));
    best.el?.classList.add('active');
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { root: null, rootMargin: '-25% 0px -50% 0px', threshold: 0.25 });

  events.forEach(ev => io.observe(ev));
  const onScroll = () => { updateProgress(); updateActive(); };
  updateProgress();
  updateActive();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}
