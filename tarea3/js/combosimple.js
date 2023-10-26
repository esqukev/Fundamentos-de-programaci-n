//Evento que carga la función automaticamente 

window.onload = function() {

    document.getElementById("output-img").innerHTML = "<img src='imagenes/fortuna.jpg' class='img-fluid rounded' alt='fortuna' />";


    document.getElementById("atracciones").onchange = function(e) {

        let n = e.target.value;
        let imagen = "<img src='imagenes/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt 'amenidades' />";
        let text = ["Rios y piscinas de aguas termales",
        "Recorra la montaña",
        "Disfrute de un amanecer unico",
        "Para los amantes de la fotografía",
        "Un tour por los senderos entre la montaña",
        "Una introspectiva a su bebida mañanera",
        "Sumerjase en aguas celestes",
        "Domingos con diversión para todos",
    ];
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n-1];
    };
};

//funcion del boton reiniciar 

document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-img").innerHTML = "<img src='imagenes/fortuna.jpg' class='img-fluid rounded' alt='fortuna' />";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("stadium").value = "";
};