import './ProfileUserYourProducts.css'
import { Link } from 'react-router-dom'
import '../../components/CardProductStore'
import CardProductStore from '../../components/CardProductStore';
import ModalNewProduct from '../ModalNewProduct';
import ModalUpdateProduct from '../ModalUpdateProduct';
const ProfileUserYourProducts = () => {
    const dataFake = [{
        "id": 4,
        "store_id": 2,
        "product_type": "yogurt",
        "brand": "Casandra",
        "category": "huevos y lacteos",
        "product_description": "",
        "unit": "pack x6",
        "price": "2.90",
        "producer": "Laborolo",
        "origin": "Lleida",
        "product_image": "https://www.freepik.es/foto-gratis/mezcla-yogurt-alto-angulo-frutas-mermelada-avena_8511818.htm#page=1&query=yogur&position=0&from_view=search"
    },
    {
        "id": 5,
        "store_id": 2,
        "product_type": "vino",
        "brand": "vent de mar",
        "category": "bebidas",
        "product_description": "",
        "unit": "1 botella 750ml",
        "price": "3.98",
        "producer": "Locrau",
        "origin": "Ganedas",
        "product_image": "https://www.freepik.es/foto-gratis/vista-lateral-vino-tinto-botella-vidrio-vertical_7838376.htm#page=1&query=wine%20bottle&position=14&from_view=search"
    },
    {
        "id": 6,
        "store_id": 2,
        "product_type": "cerveza pilsener",
        "brand": "Budel",
        "category": "bebidas",
        "product_description": "",
        "unit": "pack x6",
        "price": "12.30",
        "producer": "Budel",
        "origin": "Manresa",
        "product_image": "https://www.freepik.es/foto-gratis/botellas-vidrio-cerveza-vidrio-hielo-sobre-fondo-oscuro_4334664.htm#page=1&query=beer%20bottle&position=1&from_view=search"
    }]
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
                        dataFake.map((product) => {
                            return (
                                <>

                                    <CardProductStore product={product} ></CardProductStore>

                                    <ModalUpdateProduct id={`product-${product.id}`}></ModalUpdateProduct>
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