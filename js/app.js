/**
 * BookStore – shared data & cart logic
 */

/* ===== Catalogue ===== */
const BOOKS = [
  {
    id: 1,
    title: "Mistrz JavaScript",
    author: "Anna Kowalska",
    category: "Programowanie",
    emoji: "💻",
    coverGradient: "linear-gradient(135deg,#667eea,#764ba2)",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.8,
    ratingCount: 312,
    pages: 380,
    format: "PDF, EPUB, MOBI",
    language: "Polski",
    published: "2024",
    badge: "Bestseller",
    badgeClass: "",
    description: "Kompleksowy przewodnik po nowoczesnym JavaScript – od podstaw po zaawansowane wzorce projektowe, async/await, moduły ES i optymalizację wydajności.",
    contents: [
      "Typy danych, zakresy i closures",
      "Programowanie asynchroniczne (Promises, async/await)",
      "ES Modules i bundlery",
      "Wzorce projektowe w JS",
      "Testowanie jednostkowe i e2e",
      "Optymalizacja i profilowanie"
    ]
  },
  {
    id: 2,
    title: "Python dla Analityków",
    author: "Marek Nowak",
    category: "Data Science",
    emoji: "🐍",
    coverGradient: "linear-gradient(135deg,#11998e,#38ef7d)",
    price: 59.99,
    originalPrice: null,
    rating: 4.9,
    ratingCount: 198,
    pages: 450,
    format: "PDF, EPUB",
    language: "Polski",
    published: "2024",
    badge: "Nowy",
    badgeClass: "new",
    description: "Praktyczny podręcznik analizy danych z Pythonem – pandas, NumPy, matplotlib, scikit-learn i inne niezbędne narzędzia analityka danych.",
    contents: [
      "Pandas i DataFrame",
      "Wizualizacja danych",
      "Statystyka i wnioskowanie",
      "Machine Learning z scikit-learn",
      "Praca z bazami danych",
      "Automatyzacja raportów"
    ]
  },
  {
    id: 3,
    title: "UX Design od Podstaw",
    author: "Katarzyna Wiśniewska",
    category: "Design",
    emoji: "🎨",
    coverGradient: "linear-gradient(135deg,#f093fb,#f5576c)",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.7,
    ratingCount: 145,
    pages: 290,
    format: "PDF, EPUB, MOBI",
    language: "Polski",
    published: "2023",
    badge: "Promocja",
    badgeClass: "sale",
    description: "Naucz się tworzyć intuicyjne i atrakcyjne interfejsy. Poznaj proces badań użytkownika, prototypowania i testowania użyteczności.",
    contents: [
      "Badania użytkownika",
      "Persony i ścieżki użytkownika",
      "Wireframing i prototypowanie",
      "Systemy projektowe",
      "Testy użyteczności",
      "Portfolio UX designera"
    ]
  },
  {
    id: 4,
    title: "Marketing Cyfrowy 2024",
    author: "Piotr Zieliński",
    category: "Marketing",
    emoji: "📈",
    coverGradient: "linear-gradient(135deg,#f7971e,#ffd200)",
    price: 44.99,
    originalPrice: null,
    rating: 4.6,
    ratingCount: 87,
    pages: 320,
    format: "PDF, EPUB",
    language: "Polski",
    published: "2024",
    badge: "Nowy",
    badgeClass: "new",
    description: "Strategie marketingu cyfrowego na rok 2024: SEO, SEM, social media, e-mail marketing, content marketing i marketing automation.",
    contents: [
      "Strategia marketingu cyfrowego",
      "SEO i SEM",
      "Social Media Marketing",
      "E-mail Marketing",
      "Content Marketing",
      "Analytics i KPIs"
    ]
  },
  {
    id: 5,
    title: "Zwinne Zarządzanie Projektem",
    author: "Tomasz Lewandowski",
    category: "Biznes",
    emoji: "🚀",
    coverGradient: "linear-gradient(135deg,#4facfe,#00f2fe)",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.5,
    ratingCount: 203,
    pages: 260,
    format: "PDF, EPUB, MOBI",
    language: "Polski",
    published: "2023",
    badge: "Promocja",
    badgeClass: "sale",
    description: "Scrum, Kanban i inne frameworki zwinne w praktyce. Jak skutecznie zarządzać zespołem i dostarczać wartość w iteracyjnym procesie.",
    contents: [
      "Manifesto Agile",
      "Scrum w szczegółach",
      "Kanban i Lean",
      "Zarządzanie backlogiem",
      "Retrospektywy i ciągłe doskonalenie",
      "Skalowanie Agile"
    ]
  },
  {
    id: 6,
    title: "Cyberbezpieczeństwo dla Każdego",
    author: "Alicja Dąbrowska",
    category: "Bezpieczeństwo",
    emoji: "🔒",
    coverGradient: "linear-gradient(135deg,#2d3561,#c05c7e)",
    price: 54.99,
    originalPrice: null,
    rating: 4.8,
    ratingCount: 264,
    pages: 410,
    format: "PDF, EPUB",
    language: "Polski",
    published: "2024",
    badge: "Bestseller",
    badgeClass: "",
    description: "Kompleksowe wprowadzenie do cyberbezpieczeństwa: zagrożenia, ochrona danych, kryptografia, testy penetracyjne i compliance.",
    contents: [
      "Krajobraz zagrożeń",
      "Kryptografia i PKI",
      "Bezpieczeństwo sieci",
      "Testy penetracyjne",
      "GDPR i compliance",
      "Reagowanie na incydenty"
    ]
  },
  {
    id: 7,
    title: "React & Next.js w Praktyce",
    author: "Michał Wójcik",
    category: "Programowanie",
    emoji: "⚛️",
    coverGradient: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.9,
    ratingCount: 421,
    pages: 520,
    format: "PDF, EPUB, MOBI",
    language: "Polski",
    published: "2024",
    badge: "Bestseller",
    badgeClass: "",
    description: "Budowanie nowoczesnych aplikacji webowych z React 18 i Next.js 14 – SSR, SSG, App Router, Server Components i wdrożenie na Vercel.",
    contents: [
      "React Hooks i wzorce",
      "Zarządzanie stanem",
      "Next.js App Router",
      "Server & Client Components",
      "Optymalizacja wydajności",
      "Deploy i CI/CD"
    ]
  },
  {
    id: 8,
    title: "Finanse Osobiste bez Tajemnic",
    author: "Barbara Kamińska",
    category: "Finanse",
    emoji: "💰",
    coverGradient: "linear-gradient(135deg,#56ab2f,#a8e063)",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    ratingCount: 532,
    pages: 240,
    format: "PDF, EPUB, MOBI",
    language: "Polski",
    published: "2023",
    badge: "Promocja",
    badgeClass: "sale",
    description: "Jak zarządzać budżetem domowym, budować oszczędności, inwestować w ETF-y i nieruchomości oraz planować emeryturę. Praktyczny przewodnik finansowy.",
    contents: [
      "Budżet i oszczędzanie",
      "Wychodzenie z długów",
      "Inwestowanie w ETF-y",
      "Nieruchomości",
      "Podatki i prawo",
      "Planowanie emerytury"
    ]
  }
];

