const data = window.siteData;
const fmtDate = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const fmtMonth = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
const fmtDay = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { day: '2-digit' });

function renderHeader(active = '') {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-links">
          <a href="membership.html">Join</a>
          <a href="contact.html">Member Login</a>
          <a class="donate" href="scholarships.html">Donate</a>
        </div>
        <div class="topbar-meta">
          <span>${data.site.phone}</span>
          <a href="mailto:${data.site.email}">${data.site.email}</a>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container header-inner">
        <a class="brand" href="index.html">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <h1>${data.site.name}</h1>
            <p>${data.site.tagline}</p>
          </div>
        </a>
        <nav class="nav" aria-label="Primary">
          <div class="nav-item"><a class="${active==='home'?'active':''}" href="index.html">Home</a></div>
          <div class="nav-item">
            <button type="button">About</button>
            <div class="dropdown">
              <a href="about.html">Mission, History & Principles</a>
              <a href="contact.html">Contact & Staff</a>
            </div>
          </div>
          <div class="nav-item">
            <button type="button">Membership</button>
            <div class="dropdown">
              <a href="membership.html">Choose Membership</a>
              <a href="membership.html#apply">Apply / Renew</a>
            </div>
          </div>
          <div class="nav-item">
            <button type="button">News & Events</button>
            <div class="dropdown">
              <a href="news.html">News</a>
              <a href="events.html">Events Calendar</a>
            </div>
          </div>
          <div class="nav-item">
            <button type="button">Media</button>
            <div class="dropdown">
              <a href="media.html">Interviews & Publications</a>
              <a href="scholarships.html">Scholarships</a>
            </div>
          </div>
        </nav>
        <button class="mobile-toggle" id="mobileToggle" type="button">Menu</button>
      </div>
      <div class="container mobile-panel" id="mobilePanel">
        <a href="index.html">Home</a>
        <div class="mobile-group"><details><summary>About</summary><div class="mobile-links"><a href="about.html">Mission, History & Principles</a><a href="contact.html">Contact & Staff</a></div></details></div>
        <div class="mobile-group"><details><summary>Membership</summary><div class="mobile-links"><a href="membership.html">Choose Membership</a><a href="membership.html#apply">Apply / Renew</a></div></details></div>
        <div class="mobile-group"><details><summary>News & Events</summary><div class="mobile-links"><a href="news.html">News</a><a href="events.html">Events Calendar</a></div></details></div>
        <div class="mobile-group"><details><summary>Media</summary><div class="mobile-links"><a href="media.html">Interviews & Publications</a><a href="scholarships.html">Scholarships</a></div></details></div>
      </div>
    </div>`;
  document.getElementById('mobileToggle')?.addEventListener('click', () => {
    document.getElementById('mobilePanel')?.classList.toggle('open');
  });
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer">
      <div class="container footer-grid">
        <div>
          <div class="brand" style="margin-bottom:12px">
            <div class="brand-mark" aria-hidden="true"></div>
            <div class="brand-text"><h1 style="color:white">${data.site.name}</h1><p>${data.site.tagline}</p></div>
          </div>
          <div>${data.site.address[0]}<br>${data.site.address[1]}<br>${data.site.phone}<br><a href="mailto:${data.site.email}">${data.site.email}</a></div>
        </div>
        <div>
          <h4>About</h4>
          <a href="about.html">Mission & History</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h4>Programs</h4>
          <a href="news.html">News</a>
          <a href="events.html">Events</a>
          <a href="media.html">Media & Publications</a>
          <a href="scholarships.html">Scholarships</a>
        </div>
        <div>
          <h4>Membership</h4>
          <a href="membership.html">Join / Renew</a>
          <a href="membership.html#packages">Corporate Packages</a>
        </div>
      </div>
      <div class="container"><small>Original code starter. Structure and public information architecture were informed by the AFIO site’s publicly visible pages, including home navigation, membership categories, news, events, media, sponsors, and contact layout. This repo does not copy AFIO branding assets or site code. Source reference: afio.com.</small></div>
    </div>`;
}

