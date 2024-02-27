window.addEventListener("load", (e) => {
    const cantColores = document.querySelector("#input__productCantColores");
    const cantColoresButton = document.querySelector("#cantColoresButton");
    const contenedorColorTalle = document.querySelector(".group__color-talle");

    let colors = [];
    let sizes = [];

db.Colors.findAll()
    .then(color => color.forEach(color => colors.push(color.dataValues.name)))
    .catch(err => console.log(err));

db.Sizes.findAll()
    .then(size => size.forEach(size => sizes.push(size.dataValues.name)))
    .catch(err => console.log(err));


    cantColores.addEventListener("change", (e) => {
        let numeroIngresado = e.target.value;
        // contenedorColorTalle.innerHTML = "";
        // if(numeroIngresado > 0 && numeroIngresado < 21) {
        //     for(let i = 0; i < numeroIngresado; i++) {
        //         contenedorColorTalle.innerHTML += `<div class="group__color-talle">
        //         <div class="group__color-talle-n">
        //             <div class="group__color">
        //                 <label for="color">Color</label>
        //                 <select name="color" id="input__productColor">
        //                     <option value="">Seleccione un color</option>
        //                     <% for(let i = 0; i < colores.length; i++) { %>
        //                         <option value="<%=i + 1%>"><%=colores[i]%></option>
        //                     <% } %>
        //                 </select>
        //             </div>
        //             <div class="group__talle">
        //                 <% for(let i = 0; i < talles.length; i++) { %>
        //                     <div class="talle">
        //                         <label for="talle"><%= talles[i] %></label>
        //                         <input type="checkbox" name="talle" class="input__productTalle">
        //                     </div>
        //                 <% } %>
        //             </div>
        //         </div>`;

        //     }
        // }
        console.log("Me disparé");
        console.log(e.target.value);
    });

    cantColoresButton.addEventListener("click", e => e.preventDefault());
});