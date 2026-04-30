document.getElementById("formularioLogin").addEventListener("submit", function (event) {
    event.preventDefault(); //Evita que el formulario se envíe automáticamente


    //Obtener valores
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    //Validacion basica
    if (usuario === "Adilene" && contrasena === "250801") {
        alert("inicio de sesión exitoso. ¡Bienvnido!");
        // Aquí podrías redirigir a otra página:
        Window.location.href = "index.html";
    } else {
        alert("usuario o contraseña incorrecta intenta nuevamente");
    }
});
