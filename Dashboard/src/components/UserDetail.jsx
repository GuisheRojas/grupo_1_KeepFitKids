import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams

function UserDetail() {
    const { id } = useParams(); // Obtiene el ID de la URL

    const [user, setUser] = useState(null); // Usa el estado local para almacenar el usuario

    useEffect(() => {
        // Realiza la solicitud para obtener el usuario según el ID
        fetch(`http://localhost:8000/api/users/${id}`)
            .then((response) => response.json())
            .then((userData) => {
                setUser(userData); // Actualiza el estado con los datos del usuario
            })
            .catch((err) => console.log(err));
    }, [id]); // Ejecuta este efecto cada vez que cambia el ID

    render(
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={image} alt={name}/>
                </div>
                <p>${price}</p>
                <p>Categoría: {category}</p>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default UserDetail