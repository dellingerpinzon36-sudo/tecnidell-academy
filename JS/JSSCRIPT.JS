// REGISTRO
const registroForm = document.getElementById("registroForm");

if (registroForm) {
    registroForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const password = document.getElementById("password").value;

        const usuario = { nombre, correo, password };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Registro exitoso");
        window.location.href = "login.html";
    });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const correo = document.getElementById("loginCorreo").value;
        const password = document.getElementById("loginPassword").value;

        const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

        if (usuarioGuardado && 
            correo === usuarioGuardado.correo && 
            password === usuarioGuardado.password) {

            localStorage.setItem("sesionActiva", "true");
            window.location.href = "perfil.html";

        } else {
            alert("Correo o contraseña incorrectos");
        }
    });
}

// PERFIL
if (window.location.pathname.includes("perfil.html")) {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        document.getElementById("usuarioNombre").innerText = usuario.nombre;
    }
}

// CERRAR SESIÓN
function cerrarSesion() {
    localStorage.removeItem("sesionActiva");
    window.location.href = "index.html";
}