const Article = ({id, name, description, price, category, is_new, image}) => {
    return(
        <div>
            <div className="card-body">
                <img src={image} alt={name} className="product_img"/>
                <p className="price">${price}</p>
                <h4 className="description">{description}</h4>
            </div>
        </div>
        
    )
}

export default Article