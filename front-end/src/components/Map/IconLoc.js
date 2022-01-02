
import React from 'react'
import icon from 'leaflet'
import L from 'leaflet'


 const IconLoc = new L.icon({
    iconUrl: require("../Map/imageIcon/png-clipart-google-map-maker-marker-pen-drawing-pin-green-christmas-tree-pin-dryerase-boards.png").default,
    iconRetinaUrl: require("../Map/imageIcon/png-clipart-google-map-maker-marker-pen-drawing-pin-green-christmas-tree-pin-dryerase-boards.png").default,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-location-point"


})

export default IconLoc


