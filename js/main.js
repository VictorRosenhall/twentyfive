//storlek (mobil)
@media (max-width: 500px) {

}
//Meny
let layer = document.querySelector(".fade-layer")
layer.addEventListener("click", showMenu)

let button = document.querySelector(".menu-button")
button.addEventListener("click", showMenu)

function showMenu() {
    let menu = document.querySelector("nav .menu");  // Selektorer är korrekta nu
    if (menu) {
        menu.classList.toggle("show");
    } else {
        console.error("Menyn kunde inte hittas!");
    }

    let layer = document.querySelector(".fade-layer");  // Fade-layer selekteras här
    if (layer) {
        layer.classList.toggle("visible");
    }
}

/*function showMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}*/

// Initiera Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true, // Loopar bilderna så att vi kan bläddra åt båda hållen
    slidesPerView: 1, // Visar en bild åt gången
    autoplay: {
        delay: 5000, // Byt bild
        disableOnInteraction: false, // Låter autoplay fortsätta även om användaren interagerar
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


