/* ==========================================================================
   CATÁLOGO DINÁMICO — 88 productos EPP (IDs 13-100)
   Imágenes: Unsplash & Pexels (licencia libre para uso comercial)
   ========================================================================== */

const U = 'https://images.unsplash.com/photo-';
const P = 'https://images.pexels.com/photos/';
const FMT = '?w=600&q=80&auto=format&fit=crop';
const PFMT = '/pexels-photo-';

const CATALOG_CATEGORIES = [
  {
    id: 'cat-pantalones',
    icon: 'fa-solid fa-shirt',
    label: 'Pantalones Tácticos & Camuflados',
    products: [
      { id:13, name:'Pantalón Camuflado Desierto',   price:95000,  badge:'bg-gold', badgeLabel:'Indumentaria', img: U+'1534350610265-a827ee50e7e8'+FMT },
      { id:14, name:'Pantalón Camuflado Camaleón',   price:95000,  badge:'bg-green',badgeLabel:'Indumentaria', img: U+'1516914280-e9d3b11aa897'+FMT },
      { id:15, name:'Pantalón Camuflado Pixelado',   price:98000,  badge:'bg-blue', badgeLabel:'Indumentaria', img: U+'1545569341-9eb8b30979d9'+FMT },
      { id:16, name:'Pantalón Camuflado Urbano',     price:98000,  badge:'bg-dark', badgeLabel:'Indumentaria', img: U+'1583744946564-b2ac4fa3e4c0'+FMT },
      { id:17, name:'Pantalón Táctico Negro',        price:90000,  badge:'bg-dark', badgeLabel:'Indumentaria', img: U+'1604176424472-9d3d32b39706'+FMT },
    ]
  },
  {
    id: 'cat-camisas',
    icon: 'fa-solid fa-shirt',
    label: 'Camisas Militares',
    products: [
      { id:18, name:'Camisa Militar M/L Verde Oliva',   price:75000, badge:'bg-green',badgeLabel:'Indumentaria', img: U+'1544367696-9a931a1d177e'+FMT },
      { id:19, name:'Camisa Militar M/L Camuflada',     price:78000, badge:'bg-green',badgeLabel:'Indumentaria', img: U+'1603808033176-9d2a5ccdc4bb'+FMT },
      { id:20, name:'Camisa Militar M/C Verde',         price:65000, badge:'bg-green',badgeLabel:'Indumentaria', img: U+'1516762689617-e1cffcef479d'+FMT },
      { id:21, name:'Camisa Militar M/C Negra',         price:65000, badge:'bg-dark', badgeLabel:'Indumentaria', img: U+'1583743814966-8c17e4e7930c'+FMT },
      { id:22, name:'Camisa Táctica de Combate',        price:85000, badge:'bg-blue', badgeLabel:'Indumentaria', img: U+'1591047139829-d91aecb6caea'+FMT },
    ]
  },
  {
    id: 'cat-chalecos',
    icon: 'fa-solid fa-shield-halved',
    label: 'Chalecos Tácticos & Antibalas',
    products: [
      { id:23, name:'Chaleco Antibalas Ligero S/M',     price:280000,badge:'bg-dark', badgeLabel:'EPP Premium',  img: U+'1620641788421-7a1c342ea42e'+FMT },
      { id:24, name:'Chaleco Antibalas Ligero L/XL',    price:290000,badge:'bg-dark', badgeLabel:'EPP Premium',  img: U+'1614850523296-d8c1af93d400'+FMT },
      { id:25, name:'Chaleco Táctico Multiusos Verde',  price:145000,badge:'bg-green',badgeLabel:'EPP Táctico',  img: U+'1553877522-43269d4ea984'+FMT },
    ]
  },
  {
    id: 'cat-gorras',
    icon: 'fa-solid fa-hat-cowboy',
    label: 'Gorras, Boinas & Sombreros',
    products: [
      { id:26, name:'Gorra Béisbol Verde Oliva',         price:35000, badge:'bg-green',badgeLabel:'Accesorio', img: U+'1588850561407-ed78c282e89b'+FMT },
      { id:27, name:'Gorra Béisbol Camuflaje Pixelado',  price:35000, badge:'bg-blue', badgeLabel:'Accesorio', img: U+'1521369909029-2afed882baaa'+FMT },
      { id:28, name:'Boina Militar Verde',               price:28000, badge:'bg-green',badgeLabel:'Accesorio', img: U+'1507003211169-0a1dd7228f2d'+FMT },
      { id:29, name:'Boina Militar Negra',               price:28000, badge:'bg-dark', badgeLabel:'Accesorio', img: U+'1517022812141-23620deff1e5'+FMT },
      { id:30, name:'Gorro Pescador Militar',            price:32000, badge:'bg-green',badgeLabel:'Accesorio', img: U+'1530541930197-ff16ac917b0e'+FMT },
      { id:31, name:'Gorro Pescador Camuflado',          price:32000, badge:'bg-gold', badgeLabel:'Accesorio', img: U+'1576991426774-2ced1862e26b'+FMT },
    ]
  },
  {
    id: 'cat-llaveros',
    icon: 'fa-solid fa-key',
    label: 'Llaveros & Accesorios Personalizados',
    products: [
      { id:32, name:'Llavero Mini Placa Militar',        price:15000, badge:'bg-gold', badgeLabel:'Llavero', img: U+'1579762715118-a6f1d4b934f1'+FMT },
      { id:33, name:'Llavero Forma Granada',             price:18000, badge:'bg-red',  badgeLabel:'Llavero', img: U+'1558618047-d7d7c6a09c22'+FMT },
      { id:34, name:'Llavero Inscripción Personalizada', price:20000, badge:'bg-gold', badgeLabel:'Llavero', img: U+'1568702846914-96b305d2aaeb'+FMT },
    ]
  },
  {
    id: 'cat-navajas',
    icon: 'fa-solid fa-khanda',
    label: 'Navajas & Herramientas de Corte',
    products: [
      { id:35, name:'Navaja Táctica Plegable Pequeña',   price:42000, badge:'bg-dark', badgeLabel:'Herramienta', img: U+'1593642632559-0c6d3fc62b89'+FMT },
      { id:36, name:'Navaja Táctica Plegable Grande',    price:68000, badge:'bg-dark', badgeLabel:'Herramienta', img: U+'1612831819821-00a06ad4fad8'+FMT },
      { id:37, name:'Machete Táctico con Funda',         price:85000, badge:'bg-dark', badgeLabel:'Herramienta', img: U+'1595424954374-1c4fb246cf7a'+FMT },
      { id:38, name:'Tarjeta Herramientas Multifunción', price:28000, badge:'bg-blue', badgeLabel:'Herramienta', img: U+'1563013544-824ae1b704d3'+FMT },
    ]
  },
  {
    id: 'cat-linternas',
    icon: 'fa-solid fa-lightbulb',
    label: 'Linternas & Iluminación Táctica',
    products: [
      { id:39, name:'Linterna Táctica Recargable USB',   price:58000, badge:'bg-blue', badgeLabel:'Iluminación', img: U+'1558618666-fcd25c85cd64'+FMT },
      { id:40, name:'Linterna Camping Multiusos 500lm',  price:42000, badge:'bg-blue', badgeLabel:'Iluminación', img: U+'1587300003306-d7b45eacfe6b'+FMT },
      { id:41, name:'Linterna Frontal LED Táctica',      price:38000, badge:'bg-blue', badgeLabel:'Iluminación', img: U+'1504386106-831c3f4fcf41'+FMT },
    ]
  },
  {
    id: 'cat-placas',
    icon: 'fa-solid fa-id-badge',
    label: 'Placas Militares Personalizadas',
    products: [
      { id:42, name:'Placa Militar Grabada Premium',     price:28000, badge:'bg-gold', badgeLabel:'Identificación', img: U+'1579762715118-a6f1d4b934f1'+FMT },
      { id:43, name:'Placa Militar Tipografía Script',   price:25000, badge:'bg-gold', badgeLabel:'Identificación', img: U+'1616400619175-5beda3a17896'+FMT },
    ]
  },
  {
    id: 'cat-morrales',
    icon: 'fa-solid fa-bag-shopping',
    label: 'Morrales, Mochilas & Bandoleras',
    products: [
      { id:44, name:'Morral Táctico Grande Verde',       price:118000,badge:'bg-green',badgeLabel:'Transporte', img: U+'1553062407-98eeb64c6a62'+FMT },
      { id:45, name:'Morral Táctico Grande Negro',       price:122000,badge:'bg-dark', badgeLabel:'Transporte', img: U+'1553062407-98eeb64c6a62'+FMT },
      { id:46, name:'Morral Táctico Pequeño Campamento', price:85000, badge:'bg-green',badgeLabel:'Transporte', img: U+'1622560480605-d83c661c8994'+FMT },
      { id:47, name:'Mochila de Campaña 60L',           price:155000,badge:'bg-blue', badgeLabel:'Transporte', img: U+'1491553895911-0055eca6402d'+FMT },
      { id:48, name:'Mochila Bandolera Táctica',        price:75000, badge:'bg-dark', badgeLabel:'Transporte', img: U+'1548036328-c9fa89d128fa'+FMT },
    ]
  },
  {
    id: 'cat-autodefensa',
    icon: 'fa-solid fa-person-running',
    label: 'Gadgets de Autodefensa',
    products: [
      { id:49, name:'Silbato Táctico Portátil',          price:12000, badge:'bg-blue', badgeLabel:'Autodefensa', img: U+'1576083955878-4f67ebe28d6f'+FMT },
      { id:50, name:'Alarma Personal 130dB',             price:22000, badge:'bg-red',  badgeLabel:'Autodefensa', img: U+'1585771724684-38269d6639fd'+FMT },
      { id:51, name:'Kit Supervivencia Completo',        price:95000, badge:'bg-green',badgeLabel:'Autodefensa', img: U+'1562654501-a0ccc0fc3fb1'+FMT },
      { id:52, name:'Kit Supervivencia Básico',          price:45000, badge:'bg-green',badgeLabel:'Autodefensa', img: U+'1519641471654-76ce0107ad1b'+FMT },
      { id:53, name:'Brújula Táctica Militar',           price:32000, badge:'bg-blue', badgeLabel:'Autodefensa', img: U+'1526772662000-3f88f10405ff'+FMT },
    ]
  },
  {
    id: 'cat-cinturones',
    icon: 'fa-solid fa-ring',
    label: 'Cinturones & Protección',
    products: [
      { id:54, name:'Cinturón Táctico Negro',            price:45000, badge:'bg-dark', badgeLabel:'Accesorio', img: U+'1553143820-6bb68bc45917'+FMT },
      { id:55, name:'Cinturón Táctico Verde Oliva',      price:45000, badge:'bg-green',badgeLabel:'Accesorio', img: U+'1553143820-6bb68bc45917'+FMT },
      { id:56, name:'Cinturón Utilidades Múltiples',     price:55000, badge:'bg-blue', badgeLabel:'Accesorio', img: U+'1600269452121-4f2416e55c28'+FMT },
      { id:57, name:'Rodilleras Tácticas Ajustables',    price:62000, badge:'bg-dark', badgeLabel:'Protección', img: U+'1627308595171-d1b5d67129c4'+FMT },
    ]
  },
  {
    id: 'cat-botas',
    icon: 'fa-solid fa-shoe-prints',
    label: 'Botas Militares',
    products: [
      { id:58, name:'Botas Militares Altas Negras',      price:220000,badge:'bg-dark', badgeLabel:'Calzado', img: U+'1449505278894-297fdb3edbc0'+FMT },
      { id:59, name:'Botas Militares Altas Verde Oliva', price:225000,badge:'bg-green',badgeLabel:'Calzado', img: U+'1560769629-975ec94e6a86'+FMT },
      { id:60, name:'Botas Militares Bajas Tácticas',    price:185000,badge:'bg-dark', badgeLabel:'Calzado', img: P+'1152077'+PFMT+'1152077.jpeg?w=600&h=400&fit=crop' },
    ]
  },
  {
    id: 'cat-bufandas',
    icon: 'fa-solid fa-scarf',
    label: 'Bufandas & Chalinas Tácticas',
    products: [
      { id:61, name:'Bufanda Táctica Camuflada',         price:35000, badge:'bg-green',badgeLabel:'Indumentaria', img: U+'1544966503-7ab70fe07774'+FMT },
      { id:62, name:'Bufanda Táctica Vintage',           price:35000, badge:'bg-gold', badgeLabel:'Indumentaria', img: U+'1576871337622-98d48d1cf531'+FMT },
      { id:63, name:'Chalina Militar Verde',             price:28000, badge:'bg-green',badgeLabel:'Indumentaria', img: U+'1517022812141-23620deff1e5'+FMT },
      { id:64, name:'Chalina Militar Negra',             price:28000, badge:'bg-dark', badgeLabel:'Indumentaria', img: U+'1583743814966-8c17e4e7930c'+FMT },
    ]
  },
  {
    id: 'cat-gafas',
    icon: 'fa-solid fa-glasses',
    label: 'Gafas Militares & Tácticas',
    products: [
      { id:65, name:'Gafas Sol Militares Polarizadas',   price:72000, badge:'bg-dark', badgeLabel:'Protección', img: U+'1511499767150-a48a237f0083'+FMT },
      { id:66, name:'Gafas Protección Táctica UV',       price:85000, badge:'bg-blue', badgeLabel:'Protección', img: U+'1572635196237-14b3f281503f'+FMT },
    ]
  },
  {
    id: 'cat-pulseras',
    icon: 'fa-solid fa-link',
    label: 'Pulseras Paracord & Accesorios',
    products: [
      { id:67, name:'Pulsera Paracord Negra',            price:22000, badge:'bg-dark', badgeLabel:'Accesorio', img: U+'1541178735493-479c1a27ed24'+FMT },
      { id:68, name:'Pulsera Paracord Verde',            price:22000, badge:'bg-green',badgeLabel:'Accesorio', img: U+'1541178735493-479c1a27ed24'+FMT },
      { id:69, name:'Pulsera Paracord Azul',             price:22000, badge:'bg-blue', badgeLabel:'Accesorio', img: U+'1541178735493-479c1a27ed24'+FMT },
      { id:70, name:'Mosquetón Táctico Aluminio',        price:18000, badge:'bg-dark', badgeLabel:'Accesorio', img: U+'1519641471654-76ce0107ad1b'+FMT },
    ]
  },
  {
    id: 'cat-guantes',
    icon: 'fa-solid fa-hand',
    label: 'Guantes & Polainas',
    products: [
      { id:71, name:'Guantes Tácticos Negros',           price:48000, badge:'bg-dark', badgeLabel:'Protección', img: U+'1600880292203-757bb62fe5a5'+FMT },
      { id:72, name:'Guantes Tácticos Verde Oliva',      price:48000, badge:'bg-green',badgeLabel:'Protección', img: U+'1600880292203-757bb62fe5a5'+FMT },
      { id:73, name:'Polainas Tácticas Ajustables',      price:38000, badge:'bg-dark', badgeLabel:'Protección', img: U+'1627308595171-d1b5d67129c4'+FMT },
    ]
  },
  {
    id: 'cat-electronica',
    icon: 'fa-solid fa-radio',
    label: 'Electrónica Táctica',
    products: [
      { id:74, name:'Radio Walkie Talkie Militar',       price:125000,badge:'bg-dark', badgeLabel:'Electrónica', img: U+'1516478177764-9fe5bd7e9717'+FMT },
      { id:75, name:'Reloj Táctico Digital',             price:95000, badge:'bg-dark', badgeLabel:'Electrónica', img: U+'1523275335684-37898b6baf30'+FMT },
      { id:76, name:'Reloj Análogo Militar',             price:115000,badge:'bg-gold', badgeLabel:'Electrónica', img: U+'1542496658-e33a3d9eca9a'+FMT },
      { id:77, name:'Cargador Solar Portátil',           price:75000, badge:'bg-green',badgeLabel:'Electrónica', img: U+'1472251164071-ff52e64b9059'+FMT },
      { id:78, name:'Batería Externa Táctica 20000mAh',  price:85000, badge:'bg-blue', badgeLabel:'Electrónica', img: U+'1574944985070-8f3ebc0780d0'+FMT },
    ]
  },
  {
    id: 'cat-campamento',
    icon: 'fa-solid fa-campground',
    label: 'Equipamiento de Campamento',
    products: [
      { id:79, name:'Cuerda Paracord 30m',               price:28000, badge:'bg-green',badgeLabel:'Campamento', img: U+'1587651122639-f5b7b1c5f54f'+FMT },
      { id:80, name:'Pala Plegable Multiusos',           price:45000, badge:'bg-dark', badgeLabel:'Campamento', img: U+'1504280390367-361c6d9f38f4'+FMT },
      { id:81, name:'Cantimplora Militar 1L',            price:35000, badge:'bg-blue', badgeLabel:'Campamento', img: U+'1523362628745-0c100150b504'+FMT },
      { id:82, name:'Kit Primeros Auxilios Compacto',    price:38000, badge:'bg-red',  badgeLabel:'Seguridad',   img: U+'1584432810601-6c7f27d2362b'+FMT },
      { id:83, name:'Manta de Emergencia Táctica',       price:22000, badge:'bg-gold', badgeLabel:'Campamento', img: U+'1504280390367-361c6d9f38f4'+FMT },
      { id:84, name:'Saco de Dormir Compacto',           price:145000,badge:'bg-blue', badgeLabel:'Campamento', img: U+'1496080174650-637dce9cc2d6'+FMT },
      { id:85, name:'Hacha de Campismo Táctica',         price:75000, badge:'bg-dark', badgeLabel:'Campamento', img: U+'1495584816685-4a0de8c12ab8'+FMT },
    ]
  },
  {
    id: 'cat-complementos',
    icon: 'fa-solid fa-box-open',
    label: 'Complementos & Kits Especiales',
    products: [
      { id:86, name:'Porta Documentos Táctico',          price:32000, badge:'bg-dark', badgeLabel:'Accesorio',  img: U+'1603808033176-9d2a5ccdc4bb'+FMT },
      { id:87, name:'Funda Táctica para Teléfono',       price:28000, badge:'bg-blue', badgeLabel:'Accesorio',  img: U+'1546868871-7041f2a55e12'+FMT },
      { id:88, name:'Manoplas Antiviento Militares',     price:38000, badge:'bg-dark', badgeLabel:'Protección', img: U+'1600880292203-757bb62fe5a5'+FMT },
      { id:89, name:'Porta Cargador Táctico MOLLE',      price:42000, badge:'bg-green',badgeLabel:'Accesorio',  img: U+'1553062407-98eeb64c6a62'+FMT },
      { id:90, name:'Parches Bordados Militares (Set)',  price:35000, badge:'bg-gold', badgeLabel:'Accesorio',  img: U+'1579762715118-a6f1d4b934f1'+FMT },
      { id:91, name:'Insignias de Rango Personalizadas', price:22000, badge:'bg-gold', badgeLabel:'Accesorio',  img: U+'1616400619175-5beda3a17896'+FMT },
      { id:92, name:'Cintas Elásticas Tácticas',         price:18000, badge:'bg-blue', badgeLabel:'Accesorio',  img: U+'1541178735493-479c1a27ed24'+FMT },
      { id:93, name:'Paraguas Táctico Resistente',       price:48000, badge:'bg-dark', badgeLabel:'Accesorio',  img: U+'1491553895911-0055eca6402d'+FMT },
      { id:94, name:'Porta Rifle Táctico Negro',         price:95000, badge:'bg-dark', badgeLabel:'Transporte', img: U+'1620641788421-7a1c342ea42e'+FMT },
      { id:95, name:'Malla de Camuflaje Personal',       price:55000, badge:'bg-green',badgeLabel:'Accesorio',  img: U+'1545569341-9eb8b30979d9'+FMT },
      { id:96, name:'Mascarilla Táctica N95 Militar',    price:25000, badge:'bg-blue', badgeLabel:'Protección', img: U+'1583743814966-8c17e4e7930c'+FMT },
      { id:97, name:'Casco Táctico Ligero',              price:185000,badge:'bg-dark', badgeLabel:'EPP Premium', img: U+'1614850523296-d8c1af93d400'+FMT },
      { id:98, name:'Gafas de Natación Militares',       price:35000, badge:'bg-blue', badgeLabel:'Protección', img: U+'1572635196237-14b3f281503f'+FMT },
      { id:99, name:'Set EPP Básico Familiar',           price:285000,badge:'bg-red',  badgeLabel:'Kit Completo',img: U+'1562654501-a0ccc0fc3fb1'+FMT },
      { id:100,name:'Kit Operativo Completo Premium',    price:450000,badge:'bg-dark', badgeLabel:'Kit Completo',img: U+'1614850523296-d8c1af93d400'+FMT },
    ]
  },
];

