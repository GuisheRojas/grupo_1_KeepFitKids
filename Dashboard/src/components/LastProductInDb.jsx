import PropTypes from 'prop-types';


const LastProductInDb
 = ({ img, alt, description }) => {
  return (
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={img} alt={alt}/>
                </div>
                <p>{description}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
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