/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Obtener referencias a los elementos del DOM
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const virtualKeyboard = document.getElementById('virtualKeyboard');

let activeField = null; // Almacenar el último campo de entrada activo

// Función de validación del formulario
function validateForm() {
    let isValid = true;

    // Validación del nombre de usuario
    if (username.value.trim() === '') {
        document.getElementById('usernameError').textContent = 'El nombre de usuario es obligatorio';
        isValid = false;
    } else {
       document.getElementById('usernameError').textContent = '';
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'El correo electrónico no es válido';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validación de la contraseña
    if (password.value.trim() === '' || password.value !== confirmPassword.value) {
        document.getElementById('passwordError').textContent = 'Las contraseñas no coinciden';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    return isValid;
}

// Función para mostrar/ocultar contraseña
togglePassword.addEventListener('click', function () {
    if (password.type === 'password') {
        password.type = 'text';
        confirmPassword.type = 'text';
        togglePassword.textContent = 'Ocultar';
    } else {
        password.type = 'password';
        confirmPassword.type = 'password';
        togglePassword.textContent = 'Mostrar';
    }
});

// Función para añadir caracteres desde el teclado virtual
function addCharacter(character) {
    if (activeField) {
        activeField.value += character;
    }
}

// Función para eliminar el último carácter del campo activo
function deleteCharacter() {
    if (activeField) {
        activeField.value = activeField.value.slice(0, -1);
    }
}

// Event listeners para campos de entrada
username.addEventListener('focus', function () {
    activeField = username;
});

email.addEventListener('focus', function () {
    activeField = email;
});

password.addEventListener('focus', function () {
    activeField = password;
});

confirmPassword.addEventListener('focus', function () {
    activeField = confirmPassword;
});

// Event listener para el envío del formulario
form.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Evitar el envío del formulario si hay errores de validación
    }
});

// Crear teclado virtual
const keyboardLayout = ['1234567890Q', 'WERTYUIOPAS', 'DFGHJKLZXCV', 'BNM@,_.←'];
keyboardLayout.forEach(row => {
    const rowElement = document.createElement('div');
    row.split('').forEach(character => {
        const button = document.createElement('button');
        button.textContent = character;
        button.addEventListener('click', function () {
            if (character === '←') {
                deleteCharacter();
            } else {
                addCharacter(character);
            }
        });
        rowElement.appendChild(button);
    });
    virtualKeyboard.appendChild(rowElement);
});



