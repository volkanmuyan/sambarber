/* ============================================================
   EMAILJS CONFIGURATION
   Signup at https://www.emailjs.com and replace these values.
   ============================================================ */
const EMAILJS_PUBLIC_KEY        = 'xuZOhDCGo8Jfx8izu';
const EMAILJS_SERVICE_ID        = 'service_hqsfqvx';
const EMAILJS_OWNER_TEMPLATE    = 'template_3gmjvi2';
const EMAILJS_CUSTOMER_TEMPLATE = 'template_7zevzbn';
const OWNER_EMAIL               = 'sam.barber3000@gmail.com';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const i18n = {
  en: {
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.booking': 'Book',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Est. 2010 · Brussels',
    'hero.line1': 'The Art of',
    'hero.line2': 'The Cut.',
    'hero.sub': 'Premium grooming. Timeless style. Every detail matters.',
    'hero.cta': 'Book a Session',
    'hero.cta2': 'Our Services',

    'services.eyebrow': 'What We Offer',
    'services.title': 'Our Services',
    'services.cut.name': 'Classic Cut',
    'services.cut.desc': 'Precision scissor or clipper cut tailored to your style.',
    'services.shave.name': 'Hot Towel Shave',
    'services.shave.desc': 'Traditional straight razor shave with hot towels and premium oils.',
    'services.combo.name': 'Cut & Shave',
    'services.combo.desc': 'The full experience — cut, beard trim, and hot towel finish.',
    'services.beard.name': 'Beard Sculpt',
    'services.beard.desc': 'Shape and define your beard with expert liner work.',
    'services.kids.name': 'Kids Cut',
    'services.kids.desc': 'Patient and precise cuts for boys under 12.',
    'services.vip.name': 'VIP Package',
    'services.vip.desc': 'Cut, shave, scalp massage, and a signature cocktail.',

    'about.eyebrow': 'Our Story',
    'about.title': 'Behind the Chair',
    'about.badge': 'Years Experience',
    'about.p1': 'Sam started cutting hair at 19 in the backstreets of Bruxelles. What began as a passion became a craft — and a craft became a calling. Today, Sambarber is Brussels\' most trusted grooming destination.',
    'about.p2': 'Every client is greeted with respect, care, and a cup of coffee. No rush, no compromise. Just the perfect cut, every time.',
    'about.cta': 'Reserve Your Seat',

    'gallery.eyebrow': 'The Work',
    'gallery.title': 'Gallery',
    'gallery.haar': 'Haircut',
    'gallery.hb': 'Haircut & Beard',
    'gallery.kids': 'Kids Cut',
    'gallery.mask': 'Face Mask',
    'gallery.epil': 'Threading',
    'gallery.kerat': 'Keratin',

    'booking.eyebrow': 'Reserve Your Spot',
    'booking.title': 'Book a Session',
    'booking.salon': 'Select Location',
    'booking.selectSalon': '-- Choose a location --',
    'booking.salonErr': 'Please select a location',
    'booking.name': 'Full Name',
    'booking.nameErr': 'Please enter your name',
    'booking.phone': 'Phone Number',
    'booking.phoneErr': 'Please enter your phone',
    'booking.email': 'Email Address',
    'booking.emailErr': 'Please enter a valid email',
    'booking.service': 'Select Service',
    'booking.selectService': '-- Choose a service --',
    'booking.serviceErr': 'Please select a service',
    'booking.date': 'Date',
    'booking.dateErr': 'Please pick a date',
    'booking.time': 'Time Slot',
    'booking.timeErr': 'Please select a time slot',
    'booking.notes': 'Notes (optional)',
    'booking.submit': 'Confirm Booking',
    'booking.successTitle': 'Booking Confirmed!',
    'booking.successMsg': 'A confirmation has been sent to your email. See you soon!',
    'booking.sendingMsg': 'Sending…',
    'booking.errorMsg': 'Something went wrong. Please call us or try again.',
    'booking.again': 'Book Another',

    'contact.eyebrow': 'Find Us',
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.hours': 'Hours',
    'contact.hoursDetail': 'Tue–Sun: 09:00–20:00<br>Monday: Closed',
    'contact.phone': 'Phone',

    'footer.tagline': 'Crafting confidence, one cut at a time.',
    'footer.rights': 'All rights reserved.',

    'testimonials.t1': 'Best barber in Aalst, hands down. The attention to detail and the atmosphere make every visit an experience.',
    'testimonials.t2': 'The VIP package is worth every euro. Scalp massage, hot shave, perfect cut — I leave feeling like a new person.',
    'testimonials.t3': 'Sam has been cutting my hair for 8 years. His consistency and craft are unmatched. I\'ll never go anywhere else.',
    'testimonials.t4': 'The atmosphere, the precision, the result — everything at Sambarber is exceptional. A cut above the rest.',

    'blog.eyebrow': 'The Journal',
    'blog.title': 'Grooming Insights',
    'blog.cat1': 'Grooming Guide',
    'blog.cat2': 'Beard Care',
    'blog.cat3': 'Barber Culture',
    'blog.date1': 'June 2026',
    'blog.date2': 'May 2026',
    'blog.date3': 'April 2026',
    'blog.read1': '4 min read',
    'blog.read2': '5 min read',
    'blog.read3': '6 min read',
    'blog.h1': 'How to Maintain Your Fade Between Appointments',
    'blog.h2': 'Beard Care Essentials: Oils, Balms & the Right Routine',
    'blog.h3': 'The Hot Towel Shave: Why This Ritual Is Making a Comeback',
    'blog.ex1': 'A precise fade is one of the sharpest looks a man can wear — but it needs upkeep. Discover the pro tips Sam recommends to every client leaving the chair.',
    'blog.ex2': 'A well-groomed beard is a signature. From choosing the right oil for your skin type to daily brushing habits — here\'s everything you need to know.',
    'blog.ex3': 'In a world of disposable razors and rushed routines, the hot towel shave stands apart. We explore why this timeless ritual is back in demand across Belgium.',
    'blog.readMore': 'Read Article →',

    'lv.haar': 'Haircut', 'lv.haar.d': 'Precision haircut tailored to your style.',
    'lv.hb': 'Haircut & Beard', 'lv.hb.d': 'Haircut combined with expert beard trim.',
    'lv.hbw': 'Haircut, Beard & Wash', 'lv.hbw.d': 'Full service: haircut, beard sculpt & hair wash.',
    'lv.kids': 'Kids Cut', 'lv.kids.d': 'Patient and precise cuts for boys under 12.',
    'lv.mask': 'Face Mask', 'lv.mask.d': 'Nourishing face mask for a refreshed complexion.',
    'lv.epil': 'Threading', 'lv.epil.d': 'Precise threading for clean, defined hair removal.',
    'lv.kerat': 'Keratin Treatment', 'lv.kerat.d': 'Keratin treatment for smooth, frizz-free hair.',
    'lv.perm': 'Perm', 'lv.perm.d': 'Perm treatment for lasting curls and volume.',

    'maps.eyebrow': 'Two Locations',
    'maps.title': 'Find Us',
    'maps.directions': 'Directions →',

    'footer.follow': 'Follow Us',
  },

  nl: {
    'nav.services': 'Diensten',
    'nav.about': 'Over ons',
    'nav.gallery': 'Galerij',
    'nav.blog': 'Blog',
    'nav.booking': 'Boeken',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Est. 2010 · Aalst',
    'hero.line1': 'De Kunst van',
    'hero.line2': 'De Knip.',
    'hero.sub': 'Premium verzorging. Tijdloze stijl. Elk detail telt.',
    'hero.cta': 'Maak een afspraak',
    'hero.cta2': 'Onze diensten',

    'services.eyebrow': 'Wat we aanbieden',
    'services.title': 'Onze Diensten',
    'services.cut.name': 'Klassieke Knip',
    'services.cut.desc': 'Precieze knip met schaar of tondeuse, afgestemd op uw stijl.',
    'services.shave.name': 'Warme Handdoek Scheerbeurt',
    'services.shave.desc': 'Traditioneel scheren met rechte scheermest, warme handdoeken en premium oliën.',
    'services.combo.name': 'Knip & Scheerbeurt',
    'services.combo.desc': 'De volledige ervaring — knip, baardtrim en warme handdoek afwerking.',
    'services.beard.name': 'Baard Sculptuur',
    'services.beard.desc': 'Vorm en definieer uw baard met deskundige contourafwerking.',
    'services.kids.name': 'Kinderknip',
    'services.kids.desc': 'Geduldige en precieze knip voor jongens onder de 12 jaar.',
    'services.vip.name': 'VIP Pakket',
    'services.vip.desc': 'Knip, scheerbeurt, hoofdhuidmassage en een handtailcocktail.',

    'about.eyebrow': 'Ons Verhaal',
    'about.title': 'Achter de Stoel',
    'about.badge': 'Jaar Ervaring',
    'about.p1': 'Sam begon op zijn 19e haar te knippen in de steegjes van Bruxelles. Wat begon als een passie werd een vak — en een vak werd een roeping. Vandaag is Sambarber de meest vertrouwde kapperszaak van Aalst.',
    'about.p2': 'Elke klant wordt verwelkomd met respect, zorg en een kopje koffie. Geen haast, geen compromissen. Gewoon de perfecte knip, elke keer.',
    'about.cta': 'Reserveer uw plek',

    'gallery.eyebrow': 'Het Werk',
    'gallery.title': 'Galerij',
    'gallery.haar': 'Haar',
    'gallery.hb': 'Haar & Baard',
    'gallery.kids': 'Kinderen',
    'gallery.mask': 'Mask',
    'gallery.epil': 'Epileren',
    'gallery.kerat': 'Keratin',

    'booking.eyebrow': 'Reserveer uw plek',
    'booking.title': 'Maak een afspraak',
    'booking.salon': 'Kies een locatie',
    'booking.selectSalon': '-- Kies een locatie --',
    'booking.salonErr': 'Kies een locatie',
    'booking.name': 'Volledige naam',
    'booking.nameErr': 'Geef uw naam op',
    'booking.phone': 'Telefoonnummer',
    'booking.phoneErr': 'Geef uw telefoonnummer op',
    'booking.email': 'E-mailadres',
    'booking.emailErr': 'Geef een geldig e-mailadres op',
    'booking.service': 'Kies een dienst',
    'booking.selectService': '-- Kies een dienst --',
    'booking.serviceErr': 'Kies een dienst',
    'booking.date': 'Datum',
    'booking.dateErr': 'Kies een datum',
    'booking.time': 'Tijdslot',
    'booking.timeErr': 'Kies een tijdslot',
    'booking.notes': 'Notities (optioneel)',
    'booking.submit': 'Afspraak bevestigen',
    'booking.successTitle': 'Afspraak bevestigd!',
    'booking.successMsg': 'Een bevestiging is verstuurd naar uw e-mail. Tot snel!',
    'booking.sendingMsg': 'Bezig met verzenden…',
    'booking.errorMsg': 'Er is iets misgegaan. Bel ons of probeer opnieuw.',
    'booking.again': 'Nieuwe afspraak',

    'contact.eyebrow': 'Vind ons',
    'contact.title': 'Contact',
    'contact.address': 'Adres',
    'contact.hours': 'Openingstijden',
    'contact.hoursDetail': 'Di–Zo: 09:00–20:00<br>Maandag: Gesloten',
    'contact.phone': 'Telefoon',

    'footer.tagline': 'Vertrouwen creëren, één knip tegelijk.',
    'footer.rights': 'Alle rechten voorbehouden.',

    'testimonials.t1': 'De beste kapper van Aalst, zonder twijfel. De aandacht voor detail en de sfeer maken elk bezoek tot een beleving.',
    'testimonials.t2': 'Het VIP-pakket is elke euro waard. Hoofdhuidmassage, warme scheerbeurt, perfecte knip — ik vertrek als een nieuw persoon.',
    'testimonials.t3': 'Sam knipt mijn haar al 8 jaar. Zijn consistentie en vakmanschap zijn ongeëvenaard. Ik ga nergens anders meer heen.',
    'testimonials.t4': 'De sfeer, de precisie, het resultaat — alles bij Sambarber is uitzonderlijk. Een klasse apart.',

    'blog.eyebrow': 'Het Tijdschrift',
    'blog.title': 'Verzorgingstips',
    'blog.cat1': 'Verzorgingsgids',
    'blog.cat2': 'Baardverzorging',
    'blog.cat3': 'Barbierscultuur',
    'blog.date1': 'Juni 2026',
    'blog.date2': 'Mei 2026',
    'blog.date3': 'April 2026',
    'blog.read1': '4 min lezen',
    'blog.read2': '5 min lezen',
    'blog.read3': '6 min lezen',
    'blog.h1': 'Hoe onderhoud je je fade tussen je afspraken door',
    'blog.h2': 'Essentiële baardverzorging: oliën, balsems en de juiste routine',
    'blog.h3': 'De warme handdoek scheerbeurt: waarom dit ritueel terug is',
    'blog.ex1': 'Een precieze fade is een van de scherpste looks die een man kan dragen — maar het vereist onderhoud. Ontdek de tips die Sam elke klant meegeeft.',
    'blog.ex2': 'Een verzorgde baard is een visitekaartje. Van de juiste olie voor jouw huidtype tot dagelijkse borstelgewoonten — hier is alles wat je moet weten.',
    'blog.ex3': 'In een wereld van wegwerpscheermesjes en gehaaste routines valt de warme handdoek scheerbeurt op. Waarom dit tijdloze ritueel terug is in België.',
    'blog.readMore': 'Artikel lezen →',

    'lv.haar': 'Haar', 'lv.haar.d': 'Precieze knip afgestemd op uw stijl.',
    'lv.hb': 'Haar & Baard', 'lv.hb.d': 'Knip gecombineerd met een deskundige baardtrim.',
    'lv.hbw': 'Haar, Baard & Wassen', 'lv.hbw.d': 'Volledig pakket: knip, baard & haarwas.',
    'lv.kids': 'Kinderen', 'lv.kids.d': 'Geduldige en precieze knippen voor jongens onder 12.',
    'lv.mask': 'Mask', 'lv.mask.d': 'Voedend gezichtsmasker voor een verfrist uiterlijk.',
    'lv.epil': 'Epileren', 'lv.epil.d': 'Precies epileren met draad voor een strak resultaat.',
    'lv.kerat': 'Keratin', 'lv.kerat.d': 'Keratinebehandeling voor glad, kroesvij haar.',
    'lv.perm': 'Permanent', 'lv.perm.d': 'Permanentbehandeling voor blijvende krullen en volume.',

    'maps.eyebrow': 'Twee Locaties',
    'maps.title': 'Vind Ons',
    'maps.directions': 'Route →',

    'footer.follow': 'Volg Ons',
  }
};

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        // skip inputs
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update select options
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (dict[key]) opt.textContent = dict[key];
  });

  // Highlight active lang button
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('sambarber-lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'nl' : 'en');
});

