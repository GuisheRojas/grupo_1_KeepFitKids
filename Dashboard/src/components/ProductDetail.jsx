import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams

function ProductDetail() {
    const { id } = useParams(); // Obtiene el ID de la URL

    const [product, setProduct] = useState(null); // Usa el estado local para almacenar el producto

    useEffect(() => {
        // Realiza la solicitud para obtener el producto según el ID
        fetch(`http://localhost:8000/api/products/${id}`)
            .then((response) => response.json())
            .then((productData) => {
                setProduct(productData); // Actualiza el estado con los datos del producto
            })
            .catch((err) => console.log(err));
    }, [id]); // Ejecuta este efecto cada vez que cambia el ID

    return (       
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={product?.image} class="img-fluid rounded-start" alt={product?.name}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{product?.name}</h2>
                        <h3>${product?.price}</h3>
                        <h4 class="card-text">{product?.description}</h4>
                        <p class="card-text"><small class="text-body">Producto {product?.category}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;