# portafolio.html — Gallery Hub

**Fecha:** 2026-04-16  
**Branch:** feature/portafolio-gallery (desde feature/cs-lagas)  
**Archivo objetivo:** `portafolio.html`

---

## Objetivo

Reemplazar el contenido actual de `portafolio.html` (copia de portafolio_data.html) por una galería hub que presenta las cuatro secciones del portafolio como tarjetas navegables.

---

## Decisiones de diseño

### Layout
- **Mobile (< 48rem):** 1 columna, tarjetas apiladas a ancho completo
- **Tablet+ (≥ 48rem):** Grid 2×2, dos columnas de igual ancho
- Gap entre tarjetas: `2px`
- Aspect ratio de cada tarjeta: `4/3`

### Cards
- Cada tarjeta es un `<a>` que enlaza a la página de sección correspondiente
- La imagen ocupa el 100% del área (`object-fit: cover`)
- Un overlay con gradiente (`rgba(2,3,3,0.85)` → transparente) cubre la imagen
- El título de la sección aparece en la esquina inferior izquierda del overlay (`uppercase`, `bold`, con flecha `→`)

### Hover (overlay)
- **Desktop (dispositivos con hover):** overlay oculto en reposo, visible solo en `:hover`
- **Mobile (dispositivos sin hover):** overlay siempre visible via `@media (hover: none)`
- Implementación: CSS puro, sin JS adicional
- Transición: `opacity 0.13s` (coherente con el patrón del proyecto)

### Navegación
- Header: `<h1 class="header__title">Portafolio</h1>`
- Nav: nav principal del sitio (inicio / acerca / trabajo / contacto)
- Ningún ítem del nav marcado como activo (portafolio no es un ítem del nav principal)
- Hamburger menu en mobile, nav horizontal en desktop (misma lógica que el resto del sitio)

---

## Assets por tarjeta

| Sección | Enlace | Imagen |
|---|---|---|
| Data Viz | `portafolio_data.html` | `img/portafolio/portafolio_data_clima_prev_0.png` |
| AI | `portafolio_ai.html` | `https://cdn.midjourney.com/f99c1508-3cca-4148-a332-9b35922f9e6d/0_1.png` |
| Generativo | `portafolio_generativo.html` | `img/portafolio/portafolio_generativo_xs_0.png` |
| UX/UI | `portafolio_uxui_lagas.html` | Sin imagen → fondo `var(--color-dark-tertiary)` (#2E3338) |

---

## CSS — nuevo bloque en style.css

Añadir al final de `style.css` como sección numerada:

```css
/* 10. BLOQUE: PORTAFOLIO GALLERY
------------------------------------------------- */
.portfolio-gallery { ... }
.portfolio-gallery__card { ... }
.portfolio-gallery__card-overlay { ... }
/* 48 Tablet */
@media (min-width: 48rem) { ... }
/* hover: none — mobile siempre muestra overlay */
@media (hover: none) { ... }
/* hover: hover — desktop solo en :hover */
@media (hover: hover) { ... }
```

Tokens a usar:
- `--color-dark-tertiary` para fondo de UX/UI
- `--color-light-primary` para texto del overlay
- `--font-weight-bold`, `--tracking-wide`
- `--leading-none`

---

## HTML — estructura de portafolio.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- mismo head que las otras páginas, title: Portafolio | Nicolás Troncoso López -->
</head>
<body id="top">
  <!-- header + nav principal (inicio/acerca/trabajo/contacto) -->
  <main>
    <section class="portfolio-gallery">
      <a class="portfolio-gallery__card" href="portafolio_data.html">
        <img ... alt="Data Viz">
        <div class="portfolio-gallery__card-overlay">
          <span>Data Viz →</span>
        </div>
      </a>
      <!-- AI, Generativo, UX/UI cards -->
    </section>
  </main>
  <footer>...</footer>
  <script src="js/menu.js"></script>
</body>
</html>
```

---

## Branch

Crear rama nueva desde `feature/cs-lagas`:
```
git checkout -b feature/portafolio-gallery
```

---

## Archivos a modificar

| Archivo | Acción |
|---|---|
| `portafolio.html` | Reemplazar contenido completo |
| `style.css` | Añadir bloque `11. BLOQUE: PORTAFOLIO GALLERY` al final |

No se modifica ningún otro archivo en este step.
