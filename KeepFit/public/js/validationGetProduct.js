const isEmpty = (input) => input.value && input.value.trim() != "";
//const existe = (input) => 

const validations = [
    {
        inputName: "name",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El nombre no puede estar vacio"
            },
            {
                validator: (input) => input.value.length >= 5,
                errorMsg: "El nombre debe contener al menos 5 caracteres"
            }
        ]
    },
    {
        inputName: "productImage",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La imagen del producto no puede estar vacia"
            },

        ]
    },
    {
        inputName: "productImageUrl",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La Url no puede estar vacia"
            },
            
        ]
    },
    {
        inputName: "price",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El precio no puede estar vacio"
            },
 
        ]
    },
    {
        inputName: "description",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La descripcion no puede estar vacia"
            },
            {
                validator: (input) => input.value.length >= 20,
                errorMsg: "La descripcion debe contener al menos 20 caracteres"
            }
        ]
    },
    {
        inputName: "color",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El color no puede estar vacio"
            },
            
        ]
    },
    {
        inputName: "size",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El talle no puede estar vacio"
            },
            
        ]
    },
    {
        inputName: "category",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La categoria no puede estar vacio"
            },
            
        ]
    },
    {
        inputName: "quantity",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "La cantidad no puede estar vacia"
            },
            
        ]
    }     
]

window.addEventListener('load', function(){
    let form = document.querySelector('#formGetProduct');

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