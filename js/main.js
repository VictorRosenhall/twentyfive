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

// Initiera Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true, // Loopar bilderna
    slidesPerView: 1, // Visar en bild åt gången
    autoplay: {
        delay: 5000, // Byter bild efter 5000ms
        disableOnInteraction: false, // Låter autoplay fortsätta även om användaren interagerar
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


