import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./CardListStores.css"
import CardStore from '../CardStore'
import iconTienda from '../../assets/img/stores-list-banner/icon-tienda.svg'
import MapView from '../Map/MapView'
// importar el contexto
import { SearchContext } from '../../context/SearchContext.js'
import { ProfileContext } from "../../context/ProfileContext"

const CardListStores = ({ stores, setStores }) => {

    // Estado necesario para la reactividad del componente.
    const [storeProfileId, setStoreProfileId] = useContext(ProfileContext);



    return (
        <>
            <section id="cardListStore">
                {stores.length > 0 && <div className="section-header d-flex justify-content-center align-items-baseline text-center">
                    <img src={iconTienda} alt="" />
                    <h1>Stores List</h1>
                </div>
                }
                <div className="container">
                    <div className="row ">
                        {stores.length > 0 && (
                            <>
                                <div className="col-lg-8 col-xl-6 content-scroll-hidden">
                                    <div className='content-scroll-auto'>
                                        {
                                            stores.length > 0 && stores.map((cardInfo) => <CardStore setStoreProfileId={setStoreProfileId} cardInfo={cardInfo} />)
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-6 map-content">
                                   <MapView stores={stores}/>
                                </div>
                            </>
                        )
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default CardListStores;
