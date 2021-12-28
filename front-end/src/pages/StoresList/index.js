import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import StoresListBanner from '../../components/StoresListBanner'
import Loading from "../../components/BaseComponents/Loading"
import CardListStores from '../../components/CardListStores'

export default function StoresList() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [stores, setStores] = useState([]);

    // estado para el Loading

    const [loading, setLoading] = useState(false);

    const search = searchParams.get('search')

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:4000/search/${search}`)
                .then(response => response.json())
                .then(data => {
                    setStores(data);

                    console.log("fetched", data);
                })

        };
        try {

            getData();
        } catch (error) {
            console.log(error)
        }
    }, [search]);

    return (
        <div>
            <StoresListBanner></StoresListBanner>
            <div style={{ backgroundColor: "peru" }}>

                <Loading></Loading>
            </div>

            <CardListStores stores={stores} setStores={setStores}></CardListStores>
        </div>

    )
}
