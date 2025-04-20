document.addEventListener("DOMContentLoaded", function() {
    // Animación del título principal
    const tituloPrincipal = document.getElementById('titulo-principal1');
    tituloPrincipal.style.opacity = 0;
    tituloPrincipal.style.transform = 'translateY(-20px)';
    setTimeout(function() {
        tituloPrincipal.style.transition = 'all 1s ease-in-out';
        tituloPrincipal.style.opacity = 1;
        tituloPrincipal.style.transform = 'translateY(0)';
    }, 500);

    // Animación de la sección de presentación
    const presentacionSection = document.getElementById('presentacion-section');
    presentacionSection.style.opacity = 0;
    presentacionSection.style.transform = 'scale(0.8)';
    setTimeout(function() {
        presentacionSection.style.transition = 'all 1s ease-in-out';
        presentacionSection.style.opacity = 1;
        presentacionSection.style.transform = 'scale(1)';
    }, 1000);

    // Animación de los enlaces del menú
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)';
        setTimeout(function() {
            item.style.transition = 'all 0.5s ease-in-out';
            item.style.opacity = 1;
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });
});
