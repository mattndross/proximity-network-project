import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import StoresListBanner from '../../components/StoresListBanner'
import Loading from "../../components/BaseComponents/Loading"
import CardListStores from '../../components/CardListStores'
import SearchStoresList from '../../components/SearchStoresList'
import iconError from '../../assets/img/menssage-error/error.png'
export default function StoresList() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [stores, setStores] = useState(false);

    // estado para el Loading

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const search = searchParams.get('search')

    useEffect(() => {
        // function para consumir el endpoint search para listar los stores por postcode o city
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://proximity-network-api.herokuapp.com/search/${search}`);
                const data = await response.json();
                setStores(data);
                setLoading(false);
            } catch (error) {
                setError(true)
                console.log(error)
            }
        };




        setTimeout(() => {
            getData();

        }, 1000);



    }, [search]);


    const alert = <div className={`${stores.message || stores.length == 0 ? 'd-block' : 'd-none'} col-lg-12 text-center `} style={{ padding: "100px" }}>

        <div><img src={iconError} alt="icon-error" className="img-fluid" /></div>
        <p className='parrafo-error'>Opps!.. we didn't find any store in this area</p>
    </div>


    return (
        <div>
            <StoresListBanner></StoresListBanner>

            <SearchStoresList loading={loading} setLoading={setLoading}></SearchStoresList>

            {stores.message && alert}

            {!stores && <Loading />}

            {stores.length > 0 && <CardListStores stores={stores} setStores={setStores}></CardListStores>}
        </div>

    )
}
