const isEmpty = (input) => input.value && input.value.trim() !== "";
const isLengthName = (input) => input.value.length >= 5;
const isLengthDescription = (input) => input.value.length >= 20;
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

const validations = [
    {
        inputName: "name",
        inputValidations: [
            {
                validator: isEmpty,
                errorMsg: "El nombre no puede estar vacio"
            },
            {
                validator: isLengthName,
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
            {
                validator: isValidFormat,
                errorMsg: "Debe subir un archivo con una extensión válida (.png, .jpg, .jpeg)"
            }

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
                validator: isLengthDescription,
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
    let form = document.querySelector('#formEditProduct');
    
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



// ?????????
// {
//     inputName: "productImageUrl",
//     inputValidations: [
//         {
//             validator: isEmpty,
//             errorMsg: "La Url no puede estar vacia"
//         },
        
//     ]
// },