function renderHome() {
  const hero = document.getElementById('home-hero');
  if (!hero) return;
  hero.innerHTML = `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-card slider" id="slider">
          ${data.heroSlides.map((s, i) => `
            <article class="slide ${i===0?'active':''}" style="background:${s.bg}">
              <div class="slide-content">
                <div class="eyebrow">${s.eyebrow}</div>
                <h2>${s.title}</h2>
                <p>${s.text}</p>
                <div class="button-row">
                  <a class="btn btn-primary" href="${s.primary.href}">${s.primary.label}</a>
                  <a class="btn btn-secondary" href="${s.secondary.href}">${s.secondary.label}</a>
                </div>
              </div>
            </article>`).join('')}
          <div class="slider-nav">
            <button id="prevSlide" aria-label="Previous slide">‹</button>
            <button id="nextSlide" aria-label="Next slide">›</button>
          </div>
        </div>
        <div class="hero-side">
          <div class="panel">
            <h3>Mission</h3>
            <p>${data.site.tagline}</p>
          </div>
          <div class="panel">
            <h3>At a glance</h3>
            <ul class="quick-list">
              ${data.quickStats.map(([k,v]) => `<li><span>${k}</span><strong>${v}</strong></li>`).join('')}
            </ul>
          </div>
          <div class="panel">
            <h3>Quick actions</h3>
            <div class="button-row">
              <a class="btn btn-primary" href="membership.html">Join</a>
              <a class="btn btn-secondary" href="events.html">Events</a>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const slider = document.getElementById('slider');
  const slides = slider?.querySelectorAll('.slide') || [];
  let idx = 0;
  const show = (n) => slides.forEach((el, i) => el.classList.toggle('active', i === n));
  const next = () => { idx = (idx + 1) % slides.length; show(idx); };
  const prev = () => { idx = (idx - 1 + slides.length) % slides.length; show(idx); };
  document.getElementById('nextSlide')?.addEventListener('click', next);
  document.getElementById('prevSlide')?.addEventListener('click', prev);
  if (slides.length) setInterval(next, 6000);

  renderNewsCards(document.getElementById('featured-news'), data.news.slice(0,3));
  renderMembershipCards(document.getElementById('featured-memberships'), data.memberships);
  renderEventCards(document.getElementById('featured-events'), data.events.slice(0,2));
  renderSponsors(document.getElementById('featured-sponsors'));
}

function renderNewsCards(target, items) {
  if (!target) return;
  target.innerHTML = items.map(item => `
    <article class="card">
      <div class="news-thumb">${item.imageLabel}</div>
      <div class="card-body">
        <div class="meta"><span>${fmtDate(item.date)}</span><span>${item.category}</span></div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <a class="btn btn-ghost" href="news.html#${item.slug}">Read More</a>
      </div>
    </article>`).join('');
}

function renderMembershipCards(target, items) {
  if (!target) return;
  target.innerHTML = items.map(item => `
    <article class="card membership-card">
      <div class="card-body">
        <span class="badge">Membership</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="price">${item.price}</div>
        <a class="btn btn-primary" href="membership.html#apply">${item.cta}</a>
        <ul class="features">${item.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderEventCards(target, items) {
  if (!target) return;
  target.innerHTML = items.map(item => `
    <article class="card">
      <div class="card-body event-item">
        <div class="event-date"><strong>${fmtDay(item.date)}</strong><span>${fmtMonth(item.date)}</span><span>${new Date(item.date+'T12:00:00').getFullYear()}</span></div>
        <div>
          <div class="meta"><span>${item.time}</span><span>${item.type}</span></div>
          <h3>${item.title}</h3>
          <p><strong>${item.venue}</strong> · ${item.location}</p>
          <p>${item.summary}</p>
          <a class="btn btn-ghost" href="events.html">Event Details</a>
        </div>
      </div>
    </article>`).join('');
}

function renderSponsors(target) {
  if (!target) return;
  const tiers = [['Platinum Plus', data.sponsors.platinumPlus], ['Platinum', data.sponsors.platinum], ['Gold', data.sponsors.gold], ['Silver', data.sponsors.silver], ['Bronze', data.sponsors.bronze]];
  target.innerHTML = tiers.map(([tier, items]) => `
    <div class="sponsor-tier">
      <div class="section-head" style="margin:0"><div><h2 style="font-size:1.2rem;margin:0">${tier}</h2></div></div>
      <div class="logo-grid">${items.map(name => `<div class="logo-card">${name}</div>`).join('')}</div>
    </div>`).join('');
}

function renderPageHero(title, desc, activeTrail) {
  const el = document.getElementById('page-hero');
  if (!el) return;
  el.innerHTML = `<section class="page-hero"><div class="container"><div class="breadcrumbs">Home / ${activeTrail}</div><h2>${title}</h2><p style="max-width:760px;color:#475569">${desc}</p></div></section>`;
}

function renderAbout() {
  renderPageHero('Mission, History & Principles', 'An about page modeled on the same high-level public information architecture: mission statement, historical overview, principles, and contact sidebar.', 'About');
  document.getElementById('about-content').innerHTML = `
    <div class="page-grid container section">
      <main class="grid" style="gap:22px">
        <article class="card"><div class="card-body"><h3>Mission</h3><p>${data.site.tagline}</p><p>Our educational purpose is to improve public understanding of intelligence, counterintelligence, security, and national decision-making while creating space for professional exchange and historical study.</p></div></article>
        <article class="card"><div class="card-body"><h3>History</h3><p>This starter project mirrors the broad page architecture seen on AFIO’s public site: a nonprofit-style association profile, membership options, event programming, media offerings, and sponsor acknowledgments. The underlying implementation is original and safe to publish to GitHub.</p><p>Use this section to insert your organization’s actual founding history, board background, and mission narrative.</p></div></article>
        <article class="card"><div class="card-body"><h3>Principles & Objectives</h3><ul class="features"><li>Support public literacy in intelligence and security affairs.</li><li>Promote professional ethics and historical understanding.</li><li>Encourage student entry into intelligence-adjacent careers.</li><li>Provide forums for dialogue, publication, and chapter-level engagement.</li><li>Strengthen community among practitioners, scholars, and informed supporters.</li></ul></div></article>
      </main>
      <aside class="sidebar-card"><h3>Contact</h3><p>${data.site.address.join('<br>')}<br><br>${data.site.phone}<br><a href="mailto:${data.site.email}">${data.site.email}</a></p><a class="btn btn-primary" href="contact.html">Contact Form</a></aside>
    </div>`;
}

function renderMembership() {
  renderPageHero('Membership', 'Membership tiers and corporate package presentation inspired by AFIO’s public membership page structure, with a local demo application form.', 'Membership');
  renderMembershipCards(document.getElementById('membership-grid'), data.memberships);
  const form = document.getElementById('join-form');
  const notice = document.getElementById('join-notice');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    const applications = JSON.parse(localStorage.getItem('sifApplications') || '[]');
    applications.push({ ...payload, submittedAt: new Date().toISOString() });
    localStorage.setItem('sifApplications', JSON.stringify(applications));
    notice.innerHTML = `Application saved locally for <strong>${payload.name}</strong>. This is a front-end demo. Connect the form to Formspree, Netlify Forms, Airtable, Supabase, or a custom backend for production.`;
    form.reset();
  });
}

