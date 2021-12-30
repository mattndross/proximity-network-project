import "./ProfileUserProduct.css"
import { useState, useEffect } from 'react';
import ProfileUserYourProducts from "../../components/ProfileUserYourProducts"
import ProfileUserService from '../../services/profileUser.service'
const ProfileUserProduct = () => {


    const [products, setProducts] = useState([])
    const [error, setError] = useState([]);

    // Estado action para forzar el renderizado si ejecuto una accion Listar, actualizar, delete.

    const [action, setAction] = useState("LISTAR")
    const [counter, setCounter] = useState(null)


    useEffect(() => {
        try {
            ProfileUserService.getProducts().then(
                (response) => {
                    setProducts(response.data);
                    setCounter(response.data.length)
                }
            );
        } catch (error) {
            setError(error);
        }

    }, [action])

    return (
        <>

            <section id="profileProductHeader">
                <div className='container px-4 px-lg-0'>
                    <h1>Your products</h1>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-8">
                            <p className="product-parrafo">Here you can view and upload products.</p>
                        </div>
                        <div className=" col-3 d-flex profile-product-text">
                            <h2>{counter}</h2>
                            <p className="product-text-p">products</p>
                        </div>
                    </div>
                </div>
                <ProfileUserYourProducts products={products} setAction={setAction}></ProfileUserYourProducts>
            </section>
        </>
    )
}

export default ProfileUserProduct;