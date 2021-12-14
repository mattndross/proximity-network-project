import './NavBarProfileUser.css'
import { Link } from 'react-router-dom'
import logotipo from '../../components/Header/img/logo.png'
const NavBarProfileUser = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light px-0 px-md-5  navbar-profile">
            <div class="container-fluid">
                <Link to="/">
                    <img src={logotipo} className="img-fluid navbar-brand logo-profile" width="150px" alt="..." />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link nav-profile-link active" aria-current="page" href="#"><i class="bi bi-person-circle icon-navbar nav-profile-icon"></i>My profile</a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-success btn-profile-user" type="submit"><i class="bi bi-plus-circle"></i>Upload product</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBarProfileUser;