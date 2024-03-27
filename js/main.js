// console.log("hola")

const $botonMenuAbrir =document.querySelector(".abrir");
const $botonMenuCerrar =document.querySelector(".cerrar");
const $panel=document.querySelector(".panel");
const $menu=document.querySelector(".menu");
const $menuLink =document.querySelectorAll("#nav a");

// console.log($botonMenuAbrir);
// console.log($botonMenuCerrar);
// console.log($panel);
// console.log($menu);

$botonMenuAbrir.addEventListener("click", (e)=>{
    
    function abrirMenu(e) {
        // alert("boton menu abrir")
        $botonMenuAbrir.classList.add("no_visible");
        $botonMenuCerrar.classList.remove("no_visible")
        $panel.classList.add("is-active");
    }
    
    abrirMenu();
})

$botonMenuCerrar.addEventListener("click", (e)=>{
    function cerrarMenu(e) {
        // alert("boton menu cerrar")
        $botonMenuAbrir.classList.remove("no_visible");
        $botonMenuCerrar.classList.add("no_visible")
        $panel.classList.remove("is-active");
    }
    cerrarMenu();
    
})