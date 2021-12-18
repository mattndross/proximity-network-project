import './NavBarProfileUser.css'
import { Link } from 'react-router-dom'
import logotipo from '../../components/Header/img/logo.png'
const NavBarProfileUser = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light px-0 px-md-5  navbar-profile-user" >
            <div className="container-fluid">
                <Link to="/">
                    <img src={logotipo} className="img-fluid navbar-brand logo-profile-user" width="150px" alt="..." />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-profile-user-link active" aria-current="page" href="#"><i className="bi bi-person-circle nav-profile-user-icon"></i>My profile</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-success btn-profile-user" id="NavBarBtnUser" type="submit"><i className="bi bi-plus-circle"></i>Upload product</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBarProfileUser;