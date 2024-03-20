import ContentRowMovies from "./ContentRowMovies"
import GenresInDb from "./GenresInDb"
import LastMovieInDb from "./LastMovieInDb"
import { Component } from "react";

let contentRowMovies;

const lastMovieInDB = [{
    imagen: '../assets/images/mandalorian.jpg',
    alt: "Star Wars - Mandalorian",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?"
  }]

class ContentRowTop extends Component {
  constructor(props){
    super(props);{
      this.state = {
        totalProd: 0,
        totalUsers: 0,
        totalCategories: 0
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/products')
      .then(response => response.json())
      .then(data => {
        console.log(data.count);
        this.setState({
          totalProd: data.count,
          totalCategories: Object.keys(data.countByCategrory).length
        })
      })
      .catch(err => console.log(err))

      fetch('http://localhost:8000/api/users')
      .then(response => response.json())
      .then(data => {
        console.log(data.count);
        this.setState({
          totalUsers: data.count
        })
      })
      .catch(err => console.log(err))
  }

  contentRowMovies = [
    { titulo: "Movies in Data Base", cifra: this.state.totalProd, colorBorde: "primary", icono: "film" },
    { titulo: "Total awards", cifra: this.state.totalUsers, colorBorde: "success", icono: "award" },
    { titulo: "Actors quantity", cifra: this.state.totalCategories, colorBorde: "warning",icono: "user" }
  ]

  mostrarInfo(){

  }

  render(){
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
  
          <div className="row">
            
              {contentRowMovies.map((content, index) => 
                <ContentRowMovies
                  key = {index + content}
                  titulo = {content.titulo}
                  cifra = {this.state.totalProd}
                  colorBorde = {content.colorBorde}
                  icono = {content.icono}
                  />
              )}
          </div>
  
          {/*<ContentRowMovies/>*/}
          
          <div className="row">
              <LastMovieInDb img={lastMovieInDB.imagen} alt={lastMovieInDB.alt} description={lastMovieInDB.descripcion}/>
              <GenresInDb/>
          </div>
      </div>
    )
  }
}

export default ContentRowTop