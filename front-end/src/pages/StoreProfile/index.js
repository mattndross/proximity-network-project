import React from 'react';
import './StoreProfile.css';

import Button from '../../components/Button'
import StoreProfileBanner from '../../components/StoreProfileBanner';
import CardStoreProfile from '../../components/CardStoreProfile';
import SearchListProduct from '../../components/SearchListProduct';
import CardProductStore from '../../components/CardProductStore';
import StoreProductBanner from '../../components/StoreProductBanner';
import ModalProduct from '../../components/ModalProduct';
import { ProfileContext } from '../../context/ProfileContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom'
export default function StoreProfile() {

    let navigate = useNavigate();

    const storeId = useContext(ProfileContext)[0].store_id;

    const [productsStore, setProductsStore] = useState([]);
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:4000/products/storeProducts/${storeId}`)
                .then(response => response.json())
                .then(data => {
                    setProductsStore(data);
                    setAllProducts(data);

                })
        }
        getData()
    }, [])

    return (
        <div>
            <StoreProfileBanner></StoreProfileBanner>
            <CardStoreProfile></CardStoreProfile>
            <section id="product-grid">
                <SearchListProduct allProducts={allProducts} productsStore={productsStore} setProductsStore={setProductsStore}></SearchListProduct>
                <div className='container px-4 container-products'>
                    <div className='row'>
                        {
                            !storeId && <Navigate to="/stores-list"></Navigate>
                        }
                        {
                            productsStore.length < 1 && <h1>No hay coincidencias</h1>
                        }
                        {
                            productsStore.map((product) => {

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