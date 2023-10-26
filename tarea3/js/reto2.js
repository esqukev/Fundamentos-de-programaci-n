"use strict";

var num = 1;
var subtotal = 0;
var totalIVA = 0;
var totalServicio = 0;

function incluir() {
    var nombreTxt = document.getElementById("nombre").value;
    var articuloTxt = document.getElementById("articulo").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var precio = parseFloat(document.getElementById("precio").value);
    var total = 0;
    var iva = 0;
    var servicio = 0;

    // Condicionales
    if (nombreTxt == "" || articuloTxt == "" || isNaN(cantidad) || isNaN(precio)) {
        Swal.fire({
            title: '',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Por favo complete todos los datos correctamente.',
        });
    } else {
        subtotal = precio * cantidad;
        iva = subtotal * 0.13;
        servicio = subtotal * 0.05;
        totalIVA += iva;
        total += subtotal + iva + servicio;

        // Variable que almacena la estructura de la tabla
        var datosTabla = "<td>" + nombreTxt + "</td><td>" + articuloTxt + "</td><td>" + cantidad + "</td><td>" + "₡" + precio + "</td><td>" + "₡" + subtotal.toFixed(2) + "</td><td>" + "₡" + iva.toFixed(2) + "</td><td>" + "₡" + servicio.toFixed(2) + "</td>" + "₡" + total.toFixed(2);
        // Crea el elemento fila
        var agregar = document.createElement("tr");
        // Apunta los datos de la tabla
        agregar.innerHTML = datosTabla;
        // Agrega los datos de la tabla usando appendChild (nodo)
        document.getElementById('tabla').appendChild(agregar);
        // Aumenta el id de cada registro
        num++;
    }

    // Muestra el subtotal, total de IVA y total de Servicio actualizados
    document.getElementById('subtotal').textContent = "₡" + subtotal.toFixed(2);
    document.getElementById('total_iva').textContent = "₡" + totalIVA.toFixed(2);
    document.getElementById('total_servicio').textContent = "₡" + totalServicio.toFixed(2);

    // Limpiar los campos input
    document.getElementById("nombre").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function limpiar() {
    // Asigna 1 al campo número
    num = 1;
    subtotal = 0; // Reinicia el subtotal
    totalIVA = 0; // Reinicia el total de IVA
    totalServicio = 0; // Reinicia el total de Servicio
    // Recarga la página web
    location.reload();
    document.getElementById("nombre").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    // Borra el contenido de la tabla
    document.getElementById("tabla").innerHTML = "";
    document.getElementById('subtotal').textContent = "₡0.00";
    document.getElementById('total_iva').textContent = "₡0.00";
    document.getElementById('total_servicio').textContent = "₡0.00"; // Actualiza el subtotal, total de IVA y total de Servicio a cero
}

