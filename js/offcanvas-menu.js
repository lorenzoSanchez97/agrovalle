/* Script para mejorar el funcionamiento del menu offcanvas y mostrar en él elementos específicos */

window.addEventListener("load", () => {

    let offcanvasNavbar = document.getElementById('offcanvasNavbar');

    // Se ejecuta evento cuando el menu offcanvas se despliega
    offcanvasNavbar.addEventListener("show.bs.offcanvas", () => {

        // Se muestra sección de información de contacto y redes sociales en el menu offcanvas
        let offcanvasContactInfo = document.querySelector(".offcanvas-contact-info")
        offcanvasContactInfo.style.display = "block";
        
        let offcanvasLinks = document.querySelectorAll("#offcanvasNavbar .nav-link, .offcanvas-title, .offcanvas-contact-info a");
        offcanvasLinks.forEach(link => {
            link.addEventListener("click", () => {
                let bsOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
                bsOffcanvas.hide();
            })
        })
    })

    // Se ejecuta evento cuando el menu offcanvas se oculta
    offcanvasNavbar.addEventListener("hidden.bs.offcanvas", () => {

        // Se oculta la sección de información de contacto y redes sociales
        let offcanvasContactInfo = document.querySelector(".offcanvas-contact-info")
        offcanvasContactInfo.style.display = "none";
    })
});