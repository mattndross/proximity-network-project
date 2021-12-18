import React from 'react';
import './StoreProfile.css';
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import StoreProfileBanner from '../../components/StoreProfileBanner';
import CardStoreProfile from '../../components/CardStoreProfile';
import SearchListProduct from '../../components/SearchListProduct';
import CardProductStore from '../../components/CardProductStore';
import StoreProductBanner from '../../components/StoreProductBanner';
import ModalProduct from '../../components/ModalProduct';
import { ProfileContext } from '../../context/ProfileContext';
import { useContext, useEffect, useState } from 'react';

export default function StoreProfile() {
    const storeId = useContext(ProfileContext)[0].store_id;

    const [productsStore, setProductsStore] = useState([]);
    const dataFake = [1, 2, 3, 4, 5, 6]

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:4000/products/storeProducts/${storeId}`)
                .then(response => response.json())
                .then(data => {
                    setProductsStore(data);
                    console.log(productsStore)
                })
        }
        getData()
    }, [])

    return (
        <div>
            <StoreProfileBanner></StoreProfileBanner>
            <CardStoreProfile></CardStoreProfile>
            <section id="product-grid">
                <SearchListProduct></SearchListProduct>
                <div className='container px-4 container-products'>
                    <div className='row'>
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