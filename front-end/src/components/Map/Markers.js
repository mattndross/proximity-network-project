import React from 'react';
import { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import IconLoc from './IconLoc';
import * as data from "../Map/MapView/tiendasCoordenadas.json"


//ACA CADA TIENDA TENDRA SU MARKR HACIENDO EL MAP
const Markers = () => {

    // const position = [41.391111, 2.152504]
    // <Marker position={position} icon={IconLoc}/>
    return (

        <div>
            {data.stores.map(store =>
                <Marker
                    key={store.id}
                    position={[store.coordinates[0], store.coordinates[1]]}
                    icon={IconLoc}
                >)
                    <Popup>
                        <div><h6 style={{color:"#80b13d"}}>{store.name}</h6></div>
                    </Popup>
                </Marker>)

            }

        </div>


    )
}

export default Markers;

