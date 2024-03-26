
const isEmpty = (input) => input.value && input.value.trim() != "";
const isEmail = (input) => /[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,4}){1,2}/.test(input.value);


const validations = [
    {
        inputName: "email",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El email no puede estar vacio"
            },
            {
               validator: isEmail,
               errorMsg: "El email debe ser valido"
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
        ]
    }
]
window.addEventListener('load', function(){
    let form = document.querySelector('#formLogIn');

    form.addEventListener("submit", function(e) {
        e.preventDefault();

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
            input.parentElement.classList.remove("fbFormsProd");
            input.parentElement.querySelector(".error").innerHTML = "";
        })

        if(errores.length == 0) {
            form.submit()
        } else {
            console.log(errores)
        }
    });
});