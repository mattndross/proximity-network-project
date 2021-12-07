import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import StoresListBanner from '../../components/StoresListBanner'
export default function StoresList() {
    return (
        <div>

            <StoresListBanner></StoresListBanner>
            <Link to="/">
                <Button color="gray-bg" textColor="white-txt" text="Go Home"></Button>
            </Link>
        </div>
    )
}
