/* =========================================================
   CHATUBA DE NILÓPOLIS - SCRIPT PRINCIPAL
   ========================================================= */

/* ===================== DADOS ===================== */

// Categorias da loja
const categorias = [
  { id: 'cimento',    nome: 'Cimento & Argamassa', icone: 'fa-cubes' },
  { id: 'tinta',      nome: 'Tintas & Pintura',    icone: 'fa-paint-roller' },
  { id: 'hidraulica', nome: 'Hidráulica',          icone: 'fa-faucet' },
  { id: 'eletrica',   nome: 'Elétrica',            icone: 'fa-bolt' },
  { id: 'ferramentas',nome: 'Ferramentas',         icone: 'fa-screwdriver-wrench' },
  { id: 'acabamento', nome: 'Acabamento',          icone: 'fa-layer-group' },
  { id: 'madeira',    nome: 'Madeiras',            icone: 'fa-tree' },
  { id: 'tijolos',    nome: 'Tijolos & Blocos',    icone: 'fa-cube' }
];

// Produtos da loja
const produtos = [
  {
    id: 1,
    nome: 'Cimento CP II 50kg',
    desc: 'Cimento Portland composto, ideal para obras em geral.',
    preco: 42.90,
    precoAntigo: 49.90,
    categoria: 'cimento',
    icone: 'fa-cubes',
    oferta: true,
    avaliacao: 4.8
  },
  {
    id: 2,
    nome: 'Argamassa AC-II 20kg',
    desc: 'Argamassa colante para assentamento de pisos e azulejos.',
    preco: 24.50,
    precoAntigo: 29.90,
    categoria: 'cimento',
    icone: 'fa-fill-drip',
    oferta: true,
    avaliacao: 4.6
  },
  {
    id: 3,
    nome: 'Tinta Acrílica Branca 18L',
    desc: 'Tinta acrílica premium para paredes internas e externas.',
    preco: 189.90,
    precoAntigo: 229.90,
    categoria: 'tinta',
    icone: 'fa-paint-roller',
    oferta: true,
    avaliacao: 4.9
  },
  {
    id: 4,
    nome: 'Esmalte Sintético 3,6L',
    desc: 'Esmalte brilhante para madeiras e metais.',
    preco: 79.90,
    precoAntigo: 94.90,
    categoria: 'tinta',
    icone: 'fa-brush',
    oferta: false,
    avaliacao: 4.5
  },
  {
    id: 5,
    nome: 'Tubo PVC Soldável 25mm',
    desc: 'Tubo PVC para instalações hidráulicas — barra de 6m.',
    preco: 18.90,
    precoAntigo: null,
    categoria: 'hidraulica',
    icone: 'fa-faucet',
    oferta: false,
    avaliacao: 4.4
  },
  {
    id: 6,
    nome: 'Caixa d\'Água Polietileno 500L',
    desc: 'Caixa d\'água com tampa, resistente aos raios UV.',
    preco: 349.90,
    precoAntigo: 419.90,
    categoria: 'hidraulica',
    icone: 'fa-water',
    oferta: true,
    avaliacao: 4.7
  },
  {
    id: 7,
    nome: 'Fio Flexível 2,5mm 100m',
    desc: 'Cabo flexível de cobre para instalações elétricas.',
    preco: 159.90,
    precoAntigo: null,
    categoria: 'eletrica',
    icone: 'fa-plug',
    oferta: false,
    avaliacao: 4.6
  },
  {
    id: 8,
    nome: 'Disjuntor Bipolar 40A',
    desc: 'Disjuntor termomagnético bipolar DIN.',
    preco: 32.90,
    precoAntigo: 39.90,
    categoria: 'eletrica',
    icone: 'fa-toggle-on',
    oferta: true,
    avaliacao: 4.5
  },
  {
    id: 9,
    nome: 'Furadeira de Impacto 650W',
    desc: 'Furadeira com velocidade variável e função reversível.',
    preco: 279.90,
    precoAntigo: 349.90,
    categoria: 'ferramentas',
    icone: 'fa-screwdriver-wrench',
    oferta: true,
    avaliacao: 4.8
  },
  {
    id: 10,
    nome: 'Jogo de Chaves de Fenda 6pçs',
    desc: 'Kit de chaves de fenda e philips com cabo emborrachado.',
    preco: 49.90,
    precoAntigo: 64.90,
    categoria: 'ferramentas',
    icone: 'fa-toolbox',
    oferta: false,
    avaliacao: 4.3
  },
  {
    id: 11,
    nome: 'Porcelanato Acetinado 80x80',
    desc: 'Porcelanato acetinado retificado — caixa 1,28m².',
    preco: 89.90,
    precoAntigo: 119.90,
    categoria: 'acabamento',
    icone: 'fa-border-all',
    oferta: true,
    avaliacao: 4.7
  },
  {
    id: 12,
    nome: 'Rejunte Flexível 5kg',
    desc: 'Rejunte flexível à base de cimento para pisos e paredes.',
    preco: 34.90,
    precoAntigo: null,
    categoria: 'acabamento',
    icone: 'fa-fill',
    oferta: false,
    avaliacao: 4.4
  },
  {
    id: 13,
    nome: 'Compensado Naval 15mm',
    desc: 'Compensado resistente à umidade — chapa 2,20x1,60m.',
    preco: 189.90,
    precoAntigo: 219.90,
    categoria: 'madeira',
    icone: 'fa-tree',
    oferta: false,
    avaliacao: 4.5
  },
  {
    id: 14,
    nome: 'Tijolo Baiano 8 Furos',
    desc: 'Tijolo cerâmico 9x19x19cm — milheiro.',
    preco: 899.90,
    precoAntigo: 999.90,
    categoria: 'tijolos',
    icone: 'fa-cube',
    oferta: true,
    avaliacao: 4.6
  },
  {
    id: 15,
    nome: 'Bloco de Concreto 14x19x39',
    desc: 'Bloco estrutural de concreto — unidade.',
    preco: 3.49,
    precoAntigo: null,
    categoria: 'tijolos',
    icone: 'fa-cubes-stacked',
    oferta: false,
    avaliacao: 4.2
  },
  {
    id: 16,
    nome: 'Verniz Marítimo 3,6L',
    desc: 'Verniz brilhante com proteção UV para madeiras.',
    preco: 119.90,
    precoAntigo: 149.90,
    categoria: 'tinta',
    icone: 'fa-spray-can',
    oferta: true,
    avaliacao: 4.6
  }
];

