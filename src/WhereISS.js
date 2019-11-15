

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './WhereISS.css';
import DisplayPosition from './DisplayPosition';
import L from 'leaflet';


class SimpleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lng: '',
            zoom: 1,
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            speed: 27600,
            speedunits: 'kmh',
            isLoading: true,
        }

    }


    getPosition = () => {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude,
                    isLoading: false
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

    speedconversion = () => {
        var newSpeed;
        var newUnit;

        if (this.state.speedunits === 'kmh') {
            newSpeed = Math.round(27600 / 1.60933);
            newUnit = 'mph';
        } else {
            newSpeed = Math.round(this.state.speed * 1.60933);
            newUnit = 'kmh';
        }

        this.setState({
            speed: newSpeed,
            speedunits: newUnit,
        });
    }




    render() {



        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className='loading'>
                    <img className='gif1' width='80%' height='35%' src="/img/iss.gif" />
                    <p className='searching'>SEARCHING...</p>
                </div>
            )
        }

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
                        <h6 className='choose'>Choose your map:</h6>
                        <div>
                            <button className='choose2' onClick={this.tileLayer}>
                                <img src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" alt="" />
                            </button>
                        </div>
                        <div>
                            <button className='choose2' onClick={this.tileLayer2}>
                                <img src="/img/map2.png" alt='' />
                            </button>
                        </div>
                        <div>
                            <button className='choose2' onClick={this.tileLayer3}>
                                <img src='/img/map1.png' alt='' />
                            </button>
                        </div>

                    </div>


                    <div className="map">

                        <DisplayPosition className="display" lat={this.state.lat} lng={this.state.lng} />
                        <div className='speed'>
                        <p>Orbits per day: 15.54 // Speed: {this.state.speed} {this.state.speedunits}</p>
                        <button className='imperial' 
                            onClick={this.speedconversion}>{this.state.speedunits === 'kmh' ? 'Imperial notation'  : 'Metric notation'}
                        </button>
                        </div>
                        
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
                        <iframe width="360" height="300" src="https://ustream.tv/embed/9408562?autoplay=true" scrolling="no" allowFullScreen style={{ "border": "none" }} title="iss"></iframe>
                    </div>

                </div>
            </div>
        )
    }
}



export default SimpleExample 