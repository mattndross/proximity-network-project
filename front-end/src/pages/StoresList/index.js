import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import StoresListBanner from '../../components/StoresListBanner'
import SearchStoresList from '../../components/SearchStoresList'
import CardListStores from '../../components/CardListStores'

// importar el contexto
import { Context } from '../../context/SearchContext.js'

export default function StoresList() {
    const searchValueGlobal = useContext(Context);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:4000/search/${searchValueGlobal}`)
                .then(response => response.json())
                .then(data => {
                    setStores(data);
                    console.log("fetched", data);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        getData();
    }, []);
    console.log("oustside stores", stores)
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
