//storlek (mobil)
/*@media (max-width: 500px) {
    header {
        padding: 10px;
    }

    h1 {
        font-size: 24px;
    }

    .sidebar {
        width: 250px; 
        left: -250px;
    }

    main.shift {
        margin-left: 250px;
    }
}*/
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

