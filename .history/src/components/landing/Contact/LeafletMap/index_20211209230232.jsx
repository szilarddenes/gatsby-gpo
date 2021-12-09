import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapStyle } from '../styles.js'


export default class LeafletMap extends Component {
 
 state = {
    position: [51, -1],
    zoom: 13,
    markerText: "alma"
  }
    render() {
      return(
        <Map center={this.state.position} zoom={this.state.zoom}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.state.markerText !== "" &&
          <Marker position={this.state.positio}>
            <Popup>{this.state.markerText}</Popup>
          </Marker>
          }
        </Map>
        )
      };
}

