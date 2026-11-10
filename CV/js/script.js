// Vuosi alatunnisteeseen
document.getElementById("year").textContent = new Date().getFullYear();

// CV:n tulostaminen / PDF-tallennus selaimen tulostusvalikosta
document.getElementById("printCv").addEventListener("click", () => window.print());

// Näytä takaisin ylös -painike vieritettäessä
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Elementtien hillitty sisääntuloanimaatio
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("is-visible"));
}

// Sulje mobiilivalikko linkkiä painettaessa
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNav");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
