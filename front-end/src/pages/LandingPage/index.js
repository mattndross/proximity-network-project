import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './LandingPage.css'
import LandingPageBanner from '../../components/LandingPageBanner'
import LandingPageAbout from '../../components/LandingPageAbout'
import LandingPageSearchBar from '../../components/LandingPageSearchBar'

export default function LandingPage() {
    return (
        <div>

            <LandingPageBanner></LandingPageBanner>
            < LandingPageSearchBar />
            <LandingPageAbout></LandingPageAbout>

            <Link to="/stores-list">
                <Button color="gray-bg" textColor="white-txt" text="products list"></Button>
            </Link>
            <Link to="/store-profile">
                <Button color="gray-bg" textColor="white-txt" text="store profile"></Button>
            </Link>
        </div>
    )
}
