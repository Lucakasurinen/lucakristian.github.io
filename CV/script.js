const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

// Automaattinen vuosiluku
document.getElementById("year").textContent =
    new Date().getFullYear();

// Vierityksen edistymispalkki
const progress =
    document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent =
        (window.scrollY / scrollable) * 100;

    progress.style.width = `${percent}%`;

});