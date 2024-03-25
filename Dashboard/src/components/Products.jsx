import React, { Component } from "react";
import Article from './Article'

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/products")
            .then((response) => response.json())
            .then((data) => {
                // Mapeamos las solicitudes fetch en un array de promesas
                const productPromises = data.products.map((product) => {
                    return fetch(product.detail)
                        .then(response => response.json());
                });

                // Esperamos a que todas las promesas se resuelvan
                Promise.all(productPromises)
                    .then((productData) => {
                        // Actualizamos el estado con los datos completos
                        this.setState({
                            products: productData
                        });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                {products.map((product, index) => (
                    <Article
                        key={index}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        category={product.category}
                        is_new={product.is_new}
                        image={product.image}
                    />
                ))}
            </div>
        );
    }
}

export default Products;
