import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './LandingPage.css'
import LandingPageBanner from '../../components/LandingPageBanner'
import LandingPageAbout from '../../components/LandingPageAbout'

export default function LandingPage() {
    return (
        <div>
            <h1>Navbar</h1>
            <LandingPageBanner></LandingPageBanner>
            <h1>Search <br /> <br /><br /></h1>
            <LandingPageAbout></LandingPageAbout>
        </div>
    )
}
