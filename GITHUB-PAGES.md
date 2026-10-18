# Publikacja Yoon i Kuby na GitHub Pages

## Pierwsza publikacja

1. Utwórz repozytorium na GitHubie. W bezpłatnym planie użyj repozytorium publicznego.
2. Prześlij **zawartość folderu `premium-website` do głównego katalogu repozytorium**. Pliki `package.json` i `.github/workflows/pages.yml` muszą znajdować się bezpośrednio w repozytorium. Nie przesyłaj `node_modules`, `.next` ani `out`. Wszystkie obrazy potrzebne stronie są już w `public/art`.
3. W repozytorium otwórz **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Otwórz **Actions → Deploy Yoon & Kuba to GitHub Pages → Run workflow**. Kolejne zmiany wysłane na `main` lub `master` opublikują się automatycznie.
5. Po zakończeniu otwórz adres pokazany we wdrożeniu. Yoon znajduje się na stronie głównej, Kuba pod `/kuba/`.

Workflow sam pobiera prawidłowy adres i prefiks repozytorium z GitHub Pages. Obsługuje zarówno `https://login.github.io/repozytorium/`, jak i repozytorium `login.github.io` oraz własną domenę skonfigurowaną w Pages. Po zmianie nazwy repozytorium lub domeny uruchom workflow ponownie.

Do wdrażania nie jest potrzebny własny token ani klucz API. GitHub używa wbudowanego `GITHUB_TOKEN`. Pierwsze włączenie Pages wykonaj w ustawieniach repozytorium.

## Podgląd lokalny

```powershell
npm ci
npm run build
npm start
```

Otwórz `http://localhost:3000/`. Podgląd serwuje gotowy eksport statyczny, tak jak Pages; nie wymaga serwera Next.js.

Żeby przetestować adres z nazwą repozytorium:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/nazwa-repozytorium'
$env:NEXT_PUBLIC_SITE_URL = 'https://login.github.io'
npm run build
npm start
```

Otwórz `http://localhost:3000/nazwa-repozytorium/`. Nazwę i login zastąp własnymi wartościami. Powrót do zwykłego lokalnego adresu wymaga wyczyszczenia tych zmiennych i ponownego zbudowania strony.

## Co jest gotowe

- Pełny eksport HTML, CSS, JavaScript, czcionek i obrazów do `out`.
- Osobny plik `kuba/index.html`, działający po bezpośrednim otwarciu i odświeżeniu podstrony.
- Obrazy WebP bez serwerowej optymalizacji; galerie i powiększenia działają statycznie.
- Prefiks repozytorium w nawigacji, obrazach, tłach, ikonach i adresach obrazów udostępniania.
- `.nojekyll`, strona 404 i kontrola obecności plików podczas budowania.
- Automatyczna kontrola kodu i wdrażanie przez GitHub Actions.

## Źródła konfiguracji

[Eksport statyczny Next.js](https://nextjs.org/docs/app/guides/static-exports), [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [workflow GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
