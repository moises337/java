   function cambiarFondo() {
        document.body.style.backgroundImage = "url('img/Harry-Potter-36x16-gif-slow.webp')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }

function cambiarColores() {
    const colorOscuro = "rgba(30, 30, 30, 0.8)";
    const colorTexto = "#ffffff";

    // Cambiar header
    const header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = colorOscuro;
        header.style.color = colorTexto;
    }

    // Cambiar todas las secciones
    const secciones = document.querySelectorAll("section");
    secciones.forEach(sec => {
        sec.style.backgroundColor = colorOscuro;
        sec.style.color = colorTexto;
    });

    // Cambiar todos los elementos con clase 'galeria'
    const galerias = document.querySelectorAll(".galeria");
    galerias.forEach(gal => {
        gal.style.backgroundColor = colorOscuro;
    });
}