/* ============================================================
   main.js – Builds all page sections from config.js
   Edit config.js to change content. Edit CSS files to change styles.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Helpers ──────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const extAttr = ext => ext ? ' target="_blank" rel="noopener"' : '';

  const resolveLogoSource = (imgEl) => {
    if (!imgEl) return;

    const basePath = imgEl.dataset.logoBase;
    if (!basePath) return;

    const extensions = ['png', 'svg', 'webp', 'jpg', 'jpeg', 'gif', 'avif'];
    let idx = 0;

    const tryNext = () => {
      if (idx >= extensions.length) return;

      const candidate = `${basePath}.${extensions[idx++]}`;
      const tester = new Image();

      tester.onload = () => {
        imgEl.src = candidate;
      };

      tester.onerror = () => {
        tryNext();
      };

      tester.src = candidate;
    };

    tryNext();
  };

  // ── Meta / title ─────────────────────────────────────────
  document.title = SITE.meta.title;
  document.querySelector('meta[name="description"]').content = SITE.meta.description;

  // ── NAV ──────────────────────────────────────────────────
  resolveLogoSource(document.querySelector('.nav-logo-img'));

  const navLinksEl = $('navLinks');
  SITE.nav.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.href}"${extAttr(item.external)}>${item.label}</a>`;
    navLinksEl.appendChild(li);
  });

  // ── HERO ─────────────────────────────────────────────────
  $('heroBadge').innerHTML  = `<span class="dot-live"></span> ${SITE.brand.tagline}`;
  $('heroH1').innerHTML     = `${SITE.hero.heading}<br/><span class="highlight">${SITE.hero.highlight}</span>`;
  $('heroSub').textContent  = SITE.hero.subtext;
  $('navSignup').href       = SITE.brand.appUrl + '/register';
  $('heroTrial').href       = SITE.brand.appUrl + '/register';

  const trustEl = $('heroTrust');
  SITE.hero.trust.forEach((t, i) => {
    if (i > 0) trustEl.appendChild(el('span', 'trust-divider'));
    trustEl.appendChild(el('span', '', t));
  });

  // ── STATS ────────────────────────────────────────────────
  const statsGrid = $('statsGrid');
  SITE.stats.forEach(s => {
    statsGrid.appendChild(el('div', 'stat-item reveal', `<div class="num">${s.num}</div><div class="lbl">${s.label}</div>`));
  });

  // ── FEATURES ─────────────────────────────────────────────
  const featuresGrid = $('featuresGrid');
  SITE.features.forEach(f => {
    const card = el('div', `feature-card reveal${f.featured ? ' featured' : ''}`);
    card.innerHTML = `
      <div class="feature-icon ${f.featured ? 'fi-white' : f.iconBg}">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    `;
    featuresGrid.appendChild(card);
  });

  // ── JOURNEY ──────────────────────────────────────────────
  $('journeyHeading').textContent = SITE.journey.heading;
  $('journeySubtext').textContent = SITE.journey.subtext;

  const stepsEl = $('journeySteps');
  SITE.journey.steps.forEach((s, i) => {
    stepsEl.innerHTML += `
      <div class="step">
        <div class="step-num${s.active ? ' active' : ''}">${i + 1}</div>
        <div class="step-content"><h4>${s.title}</h4><p>${s.desc}</p></div>
      </div>`;
  });

  const pipelineEl = $('pipelineStages');
  SITE.journey.pipeline.forEach(p => {
    pipelineEl.innerHTML += `
      <div class="ps-row">
        <div class="ps-label">${p.label}</div>
        <div class="ps-bar-wrap"><div class="ps-bar-fill" style="width:${p.width};background:${p.color};"></div></div>
        <div class="ps-count">${p.count}</div>
      </div>`;
  });

  // ── PRICING ──────────────────────────────────────────────
  const plansGrid = $('plansGrid');
  SITE.plans.forEach(plan => {
    const card = el('div', `plan-card${plan.popular ? ' popular' : ''} reveal`);
    const ctaHref = plan.cta.href.startsWith('http')
      ? plan.cta.href
      : SITE.brand.appUrl + plan.cta.href;

    card.innerHTML = `
      ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
      <div class="plan-name">${plan.name}</div>
      <div class="plan-desc">${plan.desc}</div>
      <div class="plan-price">
        <span class="amount" data-monthly="${plan.monthly}" data-yearly="${plan.yearly || plan.monthly}">${plan.monthly}</span>
        <span class="period">/mo</span>
      </div>
      <div class="plan-limit">${plan.limit}</div>
      <ul class="plan-features">
        ${plan.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${ctaHref}" class="plan-cta plan-cta-${plan.cta.style}"${extAttr(plan.cta.external)}>${plan.cta.label}</a>
    `;
    plansGrid.appendChild(card);
  });

  // ── TESTIMONIALS ─────────────────────────────────────────
  const proofGrid = $('proofGrid');
  SITE.testimonials.forEach(t => {
    proofGrid.innerHTML += `
      <div class="proof-card reveal">
        <div class="proof-stars">★★★★★</div>
        <p class="proof-text">"${t.text}"</p>
        <div class="proof-author">
          <div class="proof-avatar" style="background:${t.color}">${t.initials}</div>
          <div><div class="proof-name">${t.name}</div><div class="proof-role">${t.role}</div></div>
        </div>
      </div>`;
  });

  // ── CTA STRIP ────────────────────────────────────────────
  $('ctaHeading').textContent  = SITE.cta.heading;
  $('ctaSubtext').textContent  = SITE.cta.subtext;
  $('ctaSignup').href          = SITE.brand.appUrl + '/register';
  $('ctaTgg').href             = SITE.brand.tggUrl;

  // ── FOOTER ───────────────────────────────────────────────
  // Logo
  $('footerLogoLink').href = '#';
  // Tagline — pulled from config.footer.description
  $('footerDesc').textContent   = SITE.footer.description;
  $('footerCredit').innerHTML   = `${SITE.footer.credit.replace('The German Guy (TGG)', `<a href="${SITE.brand.tggUrl}" target="_blank" rel="noopener">The German Guy (TGG)</a>`)}`;
  $('footerCopyright').textContent = `© ${new Date().getFullYear()} ${SITE.brand.name} · CRM by TGG. All rights reserved.`;
  $('footerPrivacy').href = SITE.footer.links.privacy;
  $('footerTerms').href   = SITE.footer.links.terms;

  // Footer columns
  const footerColsEl = $('footerCols');
  SITE.footerCols.forEach(col => {
    const div = document.createElement('div');
    div.className = 'footer-col';
    div.innerHTML = `
      <h5>${col.heading}</h5>
      <ul>${col.links.map(l => `<li><a href="${l.href}"${extAttr(l.external)}>${l.label}</a></li>`).join('')}</ul>
    `;
    footerColsEl.appendChild(div);
  });

  // ── SCROLL REVEAL ────────────────────────────────────────
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ── NAV SCROLL SHADOW ────────────────────────────────────
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });

  // ── MOBILE MENU ──────────────────────────────────────────
  let menuOpen = false;
  window.toggleMenu = () => {
    menuOpen = !menuOpen;
    $('navLinks').classList.toggle('open', menuOpen);
    $('navCtas').classList.toggle('open', menuOpen);
  };

  // ── PRICING TOGGLE ───────────────────────────────────────
  window.setPricing = (mode) => {
    const isYearly = mode === 'yearly';
    $('monthlyBtn').classList.toggle('active', !isYearly);
    $('yearlyBtn').classList.toggle('active', isYearly);

    document.querySelectorAll('.plan-price .amount').forEach(el => {
      el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
    });
    document.querySelectorAll('.plan-price .period').forEach(el => {
      el.textContent = isYearly ? '/mo (billed yearly)' : '/mo';
    });
  };
});