/* ============================================================
   NAV — SCROLL + HAMBURGER
   ============================================================ */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // run once on load to handle page-restore scroll position

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ============================================================
   TIME SLOTS
   ============================================================ */
const timeSlots = document.querySelectorAll('.time-slot');
const selectedTimeInput = document.getElementById('selectedTime');

timeSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    timeSlots.forEach(s => s.classList.remove('selected'));
    slot.classList.add('selected');
    selectedTimeInput.value = slot.getAttribute('data-time');
    document.getElementById('timeError').parentElement.classList.remove('has-error');
  });
});

/* ============================================================
   DATE PICKER — restrict to future, no Sundays
   ============================================================ */
const dateInput = document.getElementById('bdate');
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
dateInput.min = `${yyyy}-${mm}-${dd}`;

dateInput.addEventListener('change', () => {
  const d = new Date(dateInput.value);
  if (d.getDay() === 1) { // Monday
    dateInput.value = '';
    const msg = currentLang === 'nl' ? 'Maandag gesloten. Kies een andere dag.' : 'Closed on Mondays. Please choose another day.';
    alert(msg);
  }
});

/* ============================================================
   BOOKING FORM
   ============================================================ */
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');
const bookAgain = document.getElementById('bookAgain');

function validateField(id, condition) {
  const el = document.getElementById(id);
  const group = el ? el.closest('.form-group') : null;
  if (!group) return true;
  const valid = condition(el);
  group.classList.toggle('has-error', !valid);
  return valid;
}

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

