const featuredItems = [
  {
    tag: 'Featured Interview',
    title: 'Member interview release and publication spotlight',
    text: 'Use this area for a rotating homepage lead item, such as an interview, journal release, or news announcement.',
  },
  {
    tag: 'Book Review',
    title: 'Short-form review and reading recommendations',
    text: 'Highlight scholarship, practitioner literature, and current intelligence studies for members and the public.',
  },
  {
    tag: 'OSINT Focus',
    title: 'Celebrate milestone themes in intelligence history',
    text: 'A rotating card like this mirrors the compact featured-news behavior visible on the reference website.',
  },
];

const newsItems = [
  {
    tag: 'Interview',
    title: 'New member-only video interview published',
    text: 'A retired intelligence professional discusses leadership, collection priorities, and the craft of historical writing.',
  },
  {
    tag: 'Review',
    title: 'Monthly short-form book review released',
    text: 'The site can surface reviews, reading lists, and public resources in a compact card format.',
  },
  {
    tag: 'History',
    title: 'Open-source intelligence anniversary feature',
    text: 'Use this card pattern for historical essays, archive pieces, and educational content.',
  },
];

const membershipItems = [
  {
    title: 'Member',
    text: 'For current and former intelligence, military, security, law enforcement, academic, and related professionals.',
    cta: 'Become a Member',
  },
  {
    title: 'International Member',
    text: 'For select international categories or allied-country members, subject to your organization’s rules.',
    cta: 'Join Internationally',
  },
  {
    title: 'Subscriber',
    text: 'For institutions, libraries, corporations, and individuals who want access without full membership.',
    cta: 'Subscribe',
  },
  {
    title: 'Corporate / Academic',
    text: 'For organizations supporting outreach, educational programming, events, and publications.',
    cta: 'Learn More',
  },
];

const events = [
  {
    day: '19',
    month: 'Mar 2026',
    title: 'Regional chapter discussion on counter-UAS intelligence',
    time: '11:30 AM',
    location: 'Colorado Springs, CO',
    description: 'Example chapter meeting with guest speaker and themed discussion.',
  },
  {
    day: '22',
    month: 'Apr 2026',
    title: 'San Francisco chapter meeting on gray-zone competition',
    time: '12:00 PM',
    location: 'South San Francisco, CA',
    description: 'Example luncheon meeting featuring a senior retired officer or policy expert.',
  },
  {
    day: '08',
    month: 'May 2026',
    title: 'Spring luncheon',
    time: '10:30 AM',
    location: 'McLean, VA',
    description: 'Save-the-date style event card for major association gatherings.',
  },
];

const featureSlide = document.getElementById('feature-slide');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const newsGrid = document.getElementById('news-grid');
const membershipGrid = document.getElementById('membership-grid');
const eventsList = document.getElementById('events-list');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('site-nav');

let currentSlide = 0;

function renderSlide(index) {
  const item = featuredItems[index];
  featureSlide.innerHTML = `
    <span class="feature-meta">${item.tag}</span>
    <h3 class="feature-title">${item.title}</h3>
    <p class="feature-text">${item.text}</p>
  `;
}

function renderNews() {
  newsGrid.innerHTML = newsItems
    .map(
      (item) => `
        <article class="news-card card">
          <span class="news-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <a class="text-link" href="#">Read more</a>
        </article>
      `
    )
    .join('');
}

function renderMembership() {
  membershipGrid.innerHTML = membershipItems
    .map(
      (item) => `
        <article class="member-card card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <a class="btn btn--secondary" href="#">${item.cta}</a>
        </article>
      `
    )
    .join('');
}

function renderEvents() {
  eventsList.innerHTML = events
    .map(
      (event) => `
        <article class="event-card">
          <div class="event-date">
            <div class="event-day">${event.day}</div>
            <div class="event-month">${event.month}</div>
          </div>
          <div>
            <h3>${event.title}</h3>
            <p class="event-time">${event.time}</p>
            <p class="event-location">${event.location}</p>
            <p class="event-description">${event.description}</p>
          </div>
          <a class="event-link" href="#">Event details</a>
        </article>
      `
    )
    .join('');
}

prevSlide?.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + featuredItems.length) % featuredItems.length;
  renderSlide(currentSlide);
});

nextSlide?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % featuredItems.length;
  renderSlide(currentSlide);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

renderSlide(currentSlide);
renderNews();
renderMembership();
renderEvents();
