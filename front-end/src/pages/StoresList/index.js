import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import StoresListBanner from '../../components/StoresListBanner'

import CardListStores from '../../components/CardListStores'

export default function StoresList() {


    return (
        <div>
            <StoresListBanner></StoresListBanner>
            <CardListStores></CardListStores>
            <Link to="/">
                <Button color="gray-bg" textColor="white-txt" text="Go Home"></Button>
            </Link>
        </div>

    )
}