function renderNewsPage() {
  renderPageHero('News', 'Searchable and filterable news listings based on JSON content.', 'News');
  const list = document.getElementById('news-list');
  const search = document.getElementById('news-search');
  const filter = document.getElementById('news-filter');
  const paint = (items) => {
    list.innerHTML = items.length ? items.map(item => `
      <article class="card" id="${item.slug}">
        <div class="news-thumb">${item.imageLabel}</div>
        <div class="card-body">
          <div class="meta"><span>${fmtDate(item.date)}</span><span>${item.category}</span></div>
          <h3>${item.title}</h3>
          <p>${item.excerpt}</p>
        </div>
      </article>`).join('') : '<div class="empty-state">No stories match your search.</div>';
    };
  const apply = () => {
    const q = (search.value || '').toLowerCase();
    const cat = filter.value;
    const items = data.news.filter(n => (!cat || n.category === cat) && (`${n.title} ${n.excerpt}`.toLowerCase().includes(q)));
    paint(items);
  };
  filter.innerHTML = `<option value="">All categories</option>${[...new Set(data.news.map(n=>n.category))].map(c=>`<option value="${c}">${c}</option>`).join('')}`;
  search?.addEventListener('input', apply);
  filter?.addEventListener('change', apply);
  paint(data.news);
}

