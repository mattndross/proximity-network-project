import React from 'react';
import './StoreProfile.css';
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import StoreProfileBanner from '../../components/StoreProfileBanner';
import CardStoreProfile from '../../components/CardStoreProfile';
import SearchListProduct from '../../components/SearchListProduct';
import CardProductStore from '../../components/CardProductStore';
import StoreProductBanner from '../../components/StoreProductBanner';

export default function StoreProfile() {
    const dataFake = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <StoreProfileBanner></StoreProfileBanner>
            <CardStoreProfile></CardStoreProfile>
            <section id="product-grid">
                <SearchListProduct></SearchListProduct>
                <div className='container px-4 container-products'>
                    <div className='row'>
                        {
                            dataFake.map((el) => {
                                return <CardProductStore></CardProductStore>

                            })
                        }
                    </div>
                </div>
            </section>
            <StoreProductBanner></StoreProductBanner>
            <Link to="/">
                <Button color="gray-bg" textColor="white-txt" text="Go Home"></Button>
            </Link>
        </div>
    )
}