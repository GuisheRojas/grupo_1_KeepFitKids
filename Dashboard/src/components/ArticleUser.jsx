import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({id, name, avatar, email}) => {
    return(
        <div className="p-5 card mb-3" >
            <div className=" row g-0">
                <div className="col-md-4">
                <Link to={`/users/detail/${id}`}>
                    <img src={avatar} className="img-fluid rounded-start " alt={`Avatar de ${name}`}/>
                </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        <h2 className="card-title">Usuario: {name}</h2>
                        <h4 className="card-text">Correo Electrónico: {email}</h4>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Article