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
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product?.product.image} className="img-fluid rounded-start" alt={product?.product.name}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{product?.product.name}</h2>
                        <h4 className="card-text">${product?.product.price}</h4>
                        <h5 className="card-text">{product?.product.description}</h5>

                        {/* <h6 className="card-text">Stock: </h6> */}
                        {product?.Stock.map((stock) =>{
                            return(
                                <ul>
                                    <li><h6 className="card-text">{stock.quantity} productos en color {stock.color} talle {stock.size}</h6></li>
                                </ul>
                            )
                        })}
                        <p className="card-text"><small className="text-body">Producto {product?.product.category}</small></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;