/* ===================== ESTADO ===================== */
let carrinho = [];
let favoritos = [];
let filtroAtual = 'all';
let termoBusca = '';

/* ===================== UTILITÁRIOS ===================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Formata valor em Real brasileiro
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

// Mostra toast (notificação)
function mostrarToast(mensagem, icone = 'fa-check-circle') {
  const toast = $('#toast');
  toast.innerHTML = `<i class="fas ${icone}"></i> ${mensagem}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Salva e carrega do localStorage
function salvarDados() {
  localStorage.setItem('chatuba_carrinho', JSON.stringify(carrinho));
  localStorage.setItem('chatuba_favoritos', JSON.stringify(favoritos));
}

function carregarDados() {
  try {
    const c = JSON.parse(localStorage.getItem('chatuba_carrinho'));
    const f = JSON.parse(localStorage.getItem('chatuba_favoritos'));
    if (Array.isArray(c)) carrinho = c;
    if (Array.isArray(f)) favoritos = f;
  } catch (e) {
    carrinho = [];
    favoritos = [];
  }
}

/* ===================== RENDERIZAÇÃO ===================== */

// Renderiza categorias
function renderizarCategorias() {
  const grid = $('#categoriesGrid');
  grid.innerHTML = categorias.map(cat => `
    <div class="category-card" data-cat="${cat.id}">
      <i class="fas ${cat.icone}"></i>
      <h4>${cat.nome}</h4>
    </div>
  `).join('');

  // Clique na categoria filtra os produtos
  $$('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      filtroAtual = cat;
      atualizarFiltrosAtivos();
      renderizarProdutos();
      document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
      mostrarToast(`Filtrando por: ${categorias.find(c => c.id === cat).nome}`, 'fa-filter');
    });
  });
}

