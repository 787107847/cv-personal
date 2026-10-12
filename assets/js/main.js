/* Luis Miguel Trujillo — Portfolio. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const escapeHTML = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const ICONS = {
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    cloud: '<path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18z"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    git: '<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8M18 11c0 4-6 3-10 6"/>',
    github: '<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>'
  };
  const icon = (name) =>
    `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;

  /* ---------- Renderers ---------- */
  function renderSkills() {
    const grid = $('#skills-grid');
    if (!grid || !Array.isArray(window.SKILLS)) return;
    grid.innerHTML = window.SKILLS.map((group) => `
      <article class="card skill reveal">
        <header class="skill__head">
          <span class="skill__icon">${icon(group.icon)}</span>
          <h3 class="skill__title">${escapeHTML(group.title)}</h3>
        </header>
        <ul class="tags">${group.items.map((i) => `<li>${escapeHTML(i)}</li>`).join('')}</ul>
      </article>`).join('');
  }

  function renderProjects() {
    const grid = $('#projects-grid');
    if (!grid || !Array.isArray(window.PROJECTS)) return;
    grid.innerHTML = window.PROJECTS.map((p) => {
      const links = [
        p.github ? `<a class="btn btn--sm btn--ghost" href="${escapeHTML(p.github)}" target="_blank" rel="noopener noreferrer">${icon('github')}GitHub</a>` : '',
        p.demo ? `<a class="btn btn--sm btn--primary" href="${escapeHTML(p.demo)}" target="_blank" rel="noopener noreferrer">${icon('external')}Demo</a>` : ''
      ].join('');
      return `
      <article class="card project reveal">
        <div class="project__media">
          ${p.image ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.imageAlt || p.title)}" loading="lazy" decoding="async" width="640" height="360">` : ''}
          <span class="project__year">${escapeHTML(p.year)}</span>
        </div>
        <div class="project__body">
          ${p.category ? `<p class="project__category">${escapeHTML(p.category)}</p>` : ''}
          <h3 class="project__title">${escapeHTML(p.title)}</h3>
          ${p.subtitle ? `<p class="project__subtitle">${escapeHTML(p.subtitle)}</p>` : ''}
          <p class="project__desc">${escapeHTML(p.description)}</p>
          ${p.tags && p.tags.length ? `<ul class="tags tags--sm" aria-label="Tecnologías y áreas">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join('')}</ul>` : ''}
          ${links ? `<div class="project__links">${links}</div>` : ''}
        </div>
      </article>`;
    }).join('');
  }

  function renderCertifications() {
    const track = $('#certs-track');
    if (!track || !Array.isArray(window.CERTIFICATIONS)) return;
    const total = window.CERTIFICATIONS.length;
    track.innerHTML = window.CERTIFICATIONS.map((c, i) => `
      <li class="carousel__slide" aria-roledescription="diapositiva" aria-label="${i + 1} de ${total}">
        <article class="card cert">
          <div class="cert__badge">
            ${c.badge
              ? `<img src="${escapeHTML(c.badge)}" alt="Insignia ${escapeHTML(c.title)}" loading="lazy" decoding="async" width="96" height="96">`
              : `<span class="cert__mono" aria-hidden="true">${icon('award')}</span>`}
          </div>
          <p class="cert__issuer">${escapeHTML(c.issuer)}</p>
          <h3 class="cert__title">${escapeHTML(c.title)}</h3>
          ${c.area ? `<p class="cert__area">${escapeHTML(c.area)}</p>` : ''}
          <footer class="cert__foot">
            <span class="cert__year">${escapeHTML(c.year)}</span>
            ${c.credentialUrl ? `<a class="cert__link" href="${escapeHTML(c.credentialUrl)}" target="_blank" rel="noopener noreferrer">Verificar credencial ${icon('external')}</a>` : ''}
          </footer>
        </article>
      </li>`).join('');
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const header = $('.site-header');
    const toggle = $('.nav__toggle');
    const menu = $('#nav-menu');
    const links = $$('.nav__link');

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    };

    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    links.forEach((l) => l.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 960px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });

    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Active section indicator
    const sections = links.map((l) => $(l.getAttribute('href'))).filter(Boolean);
    if (!('IntersectionObserver' in window)) return;
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          const active = l.getAttribute('href') === `#${entry.target.id}`;
          l.classList.toggle('is-active', active);
          if (active) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const items = $$('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Certifications carousel (CSS scroll-snap + JS controls) ---------- */
  function initCarousel() {
    const track = $('#certs-track');
    const prev = $('[data-carousel-prev]');
    const next = $('[data-carousel-next]');
    const dotsWrap = $('#certs-dots');
    if (!track) return;
    const slides = $$('.carousel__slide', track);
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    const slideStep = () => {
      if (!slides.length) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return slides[0].getBoundingClientRect().width + gap;
    };
    const maxScroll = () => track.scrollWidth - track.clientWidth;
    const currentIndex = () => Math.round(track.scrollLeft / slideStep());
    const pageCount = () => {
      const visible = Math.max(1, Math.round(track.clientWidth / slideStep()));
      return Math.max(1, slides.length - visible + 1);
    };
    const goTo = (index) => {
      const i = Math.max(0, Math.min(index, pageCount() - 1));
      track.scrollTo({ left: Math.min(i * slideStep(), maxScroll()), behavior });
    };

    const buildDots = () => {
      const count = pageCount();
      dotsWrap.innerHTML = '';
      dotsWrap.hidden = count <= 1;
      for (let i = 0; i < count; i++) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'carousel__dot';
        b.setAttribute('aria-label', `Ir a la certificación ${i + 1}`);
        b.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(b);
      }
      update();
    };

    const update = () => {
      const idx = Math.min(currentIndex(), pageCount() - 1);
      const atStart = track.scrollLeft <= 2;
      const atEnd = track.scrollLeft >= maxScroll() - 2;
      prev.disabled = atStart;
      next.disabled = atEnd;
      $$('.carousel__dot', dotsWrap).forEach((d, i) => {
        const active = atEnd ? i === pageCount() - 1 : i === idx;
        d.classList.toggle('is-active', active);
        if (active) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
      const noScroll = maxScroll() <= 2;
      prev.parentElement.hidden = noScroll;
    };

    prev.addEventListener('click', () => goTo(currentIndex() - 1));
    next.addEventListener('click', () => goTo(currentIndex() + 1));
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex() + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex() - 1); }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      else if (e.key === 'End') { e.preventDefault(); goTo(pageCount() - 1); }
    });

    let ticking = false;
    track.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    }, { passive: true });

    let resizeTimer;
    window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(buildDots, 150); });
    buildDots();
  }

  /* ---------- Card pointer glow ---------- */
  function initCardGlow() {
    if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest && e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderCertifications();
    initNav();
    initReveal();
    initCarousel();
    initCardGlow();
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
