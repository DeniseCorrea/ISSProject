/*import React from 'react';
import { LeafletMap, TileLayer, Marker } from 'react-leaflet';

const WhereISS = () => (
    <div>
        <h1>WhereISS</h1>
    </div>
);*/

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './WhereISS.css';
import DisplayPosition from './DisplayPosition';


class SimpleExample extends Component {
        state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 3,
        }
    

    getPosition = () => {
        fetch ('http://api.open-notify.org/iss-now.json')
        .then (response => response.json())
        .then (data => {
            this.setState({
                lat: data.iss_position.latitude, 
                lng: data.iss_position.longitude
            })
        })
    }

    componentDidMount() {
        const fetchInfo = ()=> {
            this.getPosition();
        };
        setInterval(fetchInfo, 8000);
    }


    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="Where">
                <DisplayPosition lat={this.state.lat} lng={this.state.lng}/>
            <div className="map">
                <Map center={{lat: this.state.lat, lng: this.state.lng}} 
                        zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </Map>
            </div>
        </div>
        )
    }
}



export default SimpleExample 