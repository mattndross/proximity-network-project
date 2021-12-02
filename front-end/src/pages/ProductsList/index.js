import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

export default function ProductList() {
    return (
        <div>
            <h1>This is the product list page</h1>
            <Link to="/">
            <Button color="gray-bg" textColor="white-txt" text="Go Home"></Button>
            </Link>
        </div>
    )
}
