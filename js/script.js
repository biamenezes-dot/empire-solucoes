// ============================================
// EMPIRE SOLUÇÕES AUTOMOTIVAS - JAVASCRIPT
// Funcionalidades: Toggle de Tema, Scroll
// ============================================

// ============================================
// TEMA (MODO CLARO/ESCURO)
// ============================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Recuperar tema salvo do localStorage
const savedTheme = localStorage.getItem('theme') || 'light';

// Aplicar tema ao carregar a página
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    body.classList.remove('dark');
    htmlElement.setAttribute('data-theme', 'light');
  }
}

// Aplicar tema inicial
applyTheme(savedTheme);

// Toggle de tema ao clicar no botão
themeToggle.addEventListener('click', () => {
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

// ============================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignorar links vazios
    if (href === '#') return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// ANIMAÇÃO DE SCROLL REVEAL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos com animação
document.querySelectorAll('.service-card, .testimonial-card, .location-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// EFEITO DE SCROLL NO HEADER
// ============================================

const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
  }
  
  lastScrollTop = scrollTop;
});

// ============================================
// DETECÇÃO DE PREFERÊNCIA DE TEMA DO SISTEMA
// ============================================

// Se nenhum tema foi salvo, usar preferência do sistema
if (!localStorage.getItem('theme')) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = prefersDark ? 'dark' : 'light';
  applyTheme(systemTheme);
  localStorage.setItem('theme', systemTheme);
}

// Escutar mudanças de preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
  }
});

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// ANALYTICS E TRACKING (Opcional)
// ============================================

// Rastrear cliques em botões de CTA
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.textContent.trim();
    console.log(`Botão clicado: ${text}`);
    
    // Aqui você pode adicionar código de analytics
    // Ex: ga('send', 'event', 'cta', 'click', text);
  });
});

// ============================================
// PRELOAD DE RECURSOS
// ============================================

// Preload de imagens críticas
const criticalImages = [
  'images/hero-banner.jpg',
  'images/maintenance-service.jpg'
];

criticalImages.forEach(src => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
});

// ============================================
// INICIALIZAÇÃO
// ============================================

console.log('Empire Soluções Automotivas - Site carregado com sucesso!');
console.log('Tema atual:', localStorage.getItem('theme') || 'light');
