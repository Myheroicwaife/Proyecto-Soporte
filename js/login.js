const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Agrega el siguiente código al principio para verificar si el usuario ha iniciado sesión
// Obtener el nombre de usuario almacenado en localStorage
const storedUsername = localStorage.getItem('username');
if (!storedUsername) {
    // Redirigir al usuario a la página de inicio de sesión si no ha iniciado sesión
    window.location.href = 'login.html'; // Asegúrate de que la página se llame correctamente
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Comprobar las credenciales
    if (username === 'Admin' && password === '1234') {
        alert('Inicio de sesión exitoso');
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem('username', username);
        // Redirigir al usuario a la página principal (index.html)
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
        // Limpiar los campos de entrada
        usernameInput.value = '';
        passwordInput.value = '';
    }
});