function renderEventsPage() {
  renderPageHero('Events Calendar', 'Upcoming events rendered from structured data with type filters and a lightweight RSVP demo.', 'Events');
  const wrap = document.getElementById('events-list');
  const filter = document.getElementById('event-filter');
  const rsvp = document.getElementById('rsvp-form');
  const note = document.getElementById('rsvp-notice');
  const paint = (items) => wrap.innerHTML = items.map(item => `
    <article class="card"><div class="card-body event-item"><div class="event-date"><strong>${fmtDay(item.date)}</strong><span>${fmtMonth(item.date)}</span><span>${new Date(item.date+'T12:00:00').getFullYear()}</span></div><div><div class="meta"><span>${item.time}</span><span>${item.type}</span></div><h3>${item.title}</h3><p><strong>${item.venue}</strong> · ${item.location}</p><p>${item.summary}</p></div></div></article>`).join('');
  filter.innerHTML = `<option value="">All event types</option>${[...new Set(data.events.map(e=>e.type))].map(c=>`<option value="${c}">${c}</option>`).join('')}`;
  filter.addEventListener('change', () => paint(data.events.filter(e => !filter.value || e.type === filter.value)));
  paint(data.events);
  rsvp?.addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(rsvp).entries());
    const rsvps = JSON.parse(localStorage.getItem('sifRsvps') || '[]');
    rsvps.push({ ...payload, submittedAt: new Date().toISOString() });
    localStorage.setItem('sifRsvps', JSON.stringify(rsvps));
    note.innerHTML = `RSVP saved locally for <strong>${payload.name}</strong>. Connect this form to a backend or event platform for live production use.`;
    rsvp.reset();
  });
}

function renderMediaPage() {
  renderPageHero('Media & Publications', 'Media cards and publication lanes reflecting AFIO’s public interviews/publications section categories.', 'Media');
  const target = document.getElementById('media-grid');
  target.innerHTML = data.media.map(item => `
    <article class="card"><div class="media-thumb">${item.type.toUpperCase()}</div><div class="card-body"><span class="badge">${item.type}</span><h3>${item.title}</h3><p>${item.description}</p><a class="btn btn-ghost" href="contact.html">Configure Module</a></div></article>`).join('');
}

function renderScholarshipsPage() {
  renderPageHero('Scholarships', 'Scholarship listings and a local-interest form to demonstrate a working application funnel.', 'Scholarships');
  const target = document.getElementById('scholarship-grid');
  target.innerHTML = data.scholarships.map(item => `
    <article class="card"><div class="card-body"><span class="badge">Scholarship</span><h3>${item.title}</h3><div class="price">${item.amount}</div><p><strong>Deadline:</strong> ${fmtDate(item.deadline)}</p><p>${item.description}</p></div></article>`).join('');
  const form = document.getElementById('scholarship-form');
  const note = document.getElementById('scholarship-notice');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    const apps = JSON.parse(localStorage.getItem('sifScholarships') || '[]');
    apps.push({ ...payload, submittedAt: new Date().toISOString() });
    localStorage.setItem('sifScholarships', JSON.stringify(apps));
    note.innerHTML = `Scholarship interest saved locally for <strong>${payload.name}</strong>. Wire this form to your preferred database or form handler in production.`;
    form.reset();
  });
}

function renderContactPage() {
  renderPageHero('Contact & Staff', 'A simple contact page with a front-end message form and organization contact details.', 'Contact');
  const form = document.getElementById('contact-form');
  const note = document.getElementById('contact-notice');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    const messages = JSON.parse(localStorage.getItem('sifMessages') || '[]');
    messages.push({ ...payload, submittedAt: new Date().toISOString() });
    localStorage.setItem('sifMessages', JSON.stringify(messages));
    note.innerHTML = `Message saved locally for <strong>${payload.name}</strong>. Replace this with a transactional email or CRM integration for live use.`;
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  renderHeader(page);
  renderFooter();
  if (page === 'home') renderHome();
  if (page === 'about') renderAbout();
  if (page === 'membership') renderMembership();
  if (page === 'news') renderNewsPage();
  if (page === 'events') renderEventsPage();
  if (page === 'media') renderMediaPage();
  if (page === 'scholarships') renderScholarshipsPage();
  if (page === 'contact') renderContactPage();
});
