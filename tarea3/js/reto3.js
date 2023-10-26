function seleccionarSede() {
    var select = document.getElementById("sede");

    if (select.value === "") {
        // No se seleccionó ninguna sede, puedes mostrar un mensaje de error si deseas
    } else {
        var sedeSeleccionada = select.value;
        
        // Redirigir a la página correspondiente según la sede seleccionada
        if (sedeSeleccionada === "1") {
            window.location.href = "reto3.2.html"; // Reemplaza "reto3.2.html" con la URL de la página que deseas abrir para la sede 1
        } else {
            window.location.href = "otra_pagina.html"; // Reemplaza "otra_pagina.html" con la URL de la página de la otra sede
        }
        // Agrega más condiciones para cada sede si es necesario
    }
}

function seleccionarFecha() {
    var select = document.getElementById("fecha");

    if (select.value === "") {
        // No se seleccionó ninguna fecha, puedes mostrar un mensaje de error si deseas
    } else {
        var fechaSeleccionada = select.value;
        
        // Redirigir a la página correspondiente según la fecha seleccionada
        if (fechaSeleccionada === "1") {
            window.location.href = "reto3.3.html"; // Reemplaza "reto3.3.html" con la URL de la página que deseas abrir para la fecha 1
        } else {
            window.location.href = "reto3.3.html"; // Reemplaza "otra_pagina.html" con la URL de la página de la otra fecha
        }
        // Agrega más condiciones para cada fecha si es necesario
    }
}

//Evento que carga la función automaticamente 

window.onload = function() {

    document.getElementById("output-img").innerHTML = "<img src='imagenes/.jpg' class='img-fluid rounded' alt='' />";


    document.getElementById("movies").onchange = function(e) {

        let n = e.target.value;
        let imagen = "<img src='imagenes/peliculas/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt 'pelis' />";
        let text = ["SPIDERMAN: INTO THE SPIDERVERSE ",
        "THE BATMAN",
        "OPPENHEIMER",
        "BARBIE",

    ];
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n-1];
    };
};




