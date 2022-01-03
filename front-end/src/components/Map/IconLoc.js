import  L  from 'leaflet'
import icon from 'leaflet'

// '../../../node_modules/leaflet/dist/images/marker-icon.png'
//../../assets/img/img-about/icon-1.png
const IconLoc = new L.icon({
    iconUrl: require('../Map/imageIcon/pinLocation.png').default,
    iconAnchor: [5, 55],
   // shadowUrl: "../../../node_modules/leaflet/dist/images/marker-shadow.png",
    shadowSize: [5, 55], 
    iconSize: [20, 30], 
    className: "leaflet-location-point"
})


export default IconLoc