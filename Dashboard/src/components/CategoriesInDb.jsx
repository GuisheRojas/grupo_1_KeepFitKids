const CategoriesInDb = () => {
const categories = ["Femenino", "Masculino", "Unisex"];

  return (
    <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">

                    { categories.map( (categorie, index) => 
                        <div className="col-lg-6 mb-4" key={index}>
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    {categorie}
                                </div>
                            </div>
                        </div>
                     ) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoriesInDb