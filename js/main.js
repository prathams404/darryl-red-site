/* =========================================================
   Rendering + interaction logic. You should not need to edit
   this file — update js/content.js instead.
   ========================================================= */

(function () {
  const C = window.DJ_CONTENT;
  if (!C) return;

  /* ---- apply accent hex from content.js to CSS ---- */
  const hex = C.artist.accentHex;
  if (hex) {
    document.documentElement.style.setProperty('--accent', hex);
    const rgb = hexToRgb(hex);
    if (rgb) document.documentElement.style.setProperty('--accent-rgb', `${rgb.r},${rgb.g},${rgb.b}`);
  }
  function hexToRgb(h) {
    const m = h.replace('#', '').match(/.{1,2}/g);
    if (!m || m.length < 3) return null;
    return { r: parseInt(m[0], 16), g: parseInt(m[1], 16), b: parseInt(m[2], 16) };
  }

  /* ---- stamp stage name / tagline wherever data-bind is used ---- */
  document.querySelectorAll('[data-bind]').forEach(el => {
    const path = el.getAttribute('data-bind').split('.');
    let val = C;
    for (const p of path) val = val && val[p];
    if (val !== undefined) el.textContent = val;
  });

  /* ---- logo: if a logo path is set, swap in the image; else keep text mark ---- */
  document.querySelectorAll('[data-logo-slot]').forEach(slot => {
    if (C.artist.logo) {
      const img = document.createElement('img');
      img.src = C.artist.logo;
      img.alt = C.artist.stageName + ' logo';
      img.onerror = () => { img.remove(); }; // silently fall back to text mark if file missing
      slot.prepend(img);
    }
  });

  /* ---- nav background on scroll ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- hero cursor-reactive glow ---- */
  const hero = document.querySelector('.hero');
  const blobA = document.querySelector('.blob--a');
  if (hero && blobA && window.matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 30;
      const ny = (e.clientY / window.innerHeight - 0.5) * 30;
      blobA.style.transform = `translate(${nx}px, ${ny}px)`;
    });
  }

  /* ---- parallax blobs on scroll ---- */
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blobs.forEach((b, i) => {
      b.style.setProperty('--scrollY', `${y * (0.02 + i * 0.01)}px`);
    });
  }, { passive: true });

  /* ---- GENRE MARQUEE ---- */
  const genreTrack = document.querySelector('[data-genre-track]');
  if (genreTrack && C.genres) {
    const build = () => C.genres.map(g =>
      `<span class="genre-pill"><b>${g}</b><span class="sep">/</span></span>`
    ).join('');
    genreTrack.innerHTML = build() + build(); // duplicate for seamless loop
  }

  /* ---- TRUSTED-BY MARQUEE ---- */
  const logoTrack = document.querySelector('[data-logo-track]');
  if (logoTrack && C.trustedBy) {
    const build = () => C.trustedBy.map(v => {
      if (v.logo) {
        return `<span class="logo-chip"><img src="${v.logo}" alt="${v.name} logo" style="height:28px;width:auto;filter:grayscale(1) brightness(1.6);opacity:.85"><span class="lc-note">${v.note || ''}</span></span>`;
      }
      return `<span class="logo-chip"><span class="lc-name">${v.name}</span><span class="lc-note">${v.note || ''}</span></span>`;
    }).join('');
    logoTrack.innerHTML = build() + build();
  }

  /* ---- STRENGTHS PANEL (About section) ---- */
  const strengthsEl = document.querySelector('[data-strengths]');
  if (strengthsEl && C.artist.strengths) {
    strengthsEl.innerHTML = C.artist.strengths.map(s =>
      `<div class="skill-row"><b>${s.label}</b><span style="max-width:56%;text-align:right;">${s.detail}</span></div>`
    ).join('');
  }

  /* ---- LONG BIO PARAGRAPHS ---- */
  const bioEl = document.querySelector('[data-longbio]');
  if (bioEl && C.artist.longBio) {
    bioEl.innerHTML = C.artist.longBio.map(p => `<p>${p}</p>`).join('');
  }

  /* ---- PAST GIGS LIST ---- */
  const gigsEl = document.querySelector('[data-gigs]');
  if (gigsEl && C.pastGigs) {
    gigsEl.innerHTML = C.pastGigs.map(g => `
      <div class="gig-row">
        <div class="gig-type">${g.type}</div>
        <div class="gig-name">${g.name}</div>
        <div class="gig-note">${g.note || ''}</div>
      </div>
    `).join('');
  }

  /* ---- UPCOMING SHOWS (both homepage preview + full page) ---- */
  const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  function showCardHTML(s) {
    let day = '--', mon = 'TBC';
    if (s.date) {
      const d = new Date(s.date + 'T00:00:00');
      if (!isNaN(d)) { day = d.getDate(); mon = MONTHS[d.getMonth()]; }
    }
    const linkHTML = s.ticketUrl
      ? `<a class="show-link" href="${s.ticketUrl}" target="_blank" rel="noopener">Details →</a>`
      : '';
    return `
      <div class="show-card">
        <div class="show-date"><span class="day">${day}</span><span class="mon">${mon}</span></div>
        <div class="show-event">${s.event}</div>
        <div class="show-venue">${s.venue || ''}</div>
        <div class="show-city">${s.city || ''}</div>
        ${s.note ? `<div class="show-note">${s.note}</div>` : ''}
        ${linkHTML}
      </div>`;
  }

  function sortedShows() {
    return (C.upcomingShows || []).slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const previewEl = document.querySelector('[data-shows-preview]');
  if (previewEl) {
    const shows = sortedShows().slice(0, 3);
    previewEl.innerHTML = shows.length
      ? shows.map(showCardHTML).join('')
      : `<div class="empty-note">No upcoming shows listed right now — check back soon, or see the full press kit for booking enquiries.</div>`;
  }

  const fullEl = document.querySelector('[data-shows-full]');
  if (fullEl) {
    const shows = sortedShows();
    fullEl.innerHTML = shows.length
      ? shows.map(showCardHTML).join('')
      : `<div class="empty-note">No upcoming shows listed right now. New dates get added straight to js/content.js — check back soon.</div>`;
  }

  /* ---- PRESS KIT bindings ---- */
  const pkFacts = document.querySelector('[data-pk-facts]');
  if (pkFacts && C.pressKit) {
    pkFacts.innerHTML = C.pressKit.quickFacts.map(f =>
      `<li><span>${f.label}</span><span style="text-align:right;max-width:60%;">${f.value}</span></li>`
    ).join('');
  }

  const pkAssets = document.querySelector('[data-pk-assets]');
  if (pkAssets && C.pressKit) {
    pkAssets.innerHTML = C.pressKit.assets.map(a => `
      <div class="asset-row">
        <div><div class="a-name">${a.name}</div><div class="a-meta">${a.meta || ''}</div></div>
        <a class="asset-dl" href="${a.path}" download>Download</a>
      </div>
    `).join('');
  }

  const pkContact = document.querySelector('[data-pk-contact]');
  if (pkContact && C.pressKit) {
    const c = C.pressKit.contact;
    let rows = '';
    if (c.email) rows += `<li><span>Booking</span><a href="mailto:${c.email}">${c.email}</a></li>`;
    if (c.instagram) rows += `<li><span>Instagram</span><a href="https://instagram.com/${c.instagram.replace('@','')}" target="_blank" rel="noopener">${c.instagram}</a></li>`;
    if (c.phone) rows += `<li><span>Phone</span><a href="tel:${c.phone}">${c.phone}</a></li>`;
    pkContact.innerHTML = rows;
  }

  /* ---- footer year ---- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
