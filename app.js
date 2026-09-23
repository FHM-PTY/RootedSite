const ROOTED = {
  brands: [
    {
      id: "bokkie",
      name: "Bokkie Tailors",
      initials: "BT",
      location: "Salt River · Cape Town",
      className: "clay",
      story: "Heavy-gauge workwear inspired by the industrial textile corridors of Cape Town.",
      founder: "Kobus van der Merwe",
      bio: "Bokkie Tailors builds durable chore jackets, utility vests and cotton duck trousers designed to age beautifully.",
      quote: "We want garments engineered like equipment — made here, built to last."
    },
    {
      id: "nkosi",
      name: "Nkosi Studio",
      initials: "NS",
      location: "Maboneng · Johannesburg",
      className: "moss",
      story: "Architectural streetwear shaped by Joburg concrete, music and youth culture.",
      founder: "Sipho Nkosi",
      bio: "Oversized silhouettes, heavyweight fleece and sharp utilitarian layers made in Gauteng.",
      quote: "Streetwear should feel like the city that raised you."
    },
    {
      id: "jacaranda",
      name: "Studio Jacaranda",
      initials: "SJ",
      location: "Pretoria West · Pretoria",
      className: "gold",
      story: "Clean utilitarian staples with a distinctly Pretoria point of view.",
      founder: "Anelisa Smit",
      bio: "Unbleached canvas, durable tailoring and slow-fashion pieces made for everyday life.",
      quote: "Local craft becomes powerful when people can actually find it."
    },
    {
      id: "veld",
      name: "Veld Craft",
      initials: "VC",
      location: "Morningside · Durban",
      className: "teal",
      story: "Relaxed coastal clothing built for Durban heat, humidity and movement.",
      founder: "Tariq Pillay",
      bio: "Breathable linens, sanded twill and coastal workwear with a South African rhythm.",
      quote: "We make clothes that let you breathe."
    }
  ],
  products: [
    {
      id: "overberg-jacket",
      name: "Overberg Field Jacket",
      brand: "Bokkie Tailors",
      brandId: "bokkie",
      price: 2450,
      category: "Jackets",
      tag: "Fast Seller",
      img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=900&auto=format&fit=crop&q=85",
      desc: "Heavy 480gsm cotton duck field jacket with a structured utility fit, raglan sleeves and durable solid brass hardware.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Raw Ochre", "Charcoal"]
    },
    {
      id: "maboneng-hoodie",
      name: "Maboneng Boxy Hoodie",
      brand: "Nkosi Studio",
      brandId: "nkosi",
      price: 1200,
      category: "Hoodies",
      tag: "Fast Seller",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=85",
      desc: "500gsm heavyweight loopback fleece with a wide architectural silhouette and dropped shoulders.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Stone"]
    },
    {
      id: "union-shirt",
      name: "Union Shirt Jacket",
      brand: "Studio Jacaranda",
      brandId: "jacaranda",
      price: 1690,
      category: "Shirts",
      tag: "New Drop",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=85",
      desc: "A structured shirt-jacket cut from durable heavy twill designed for year-round South African layering.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Olive", "Natural"]
    },
    {
      id: "ochre-cargo",
      name: "Ochre Cargo Pant",
      brand: "Veld Craft",
      brandId: "veld",
      price: 1550,
      category: "Pants",
      tag: "Fast Seller",
      img: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=900&auto=format&fit=crop&q=85",
      desc: "Relaxed cargo trousers engineered from breathable coastal sanded twill with deep storm pockets.",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Ochre", "Sand"]
    },
    {
      id: "cape-chore",
      name: "Table Bay Deck Vest",
      brand: "Bokkie Tailors",
      brandId: "bokkie",
      price: 1890,
      category: "Jackets",
      tag: "New Drop",
      img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=85",
      desc: "Quilted weather-resistant deck vest with brass zip closure and reinforced cotton drill lining.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Waxed Navy", "Ink"]
    },
    {
      id: "civic-crew",
      name: "Civic Raw Loopback Crew",
      brand: "Nkosi Studio",
      brandId: "nkosi",
      price: 1100,
      category: "Hoodies",
      tag: "New Drop",
      img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=85",
      desc: "Raw calico slub sweatshirt with double-needle ribbed collar and inner-city panel details.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Stone", "Clay"]
    },
    {
      id: "wide-twill",
      name: "Wide Leg Twill Pant",
      brand: "Studio Jacaranda",
      brandId: "jacaranda",
      price: 1300,
      category: "Pants",
      tag: "New Drop",
      img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=900&auto=format&fit=crop&q=85",
      desc: "Wide-leg everyday trousers with a tailored drape, cut and sewn in Pretoria West.",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Natural", "Olive"]
    },
    {
      id: "coast-varsity",
      name: "Coastline Varsity Jacket",
      brand: "Veld Craft",
      brandId: "veld",
      price: 1850,
      category: "Jackets",
      tag: "Fast Seller",
      img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=900&auto=format&fit=crop&q=85",
      desc: "Light coastal varsity layer built for evening sea air, featuring ribbed cuffs and unbleached trims.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Sea Green", "Ink"]
    }
  ]
};

