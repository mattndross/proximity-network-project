import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import ProductsListBanner from '../../components/ProductsListBanner'
export default function StoreList() {
    return (
        <div>
            <h1>This is the product list page</h1>
            <Link to="/">
                <Button color="gray-bg" textColor="white-txt" text="Go Home"></Button>
            </Link>
            <ProductsListBanner></ProductsListBanner>
        </div>
    )
}
