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

    return(
        <div class="p-5 card mb-3" >
            <div class=" row g-0">
                <div class="col-md-4">
                    <img src={user?.avatar} class="img-fluid rounded-start " alt={`Avatar de ${user?.name}`}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">Usuario: {user?.name}</h2>
                        <h4>Nombre: {user?.first_name}</h4>
                        <h4 class="card-text">Apellido: {user?.last_name}</h4>
                        <h4 class="card-text">Correo Electrónico: {user?.email}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail