import React, { Component } from "react";
import Article from "./Article";

class ProductsByCategory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.fetchProducts(this.props.category);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.fetchProducts(this.props.category);
        }
    }

    fetchProducts(category) {
        this.state.products = [];
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
                        const prod = productData.filter((product) => product.product.category === category)
                        // Actualizamos el estado con los datos completos
                        console.log(prod);
                        this.setState({
                            products: prod
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

export default ProductsByCategory