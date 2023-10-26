window.onload = function() {
    //combo llamado modelo ID
    document.getElementById("modelo").onchange = function(e) {
            //destino del valor seleccionado combo1
            a = e.target.value;
            if (a == "Merkat") {
                var imagen = "imagenes/modelomerkat.jpg";
            } else if (a == "Nima") {
                var imagen = "imagenes/modelonima.jpg";
            } else if (a == "Nomad") {
                var imagen = "imagenes/modelonomad.jpg";
            } else if (a == "Rustico") {
                var imagen = "imagenes/modelorustico.jpg";
            }
            document.getElementById("imagen").src = imagen;
        }
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}


function calcular() {
    var montoCuota = 0;

    switch (a) {
        case "Merkat":
            if (n == "4 cuartos") montoCuota = 2500;
            else montoCuota = 3500;
            break;
        case "Nima":
            if (n == "4 cuartos") montoCuota = 2500;
            else montoCuota = 3500;
        case "Nomad":
            if (n == "4 cuartos") montoCuota = 2500;
            else montoCuota = 3500;
        case "Rustico":
            if (n == "4 cuartos") montoCuota = 2500;
            else montoCuota = 3500;
        default:
            break;
    }
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".jpg";

    swal.fire({
        imageUrl: imagenDireccion,
        html: "<p> Mira la cuota mensual del modelo " +
            a +
            " " +
            n +
            "<br><br> <strong>Cuota mensual:</strong></p> " +
            "$" +
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Casa " + a,
    });
}