

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './WhereISS.css';
import DisplayPosition from './DisplayPosition';
import L from 'leaflet'


class SimpleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 2,
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        }

    }



    getPosition = () => {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude
                })
            })
    }

    componentDidMount() {
        const fetchInfo = () => {
            this.getPosition();
        };
        setInterval(fetchInfo, 8000);
    }

    tileLayer = () => {

        this.setState({ url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' })
    }
    tileLayer2 = () => {
        this.setState({ url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' })
    }

    tileLayer3 = () => {
        this.setState({ url: 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png' })

    }

    

    render() {
        const position = [this.state.lat, this.state.lng];

        let icon = L.icon({
            iconUrl: require('./iss.png'),
            iconSize: [64, 64],
        });

       

        return (
            <div className="background">
                <h1 className="wheretitle">Where is ISS right now?</h1>

                <div className="Where">

                    <div className="buttons">

                        <div>
                            <button onClick={this.tileLayer}>
                                <img src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" alt="" />
                            </button>
                        </div>
                        <div>
                            <button onClick={this.tileLayer2}>
                                <img src="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" alt='' />
                            </button>
                        </div>
                        <div>
                            <button onClick={this.tileLayer3}>
                                <img src='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png' alt='' />
                            </button>
                        </div>
                        
                    </div>


                    <div className="map">

                        <DisplayPosition className="display" lat={this.state.lat} lng={this.state.lng} />
                        <Map className="map1" center={{ lat: this.state.lat, lng: this.state.lng }}
                            zoom={this.state.zoom}>
                            <TileLayer
                                

                                url={this.state.url}
                            />
                            <Marker position={position} icon={icon}>

                                <Popup>
                                    ISS <br />Real Time
                            </Popup>
                            </Marker>

                        </Map>

                    </div>

                    <div className="video">
                        <p>Live Stream from ISS (sound and image)</p>
                        <iframe width="360" height="270" src="https://ustream.tv/embed/9408562?autoplay=true" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style={{ "border": "none" }} title="iss"></iframe>
                    </div>

                </div>
            </div>
        )
    }
}



export default SimpleExample 