// Cria o HTML de um card de produto
function criarCardProduto(p) {
  const favorito = favoritos.includes(p.id);
  const temDesconto = p.precoAntigo && p.precoAntigo > p.preco;
  const parcelas = (p.preco / 12).toFixed(2);

  return `
    <div class="product-card" data-id="${p.id}">
      ${temDesconto ? '<span class="product-badge">Oferta</span>' : ''}
      <button class="fav-toggle ${favorito ? 'active' : ''}" data-fav="${p.id}" title="Favoritar">
        <i class="fas fa-heart"></i>
      </button>
      <div class="product-image">
        <i class="fas ${p.icone}"></i>
      </div>
      <div class="product-info">
        <h4>${p.nome}</h4>
        <p class="product-desc">${p.desc}</p>
        <div class="product-price">
          ${temDesconto ? `<span class="old-price">${formatarPreco(p.precoAntigo)}</span>` : ''}
          <span class="new-price">${formatarPreco(p.preco)}</span>
          <span class="installments">
            <i class="fas fa-credit-card"></i> 12x de ${formatarPreco(parcelas)}
          </span>
        </div>
      </div>
      <button class="add-cart-btn" data-add="${p.id}">
        <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
      </button>
    </div>
  `;
}

// Renderiza produtos com base em filtro + busca
function renderizarProdutos() {
  const grid = $('#productsGrid');
  let lista = produtos;

  if (filtroAtual !== 'all') {
    lista = lista.filter(p => p.categoria === filtroAtual);
  }

  if (termoBusca.trim() !== '') {
    const termo = termoBusca.toLowerCase();
    lista = lista.filter(p =>
      p.nome.toLowerCase().includes(termo) ||
      p.desc.toLowerCase().includes(termo) ||
      p.categoria.toLowerCase().includes(termo)
    );
  }

  if (lista.length === 0) {
    grid.innerHTML = `
      <p style="grid-column:1/-1;text-align:center;color:#8a97a5;padding:40px;">
        <i class="fas fa-search" style="font-size:2rem;display:block;margin-bottom:10px;"></i>
        Nenhum produto encontrado.
      </p>`;
    return;
  }

  grid.innerHTML = lista.map(criarCardProduto).join('');
  ativarEventosProdutos();
}

// Renderiza ofertas (produtos com oferta=true)
function renderizarOfertas() {
  const grid = $('#offersGrid');
  const lista = produtos.filter(p => p.oferta);
  grid.innerHTML = lista.map(criarCardProduto).join('');
  ativarEventosProdutos();
}

// Ativa eventos dentro dos cards de produto
function ativarEventosProdutos() {
  // Botão adicionar ao carrinho
  $$('[data-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.add);
      adicionarAoCarrinho(id);
    });
  });

  // Botão favoritar
  $$('[data-fav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.fav);
      toggleFavorito(id);
    });
  });
}

/* ===================== FILTROS ===================== */
function atualizarFiltrosAtivos() {
  $$('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filtroAtual);
  });
}

function configurarFiltros() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtroAtual = btn.dataset.filter;
      atualizarFiltrosAtivos();
      renderizarProdutos();
    });
  });
}

/* ===================== BUSCA ===================== */
function configurarBusca() {
  const input = $('#searchInput');
  const btn = $('#searchBtn');

  const executarBusca = () => {
    termoBusca = input.value;
    renderizarProdutos();
    if (termoBusca.trim()) {
      document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
      mostrarToast(`Buscando por: "${termoBusca}"`, 'fa-search');
    }
  };

  btn.addEventListener('click', executarBusca);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executarBusca();
  });
  input.addEventListener('input', () => {
    termoBusca = input.value;
    renderizarProdutos();
  });
}

/* ===================== CARRINHO ===================== */
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  const item = carrinho.find(i => i.id === id);
  if (item) {
    item.qtd++;
  } else {
    carrinho.push({ id, qtd: 1 });
  }

  salvarDados();
  atualizarContadores();
  renderizarCarrinho();
  mostrarToast(`${produto.nome} adicionado!`, 'fa-cart-plus');
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(i => i.id !== id);
  salvarDados();
  atualizarContadores();
  renderizarCarrinho();
  mostrarToast('Item removido do carrinho.', 'fa-trash');
}

function alterarQtd(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) {
    removerDoCarrinho(id);
    return;
  }
  salvarDados();
  atualizarContadores();
  renderizarCarrinho();
}

