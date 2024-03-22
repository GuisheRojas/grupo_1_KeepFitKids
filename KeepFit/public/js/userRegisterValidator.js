/* window.addEventListener('load', function() {
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
            let ulErrores = document.querySelector("div.errors ul");
            for (let i= 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        } else {
             
              event.target.submit();
            
           
        }
    });
});
 */

const isEmpty = (input) => input.value && input.value.trim() !== "";
//const formato = (input) => input.value 

const validations = [
    {
        inputName: "first_name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debe ingresar un nombre"
            },
            {
                validator: (input) => input.value.length >= 2,
                errorMsg: "El nombre debe contener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "last_name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debe ingresar un apellido"
            },
            {
                validator: (input) => input.value.length >= 2,
                errorMsg: "El apellido debe contener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debe ingresar un email"
            },
            {
                validator: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
               // validator: (input) => validator.isEmail(input),
                errorMsg: "Debe ingresar un email valido"
            },
            {
            // CREAMOS UNA FUNC ASINCRONICA PARA BUSCAR EN LA BASE DE DATOS
                validator: async(input) => {
                // luego creamos un endpoint que lo llamamos utilizando el metodo fetch
                    const res = await fetch (`/users/validations/${input}`)
                    const data = await res.json()
                    return !data.existe
                },
                errorMsg: "El e-mail ya existe"
            } 
        ]
    },
    {
        inputName: "password",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La contraseña no puede estar vacia"
            },
            {
                validator: (input) => input.value.length >= 8,
                errorMsg: "debe tener al menos 8 caracteres"
            }
        ]
    },
    {
        inputName: "avatar",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La contraseña no puede estar vacia"
            },
            { 
                // Crear arreglos con extensiones permitidas
                validator: async(input) => {
                let allowedImages = ['jpeg', 'jpg', 'gif', 'png'];
                                
                // Obtener elemento por ID y que solo admita imágenes
                document.querySelector('#file-image').addEventListener('change', () => {
                    fileValidation('#file-image', allowedImages);
                });

                function fileValidation(selector, extensions){
                    let filePath = document.querySelector(selector).value || '';
                    // Seperar nombre de archivo por . y obtener último elemento (extensión)
                    let extension = filePath.split('.').pop().toLowerCase();

                    // Verificar que la extensión es permitida
                    if(!extensions.includes(extension)) {
                        alert('Suba archivos con una extensión válida: ' + extensions.join(', '));
                        // No puedes manipular el valor del input, solo devolver falso
                        return false;
                    }
                    return true;
                }
                }
            }
            ]
    }
]
window.addEventListener('load', function(){
    let form = document.querySelector('#register-form');

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log('Entré')

        let errores = [];
        validations.forEach((inputToValidate) => {
            let input = form[inputToValidate.inputName];
            for(let validation of inputToValidate.inputValidations) {
                let isValid = validation.validator(input);
                if (!isValid) {
                    errores.push(validation.errorMsg);
                    input.parentElement.classList.add("fbFormsProd");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElement.querySelector(".error").innerHTML =
                        validation.errorMsg;
                    return
                }
            }
            input.parentElement.classList.add("is-valid");
            input.parentElement.classList.remove("#register-form");
            input.parentElement.querySelector(".error").innerHTML = "";
        })

        if(errores.length == 0) {
            form.submit()
        } else {
            console.log(errores)
        }
    })
})