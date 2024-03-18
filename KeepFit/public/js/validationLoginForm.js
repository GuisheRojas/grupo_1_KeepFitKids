const isEmpty = (input) => input.value && input.value.trim() != "";
//const existe = (input) => 
//const isEmail = (input) => input.value 
    //function validarEmail(valor) {
       
        //if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        //    alert("La dirección de email es correcta!");
        //} else {
        //    alert("La dirección de email es incorrecta!.");
        //}

const validations = [
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "El mail no puede estar vacio"
            },
            //{
            //    validator: isEmail,
            //    errorMsg: "El mail debe ser valido"
            //},
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

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const errores = [];
        validations.forEach((inputToValidate) => {
            const input = form[inputToValidate.inputName];
            for(const validation of inputToValidate.validations) {
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