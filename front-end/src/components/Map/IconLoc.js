
import L from 'leaflet'

 const IconLoc = L.icon({
    iconUrl: "../../../node_modules/leaflet/dist/images/marker-icon.png",
    iconAnchor: [5, 55],
    shadowUrl: require("../../../node_modules/leaflet/dist/images/marker-shadow.png"),
    shadowSize: [5, 55], 
    shadowAnchor: null, 
    iconSize: [30, 30], 
    className: "leaflet-location-point"


})

export default IconLoc
    

