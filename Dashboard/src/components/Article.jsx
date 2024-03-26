import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({id, name, description, price, image}) => {
    return(
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={`/products/detail/${id}`}>
                        <img src={image} className="img-fluid rounded-start" alt={name}/>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h3>${price}</h3>
                        <h4 className="card-text">{description}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article