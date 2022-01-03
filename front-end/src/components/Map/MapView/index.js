import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Markers from '../Markers.js'// import Markers from '../Markers/Markers'
import "../MapView/MapView.css"
const MapView = ({stores}) => {
 
    return (
  // <div id="map" style={{ height: "180px" }}>
        // </div>
        <MapContainer center={{lat:'41.387920', lng:'2.169920'}} zoom={12}>
          <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        <Markers stores={stores}/>
        </MapContainer>
    )
}

export default MapView;