bookingForm.addEventListener('submit', async e => {
  e.preventDefault();

  const nameOk    = validateField('fname',   el => el.value.trim().length > 1);
  const phoneOk   = validateField('phone',   el => el.value.trim().length > 5);
  const emailOk   = validateField('email',   el => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
  const salonOk   = validateField('salon',   el => el.value !== '');
  const serviceOk = validateField('service', el => el.value !== '');
  const dateOk    = validateField('bdate',   el => el.value !== '');

  const timeGroup = document.getElementById('timeSlots').closest('.form-group');
  const timeOk = selectedTimeInput.value !== '';
  timeGroup.classList.toggle('has-error', !timeOk);

  if (!(nameOk && phoneOk && emailOk && salonOk && serviceOk && dateOk && timeOk)) return;

  const submitBtn = bookingForm.querySelector('[type="submit"]');
  const lang = document.documentElement.lang || 'en';
  const t = key => (i18n[lang] || i18n.en)[key] || key;

  submitBtn.disabled = true;
  submitBtn.textContent = t('booking.sendingMsg');

  const salonEl   = document.getElementById('salon');
  const serviceEl = document.getElementById('service');
  const params = {
    customer_name:  document.getElementById('fname').value.trim(),
    customer_phone: document.getElementById('phone').value.trim(),
    customer_email: document.getElementById('email').value.trim(),
    salon:          salonEl.options[salonEl.selectedIndex].text,
    service:        serviceEl.options[serviceEl.selectedIndex].text,
    date:           document.getElementById('bdate').value,
    time:           selectedTimeInput.value,
    notes:          document.getElementById('notes').value.trim() || '—',
    owner_email:    OWNER_EMAIL,
    to_email:       document.getElementById('email').value.trim(),
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OWNER_TEMPLATE, params);
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CUSTOMER_TEMPLATE, params);

    bookingForm.style.display = 'none';
    bookingSuccess.classList.add('visible');
    bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (err) {
    console.error('EmailJS error:', err);
    submitBtn.disabled = false;
    submitBtn.textContent = t('booking.submit');

    const errEl = bookingForm.querySelector('.booking-send-error') || (() => {
      const el = document.createElement('p');
      el.className = 'booking-send-error';
      submitBtn.insertAdjacentElement('afterend', el);
      return el;
    })();
    errEl.textContent = t('booking.errorMsg');
    errEl.style.cssText = 'color:#e55;font-size:.85rem;margin-top:.5rem;text-align:center;';
  }
});

bookAgain.addEventListener('click', () => {
  bookingForm.reset();
  timeSlots.forEach(s => s.classList.remove('selected'));
  selectedTimeInput.value = '';
  document.querySelectorAll('.form-group.has-error').forEach(g => g.classList.remove('has-error'));
  const errEl = bookingForm.querySelector('.booking-send-error');
  if (errEl) errEl.remove();
  const submitBtn = bookingForm.querySelector('[type="submit"]');
  submitBtn.disabled = false;
  const lang = document.documentElement.lang || 'en';
  submitBtn.textContent = (i18n[lang] || i18n.en)['booking.submit'];
  bookingForm.style.display = '';
  bookingSuccess.classList.remove('visible');
});

/* ============================================================
   SMOOTH SCROLL for nav links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   SALON TAB SWITCHER
   ============================================================ */
document.querySelectorAll('.salon-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const salon = tab.getAttribute('data-salon');
    document.querySelectorAll('.salon-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.salon-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + salon).classList.add('active');
  });
});

/* ============================================================
   SERVICE ACCORDION
   ============================================================ */
document.querySelectorAll('.service-acc-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.service-acc');
    const isOpen = item.classList.contains('open');
    item.classList.toggle('open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });
});

/* ============================================================
   TESTIMONIALS SLIDER
   ============================================================ */
