import React, { Component } from "react";
import ContentRowInfo from "./ContentRowInfo";
import CategoriesInDb from "./CategoriesInDb";
import LastProductInDb from "./LastProductInDb";

class ContentRowTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProd: 0,
      totalUsers: 0,
      totalCategories: 0,
      lastProduct: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const lastProductIndex = data.products.length - 1; // Acceder al último producto dentro del primer elemento de "products"
        this.setState({
          totalProd: data.count,
          totalCategories: Object.keys(data.countByCategory).length
        });
        fetch(data.products[lastProductIndex].detail)
          .then(response => response.json())
          .then(data => {
            this.setState({
              lastProduct: data
            })
          })
      })
      .catch((err) => console.log(err));
    
    fetch("http://localhost:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          totalUsers: data.count
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { totalProd, totalUsers, totalCategories, lastProduct } = this.state;

    const contentRowInfo = [
      { titulo: "Cantidad de productos", cifra: totalProd, colorBorde: "primary", icono: "box" },
      { titulo: "Cantidad de usuarios", cifra: totalUsers, colorBorde: "success", icono: "user" },
      { titulo: "Cantidad de categorías", cifra: totalCategories, colorBorde: "warning", icono: "star" }
    ];

    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        <div className="row">
          {contentRowInfo.map((content, index) => (
            <ContentRowInfo
              key={index}
              titulo={content.titulo}
              cifra={content.cifra}
              colorBorde={content.colorBorde}
              icono={content.icono}
            />
          ))}
        </div>

        <div className="row">
          <LastProductInDb
            id={lastProduct.id}
            img={ lastProduct.image }
            name={ lastProduct.name }
            description={ lastProduct.description }
          />
          <CategoriesInDb/>
        </div>
      </div>
    );
  }
}

export default ContentRowTop;
