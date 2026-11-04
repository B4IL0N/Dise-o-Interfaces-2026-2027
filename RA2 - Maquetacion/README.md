# PZES Online - Tienda de Acuariofilia y Aquascaping

Proyecto maquetado para la unidad de Diseño de Interfaces Web (DAW). Implementa una arquitectura front-end moderna, accesible, responsive y validada bajo estándares W3C.

## Tecnologías Utilizadas
- **HTML5**: Marcado semántico estricto (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 / Sass**: Estructura modular en partials (`_variables`, `_mixins`, `_botones`, `_components`, `_dark-mode`).
- **Bootstrap 5.3**: Maquetación responsive basada en sistema de grid de 12 columnas.
- **JavaScript (Vanilla)**: Manipulación del DOM para alternancia de modo oscuro (`data-bs-theme`) y validación de formularios interactivos con API nativa de Bootstrap.

## Autor y Contexto Académico

- **Autor:** [B4IL0N](https://github.com/B4IL0N)
- **Módulo:** Diseño de Interfaces Web (DAW)
- **Resultado de Aprendizaje:** RA2 - Maquetación y diseño responsive
- **Repositorio General:** [Dise-o-Interfaces-2026-2027](https://github.com/B4IL0N/Dise-o-Interfaces-2026-2027)

## Despliegue

Si el repositorio tiene activado GitHub Pages sobre la rama `main`, la demo en vivo es accesible desde:
> [https://b4il0n.github.io/Dise-o-Interfaces-2026-2027/RA2%20Maquetacion/](https://b4il0n.github.io/Dise-o-Interfaces-2026-2027/RA2%20Maquetacion/)

## Estructura del Proyecto
```text
PzesOnline/
├── assets/
│   └── img/           # Recursos visuales y logotipos
├── css/
│   ├── bootstrap.min.css
│   └── style.css      # Archivo CSS generado por el compilador
├── js/
│   ├── bootstrap.bundle.min.js
│   └── script.js      # Script de interacción (DOM, tema y validación)
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _botones.scss
│   ├── _components.scss
│   ├── _dark-mode.scss
│   └── style.scss
├── index.html         # Página de inicio con catálogo y formulario de acceso
├── checkout.html      # Pantalla de carrito / proceso de pago
└── README.md
