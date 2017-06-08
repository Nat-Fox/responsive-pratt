// Función para validar el email
function validarCorreo(email) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!expRegCorreo.test(email)) {
        return true;
    }
}

// Función para limpiar el formulario
function limpiarForm() {
    var name = document.getElementById('name').value = '';
    var email = document.getElementById('email').value = '';
    var texto = document.getElementById('text-area').value = '';
}

// Función que acepte solo letras
function soloLetras(value) {
    return (isNaN(parseInt(value)));
}

// Evento al presionar el boton submit 
var botonSubmit = document.getElementById('btn-submit');
botonSubmit.addEventListener('click', validar);

function validar() {
    var nombre = document.getElementById('name');
    var email = document.getElementById('email');
    var texto = document.getElementById('text-area')

    if (nombre.value === '' || email.value === '' || texto.value === '') {
        alert('Debes llenar todos los campos');
    }

    if (email.value !== '') {
        if (validarCorreo(email.value)) {
            alert('Debes ingresar un formato valido. Ejem: mail@mail.com')
        }
    }

    if (nombre.value !== '') {
        if (!soloLetras(nombre.value)) {
            alert('Debes ingresar solo letras');
        }
    }

    if (!validarCorreo(email.value) && soloLetras(nombre.value) && texto.value !== '') {
        limpiarForm();
        alert('Enviado con éxito');
    }

}