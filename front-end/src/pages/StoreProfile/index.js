import React from 'react';
import './StoreProfile.css';
import productIcon from '../../assets/img/icon-product.png'
import Button from '../../components/Button'
import StoreProfileBanner from '../../components/StoreProfileBanner';
import CardStoreProfile from '../../components/CardStoreProfile';
import SearchListProduct from '../../components/SearchListProduct';
import CardProductStore from '../../components/CardProductStore';
import StoreProductBanner from '../../components/StoreProductBanner';
import ModalProduct from '../../components/ModalProduct';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Loading from '../../components/BaseComponents/Loading'

import iconError from '../../assets/img/menssage-error/error.png'
export default function StoreProfile() {

    // Obtengo la url dinamica con useParams.
    let { storeName } = useParams();
    // Estados para el storeProfile
    const [storeProfile, setStoreProfile] = useState(null)
    const [productsStore, setProductsStore] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(async () => {
            try {


                // Llamo al endpoint /stores/:storeName
                const response1 = await fetch(`https://proximity-network-api.herokuapp.com/stores/${storeName}`);
                const data1 = await response1.json();

                const storeId = await data1[0].store_id;

                // Llamo al endpoint /products/storeProducts/:storeId
                const response2 = await fetch(`https://proximity-network-api.herokuapp.com/products/storeProducts/${storeId}`)
                const data2 = await response2.json();

                setFilteredProducts(data2);
                setProductsStore(data2);
                setStoreProfile(data1);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true);
                console.log("error del profile", error);
            }
        }, 1000);




    }, [])


    const alert = <div className="text-center" style={{ padding: "100px" }}>

        <div><img src={iconError} alt="icon-error" className="img-fluid" /></div>
        <p className='parrafo-error'>Opps!.. we didn't find any store Profile</p>
    </div>
    return (

        <div>



            <StoreProfileBanner ></StoreProfileBanner>
            {error ? alert :
                (<>

                    {storeProfile && <CardStoreProfile store={storeProfile} />}
                    {loading ? <Loading /> : (<section id="product-grid">
                        <SearchListProduct filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} productsStore={productsStore} setProductsStore={setProductsStore}></SearchListProduct>
                        <div className='container px-4 container-products'>
                            {
                                filteredProducts.length < 1 && (
                                    <div className='text-center'>

                                        <img src={productIcon} className='img-fluid product-icon-error' />
                                        <p className="text-center product-font-error " > Nothing found, try searching again.</p>
                                    </div>
                                )
                            }
                            <div className='row'>
                                {(storeProfile && filteredProducts.length > 0) &&
                                    <h4 className="text-store-disponible"><i className="bi bi-basket"></i>Products available in the store "{storeProfile[0].name}"</h4>
                                }

                                {
                                    filteredProducts && filteredProducts.map((product) => {

                                        return (

                                            <>
                                                <CardProductStore product={product}></CardProductStore>
                                                <ModalProduct product={product} id={`product-${product.id}`}></ModalProduct>
                                            </>
                                        )

                                    })
                                }
                            </div>
                        </div>
                    </section>)}
                </>)}




            <StoreProductBanner></StoreProductBanner>

        </div>
    )
}