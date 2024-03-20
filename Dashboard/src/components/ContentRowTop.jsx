import ContentRowMovies from "./ContentRowMovies"
import GenresInDb from "./GenresInDb"
import LastMovieInDb from "./LastMovieInDb"
import { Component } from "react";


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
      .then(data => this.setState = {
        totalProd: data.count,
        totalCategories: data.
      })
      .catch(err => console.log(err))
  }

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
                  cifra = {content.cifra}
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