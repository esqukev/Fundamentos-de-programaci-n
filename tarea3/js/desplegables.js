$("#ra").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Lente',
        text: 'El lente de la cámara se utiliza basado en la foto que se busca. Cada lente tiene su utilidad especifica y permite realizar distintas técnicas.',
    });
});

$("#rb").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Botón deplegar lente',
        text: 'Este botón nos permite liberar el lente a la hora que decidamos cambiarlo.',
    });
});

$("#rc").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Zapata para luz o flash',
        text: 'En este espacio tenemos la montura para utilizar ya sea un flash, una luz, un disparador cuando necesitemos utilizar una luz de refuerzo.',
    });
});

$("#rd").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Selección de modo',
        text: 'Esta herramienta nos permite seleccionar el modo que deseemos utilizar nuestra cámara. Muy útil para principiantos y hasta avanzados.',
    });
});

$("#re").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Disparador',
        text: 'Con este botón disparamos nuestra cámara para tomar la foto. También funciona para enfocar la foto cuando utilizamos el modo automatico',
    });
});


$("#r1").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        textAlign: 'right',
        icon: 'question',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<strong>El término pared que ahora vamos a analizar hay que exponer, en primer lugar, que deriva del latín. Emana concretamente de la palabra “paries”, que puede traducirse como “pared”.</strong> ' +
            '<br><br><br>' +
            '<p class=""> - La pared de Shakira.</p>' +
            '<br>' +
            '<p class=""> - Contra la pared” de Jiggy Drama. </p>' +
            '<br>' +
            '<p class=""> - La pared de José Manuel Soto. </p>'
    });
});



$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Información general',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'El suelo es la parte inferior de ciertas construcciones o cosas. Puede decirse que el término, con origen etimológico en el latín solum, refiere a la superficie de la Tierra (la parte exterior de la corteza terrestre) y donde se plantan las semillas para las actividades agrícolas.',
        footer: '<a href="https://definicion.de/suelo" target="blank">Leer más</a>'
    });
});




$("#r3").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        imageUrl: 'imagenes/logo.jpg',
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: '<strong> ¡Más tarjetas de crédito es sinónimo de más deudas! </strong> ' +
            '<br><br><br>' +
            '<p class="aliizq">- Es por eso que antes de adquirir una tarjeta de crédito en estos momentos, le aconsejamos analizar si realmente la requiere. </p>' +
            '<br>' +
            '<p class="aliizq">- La tarjeta de crédito puede ser un instrumento útil siempre y cuando se tenga claro cómo funciona y desde luego, pueda manejarla. </p>'
    });
});





$("#r4").click(function() {
    Swal.fire({
        title: 'Información',
        text: 'Framework CSS.',
        imageUrl: 'imagenes/logo1.png',
        imageWidth: 500,
        imageHeight: 400,
        imageAlt: 'Logo',
    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Atención Amigo!',
        text: 'Esta ventana va a cerrarse en 3 segundos',
        icon: 'info',
        timer: 3000,
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    )
});