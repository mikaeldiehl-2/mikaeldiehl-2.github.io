// ===== CONFIGURAÇÕES =====
const WA_NUMBER = '5551993854242';

// ===== PRODUTOS =====
const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    desc: '256GB, Titânio Natural, câmera 48MP com zoom óptico 5x.',
    price: 'R$ 8.499,00',
    priceOld: 'R$ 9.999,00',
    priceNum: 8499,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
    tag: 'Em Destaque',
    tagType: '',
    category: 'smartphones',
    stars: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    desc: '512GB, 12GB RAM, S-Pen inclusa, tela Dynamic AMOLED 2X.',
    price: 'R$ 7.299,00',
    priceOld: 'R$ 8.499,00',
    priceNum: 7299,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    tag: 'Oferta',
    tagType: 'sale',
    category: 'smartphones',
    stars: 5,
    reviews: 94,
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    desc: 'Chip Apple M3, 16GB RAM, 512GB SSD, tela Liquid Retina 15".',
    price: 'R$ 12.499,00',
    priceOld: '',
    priceNum: 12499,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    tag: 'Novo',
    tagType: 'new',
    category: 'notebooks',
    stars: 5,
    reviews: 76,
  },
  {
    id: 4,
    name: 'AirPods Pro 2ª Geração',
    desc: 'Cancelamento ativo de ruído, Modo Transparência adaptativo, MagSafe.',
    price: 'R$ 1.899,00',
    priceOld: 'R$ 2.299,00',
    priceNum: 1899,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80',
    tag: 'Oferta',
    tagType: 'sale',
    category: 'audio',
    stars: 5,
    reviews: 215,
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    desc: 'GPS + Cellular, 45mm, sensor de temperatura, ECG e detecção de queda.',
    price: 'R$ 3.299,00',
    priceOld: 'R$ 3.899,00',
    priceNum: 3299,
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500&q=80',
    tag: 'Oferta',
    tagType: 'sale',
    category: 'smartwatches',
    stars: 4,
    reviews: 88,
  },
  {
    id: 6,
    name: 'PlayStation 5 Slim',
    desc: 'Console + 1 controle DualSense, leitor de disco, SSD 1TB.',
    price: 'R$ 4.199,00',
    priceOld: '',
    priceNum: 4199,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&q=80',
    tag: 'Novo',
    tagType: 'new',
    category: 'games',
    stars: 5,
    reviews: 163,
  },
  {
    id: 7,
    name: 'Monitor LG UltraWide 34"',
    desc: '34" Curvo, 144Hz, QHD, IPS, HDR10, conexão USB-C 90W.',
    price: 'R$ 2.799,00',
    priceOld: 'R$ 3.299,00',
    priceNum: 2799,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    tag: 'Oferta',
    tagType: 'sale',
    category: 'monitores',
    stars: 4,
    reviews: 52,
  },
  {
    id: 8,
    name: 'Dell XPS 15 2024',
    desc: 'Intel Core Ultra 7, RTX 4060, 32GB RAM, 1TB SSD, tela OLED 3.5K.',
    price: 'R$ 14.999,00',
    priceOld: '',
    priceNum: 14999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    tag: 'Premium',
    tagType: '',
    category: 'notebooks',
    stars: 5,
    reviews: 41,
  },
];

// ===== ESTADO DO FILTRO =====
let activeCategory = 'todos';

// ===== GERAR ESTRELAS =====
function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) => i < count ? '★' : '☆').join('');
}

// ===== GERAR URL WHATSAPP =====
function buildWaUrl(product) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no produto:\n\n*${product.name}*\nPreço: ${product.price}\n\nPoderia me dar mais informações?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

// ===== RENDERIZAR PRODUTOS =====
function renderProducts(filter = 'todos') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)">
        <div style="font-size:3rem;margin-bottom:12px">🔍</div>
        <p style="font-size:1rem">Nenhum produto encontrado nesta categoria.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-tag ${p.tagType}">${p.tag}</div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-rating">
          ${renderStars(p.stars)} <span>${p.reviews} avaliações</span>
        </div>
        <div class="product-price">
          <span class="price-main">${p.price}</span>
          ${p.priceOld ? `<span class="price-old">${p.priceOld}</span>` : ''}
        </div>
        <a
          href="${buildWaUrl(p)}"
          target="_blank"
          class="btn-buy"
          onclick="trackBuy('${p.name}')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar pelo WhatsApp
        </a>
      </div>
    </div>
  `).join('');

  // Clicar no card abre modal
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-buy')) return; // não abre modal se clicou no botão
      const id = parseInt(card.dataset.id);
      openModal(id);
    });
  });
}

// ===== FILTROS DE CATEGORIA =====
function applyFilter(category) {
  activeCategory = category;
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.toggle('active', c.dataset.category === category);
  });
  renderProducts(activeCategory);
  document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(initAnimations, 80);
}

function initCategoryFilters() {
  // Cards de categoria
  document.querySelectorAll('.cat-card').forEach(card => {
    if (card.dataset.category === 'todos') card.classList.add('active');
    card.addEventListener('click', () => applyFilter(card.dataset.category));
  });

  // Links do footer
  document.querySelectorAll('a[data-filter]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      applyFilter(link.dataset.filter);
    });
  });
}

// ===== MODAL =====
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;

  modalContent.innerHTML = `
    <img class="modal-img" src="${p.image}" alt="${p.name}" />
    <div class="product-tag ${p.tagType}" style="margin-bottom:8px">${p.tag}</div>
    <div class="modal-title">${p.name}</div>
    <div class="product-rating" style="margin-bottom:12px">
      ${renderStars(p.stars)} <span>${p.reviews} avaliações</span>
    </div>
    <div class="modal-desc">${p.desc}</div>
    <div class="modal-price">
      ${p.price}
      ${p.priceOld ? `<span style="font-size:1rem;color:var(--text-muted);text-decoration:line-through;margin-left:8px;-webkit-text-fill-color:var(--text-muted)">${p.priceOld}</span>` : ''}
    </div>
    <a
      href="${buildWaUrl(p)}"
      target="_blank"
      class="btn-buy modal-buy"
      onclick="trackBuy('${p.name}')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Comprar pelo WhatsApp
    </a>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== RASTREAR CLIQUES =====
function trackBuy(name) {
  console.log(`[Master Info.] Produto clicado: ${name}`);
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.style.background = 'rgba(15,15,26,0.97)';
  } else {
    header.style.background = 'rgba(15,15,26,0.85)';
  }
});

// ===== ANIMAÇÃO DE ENTRADA =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

function initAnimations() {
  document.querySelectorAll('.product-card, .about-card, .cat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCategoryFilters();
  setTimeout(initAnimations, 100);
});
