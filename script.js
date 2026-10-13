document.addEventListener("DOMContentLoaded", () => {
    // Animación de entrada para las tarjetas de comandos al hacer scroll
    const cards = document.querySelectorAll(".cmd-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 100); // Aparecen una por una con un pequeño retraso
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
});
