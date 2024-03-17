const isEmpty = (input) => input.value && input.value.trim() != "";
//const existe = (input) => 


const validations = [
    {
        inputName: "email",
        validations: [
            {
                inputName: "email",
                validations: [
                  {
                    validator: isEmpty,
                    errorMsg: "Debes completar tu email",
                  },
                  {
                    validator: (input) => /\S+@\S+\.\S+/.test(input.value) != "",
                    errorMsg: "Email debe tener un formato válido",
                  },
                ],
              },
            //{
            //    validator: existe,
            //    errorMsg: "El mail debe existir en la BD"
            //}
        ]
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "La contraseña no puede estar vacia"
            },
            //{
            //    validator: existe,
            //    errorMsg: "debe coincidir con la existente en la BD"
            //}
        ]
    }
   
]
window.addEventListener('load', function(){
    let formulario = document.querySelector('#formulario');
    console.log(formulario)
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const errores = [];
        validations.forEach((inputToValidate) => {
            const input = form[inputToValidate.inputName];
            for(const validation of inputToValidate.validations) {
                console.log(validation)
                const isValid = validation.validator(input);
                if (!isValid) {
                    errores.push(validation.errorMsg);
                    input.parentElement.classList.add("is-invalid");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElementr.querySelector(".error").innerHTML =
                        validation.errorMsg;
                    return
                }
            }
            input.parentElement.classList.add("is-valid");
            input.parentElement.classList.remove("is-invalid");
            input.parentElement.querySelector(".error").innerHTML = "";
        })

        if(errores.length == 0) {
            form.submit()
        } else {
            console.log(errores)
        }
    })
})