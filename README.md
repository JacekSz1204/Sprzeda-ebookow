# 📚 BookStore – Platforma sprzedaży e-booków

Kompletna strona do sprzedaży e-booków zbudowana w czystym HTML, CSS i JavaScript (bez frameworków, bez zależności do instalacji).

## Funkcje

- **Strona główna** (`index.html`) – hero, statystyki, siatka kategorii, katalog e-booków z wyszukiwaniem i filtrowaniem
- **Strona e-booka** (`book.html`) – opis, spis treści, oceny, specyfikacja, powiązane tytuły
- **Koszyk & Checkout** (`cart.html`) – zarządzanie koszykiem, kody promocyjne, formularz zamówienia, obsługa płatności (BLIK, karta, przelew), potwierdzenie zamówienia
- Koszyk zapisywany w `localStorage` – przetrwa odświeżenie strony
- Responsywny design (mobile, tablet, desktop)
- Dostępność (ARIA labels, kontrast kolorów)

## Jak uruchomić

Otwórz `index.html` bezpośrednio w przeglądarce lub uruchom prosty serwer HTTP:

```bash
# Python 3
python -m http.server 8000
# Node.js (npx)
npx serve .
```

Następnie przejdź pod `http://localhost:8000`.

## Struktura plików

```
├── index.html      # Strona główna
├── book.html       # Szczegóły e-booka
├── cart.html       # Koszyk i checkout
├── css/
│   └── style.css   # Wszystkie style
├── js/
│   └── app.js      # Dane katalogu, logika koszyka, helpery
└── README.md
```

## Kody promocyjne (demo)

| Kod        | Zniżka |
|------------|--------|
| `EBOOK10`  | 10%    |
| `EBOOK20`  | 20%    |
| `SUMMER15` | 15%    |
