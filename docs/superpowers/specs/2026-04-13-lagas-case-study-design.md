# Spec: Caso de Estudio LAGAS — portafolio_uxui_lagas.html

**Fecha:** 2026-04-13  
**Estado:** Aprobado por usuario

---

## Objetivo

Crear la página `portafolio_uxui_lagas.html` como caso de estudio UX/UI completo del app LAGAS — una aplicación mobile-first de nutrición para ciclistas de transporte y recreacional. Agregar el enlace **ux/ui** a la navegación de todas las páginas del portafolio.

---

## Stack

Vanilla HTML5 + CSS3 + JS. Sin frameworks. Sin npm. Mismo sistema de design tokens que el resto del portafolio (style.css). BEM methodology.

---

## Branch de trabajo

Nueva rama git: `feature/cs-lagas`

---

## Navegación

Añadir `<li class="menu__item"><a href="portafolio_uxui_lagas.html" class="menu__link">ux/ui</a></li>` a la nav de:
- `portafolio.html` (portafolio_data.html)
- `portafolio_ai.html`
- `portafolio_generativo.html`
- Y en la propia `portafolio_uxui_lagas.html` con clase `menu__link--active`

---

## Layout: Secciones full-width con fondo alternante (Opción B)

Cada sección ocupa el ancho completo. Fondos alternan entre claro (`--color-light-primary`) y oscuro (`--color-dark-secondary`). Texto en oscuro adapta a `--color-text-inverted`. Mobile-first.

---

## Secciones de la página

### 1. Hero — fondo oscuro
- Título: **LAGAS**
- Subtítulo: tagline breve (ej. *"Tu gasolina para cada brevé"*)
- Fila de metadata: Rol · Año · Herramientas · Plataforma
- Placeholder imagen: pantalla principal del app (relación 9:16, tipo mobile screenshot)
- BEM: `.cs-hero`

### 2. Contexto — fondo claro
- Párrafo del problema: ciclistas sin guía de nutrición accesible y contextualizada
- Audiencia: ciclistas de transporte urbano + ciclistas recreacionales
- Placeholder imagen contexto (relación libre, tipo foto/ilustración)
- BEM: `.cs-context`

### 3. Investigación — fondo oscuro
- Metodología: encuesta Google Forms
- Texto placeholder: tipo de preguntas, segmento encuestado, n° de respuestas
- Placeholder imagen: captura del formulario o gráficos de resultados
- BEM: `.cs-research`

### 4. Hallazgos — fondo claro
- 3–4 insight cards horizontales: ícono placeholder + texto del hallazgo
- Solo texto estructurado, sin imágenes de fondo
- BEM: `.cs-findings`, `.cs-findings__card`

### 5. Síntesis — fondo oscuro
- 2 user persona cards (ciclista transporte / ciclista recreacional)
- Cada card: foto placeholder + nombre + cita + lista de pain points
- BEM: `.cs-synthesis`, `.cs-persona`

### 6. Diseño — fondo claro
- Párrafo de decisiones UI: mobile-first, flujo de pantallas, sistema de color
- 2–3 placeholders de wireframes/pantallas en columna única (mobile) o fila (desktop)
- BEM: `.cs-design`

### 7. Prototipo — fondo oscuro
- Link al app en vivo: `https://lagas-nu.vercel.app/`
- 1 placeholder screenshot de pantalla final
- BEM: `.cs-prototype`

### 8. Aprendizajes — fondo claro
- Párrafo de reflexión (texto placeholder)
- Sin imágenes
- BEM: `.cs-learnings`

---

## Responsive

Mobile-first. Breakpoints:
- Base (mobile): columna única, padding `var(--spacing-md)`
- `48rem` tablet: aumentar padding, imágenes al 80% del ancho
- `62rem` desktop: layout de 2 columnas para secciones con texto + imagen

---

## Estilos

Nuevo bloque en `style.css` al final:

```
/* 9. BLOQUE: CASO DE ESTUDIO ------------------------------------------- */
```

Usar solo tokens existentes. Colores de texto en secciones oscuras: `--color-text-inverted`. Sin colores raw.

---

## Placeholders

Todos los placeholders de imagen son `<div class="cs-placeholder">` con fondo `--color-grey_0`, dimensiones definidas por CSS, y texto `[imagen placeholder]` centrado en `--text-sm` / `--color-grey-mid`.

---

## JS

No se requiere JS nuevo. Incluir `js/menu.js` al pie de la página.

---

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `portafolio_uxui_lagas.html` | Crear |
| `style.css` | Añadir bloque `/* 9. BLOQUE: CASO DE ESTUDIO */` |
| `portafolio.html` | Añadir enlace ux/ui en nav |
| `portafolio_ai.html` | Añadir enlace ux/ui en nav |
| `portafolio_generativo.html` | Añadir enlace ux/ui en nav |
