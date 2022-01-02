import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"



//ACA CADA TIENDA TENDRA SU MARKR HACIENDO EL MAP
const Markers = () => {
    const IconLoc = L.icon({
        iconUrl: "../../../node_modules/leaflet/dist/images/marker-icon.png",
        iconAnchor: [5, 55],
        shadowUrl: require("../../../node_modules/leaflet/dist/images/marker-shadow.png"),
        shadowSize: [5, 55], 
        shadowAnchor: null, 
        iconSize: [30, 30], 
        className: "leaflet-location-point"
    
    
    })
    return (
        <Marker position={{lat:'41.439104', lng:'2.166111'}} icon={IconLoc}/>
    )
}

export default Markers;
