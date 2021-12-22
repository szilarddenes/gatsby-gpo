import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import MarkerGPO from "/src/assets/illustrations/gpo-marker-map.svg"
import carGPO from "/src/assets/illustrations/gpo-ford.svg"

import L from "leaflet";
const markerIcon = new L.Icon({
  iconUrl: MarkerGPO,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});


const LeafletMap=()=>{
 
return (
  <MapContainer center={[46.30311,25.29428]} zoom={13} scrollWheelZoom={true} >
  <TileLayer

    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[46.30311,25.29428]} icon={markerIcon}>
    <Popup>
   <span className="emoji">🏠</span> <span> Városháza Tér 1/5, Székelyudvarhely</span> <br />
   <span className="emoji">📞</span> <span> <a href="tel:00400741093493"> 0741-093-493 </a> </span> <br /> 
   <span className="emoji">📞</span> <span><a href="tel:00400751-126-339">0751-126-339 </a> </span> <br /> 
    </Popup>
  </Marker>

</MapContainer>
)
}

export default LeafletMap