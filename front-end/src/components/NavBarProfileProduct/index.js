import "./NavBarProfileProduct.css"
import logotipo from '../../components/Header/img/logo.png'
import { Link } from 'react-router-dom'


const NavBarProfileProduct = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light px-0 px-md-5  navbar-profile-product">
            <div class="container-fluid">
                <Link to="/">
                    <img src={logotipo} className="img-fluid navbar-brand logo-profile-product" width="150px" alt="..." />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link profile-product-link active" aria-current="page" href="#"><i class="bi bi-person-circle icon-navbar profile-product-icon"></i>My profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarProfileProduct;