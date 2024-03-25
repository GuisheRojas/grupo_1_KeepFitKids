const Article = ({id, name, avatar}) => {
    return(
        <div className="card shadow mb-4 d-inline-block">
            <div className="card-body">
                <h4 className="description">Nombre: {name}</h4>
                <h5>ID: {id}</h5>
                <img src={avatar} alt={name} />
            </div>
        </div>
        
    )
}

export default Article