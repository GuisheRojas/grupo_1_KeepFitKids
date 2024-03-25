            //Segunda version
// import React from 'react'
// import ArticleUser from './ArticleUser'
// const Users = () =>{
//     componentDidMount(){
//         let prod = []
//         fetch("http://localhost:8000/api/users")
//             .then((response) => response.json())
//             .then((data) => {
//                 // Mapeamos las solicitudes fetch en un array de promesas
//                 const productPromises = data.products.map((product) => {
//                     return fetch(product.detail)
//                         .then(response => response.json());
//                 });

//                 // Esperamos a que todas las promesas se resuelvan
//                 Promise.all(productPromises)
//                     .then((productData) => {
//                         // Actualizamos el estado con los datos completos
//                         this.setState({
//                             products: productData
//                         });
//                     })
//                     .catch((err) => console.log(err));
//             })
//             .catch((err) => console.log(err));
//     }
//     const { products } = this.state
 
//     return(
//         <div>
//             {products.map((product, index) => (
//                     <ArticleUser
//                         key={index}
//                         id={product.id}
//                         name={product.name}
//                     />
//                 ))}
//         </div>
//     )
// }


        //Primera version
// // const Users = () => {
// //     const [usuarios, setUsuarios] = useState([])

// //     useEffect(()=>{
// //         fetch("http://localhost:8000/api/users")
// //                 .then((response) => response.json())
// //                 .then((data) => {
// //                     setUsuarios(data.users)
// //                 })
// //                 .catch(error =>console.error(error))
// //     },[])
// //     console.log(Array.from(usuarios))
// //   return (
// //     <div>
// //       <div className='card-body'>
// //         <ul>
// //             {Array.from(usuarios).map((usuarios, i) => {
// //                 return (
// //                     <li key={i}>
// //                         <h3>{usuarios.name}</h3>
// //                     </li>
// //                 )
// //             })}
// //         </ul>
// //       </div>
// //     </div>
// // }

// export default Users

//Version estable
import React, { Component } from "react";
import ArticleUser from './ArticleUser'

class Users extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            error: null,
            loading: true
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                const usersArray = Object.values(data.users);
                
                this.setState({
                    products: usersArray,
                    loading: false
                });
            })
            .catch((err) => {
                this.setState({
                    error: err.message,
                    loading: false
                });
            });
    }
    
    render() {
        const { products, error, loading } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }
        console.log(products)
        return (
            <div>
                {products.map((product, index) => (
                    <ArticleUser
                        key={index}
                        id={product.id} 
                        name={product.name}
                        // image={product.image}
                    />
                ))}
            </div>
        );
    }
}

export default Users;

