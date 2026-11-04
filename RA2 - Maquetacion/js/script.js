document.addEventListener("DOMContentLoaded", () => {
  
  // === 1. MODO CLARO / OSCURO (Bootstrap 5 nativo) ===
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Comprobar preferencia guardada
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-bs-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "Modo Claro" : "Modo Oscuro";

  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    htmlElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "Modo Claro" : "Modo Oscuro";
  });

  // === 2. VALIDACIÓN DE FORMULARIO (Estilo Bootstrap) ===
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    // Si los campos HTML5 nativos (required, minlength, type="email") fallan
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      alert("¡Formulario enviado con éxito!");
    }

    // Añade la clase de Bootstrap para mostrar visualmente los errores (.is-invalid)
    form.classList.add("was-validated");
  }, false);
  // === DRAG TO SCROLL (DESLIZAR CON CLIC SOSTENIDO) ===
const slider = document.getElementById("category-nav");

if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let hasDragged = false;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    hasDragged = false;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidad de arrastre
    
    // Si se desplazó más de 5px, se considera arrastre y no un simple clic
    if (Math.abs(walk) > 5) {
      hasDragged = true;
    }
    
    slider.scrollLeft = scrollLeft - walk;
  });

  // Evitar que se active el botón si el usuario estaba arrastrando
  slider.addEventListener("click", (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}
});

const modal = document.getElementById('miModal');
const btnAbrir = document.getElementById('abrirModal');
const btnCerrar = document.getElementById('cerrarModal');

btnAbrir.addEventListener('click', (e) => {
  e.preventDefault();
  modal.showModal();
});

btnCerrar.addEventListener('click', () => {
  modal.close();
});

// Cerrar si hace clic fuera del contenido blanco
modal.addEventListener('click', (e) => {
  const rect = modal.getBoundingClientRect();
  const clickFuera = (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  );
  if (clickFuera) modal.close();
});