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
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="text-center">
                    <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4 product_img"
                        style={{ width: "40rem" }}
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <h2>{product.name}</h2>
                <h4>${product.price}</h4>
                <h4>Categoría: {product.category}</h4>
                <h4>{product.description}</h4>
            </div>
        </div>
    );
}

export default ProductDetail;