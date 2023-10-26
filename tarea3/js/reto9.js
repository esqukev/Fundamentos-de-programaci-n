function contenido1() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let conte1 = document.getElementById("conte1");

    if (dato1.checked) {
        conte1.style.display = "block";
        conte2.style.display = "none";
        conte3.style.display = "none";
        conte4.style.display = "none";
    }
}

function contenido2() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let conte2 = document.getElementById("conte2");

    if (dato2.checked) {
        conte2.style.display = "block";
        conte1.style.display = "none";
        conte3.style.display = "none";
        conte4.style.display = "none";
    }
}

function contenido3() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let conte3 = document.getElementById("conte3");

    if (dato3.checked) {
        conte3.style.display = "block";
        conte1.style.display = "none";
        conte2.style.display = "none";
        conte4.style.display = "none";
    }
}

function contenido4() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let conte4 = document.getElementById("conte4");

    if (dato4.checked) {
        conte4.style.display = "block";
        conte1.style.display = "none";
        conte2.style.display = "none";
        conte3.style.display = "none";
    }
}