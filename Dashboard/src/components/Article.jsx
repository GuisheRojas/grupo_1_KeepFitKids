import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({id, name, description, price, category, is_new, image}) => {
    return(
        
            <div className="card shadow mb-4">
                <div className="card-body">
                <Link to={`/products/detail/${id}`}>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 product_img" style={{ width: "40rem" }} src={image} alt={name}/>
                    </div>
                </Link>
                    <p className="price">${price}</p>
                    <h4 className="description">{description}</h4>
                </div>
            </div>
        
        
    )
}

export default Article