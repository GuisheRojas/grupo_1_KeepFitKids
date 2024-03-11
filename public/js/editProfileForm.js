const isEmpty = (input) => input.value && input.value.trim() !== "";
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
                errorMsg: "Debe ingresar un email valido"
            }
        ]
    }
]
window.addEventListener('load', function(){
    let form = document.querySelector("#forms")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const errores = []; 
        validations.forEach((inputToValidate) => {
            const input = form[inputToValidate.inputName]
            for(const validation of inputToValidate.validations) {
                const isValid = validation.validator(input)
                if(!isValid){
                    errores.push(validation.errorMsg);
                    input.parentElement.classList.add("is-invalid");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElement.querySelector(".line").innerHTML = 
                        validation.errorMsg;
                    return
                }
            }
            input.parentElement.classList.add("is-valid");
            input.parentElement.classList.remove("is-invalid");
            input.parentElement.querySelector(".line").innerHTML = "";
        })

     if(errores.length == 0){
        form.submit()
     }else{
        console.log(errores)
     }
    })

})
