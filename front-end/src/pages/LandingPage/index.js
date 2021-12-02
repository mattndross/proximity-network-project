import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div>
            <h1>this is the landing page</h1>
            <Link to="/products">
            <Button color="gray-bg" textColor="white-txt" text="Go to products"/>
            </Link>
            <Link to="/another-page">
            <Button color="green-bg" text="Go to another page"/>
            </Link>
        </div>
    )
}
