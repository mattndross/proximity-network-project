import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './LandingPage.css'
import LandingPageBanner from '../../components/LandingPageBanner'
import LandingPageAbout from '../../components/LandingPageAbout'
import LandingPageSearchBar from '../../components/LandingPageSearchBar'
import toast, { Toaster } from 'react-hot-toast';
export default function LandingPage() {
    return (
        <div>
            <Toaster position="top-center" />

            <LandingPageBanner></LandingPageBanner>
            < LandingPageSearchBar />
            <LandingPageAbout></LandingPageAbout>
        </div>
    )
}
