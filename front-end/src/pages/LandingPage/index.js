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
        </div>
    )
}
