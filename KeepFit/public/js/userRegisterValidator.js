window.addEventListener('load', function() {
   let formulario =  document.getElementById('register-form')
   formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        var nombre = document.getElementById('first_name').value;
        var apellido = document.getElementById('last_name').value;
        var email = document.getElementById('email').value;
        var contraseña = document.getElementById('password').value;
        var imagen = document.getElementById('avatar').files[0];

        var errores = [];

        // Validación del nombre y apellido
        if (!nombre || nombre.length < 2) {
            errores.push("El nombre es obligatorio y debe tener al menos 2 caracteres.");
        }
        if (!apellido || apellido.length < 2) {
            errores.push("El apellido es obligatorio y debe tener al menos 2 caracteres.");
        }

        // Validación del email
        if (!email) {
            errores.push("El email es obligatorio.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errores.push("El email no tiene un formato válido.");
        }

        // Validación de la contraseña
        if (!contraseña || contraseña.length < 8) {
            errores.push("La contraseña es obligatoria y debe tener al menos 8 caracteres.");
        } else if (!/[A-Z]/.test(contraseña) || !/[a-z]/.test(contraseña) || !/\d/.test(contraseña) || !/[^a-zA-Z0-9]/.test(contraseña)) {
            errores.push("La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.");
        }

        // Validación de la imagen
        var extensionesPermitidas = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!imagen) {
            errores.push("La imagen es obligatoria.");
        } else {
            var extension = imagen.name.substring(imagen.name.lastIndexOf('.')).toLowerCase();
            if (!extensionesPermitidas.includes(extension)) {
                errores.push("El archivo de imagen no es válido. Se permiten solo archivos JPG, JPEG, PNG, o GIF.");
            }
        }

        // Mostrar errores
        
        if (errores.length > 0) {
            event.preventDefault()
            let ulErrores = document.querySelector(".error");
            console.log(ulErrores);
            for (let i= 0; i < errores.length; i++){
                ulErrores.innerHTML += `<li>${errores[i]}</li>`
            }
        } else {
             
              event.target.submit();
            
           
        }
    });
});
