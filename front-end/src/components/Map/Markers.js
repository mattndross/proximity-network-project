import React from 'react';
import { Marker } from 'react-leaflet';
import IconLoc from "../Map/IconLoc"


//ACA CADA TIENDA TENDRA SU MARKR HACIENDO EL MAP
const Markers = () => {
    return (
        <Marker position={{lat:'41.439104', lng:'2.166111'}} icon={IconLoc}/>
    )
}

export default Markers;
