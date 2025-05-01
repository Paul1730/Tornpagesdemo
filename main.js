const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

// Configuración general para ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Animaciones para los textos
ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

// Nueva animación para el video
ScrollReveal().reveal(".container__right .video", {
  ...scrollRevealOption,
  delay: 1500,
});

// Animaciones para location y redes sociales
ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2500,
  interval: 500,
});

ScrollReveal().reveal(".testimonials h2", {
  ...scrollRevealOption,
  origin: "top",
  delay: 500,
});

ScrollReveal().reveal(".testimonial", {
  ...scrollRevealOption,
  interval: 300,
});

// Contador animado
const counter = document.getElementById('counter');

let started = false;
window.addEventListener('scroll', () => {
  const sectionTop = counter.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!started && sectionTop < screenHeight - 100) {
    started = true;
    let count = 15000;
    const target = 20000;
    const speed = 25; // más lento
    const increment = 5; // sube de 5 en 5

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.textContent = "+" + count.toLocaleString();
        setTimeout(updateCounter, speed);
      } else {
        counter.textContent = "+20,000";
      }
    };

    updateCounter();
  }
});

ScrollReveal().reveal(".cta__content h2", {
  ...scrollRevealOption,
  origin: "top",
  delay: 300,
});

ScrollReveal().reveal(".btn-large", {
  ...scrollRevealOption,
  delay: 600,
});

if (window.innerWidth > 768) {
  ScrollReveal().reveal(".footer__content p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 300,
  });

  ScrollReveal().reveal(".footer__socials a", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 600,
    interval: 300,
  });
}
