import React from 'react';
import { Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import IconLoc from './IconLoc';
import * as data from "../Map/MapView/tiendasCoordenadas.json"


//ACA CADA TIENDA TENDRA SU MARKR HACIENDO EL MAP
const Markers = () => {

    // const position = [41.391111, 2.152504]
    // <Marker position={position} icon={IconLoc}/>

    return (
        
 <>
     {data.stores.map(store => 
        <Marker 
        key={store.id}
        position={[store.coordinates[0], store.coordinates[1]]}
        icon={IconLoc} 
        />

)
}
</>
      

    )
}

export default Markers;
