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
import { SearchContext } from '../../context/SearchContext'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
export default function StoreProfile() {

    // Obtengo la url dinamica con useParams.
    let { storeName } = useParams();
    // Estados para el storeProfile
    const [storeProfile, setStoreProfile] = useState(null)
    const [productsStore, setProductsStore] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(async () => {

        // Llamo al endpoint /stores/:storeName
        const response1 = await fetch(`http://localhost:4000/stores/${storeName}`);
        const data1 = await response1.json();

        const storeId = await data1[0].store_id;

        // Llamo al endpoint /products/storeProducts/:storeId
        const response2 = await fetch(`http://localhost:4000/products/storeProducts/${storeId}`)
        const data2 = await response2.json();

        setFilteredProducts(data2);
        setProductsStore(data2);
        setStoreProfile(data1);

    }, [])


    return (
        <div>
            <StoreProfileBanner ></StoreProfileBanner>
            {storeProfile && <CardStoreProfile store={storeProfile}></CardStoreProfile>}
            <section id="product-grid">
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
            </section>

            <StoreProductBanner></StoreProductBanner>
        </div>
    )
}