const CATEGORIES = [
  { name: "Wszystkie", emoji: "📚", filter: null },
  { name: "Programowanie", emoji: "💻", filter: "Programowanie" },
  { name: "Data Science", emoji: "📊", filter: "Data Science" },
  { name: "Design", emoji: "🎨", filter: "Design" },
  { name: "Marketing", emoji: "📈", filter: "Marketing" },
  { name: "Biznes", emoji: "🚀", filter: "Biznes" },
  { name: "Bezpieczeństwo", emoji: "🔒", filter: "Bezpieczeństwo" },
  { name: "Finanse", emoji: "💰", filter: "Finanse" }
];

const PROMO_CODES = {
  "EBOOK10": 0.10,
  "EBOOK20": 0.20,
  "SUMMER15": 0.15
};

/* ===== Cart ===== */
const Cart = {
  STORAGE_KEY: "bookstore_cart",

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  save(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateBadge();
  },

  add(bookId) {
    const items = this.get();
    if (!items.find(i => i.id === bookId)) {
      items.push({ id: bookId });
      this.save(items);
      showToast("Dodano do koszyka! 🛒", "success");
    } else {
      showToast("Ta książka jest już w koszyku.", "");
    }
  },

  remove(bookId) {
    const items = this.get().filter(i => i.id !== bookId);
    this.save(items);
  },

  count() {
    return this.get().length;
  },

  total() {
    return this.get().reduce((sum, item) => {
      const book = BOOKS.find(b => b.id === item.id);
      return sum + (book ? book.price : 0);
    }, 0);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateBadge();
  },

  updateBadge() {
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = this.count();
    });
  }
};

/* ===== Toast ===== */
function showToast(message, type = "") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = "toast" + (type ? " " + type : "");
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ===== Helpers ===== */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " zł";
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "★".repeat(full);
  if (half) stars += "½";
  stars += "☆".repeat(5 - full - (half ? 1 : 0));
  return stars;
}

function getCategoryCount(filter) {
  if (!filter) return BOOKS.length;
  return BOOKS.filter(b => b.category === filter).length;
}

/* ===== Initialise cart badge on every page ===== */
document.addEventListener("DOMContentLoaded", () => {
  Cart.updateBadge();
});
