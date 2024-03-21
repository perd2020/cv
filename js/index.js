import slider from "./modules/carrusel";
import hamburguerMenu from "./modules/hamburguer";




const d= document;
d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    slider();
});

