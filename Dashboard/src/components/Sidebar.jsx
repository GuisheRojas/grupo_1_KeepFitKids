import logoKF from "../assets/images/logo-KeepFit.png"

const Sidebar = () => {
  return (
    <>
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <img className="w-100" src={logoKF} alt="Digital House"/>
            </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - KeepFit Kids</span></a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
            <a className="nav-link collapsed" href="/products">
                <i className="fa fa-archive"></i>
                <span>Productos</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="/users">
                <i className="fa fa-user-circle"></i>
                <span>Usuarios</span></a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="/categories">
                <i className="fas fa-fw fa-table"></i>
                <span>Categorias</span></a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    </>
  )
}

export default Sidebar