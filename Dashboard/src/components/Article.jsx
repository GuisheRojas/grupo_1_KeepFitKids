import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({id, name, description, price, image}) => {
    return(
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <Link to={`/products/detail/${id}`}>
                        <img src={image} class="img-fluid rounded-start" alt={name}/>
                    </Link>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <h3>${price}</h3>
                        <h4 class="card-text">{description}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article