import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapStyle } from '../styles.js'


const LeafletMap=()=>{
 
 let state = {
    position: [51, -1],
    zoom: 13,
    markerText: "alma"
  }
      return(
        <Map center={state.position} zoom={state.zoom}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {state.markerText !== "" &&
          <Marker position={state.position}>
            <Popup>{state.markerText}</Popup>
          </Marker>
          }
        </Map>
        )
}

export default LeafletMap