import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import StoresListBanner from '../../components/StoresListBanner'
import SearchStoresList from '../../components/SearchStoresList'
import CardListStores from '../../components/CardListStores'

// importar el contexto
import { Context } from '../../context/SearchContext.js'

export default function StoresList() {
    const valor = useContext(Context);
    console.log(valor)
    return (
        <div>
            <StoresListBanner></StoresListBanner>
            <SearchStoresList></SearchStoresList>
            <CardListStores></CardListStores>

            <Link to="/">
                <Button color="gray-bg" textColor="white-txt" text="Go Home"></Button>
            </Link>
        </div>

    )
}
