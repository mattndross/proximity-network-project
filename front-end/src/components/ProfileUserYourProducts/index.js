import './ProfileUserYourProducts.css'
import { Link } from 'react-router-dom'
import '../../components/CardProductStore'
import CardProductStore from '../../components/CardProductStore';
import ModalNewProduct from '../ModalNewProduct';
import ModalUpdateProduct from '../ModalUpdateProduct';
const ProfileUserYourProducts = () => {
    const dataFake = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="container px-4 py-4 p-lg-0 section-profile-product">
            <div className="d-flex title-profile-product">
                <Link to="/profile-user"><h2>PROFILE</h2></Link>
                <span>|</span>
                <Link to="/profile-product"><h2>YOUR PRODUCTS</h2></Link>

            </div>
            <div className='container px-4 container-profile-products'>
                <div className='row'>
                    {
                        dataFake.map((el) => {
                            return (
                                <>
                                    <CardProductStore id={`product-${el}`}></CardProductStore>
                                    <ModalUpdateProduct id={`product-${el}`}></ModalUpdateProduct>
                                </>
                            )

                        })
                    }
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-success btn-profile-product " data-bs-toggle="modal" data-bs-target="#modalNewProduct" type="submit"><i className="bi bi-plus-circle"></i>Upload product</button>
            </div>
            <ModalNewProduct></ModalNewProduct>

        </div>
    )
}
export default ProfileUserYourProducts;