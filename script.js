// Script de base - Gestion du défilement fluide
document.addEventListener("DOMContentLoaded", () => {
    console.log("Muralis Studio - Site chargé avec succès.");
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});