/* ---------- Registro en el objeto global PRODUCTS (para carrito) ---------- */
CATALOG_CATEGORIES.forEach(cat => {
  cat.products.forEach(p => {
    PRODUCTS[p.id] = { name: p.name, price: p.price, img: p.img };
  });
});

/* ---------- Función de renderizado de tarjeta de producto ---------- */
function buildProductCard(p) {
  const priceStr = '$' + p.price.toLocaleString('es-CO') + ' COP';
  return `
    <div class="product-card-item card-glass" data-id="${p.id}">
      <div class="product-image-box">
        <img src="${p.img}" alt="${p.name}" class="product-img product-img-cover" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&auto=format&fit=crop'">
        <span class="product-badge ${p.badge}">${p.badgeLabel}</span>
      </div>
      <div class="product-info-box">
        <h3 class="product-item-title">${p.name}</h3>
        <div class="product-price-row">
          <span class="product-price">${priceStr}</span>
          <button class="btn btn-add-cart btn-primary" onclick="addToCart(${p.id})">
            <i class="fa-solid fa-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </div>`;
}

/* ---------- Renderizado principal del catálogo ---------- */
function renderDynamicCatalog() {
  const container = document.getElementById('shop-dynamic-catalog');
  if (!container) return;

  let html = '';
  CATALOG_CATEGORIES.forEach(cat => {
    const cards = cat.products.map(buildProductCard).join('');
    html += `
      <div class="shop-category-header scroll-reveal">
        <i class="${cat.icon}"></i><span>${cat.label}</span>
      </div>
      <div class="shop-grid grid-4 scroll-reveal" style="margin-bottom:60px;">
        ${cards}
      </div>`;
  });

  container.innerHTML = html;

  // Re-observar los nuevos elementos con scroll-reveal
  if (window._scrollObserver) {
    container.querySelectorAll('.scroll-reveal').forEach(el => window._scrollObserver.observe(el));
  }
}

/* ---------- Ejecutar al cargar el DOM ---------- */
document.addEventListener('DOMContentLoaded', renderDynamicCatalog);
