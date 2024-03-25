import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({id, name, avatar}) => {
    return(
        <div className="card shadow mb-4 d-inline-block">
            <div className="card-body">
                <h5>ID: {id}</h5>
                <Link to={`/products/detail/${id}`}>
                    <img src={avatar} alt={`Avatar de ${name}`} />
                </Link>
                <h4>Nombre de usuario: {name}</h4>
            </div>
        </div>
        
    )
}

export default Article