
function evalua() {

    var cedula = document.getElementById('empleado').value;
    var resultado = document.getElementById('resultado');

    if (!/^\d{9}$/.test(cedula)) {
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'La cédula debe contener exactamente 9 dígitos.'
        });
        return false;
    } else
    if (cedula == 203640216) {
        Swal.fire({
            icon: 'error',
            title: 'Sin éxito.',
            text: 'El empleado no se encontró.'
        });

    } else {
        if (cedula == 0) {
            document.getElementById('empleado').value = "";
            limpiar();
        }
        if (cedula == 108620417) {
            resultado.innerHTML = 'John Dawson';
            document.getElementById("ima1").style.display = 'block';
            document.getElementById("ima0").style.display = 'none';
            document.getElementById("ima2").style.display = 'none';
            document.getElementById("ima3").style.display = 'none';
            document.getElementById("ima4").style.display = 'none';
            document.getElementById("ima5").style.display = 'none';

        } else {
            if (cedula == 703640211) {
                resultado.innerHTML = 'Joanne Davila';
                document.getElementById("ima2").style.display = 'block';
                document.getElementById("ima0").style.display = 'none';
                document.getElementById("ima1").style.display = 'none';
                document.getElementById("ima3").style.display = 'none';
                document.getElementById("ima4").style.display = 'none';
                document.getElementById("ima5").style.display = 'none';
                document.getElementById("ima4").style.display = 'none';
                document.getElementById('empleado').value = "";
            } else {
                if (cedula == 301130401) {
                    resultado.innerHTML = 'Dave Larson';
                    document.getElementById("ima3").style.display = 'block';
                    document.getElementById("ima0").style.display = 'none';
                    document.getElementById("ima1").style.display = 'none';
                    document.getElementById("ima2").style.display = 'none';
                    document.getElementById("ima4").style.display = 'none';
                    document.getElementById("ima5").style.display = 'none';
                    document.getElementById('empleado').value = "";

                } else {
                    if (cedula == 103220144) {
                        resultado.innerHTML = 'Chris Davis';
                        document.getElementById("ima4").style.display = 'block';
                        document.getElementById("ima0").style.display = 'none';
                        document.getElementById("ima1").style.display = 'none';
                        document.getElementById("ima2").style.display = 'none';
                        document.getElementById("ima3").style.display = 'none';
                        document.getElementById("ima5").style.display = 'none';
                        document.getElementById('empleado').value = "";

                    } else {
                        if (cedula == 208990622) {
                            resultado.innerHTML = 'Kris Lee';
                            document.getElementById("ima5").style.display = 'block';
                            document.getElementById("ima0").style.display = 'none';
                            document.getElementById("ima1").style.display = 'none';
                            document.getElementById("ima2").style.display = 'none';
                            document.getElementById("ima3").style.display = 'none';
                            document.getElementById("ima4").style.display = 'none';
                            document.getElementById('empleado').value = "";
                        }
                    }
                }
            }
        }
    }
}

function limpiar() {
    document.getElementById('empleado').value = "";
    resultado.innerHTML = '';
    document.getElementById("ima0").style.display = 'block';
    document.getElementById("ima1").style.display = 'none';
    document.getElementById("ima2").style.display = 'none';
    document.getElementById("ima3").style.display = 'none';
    document.getElementById("ima4").style.display = 'none';
    document.getElementById("ima5").style.display = 'none';
}