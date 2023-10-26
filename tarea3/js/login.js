//Microinteracciones JSON
//https://lottiefiles.com/featured



/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
document.getElementById("btn-login").addEventListener("click", login);


/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Ingrese todos los datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://embed.lottiefiles.com/animation/62623"></iframe> <br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Debe completar todos los espacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Su sesión ha iniciado",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 3000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=525765df-6b85-451f-bca1-33e9490e57ce/V0FKMffwyX.json"></iframe> <br><br><p>¡Un momento!</p>',

            }).then(() => {
                window.location.href = "https://www.ucenfotec.ac.cr", "blank";
            });
        } else {
            text = "Los datos no coinciden o no son correctos.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}