(function () {
  const slides = document.querySelectorAll('.testimonial');
  if (!slides.length) return;

  let current = 0;
  let autoTimer;

  const dotsContainer = document.getElementById('tslideDots');

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'tslide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Testimonial ' + (i + 1));
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    slides[current].classList.remove('active');
    document.querySelectorAll('.tslide-dot')[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.querySelectorAll('.tslide-dot')[current].classList.add('active');
  }

  document.getElementById('tslidePrev').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  document.getElementById('tslideNext').addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5500); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  startAuto();
})();

/* ============================================================
   BLOG SLIDER
   ============================================================ */
(function () {
  const track = document.getElementById('blogTrack');
  const prevBtn = document.getElementById('blogPrev');
  const nextBtn = document.getElementById('blogNext');
  const dotsWrap = document.getElementById('blogDots');
  if (!track) return;

  const cards = Array.from(track.children);
  let current = 0;

  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getMax() { return cards.length - getVisible(); }

  function buildDots() {
    dotsWrap.innerHTML = '';
    const totalDots = getMax() + 1;
    for (let i = 0; i < totalDots; i++) {
      const d = document.createElement('button');
      d.className = 'blog-dot' + (i === current ? ' active' : '');
      d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      d.addEventListener('click', () => { current = i; slide(); });
      dotsWrap.appendChild(d);
    }
  }

  function slide() {
    current = Math.max(0, Math.min(current, getMax()));
    const cardWidth = cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= getMax();
    dotsWrap.querySelectorAll('.blog-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => { current--; slide(); });
  nextBtn.addEventListener('click', () => { current++; slide(); });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { buildDots(); slide(); }, 150);
  }, { passive: true });

  buildDots();
  slide();
})();

