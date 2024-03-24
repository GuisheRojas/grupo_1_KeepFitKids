import React, { Component } from "react";
import Article from './Article'

class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/products")
            .then((response) => response.json())
            .then((data) => {
                data.products.map((product) => {
                    fetch(product.detail)
                        .then(response => response.json())
                        .then(data => {
                            this.setState((prevState) => ({
                                products: [prevState, data]
                            }))
                        })
                        .catch((err) => console.log(err))
                })
            })
            .catch((err) => console.log(err));
    }

    render(){
        const { products } = this.state;
        return(
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
        )
    }
}

export default Products;
