import './ProfileUserYourProducts.css'
import { Link } from 'react-router-dom'
import '../../components/CardProductStore'
import CardUserProduct from '../../components/CardUserProduct';
import ModalNewProduct from '../ModalNewProduct';
import ModalUpdateProduct from '../ModalUpdateProduct';
import ModalDeleteUserProduct from '../ModalDeleteUserProduct';
const ProfileUserYourProducts = ({ products, setAction }) => {

    return (
        <div className="container px-4 py-4 p-lg-0 section-profile-product">
            <div className="d-flex title-profile-product">
                <Link to="/profile-user"><h2>PROFILE</h2></Link>
                <span>|</span>
                <Link to="/profile-account"><h2>ACCOUNT</h2></Link>
                <span>|</span>
                <Link to="/profile-product"><h2>YOUR PRODUCTS</h2></Link>

            </div>
            <div className='container container-profile-products'>
                <div className='row'>


                    {
                        products.map((product) => {
                            return (
                                <>
                                    <CardUserProduct product={product} ></CardUserProduct>



                                    <ModalUpdateProduct product={product}></ModalUpdateProduct>
                                    <ModalDeleteUserProduct setAction={setAction} id={product.id}></ModalDeleteUserProduct>
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