import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({id, name, avatar, email}) => {
    return(
        <div class="p-5 card mb-3" >
            <div class=" row g-0">
                <div class="col-md-4">
                <Link to={`/users/detail/${id}`}>
                    <img src={avatar} class="img-fluid rounded-start " alt={`Avatar de ${name}`}/>
                </Link>
                </div>
                <div class="col-md-8">
                    <div class="card-body">

                        <h2 class="card-title">Usuario: {name}</h2>
                        <h4 class="card-text">Correo Electrónico: {email}</h4>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Article