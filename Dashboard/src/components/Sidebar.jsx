import logoKF from "../assets/images/logo-KeepFit.png"
import { Link, Route } from 'react-router-dom'
import Products from './Products'

const Sidebar = () => {
  return (
    <>
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:8000/">
            <div className="sidebar-brand-icon">
                <img className="w-100" src={logoKF} alt="Digital House"/>
            </div>
        </a>
        
        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - KeepFit Kids</span></Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/products"> 
                <i className="fa fa-archive"></i>
                <span>Productos</span>
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/users">
                <i className="fa fa-user-circle"></i>
                <span>Usuarios</span>
            </Link>
        </li>

        <li className="nav-item">
            <p className="nav-link">
                <i className="fas fa-fw fa-table "></i>
                <span>Categorias</span>
            </p>
            <ul className="no-bullets">
                <li>
                    <Link className="nav-link" to="/categories/masculino">
                        <span>Masculino</span>
                    </Link>
                </li>

                <li>
                    <Link className="nav-link" to="/categories/femenino">
                        <span>Femenino</span>
                    </Link>
                </li>
                
                <li>
                    <Link className="nav-link" to="/categories/unisex">
                        <span>Unisex</span>
                    </Link>
                </li>
            </ul>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    </>
  )
}

export default Sidebar