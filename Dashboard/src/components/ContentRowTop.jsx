import ContentRowMovies from "./ContentRowMovies"
import GenresInDb from "./GenresInDb"
import LastMovieInDb from "./LastMovieInDb"
//import mandalorian from '../assets/images/mandalorian.jpg'


const ContentRowTop = () => {
  const contentRowMovies = [
    { titulo: "Movies in Data Base", cifra: 21, colorBorde: "primary", icono: "film" },
    { titulo: "Total awards", cifra: 79, colorBorde: "success", icono: "award" },
    { titulo: "Actors quantity", cifra: 49, colorBorde: "warning",icono: "user" }
  ]

  const lastMovieInDB = [{
    imagen: '../assets/images/mandalorian.jpg',
    alt: "Star Wars - Mandalorian",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?"
  }]

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

export default ContentRowTop