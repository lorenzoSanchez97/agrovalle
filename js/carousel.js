/* Script para crear y configurar el carrusel con Splide js */

window.addEventListener("load", () => {
    new Splide('#images-carousel', {
        type: 'loop',
        pagination: false,
        drag: true,
        speed: 700,
        gap: 10,
        autoplay: true,
        perPage: 1,
        perMove: 1,
        mediaQuery: 'min',
        breakpoints: {
            768: {
                perPage: 2,
                perMove: 2
            },
            1024: {
                perPage: 3,
                perMove: 3
            }
        },
    }).mount();
});