const money = n => "R " + Number(n).toLocaleString("en-ZA");
const getCart = () => JSON.parse(localStorage.getItem("rootedCart") || "[]");
const setCart = c => { localStorage.setItem("rootedCart", JSON.stringify(c)); updateNav(); };
const getWish = () => JSON.parse(localStorage.getItem("rootedWish") || "[]");
const setWish = w => { localStorage.setItem("rootedWish", JSON.stringify(w)); updateNav(); };

function product(id) { return ROOTED.products.find(p => p.id === id); }
function brand(id) { return ROOTED.brands.find(b => b.id === id); }

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => t.classList.remove("show"), 2400);
}

function updateNav() {
  const c = getCart().reduce((a, x) => a + (x.qty || 1), 0);
  const w = getWish().length;
  document.querySelectorAll("[data-cart-count]").forEach(x => x.textContent = c);
  document.querySelectorAll("[data-wish-count]").forEach(x => x.textContent = w);
}

function addToCart(id, qty = 1, size = "", color = "") {
  const p = product(id);
  if (!p) return;
  const c = getCart();
  const selectedSize = size || p.sizes[0];
  const selectedColor = color || p.colors[0];
  const key = id + "|" + selectedSize + "|" + selectedColor;
  const existing = c.find(x => x.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    c.push({ key, id, qty, size: selectedSize, color: selectedColor, selected: true });
  }
  setCart(c);
  toast(`${p.name} added to your ROOTED bag.`);
}

function toggleWish(id) {
  const w = getWish();
  const i = w.indexOf(id);
  if (i >= 0) {
    w.splice(i, 1);
    toast("Removed from saved collection.");
  } else {
    w.push(id);
    toast("Saved to your ROOTED collection.");
  }
  setWish(w);
  refreshWishButtons();
}

function refreshWishButtons() {
  const w = getWish();
  document.querySelectorAll("[data-wish-id]").forEach(b => {
    const active = w.includes(b.dataset.wishId);
    b.innerHTML = active ? "♥" : "♡";
    b.classList.toggle("active", active);
  });
}

function productCard(p) {
  return `<article class="product-card">
    <div class="product-image">
      <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
      <span class="product-tag">${p.tag}</span>
      <button class="product-wish" data-wish-id="${p.id}" onclick="event.preventDefault();toggleWish('${p.id}')" aria-label="Save ${p.name}">♡</button>
    </div>
    <div class="product-info">
      <a href="product.html?id=${p.id}">
        <div class="product-name">${p.name}</div>
        <div class="product-brand">${p.brand}</div>
      </a>
      <div class="product-bottom">
        <span class="price">${money(p.price)}</span>
        <button class="quick-add" onclick="event.preventDefault();addToCart('${p.id}')" title="Quick add to bag">+</button>
      </div>
    </div>
  </article>`;
}

function renderProducts(list, el) {
  if (!el) return;
  el.innerHTML = list.map(productCard).join("");
  refreshWishButtons();
}

function setProgress(n) {
  const x = document.querySelector(".top-progress span");
  if (x) x.style.width = n + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  updateNav();
  document.querySelectorAll("[data-year]").forEach(x => x.textContent = new Date().getFullYear());
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});