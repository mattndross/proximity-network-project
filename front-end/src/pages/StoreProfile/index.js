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
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:4000/products/storeProducts/${storeId}`)
                .then(response => response.json())
                .then(data => {
                    setProductsStore(data);
                    setFilteredProducts(data);

                })
        }
        getData()
    }, [])
    console.log("ERORRR ===>>>>>", filteredProducts)
    return (
        <div>
            <StoreProfileBanner></StoreProfileBanner>
            <CardStoreProfile></CardStoreProfile>
            <section id="product-grid">
                <SearchListProduct filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} productsStore={productsStore} setProductsStore={setProductsStore}></SearchListProduct>
                <div className='container px-4 container-products'>
                    {
                        filteredProducts.length < 1 && (
                            <div className='text-center'>

                                <i className="bi bi-emoji-frown" style={{ fontSize: "2.5rem", color: "#a1a1a1" }}></i>
                                <p className="text-center fs-4" style={{ color: "#a1a1a1" }} > Nothing found, try searching again.</p>
                            </div>
                        )
                    }
                    <div className='row'>
                        {
                            !storeId && <Navigate to="/stores-list"></Navigate>
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