window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
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
    if (document.getElementById("modelo").value == "Seleccione un diseño:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Seleccione el diseño de casa. </p> '
        })
    } else {
        if (document.getElementById("version").value == "Seleccione la cantidad de cuartos:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="formatos1"> Seleccione la cantidad de cuartos a cotizar. </p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "Merkat") {
                if (n == "4 cuartos") {
                    montoCuota = 2200;
                    swal.fire({
                        imageUrl: "imagenes/modelomerkat.jpg",
                        html: "<p> Mira la cuota mensual del modelo Merkat 4 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Casa Merkat",
                    })
                } else {
                    montoCuota = 3450;
                    swal.fire({
                        imageUrl: "imagenes/modelomerkat.jpg",
                        html: "<p>Mira la cuota mensual del modelo Merkat 5 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Casa Merkat",
                    })
                }
            } else if (a == "Nima") {
                if (n == "4 cuartos") {
                    montoCuota = 2500;
                    swal.fire({
                        html: "<p> Mira la cuota mensual del modelo Nima 4 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/modelonima.jpg",
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Casa Nima",
                    })
                } else {
                    montoCuota = 3500;
                    swal.fire({
                        html: "<p>Mira la cuota mensual del modelo nima 5 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/modelonima.jpg",
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Casa Nima",
                    })
                }
            } else if (a == "Nomad") {
                if (n == "4 cuartos") {
                    montoCuota = 2500;
                    swal.fire({
                        html: "<p> Mira la cuota mensual del modelo Nomad 4 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/modelonomad.jpg",
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Casa Nomad",
                    })
                } else {
                    montoCuota = 3500;
                    swal.fire({
                        html: "<p>Mira la cuota mensual del modelo Nomad 5 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/modelonomad.jpg",
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Casa Nomad",
                    })
                }
            } else if (a == "Rustico") {
                if (n == "4 cuartos") {
                    montoCuota = 2500;
                    swal.fire({
                        html: "<p> Mira la cuota mensual del modelo Rustico 4 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/modelorustico.jpg",
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Casa Rustico",
                    })
                } else {
                    montoCuota = 3500;
                    swal.fire({
                        html: "<p>Mira la cuota mensual del modelo Rustico 5 cuartos: <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/modelorustico.jpg",
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Casa Rustico",
                    })
                }
            }
        }
    }
}