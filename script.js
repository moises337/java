   function cambiarFondo() {
        document.body.style.backgroundImage = "url('img/Harry-Potter-36x16-gif-slow.webp')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }


    function cambiarColores() {
        // Seleccionar elementos por su ID
        var encabezado = document.getElementById("header");
        var seccion = document.getElementById("section");
        var barraLateral = document.getElementById("aside");
    
        // Color oscuro con transparencia
        const colorOscuro = "rgba(30, 30, 30, 0.8)";
        const colorOscuroSuave = "rgba(45, 45, 45, 0.8)";
    
        // Aplicar fondos oscuros y texto claro
        encabezado.style.backgroundColor = colorOscuro;
        seccion.style.backgroundColor = colorOscuro;
        barraLateral.style.backgroundColor = colorOscuroSuave;
    
        // Cambiar color del texto para mejor contraste
        encabezado.style.color = "#fff";
        seccion.style.color = "#fff";
        barraLateral.style.color = "#fff";
    }