/* ============================================================
   CHAT WIDGET
   ============================================================ */
(function () {
  const panel   = document.getElementById('chatPanel');
  const toggle  = document.getElementById('chatToggle');
  const closeBtn = document.getElementById('chatClose');
  const messages = document.getElementById('chatMessages');
  const input   = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const badge   = document.getElementById('chatBadge');
  const icoOpen = toggle.querySelector('.chat-ico-open');
  const icoClose = toggle.querySelector('.chat-ico-close');
  if (!panel) return;

  let isOpen = false;

  function openChat() {
    isOpen = true;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    icoOpen.style.display = 'none';
    icoClose.style.display = '';
    badge.classList.add('hidden');
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    icoOpen.style.display = '';
    icoClose.style.display = 'none';
  }

  toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  // Quick buttons
  document.querySelectorAll('.chat-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-q');
      addMsg(q, 'user');
      setTimeout(() => respond(q), 600);
      if (!isOpen) openChat();
    });
  });

  function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + type;
    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function addTyping() {
    return addMsg('…', 'bot typing');
  }

  const KB = [
    { keys: ['hello','hi','hey','hallo','dag','hoi','good morning','goedemorgen'],
      ans: 'Hello! 👋 Welcome to Sam the Barber. How can I help you? I can answer questions about our services, prices, locations in Aalst & Leuven, or help you book an appointment.' },
    { keys: ['price','prijs','cost','hoeveel','how much','kosten','€','euro','diensten','services and prices','what are your services'],
      ans: 'Our services & prices:\n\n✂️ Haar (Haircut) — €20\n🧔 Haar & Baard — €30\n💧 Haar, Baard & Wassen — €35\n👦 Kinderen — €15\n🌿 Mask — €15\n🧵 Epileren (Threading) — €10\n✨ Keratin — vanaf €60\n🌀 Permanent (Perm) — vanaf €60' },
    { keys: ['where','adres','address','locatie','location','where are you','located','vind ons'],
      ans: 'We have two locations:\n\n📍 Aalst — Dirk Martensstraat 1, 9300 Aalst\n📍 Leuven — Savoyestraat 3, 3000 Leuven\n\nBoth salons offer the same full service menu!' },
    { keys: ['hours','open','openingstijden','when','wanneer','gesloten','closed','what time','opening'],
      ans: '🕘 Opening hours:\n\nTuesday – Sunday: 09:00–20:00\n🚫 Monday: Closed\n\nWalk-ins welcome, but booking ahead is recommended!' },
    { keys: ['book','appointment','afspraak','reserveer','reserveren','reserve','hoe','how to book','how do i book'],
      ans: '📅 Booking is easy!\n\nScroll down to "Book a Session" on our homepage, choose your location (Aalst or Leuven), pick a service, select a date & time — done!\n\nOr call us: 📞 0497 34 28 80' },
    { keys: ['haar','haircut','knip','knippen','cut','saç'],
      ans: '✂️ Haar (Haircut) is €20.\n\nPrecision scissor or clipper cut tailored to your style and face shape. Available at both Aalst and Leuven.\n\nWant to combine it with a beard trim? Haar & Baard is just €30! 💈' },
    { keys: ['baard','beard','haar en baard','haircut and beard','facial hair','baardtrim'],
      ans: '🧔 Haar & Baard (Haircut + Beard trim) is €30.\n\nFor the complete session including a hair wash, our Haar, Baard & Wassen package is €35 — highly recommended!\n\nAll beard work includes precision liner shaping.' },
    { keys: ['kind','kinderen','kids','children','child','boy','jongen','junior','child haircut'],
      ans: '👦 Kids cuts are just €15!\n\nWe\'re patient and experienced with children. We make it fun and stress-free. Suitable for boys under 12.\n\nBook in advance for a calm, quiet slot.' },
    { keys: ['mask','face mask','gezichtsmasker','facial','skin care','huid','skin treatment'],
      ans: '🌿 Face Mask treatment is €15.\n\nA nourishing professional-grade mask that cleanses, hydrates, and refreshes your skin. Perfect add-on after a haircut. Results visible immediately!' },
    { keys: ['epileren','thread','threading','eyebrow','wenkbrauw','hair removal','ontharen'],
      ans: '🧵 Threading (Epileren) is just €10!\n\nPrecise, hygienic hair removal using a cotton thread technique — no chemicals, no burns. Perfect for eyebrows and facial shaping. Lasts 3–6 weeks.' },
    { keys: ['keratin','keratine','smooth','frizz','steil','straight hair','lisse'],
      ans: '✨ Keratin Treatment starts from €60.\n\nSmooths frizzy or curly hair for 3–6 months. Results are immediately visible — shine, softness, and dramatically easier daily styling.\n\nBook a consultation for a personalised quote!' },
    { keys: ['permanent','perm','curl','krullen','golf','wave','curly'],
      ans: '🌀 Perm (Permanent) starts from €60.\n\nCreate lasting curls, waves, or volume. Results last several months. We recommend a consultation before booking. Price depends on hair length.' },
    { keys: ['instagram','tiktok','facebook','social','follow','volg'],
      ans: 'Follow us on social media! 📱\n\n📸 Instagram: @sam.barbershopp\n👥 Facebook: sam.barbershop.2023\n🎵 TikTok: @sam.barbershop3\n\nWe post our latest work, tips, and promotions regularly!' },
    { keys: ['phone','telefoon','call','bel','number','nummer','contact','0497','tel'],
      ans: '📞 You can reach us at:\n\n0497 34 28 80\n\nOr book directly on the website — quick and easy!' },
    { keys: ['thank','bedankt','thanks','dank','merci'],
      ans: 'You\'re welcome! 😊 See you soon at Sam the Barber — whether in Aalst or Leuven, we\'ll take good care of you! 💈' },
  ];

  function respond(text) {
    const lower = text.toLowerCase();
    const typing = addTyping();
    setTimeout(() => {
      typing.remove();
      const match = KB.find(entry => entry.keys.some(k => lower.includes(k)));
      addMsg(match ? match.ans : 'I\'m not sure about that. 😊 You can ask me about:\n\n• Services & prices\n• Our locations (Aalst & Leuven)\n• Opening hours\n• How to book\n• Any specific service', 'bot');
    }, 900);
  }

  function sendMessage() {
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    respond(val);
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
})();

/* ============================================================
   CUSTOM SCISSORS CURSOR
   ============================================================ */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch devices

  const cursor = document.getElementById('cursor');
  document.body.classList.add('has-custom-cursor');

  const HW = 19; // half of 38px

  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - HW}px, ${e.clientY - HW}px)`;
    cursor.style.opacity = '1';
  }, { passive: true });

  document.addEventListener('mousedown', () => {
    cursor.classList.remove('snip');
    void cursor.offsetWidth;
    cursor.classList.add('snip');
  });

  cursor.querySelector('.blade-top').addEventListener('animationend', () => {
    cursor.classList.remove('snip');
  });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });

  document.querySelectorAll('a, button, input, select, textarea, .time-slot, .tslide-btn, .tslide-dot, .gallery-item, .blog-card, .service-acc-trigger, .salon-tab, .social-link').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
})();

/* ============================================================
   INIT
   ============================================================ */
const savedLang = localStorage.getItem('sambarber-lang') || 'nl';
applyLang(savedLang);
