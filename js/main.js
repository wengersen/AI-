/**
 * ========================================
 * AI工作应用汇报 - 交互逻辑
 * ======================================== 
 */

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  initInteractions();
});

// ==========================================
// 渲染页面内容
// ==========================================
function renderPage() {
  const data = siteContent;

  // Hero
  renderHero(data.hero);

  // Section 1: AI应用实践
  renderSection1(data.section1);

  // Section 2: 知识管理
  renderSection2(data.section2);

  // Outlook
  renderOutlook(data.outlook);

  // Summary
  renderSummary(data.summary);
}

// ----- Hero -----
function renderHero(hero) {
  const el = document.getElementById('hero-title');
  if (el) el.textContent = hero.title;
  const sub = document.getElementById('hero-subtitle');
  if (sub) sub.textContent = hero.subtitle;
  const desc = document.getElementById('hero-description');
  if (desc) desc.textContent = hero.description;
}

// ----- Section 1 -----
function renderSection1(s1) {
  document.getElementById('s1-title').textContent = s1.title;
  document.getElementById('s1-subtitle').textContent = s1.subtitle;

  const tabsData = [
    { key: 'dubbing', data: s1.aiDubbing },
    { key: 'translation', data: s1.aiTranslation },
    { key: 'tools', data: s1.aiTools },
    { key: 'film', data: s1.aiFilm },
    { key: 'video', data: s1.aiVideo }
  ];

  // Render tab buttons
  const tabsNav = document.getElementById('tabs-nav');
  tabsNav.innerHTML = '';
  tabsData.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn${tab.data.isFeatured ? ' featured' : ''}${tab.key === 'tools' ? ' active' : ''}`;
    btn.dataset.tab = tab.key;
    btn.innerHTML = `<span>${tab.data.icon}</span> ${tab.data.title}`;
    tabsNav.appendChild(btn);
  });

  // Render tab contents
  const tabsContent = document.getElementById('tabs-content');
  tabsContent.innerHTML = '';
  tabsData.forEach(tab => {
    const div = document.createElement('div');
    div.className = `tab-content${tab.key === 'tools' ? ' active' : ''}`;
    div.id = `tab-${tab.key}`;

    if (tab.data.isFeatured) {
      div.innerHTML = renderFeaturedTab(tab.data);
    } else {
      div.innerHTML = renderNormalTab(tab.data);
    }
    tabsContent.appendChild(div);
  });
}

function renderNormalTab(data) {
  return `
    <div class="card fade-in">
      <span class="card-icon">${data.icon}</span>
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <ul class="highlights">
        ${data.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      ${data.cases && data.cases.length > 0 ? `
        <div class="cases-grid">
          ${data.cases.map(c => renderCaseCard(c)).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderFeaturedTab(data) {
  let html = `
    <div class="card featured fade-in">
      <span class="card-icon">${data.icon}</span>
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <ul class="highlights">
        ${data.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `;

  // Detailed sections
  if (data.detailedSections && data.detailedSections.length > 0) {
    data.detailedSections.forEach((section, i) => {
      html += `
        <div class="detailed-section fade-in" style="transition-delay: ${i * 0.1}s">
          <div class="detail-text">
            <h3>${section.title}</h3>
            <p>${section.content}</p>
          </div>
          <div class="detail-media">
            ${renderMedia(section.image, section.video, '添加图片或视频')}
          </div>
        </div>
      `;
    });
  }

  // Cases
  if (data.cases && data.cases.length > 0) {
    html += `
      <h3 style="font-size:1.3rem;font-weight:700;margin-top:20px;margin-bottom:8px;">案例展示</h3>
      <div class="cases-grid">
        ${data.cases.map(c => renderCaseCard(c)).join('')}
      </div>
    `;
  }

  return html;
}

function renderCaseCard(c) {
  return `
    <div class="case-card fade-in">
      <div class="case-media">
        ${renderMedia(c.image, c.video, '添加案例图片/视频')}
      </div>
      <div class="case-body">
        <h4>${c.title}</h4>
        <p>${c.description}</p>
      </div>
    </div>
  `;
}

function renderMedia(image, video, placeholder) {
  if (video) {
    return `<video controls preload="metadata" src="${video}"></video>`;
  }
  if (image) {
    return `<img src="${image}" alt="" class="lightbox-img" style="cursor:zoom-in;">`;
  }
  return `<span class="placeholder-text">📎 ${placeholder}</span>`;
}

// ----- Section 2 -----
function renderSection2(s2) {
  document.getElementById('s2-title').textContent = s2.title;
  document.getElementById('s2-subtitle').textContent = s2.subtitle;

  // Overview Image
  const s2Header = document.querySelector('#section2 .section-header');
  if (s2.overviewImage && s2Header) {
    const overviewDiv = document.createElement('div');
    overviewDiv.className = 'fade-in';
    overviewDiv.style.cssText = 'text-align:center;margin-bottom:48px;';
    overviewDiv.innerHTML = `<img src="${s2.overviewImage}" alt="知识管理总览" class="lightbox-img" style="cursor:zoom-in;max-width:900px;width:100%;border-radius:16px;border:1px solid var(--border);box-shadow:var(--shadow);">`;
    s2Header.after(overviewDiv);
  }

  // NotebookLM
  const nlm = s2.notebookLM;
  const nlmEl = document.getElementById('notebooklm-card');
  nlmEl.innerHTML = `
    <div class="card-header">
      <span class="icon">${nlm.icon}</span>
      <h3>${nlm.title}</h3>
    </div>
    <p>${nlm.description}</p>
    ${nlm.overviewImage ? `<img src="${nlm.overviewImage}" alt="${nlm.title} 概览" class="lightbox-img" style="cursor:zoom-in;width:100%;margin-bottom:24px;border-radius:12px;border:1px solid var(--border);">` : ''}
    <div class="features-list">
      ${nlm.features.map(f => `
        <div class="feature-item">
          <div class="feature-dot"></div>
          <div>
            <h4>${f.title}</h4>
            <p>${f.description}</p>
            ${f.image ? `<img src="${f.image}" alt="${f.title}" class="feature-img lightbox-img" style="cursor:zoom-in;">` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    ${nlm.tips ? `
      <div class="tips-box">
        <h4>💡 使用技巧</h4>
        <ul>${nlm.tips.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    ` : ''}
    ${nlm.cases && nlm.cases.length > 0 ? `
      <div class="cases-grid" style="margin-top:24px;">
        ${nlm.cases.map(c => renderCaseCard(c)).join('')}
      </div>
    ` : ''}
  `;

  // Obsidian
  const obs = s2.obsidian;
  const obsEl = document.getElementById('obsidian-card');
  obsEl.innerHTML = `
    <div class="card-header">
      <span class="icon">${obs.icon}</span>
      <h3>${obs.title}</h3>
    </div>
    <p>${obs.description}</p>
    ${obs.overviewImage ? `<img src="${obs.overviewImage}" alt="${obs.title} 概览" class="lightbox-img" style="cursor:zoom-in;width:100%;margin-bottom:24px;border-radius:12px;border:1px solid var(--border);">` : ''}
    <div class="features-list">
      ${obs.features.map(f => `
        <div class="feature-item">
          <div class="feature-dot"></div>
          <div>
            <h4>${f.title}</h4>
            <p>${f.description}</p>
            ${f.image ? `<img src="${f.image}" alt="${f.title}" class="feature-img lightbox-img" style="cursor:zoom-in;">` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    ${obs.plugins ? `
      <div class="plugins-grid">
        ${obs.plugins.map(p => `
          <div class="plugin-tag">
            <div class="plugin-name">${p.name}</div>
            <div class="plugin-desc">${p.desc}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
    ${obs.cases && obs.cases.length > 0 ? `
      <div class="cases-grid" style="margin-top:24px;">
        ${obs.cases.map(c => renderCaseCard(c)).join('')}
      </div>
    ` : ''}
  `;

  // Workflow
  const wf = s2.workflow;
  const wfEl = document.getElementById('workflow-section');
  wfEl.innerHTML = `
    <h3>${wf.title}</h3>
    <p>${wf.description}</p>
    ${wf.image ? `<img src="${wf.image}" alt="${wf.title}" class="lightbox-img" style="cursor:zoom-in;width:100%;margin-bottom:32px;border-radius:12px;border:1px solid var(--border);">` : ''}
    <div class="workflow-steps">
      ${wf.steps.map(s => `
        <div class="workflow-step fade-in">
          <div class="step-number">${s.step}</div>
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// ----- Outlook -----
function renderOutlook(outlook) {
  document.getElementById('outlook-title').textContent = outlook.title;
  document.getElementById('outlook-subtitle').textContent = outlook.subtitle;

  const grid = document.getElementById('outlook-grid');
  grid.innerHTML = outlook.items.map((item, i) => {
    // SVG icons for each direction
    const svgIcons = {
      '🔍': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6366f1"/><stop offset="100%" style="stop-color:#818cf8"/></linearGradient></defs>
        <rect x="10" y="15" width="60" height="75" rx="4" fill="none" stroke="url(#g1)" stroke-width="3"/>
        <line x1="20" y1="30" x2="60" y2="30" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="20" y1="42" x2="55" y2="42" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
        <line x1="20" y1="54" x2="50" y2="54" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
        <line x1="20" y1="66" x2="45" y2="66" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round" opacity="0.3"/>
        <circle cx="82" cy="68" r="22" fill="none" stroke="url(#g1)" stroke-width="3.5"/>
        <line x1="98" y1="84" x2="112" y2="98" stroke="url(#g1)" stroke-width="4" stroke-linecap="round"/>
        <path d="M76 62 L80 68 L90 58" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      '🔤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f59e0b"/><stop offset="100%" style="stop-color:#f97316"/></linearGradient></defs>
        <rect x="10" y="10" width="100" height="70" rx="8" fill="none" stroke="url(#g2)" stroke-width="3"/>
        <text x="30" y="52" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="url(#g2)">A</text>
        <text x="58" y="52" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="url(#g2)">B</text>
        <rect x="25" y="60" width="38" height="4" rx="2" fill="#ef4444" opacity="0.7"/>
        <path d="M80 30 L90 25 L90 35 Z" fill="#10b981"/>
        <circle cx="90" cy="30" r="8" fill="none" stroke="#10b981" stroke-width="2"/>
        <rect x="20" y="90" width="80" height="6" rx="3" fill="url(#g2)" opacity="0.3"/>
        <rect x="20" y="100" width="60" height="6" rx="3" fill="url(#g2)" opacity="0.2"/>
      </svg>`,
      '🎨': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981"/><stop offset="100%" style="stop-color:#06b6d4"/></linearGradient></defs>
        <rect x="15" y="15" width="55" height="90" rx="6" fill="none" stroke="url(#g3)" stroke-width="3"/>
        <rect x="22" y="25" width="41" height="30" rx="3" fill="url(#g3)" opacity="0.15"/>
        <text x="30" y="46" font-family="Arial,sans-serif" font-size="14" fill="url(#g3)" font-weight="bold">中文</text>
        <path d="M72 45 L85 35 L85 55 Z" fill="url(#g3)" opacity="0.6"/>
        <circle cx="98" cy="45" r="16" fill="none" stroke="url(#g3)" stroke-width="3"/>
        <path d="M92 45 L96 49 L106 39" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="22" y="65" width="41" height="5" rx="2.5" fill="url(#g3)" opacity="0.3"/>
        <rect x="22" y="75" width="30" height="5" rx="2.5" fill="url(#g3)" opacity="0.2"/>
        <circle cx="95" cy="85" r="12" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 3"/>
        <text x="90" y="89" font-family="Arial,sans-serif" font-size="11" fill="#f59e0b" font-weight="bold">!</text>
      </svg>`,
      '🔗': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ef4444"/><stop offset="100%" style="stop-color:#f97316"/></linearGradient></defs>
        <rect x="10" y="20" width="35" height="35" rx="6" fill="none" stroke="url(#g4)" stroke-width="3"/>
        <rect x="55" y="20" width="35" height="35" rx="6" fill="none" stroke="url(#g4)" stroke-width="3"/>
        <rect x="10" y="65" width="35" height="35" rx="6" fill="none" stroke="url(#g4)" stroke-width="3"/>
        <rect x="55" y="65" width="35" height="35" rx="6" fill="none" stroke="url(#g4)" stroke-width="3"/>
        <line x1="45" y1="37" x2="55" y2="37" stroke="url(#g4)" stroke-width="2.5" stroke-dasharray="3 2"/>
        <line x1="27" y1="55" x2="27" y2="65" stroke="url(#g4)" stroke-width="2.5" stroke-dasharray="3 2"/>
        <line x1="72" y1="55" x2="72" y2="65" stroke="url(#g4)" stroke-width="2.5" stroke-dasharray="3 2"/>
        <line x1="45" y1="82" x2="55" y2="82" stroke="url(#g4)" stroke-width="2.5" stroke-dasharray="3 2"/>
        <circle cx="100" cy="25" r="12" fill="none" stroke="#10b981" stroke-width="2.5"/>
        <path d="M95 25 L98 28 L106 20" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="100" cy="95" r="12" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="96" y="100" font-family="Arial,sans-serif" font-size="14" fill="#f59e0b" font-weight="bold">!</text>
      </svg>`
    };

    const svg = svgIcons[item.icon] || '';

    return `
      <div class="outlook-card fade-in" style="transition-delay:${i * 0.15}s;--card-color:${item.color}">
        <div class="outlook-card-icon">
          ${svg}
        </div>
        <div class="outlook-card-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div class="outlook-card-badge">${item.icon}</div>
      </div>
    `;
  }).join('');
}

// ----- Summary -----
function renderSummary(summary) {
  document.getElementById('summary-title').textContent = summary.title;
  const pointsEl = document.getElementById('summary-points');
  pointsEl.innerHTML = summary.points.map((p, i) => `
    <div class="summary-point fade-in" style="transition-delay: ${i * 0.1}s">
      <span class="point-num">${i + 1}</span>
      <p>${p}</p>
    </div>
  `).join('');
  document.getElementById('closing-message').textContent = summary.closingMessage;
}


// ==========================================
// 交互逻辑
// ==========================================
function initInteractions() {
  initTabs();
  initScrollAnimations();
  initLightbox();
  initThemeToggle();
  initBackToTop();
  initMobileMenu();
  initNavHighlight();
}

// ----- Tabs -----
function initTabs() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const tabKey = btn.dataset.tab;

    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const target = document.getElementById(`tab-${tabKey}`);
    if (target) {
      target.classList.add('active');
      // Trigger animations for new tab content
      target.querySelectorAll('.fade-in').forEach(el => {
        el.classList.remove('visible');
        setTimeout(() => checkVisibility(el), 50);
      });
    }
  });
}

// ----- Scroll Animations -----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });

  // Re-observe dynamically added elements
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.fade-in:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

function checkVisibility(el) {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    el.classList.add('visible');
  }
}

// ----- Lightbox -----
function initLightbox() {
  const overlay = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-img')) {
      lightboxImg.src = e.target.src;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// ----- Theme Toggle -----
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
    toggle.textContent = stored === 'light' ? '🌙' : '☀️';
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    toggle.textContent = next === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', next);
  });
}

// ----- Back to Top -----
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ----- Mobile Menu -----
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const links = document.getElementById('nav-links');

  if (btn) {
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }
}

// ----- Nav Highlight -----
function initNavHighlight() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
