import React, { Component } from "react";
import ArticleUser from './ArticleUser'

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.users);
                // Mapeamos las solicitudes fetch en un array de promesas
                const userPromises = data.users.map((user) => {
                    return fetch(user.detail)
                        .then(response => response.json());
                });

                // Esperamos a que todas las promesas se resuelvan
                Promise.all(userPromises)
                    .then((userData) => {
                        // Actualizamos el estado con los datos completos
                        this.setState({
                            users: userData
                        });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                {users.map((user, index) => (
                    <ArticleUser
                        key={index}
                        id={user.id}
                        name={user.name}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))}
            </div>
        );
    }
}

export default Users;