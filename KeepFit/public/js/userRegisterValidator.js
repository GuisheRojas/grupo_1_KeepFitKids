const isEmpty = (input) => input.value && input.value.trim() !== "";
const isLengthName = (input) => input.value.length >= 2;
const isEmail = (input) => /[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,4}){1,2}/.test(input.value);
const isLengthPassword = (input) => input.value.length >= 8;
const isValidFormat = (input) => {
    let allowedFormats = ['jpeg', 'jpg', 'png'];
    let filePath = input.value;
    // Seperar nombre de archivo por . y obtener último elemento (extensión)
    let extension = filePath.split('.').pop().toLowerCase();
    // Verificar que la extensión es permitida
    if(filePath == '' || allowedFormats.includes(extension)) {
        return true;
    } else if(!allowedFormats.includes(extension)) {
        console.log('Suba archivos con una extensión válida: ' + allowedFormats.join(', '));
        // No puedes manipular el valor del input, solo devolver falso
        return false;
    }
}
const isValidPassword = (input) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(input.value);
    if (!passwordRegex) {
        return false
    } else return true;
}


const validations = [
    {
        inputName: "name",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "Debes ingresar un nombre de usuario"
            },
            {
                validator: isLengthName,
                errorMsg: "El nombre de usuario debe contener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "first_name",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "Debe ingresar un nombre"
            },
            {
                validator: isLengthName,
                errorMsg: "El nombre debe contener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "last_name",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "Debe ingresar un apellido"
            },
            {
                validator: isLengthName,
                errorMsg: "El apellido debe contener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "email",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "Debe ingresar un email"
            },
            {
                validator: isEmail,
                errorMsg: "Debe ingresar un email valido"
            },
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
                validator: isLengthPassword,
                errorMsg: "La contraseña debe contener al menos 8 caracteres"
            },
            {
                validator: isValidPassword,
                errorMsg: "La contraseña debe contener al menos una minuscula, una mayuscula, un numero y un caracter especial"
            }
        ]
    },
    {
        inputName: "avatar",
        inputValidations: [
            { 
                validator: isValidFormat,
                errorMsg: "Debe subir un archivo con una extensión válida (.png, .jpg, .jpeg)"
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
                    input.parentElement.querySelector(".error").innerHTML = validation.errorMsg;
                    return
                }
            }
            input.parentElement.classList.add("is-valid");
            input.parentElement.classList.remove("#register-form");
            input.parentElement.querySelector(".error").innerHTML = "";
        });

        if(errores.length == 0) {
            form.submit()
        } else {
            console.log(errores)
        }
    });

});