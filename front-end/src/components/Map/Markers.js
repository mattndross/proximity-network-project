import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import IconLoc from './IconLoc';
import * as data from "../Map/MapView/tiendasCoordenadas.json"


//ACA CADA TIENDA TENDRA SU MARKR HACIENDO EL MAP
const Markers = ({ stores }) => {

    return (
        <>
            {
                stores.filter((store, i) => {
                    if (stores[i].latitude && stores[i].longitude) {
                        return store
                    }
                })
                    .map((store, i) => {

                        let latitude = parseFloat(stores[i].latitude);
                        let longitude = parseFloat(stores[i].longitude);

                        return (
                            <Marker
                                key={store.store_id}
                                position={[latitude, longitude]}
                                icon={IconLoc}
                            >
                                <Popup>
                                    <div>
                                        <p style={{ color: "#80b13d" }}>{store.name}</p>
                                        <p>{`${store.address}, ${store.postcode}, ${store.city}`}</p>
                                    </div>
                                </Popup>
                            </Marker>)
                    }

                    )
            }
        </>
    )
}

export default Markers;