function calcularTotal() {
  return carrinho.reduce((soma, item) => {
    const p = produtos.find(pr => pr.id === item.id);
    return soma + (p ? p.preco * item.qtd : 0);
  }, 0);
}

function calcularQtdTotal() {
  return carrinho.reduce((soma, item) => soma + item.qtd, 0);
}

function renderizarCarrinho() {
  const container = $('#cartItems');

  if (carrinho.length === 0) {
    container.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
    $('#cartTotal').textContent = formatarPreco(0);
    return;
  }

  container.innerHTML = carrinho.map(item => {
    const p = produtos.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-icon"><i class="fas ${p.icone}"></i></div>
        <div class="cart-item-info">
          <h5>${p.nome}</h5>
          <span>${formatarPreco(p.preco * item.qtd)}</span>
        </div>
        <div class="cart-item-controls">
          <button data-menos="${p.id}"><i class="fas fa-minus"></i></button>
          <span>${item.qtd}</span>
          <button data-mais="${p.id}"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    `;
  }).join('');

  // Eventos de + e -
  $$('[data-mais]').forEach(b => b.addEventListener('click', () => alterarQtd(parseInt(b.dataset.mais), 1)));
  $$('[data-menos]').forEach(b => b.addEventListener('click', () => alterarQtd(parseInt(b.dataset.menos), -1)));

  $('#cartTotal').textContent = formatarPreco(calcularTotal());
}

/* ===================== FAVORITOS ===================== */
function toggleFavorito(id) {
  const idx = favoritos.indexOf(id);
  const produto = produtos.find(p => p.id === id);

  if (idx > -1) {
    favoritos.splice(idx, 1);
    mostrarToast('Removido dos favoritos.', 'fa-heart-broken');
  } else {
    favoritos.push(id);
    mostrarToast(`${produto.nome} favoritado!`, 'fa-heart');
  }

  salvarDados();
  atualizarContadores();
  renderizarProdutos();
  renderizarOfertas();
}

/* ===================== CONTADORES ===================== */
function atualizarContadores() {
  $('#cartCount').textContent = calcularQtdTotal();
  $('#favCount').textContent = favoritos.length;
}

/* ===================== SIDEBAR CARRINHO ===================== */
function configurarSidebar() {
  const sidebar = $('#cartSidebar');
  const overlay = $('#overlay');

  const abrir = () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  };
  const fechar = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  };

  $('#cartBtn').addEventListener('click', abrir);
  $('#closeCart').addEventListener('click', fechar);
  overlay.addEventListener('click', fechar);

  $('#checkoutBtn').addEventListener('click', () => {
    if (carrinho.length === 0) {
      mostrarToast('Seu carrinho está vazio!', 'fa-exclamation-circle');
      return;
    }
    mostrarToast('Compra finalizada com sucesso! 🎉', 'fa-check-circle');
    carrinho = [];
    salvarDados();
    atualizarContadores();
    renderizarCarrinho();
    setTimeout(fechar, 1200);
  });

  // Botão favoritos — filtra favoritos
  $('#favBtn').addEventListener('click', () => {
    if (favoritos.length === 0) {
      mostrarToast('Você ainda não tem favoritos.', 'fa-heart');
      return;
    }
    const produtosFav = produtos.filter(p => favoritos.includes(p.id));
    const grid = $('#productsGrid');
    grid.innerHTML = produtosFav.map(criarCardProduto).join('');
    ativarEventosProdutos();
    filtroAtual = 'all';
    atualizarFiltrosAtivos();
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    mostrarToast(`Exibindo ${favoritos.length} favorito(s).`, 'fa-heart');
  });
}

/* ===================== INICIALIZAÇÃO ===================== */
function init() {
  carregarDados();
  renderizarCategorias();
  renderizarOfertas();
  renderizarProdutos();
  renderizarCarrinho();
  atualizarContadores();
  configurarFiltros();
  configurarBusca();
  configurarSidebar();

  console.log('%c🏗️ Chatuba de Nilópolis', 'color:#ff6b00;font-size:20px;font-weight:bold;');
  console.log('%cLoja carregada com sucesso!', 'color:#004a99;font-size:14px;');
  console.log(`📦 ${produtos.length} produtos | 🗂️ ${categorias.length} categorias`);
}

document.addEventListener('DOMContentLoaded', init);
