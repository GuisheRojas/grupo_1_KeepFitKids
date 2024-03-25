const Article = ({id, name, image}) => {
    return(
        <div>
            <div className="card-body">
                <h4 className="description">Nombre:{name}</h4>
                <h5>ID:{id}</h5>
                {/* <img src={image} alt={name}></img> */}
            </div>
        </div>
        
    )
}

export default Article