import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./CardListStores.css"
import CardStore from '../CardStore'
import iconTienda from '../../assets/img/stores-list-banner/icon-tienda.svg'


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

                                <iframe src="//es.batchgeo.com/map/ecb2caf436280337db7a61c13b0ab50c" frameborder="0" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe><p><small>View <a href="https://es.batchgeo.com/map/ecb2caf436280337db7a61c13b0ab50c">full screen map</a></small></p>

                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.676974943941!2d2.1508358153473206!3d41.402821003001335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2a2ee3e5f55%3A0x33d3cecf934ddef9!2sC.%20de%20Asturias%2C%209%2C%2008012%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sse!4v1641041413529!5m2!1ses!2sse" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe> */}
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
