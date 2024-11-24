/* Preloader */

window.onload = () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("page-content").style.visibility = "visible";
    }, 1000);
}