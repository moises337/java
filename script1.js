   function cambiarFondo() {
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/c2/bc/e7/c2bce753ba5ef0286c01fcea2defd49c.gif')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }

function cambiarColores() {
    const colorOscuro = "rgba(30, 30, 30, 0.8)";
    const colorTexto = "#ffffff";

    // Header
    const header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = colorOscuro;
        header.style.color = colorTexto;
    }

    // Secciones
    const secciones = document.querySelectorAll("section");
    secciones.forEach(sec => {
        sec.style.backgroundColor = colorOscuro;
        sec.style.color = colorTexto;
    });

    // Aside
    const aside = document.querySelector("aside");
    if (aside) {
        aside.style.backgroundColor = colorOscuro;
        aside.style.color = colorTexto;
    }
}