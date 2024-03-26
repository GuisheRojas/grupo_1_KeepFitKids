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
                        key={product.product.id}
                        id={product.product.id}
                        name={product.product.name}
                        description={product.product.description}
                        price={product.product.price}
                        category={product.product.category}
                        is_new={product.product.is_new}
                        image={product.product.image}
                    />
                ))}
            </div>
        );
    }
}

export default Products;
