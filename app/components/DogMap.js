import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, GeoJson } from 'react-leaflet';



var mapHelpers = require("../utils/mapHelpers.js");

class DogMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 35.229241,
      lng: -80.842167,
      zoom: 10,
    };
  }

  handleClick(item) {
    console.log(item);
      mapHelpers.getBars().then(function(results) {
        console.log(results.data[0].geometry.coordinates[0]);
        console.log(results.data[0].geometry.coordinates[1]);  
      }
    );
  }

  render() {  
    const position = [this.state.lat, this.state.lng];
    const barsLayer = "../../public/geojson/bars2.geojson";
    
    return (
      <div>
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
        <GeoJson data={barsLayer} />
      </Map>
      <button type="button" className="btn btn-default" onClick={() => this.handleClick('bars')}>Bars</button>
      </div>
    );
  }
}

module.exports = DogMap;