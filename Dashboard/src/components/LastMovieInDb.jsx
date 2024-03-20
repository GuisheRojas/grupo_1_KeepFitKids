import PropTypes from 'prop-types';
import DH from '../assets/images/logo-DH.png'


const LastMovieInDb = ({ img, alt, description }) => {
  return (
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
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

LastMovieInDb.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

LastMovieInDb.defaultProps = {
    img: DH,
    alt: "N/A",
    description: "N/A"
}

export default LastMovieInDb