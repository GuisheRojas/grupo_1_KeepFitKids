import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const LastProductInDb
 = ({ id, img, name, price, description, }) => {
  return (
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={img} alt={name}/>
                </div>
                <p>{description}</p>
                <Link to={`/products/detail/${id}`} className="btn btn-danger" target="_blank" rel="nofollow">
                    View product detail
                </Link>
            </div>
        </div>
    </div>
  )
}

LastProductInDb
.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

LastProductInDb
.defaultProps = {
    img: '',
    alt: '',
    description: ''
}

export default LastProductInDb