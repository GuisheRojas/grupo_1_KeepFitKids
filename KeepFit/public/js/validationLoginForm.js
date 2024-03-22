const isEmpty = (input) => input.value && input.value.trim() != "";
//const existe = (input) => 

const validations = [
    {
        inputName: "email",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El mail no puede estar vacio"
            },
            {
               validator: (input) => validator.isEmail(input),
               errorMsg: "El mail debe ser valido"
            },
            {
            // CREAMOS UNA FUNC ASINCRONICA PARA BUSCAR EN LA BASE DE DATOS
                validator: async(input) => {
                // luego creamos un endpoint que lo llamamos utilizando el metodo fetch
                    const res = await fetch (`/users/validations/${input}`)
                    // poner comilla simple invertida
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
                // CREAMOS UNA FUNC ASINCRONICA PARA BUSCAR EN LA BASE DE DATOS
                    validator: async(input) => {
                    // luego creamos un endpoint que lo llamamos utilizando el metodo fetch
                        const res = await fetch (`/users/validations/${input}`)
                        // poner comilla simple invertida
                        const data = await res.json()
                        return !data.existe
                    },
                    errorMsg: "La contraseña ya existe"
                }
        ]
    }
]
window.addEventListener('load', function(){
    let form = document.querySelector('#formLogIn');

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
            input.parentElement.classList.remove("fbFormsProd");
            input.parentElement.querySelector(".error").innerHTML = "";
        })

        if(errores.length == 0) {
            form.submit()
        } else {
            console.log(errores)
        }
    })
})