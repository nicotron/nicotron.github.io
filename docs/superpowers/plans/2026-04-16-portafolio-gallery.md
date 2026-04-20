# Portafolio Gallery Hub — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar `portafolio.html` con una galería hub de 4 tarjetas (grid 2×2) que enlaza a las cuatro secciones del portafolio, usando el nav principal del sitio.

**Architecture:** Vanilla HTML + CSS en un solo archivo `style.css`. Mobile-first: 1 col en mobile, 2×2 en tablet+. Overlay con gradiente: siempre visible en touch devices (`hover: none`), visible solo en `:hover` en desktop (`hover: hover`). Sin JS adicional.

**Tech Stack:** HTML5, CSS3 custom properties, BEM, sin build system ni npm.

---

## Files

| Archivo | Acción |
|---|---|
| `portafolio.html` | Reemplazar contenido completo |
| `style.css` | Añadir bloque al final (línea 1649+) |

---

### Task 1: Crear rama de trabajo

- [ ] **Step 1: Crear y moverse a la nueva rama desde feature/cs-lagas**

```bash
git checkout feature/cs-lagas
git checkout -b feature/portafolio-gallery
```

Expected: `Switched to a new branch 'feature/portafolio-gallery'`

---

### Task 2: Añadir bloque CSS de la galería

**Files:**
- Modify: `style.css` (añadir al final, después de línea 1649)

- [ ] **Step 1: Añadir el bloque CSS al final de style.css**

Agregar exactamente esto después de la última línea del archivo:

```css

/* 10. BLOQUE: PORTAFOLIO GALLERY
------------------------------------------------- */
.portfolio-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  padding: 2px;
}

.portfolio-gallery__card {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  text-decoration: none;
  background-color: var(--color-dark-tertiary);
}

.portfolio-gallery__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.portfolio-gallery__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(2, 3, 3, 0.85) 0%, rgba(2, 3, 3, 0.1) 60%);
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-md);
  transition: opacity 0.13s;
}

.portfolio-gallery__card-title {
  color: var(--color-light-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  line-height: var(--leading-none);
}

/* touch devices: overlay siempre visible */
@media (hover: none) {
  .portfolio-gallery__card-overlay {
    opacity: 1;
  }
}

/* pointer devices: overlay solo en hover */
@media (hover: hover) {
  .portfolio-gallery__card-overlay {
    opacity: 0;
  }

  .portfolio-gallery__card:hover .portfolio-gallery__card-overlay {
    opacity: 1;
  }

  .portfolio-gallery__card:hover img {
    transform: scale(1.03);
  }
}

/* 48 Tablet */
@media (min-width: 48rem) {
  .portfolio-gallery {
    grid-template-columns: 1fr 1fr;
  }
}
```

- [ ] **Step 2: Verificar que no hay errores de sintaxis**

Abrir `style.css` y confirmar que el nuevo bloque aparece al final con el número de sección `10` y los selectores `.portfolio-gallery`, `.portfolio-gallery__card`, `.portfolio-gallery__card-overlay`, `.portfolio-gallery__card-title`.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add portfolio gallery CSS block"
```

---

### Task 3: Reemplazar portafolio.html

**Files:**
- Modify: `portafolio.html` (reemplazar contenido completo)

- [ ] **Step 1: Reemplazar portafolio.html con el siguiente contenido**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Portafolio | Nicolás Troncoso López</title>
</head>
<body id="top">
    <div class="header__container">
        <header class="header">
            <h1 class="header__title">Portafolio</h1>
            <button class="header__menu-toggle" aria-controls="main-menu" aria-expanded="false">
                <span class="header__menu-line"></span>
                <span class="header__menu-line"></span>
                <span class="header__menu-line"></span>
            </button>
        </header>
        <nav id="main-menu" class="menu">
            <ul class="menu__list">
                <li class="menu__item"><a href="index.html" class="menu__link">inicio</a></li>
                <li class="menu__item"><a href="acerca.html" class="menu__link">acerca</a></li>
                <li class="menu__item"><a href="trabajo.html" class="menu__link">trabajo</a></li>
                <li class="menu__item"><a href="contacto.html" class="menu__link">contacto</a></li>
            </ul>
        </nav>
    </div>
    <main>
        <section class="portfolio-gallery">
            <a class="portfolio-gallery__card" href="portafolio_data.html">
                <img src="img/portafolio/portafolio_data_clima_prev_0.png" alt="Data Viz — visualización de datos climáticos, sísmicos y textuales">
                <div class="portfolio-gallery__card-overlay">
                    <span class="portfolio-gallery__card-title">Data Viz →</span>
                </div>
            </a>
            <a class="portfolio-gallery__card" href="portafolio_ai.html">
                <img src="https://cdn.midjourney.com/f99c1508-3cca-4148-a332-9b35922f9e6d/0_1.png" alt="AI — imaginario físico-digital con Midjourney">
                <div class="portfolio-gallery__card-overlay">
                    <span class="portfolio-gallery__card-title">AI →</span>
                </div>
            </a>
            <a class="portfolio-gallery__card" href="portafolio_generativo.html">
                <img src="img/portafolio/portafolio_generativo_xs_0.png" alt="Diseño Generativo — algoritmos generativos en imagen y movimiento">
                <div class="portfolio-gallery__card-overlay">
                    <span class="portfolio-gallery__card-title">Generativo →</span>
                </div>
            </a>
            <a class="portfolio-gallery__card" href="portafolio_uxui_lagas.html">
                <div class="portfolio-gallery__card-overlay">
                    <span class="portfolio-gallery__card-title">UX/UI →</span>
                </div>
            </a>
        </section>
    </main>
    <footer class="footer">
        <div class="footer__links">
            <a class="footer__back-to-top" href="#top">subir</a>
            <a class="footer__back-to-top" href="contacto.html">contacto</a>
        </div>
        <div class="footer__meta">
            <p class="footer__copyright">© 2011-2024</p>
        </div>
    </footer>
    <script src="js/menu.js"></script>
</body>
</html>
```

- [ ] **Step 2: Abrir portafolio.html en el browser y verificar**

Checklist visual:
- [ ] Mobile (< 768px): 4 tarjetas en 1 columna, overlay visible en todas
- [ ] Tablet/desktop (≥ 768px): 4 tarjetas en grid 2×2
- [ ] Desktop: hover sobre una tarjeta muestra overlay, sin hover no se ve
- [ ] Las 3 imágenes cargan (Data Viz local, AI desde CDN Midjourney, Generativo local)
- [ ] La tarjeta UX/UI muestra fondo oscuro (#2E3338) sin imagen
- [ ] El nav hamburger funciona en mobile
- [ ] Los 4 links navegan a la página correcta

- [ ] **Step 3: Commit**

```bash
git add portafolio.html
git commit -m "feat: replace portafolio.html with 2x2 gallery hub"
```

---

### Task 4: Agregar `.superpowers/` a .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Añadir .superpowers/ al .gitignore**

Abrir `.gitignore` y agregar esta línea si no existe ya:

```
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm directory"
```
