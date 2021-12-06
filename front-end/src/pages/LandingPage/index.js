import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './LandingPage.css'
import LandingPageBanner from '../../components/LandingPageBanner'

export default function LandingPage() {
    return (
        <div>
            <h1>Banner</h1>
            <LandingPageBanner></LandingPageBanner>
        </div>
    )
}
