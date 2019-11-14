import React from 'react';
import './Sighting.css';

class Sighting extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            lng: '',
            lat: '',  
            altitude: '',
            passes: '',
            datetime: '',
            passTimes: [],
            isLoading: true     
        }
    }

    componentDidMount() {
        this.getPosition();
    }


    getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lng: position.coords.longitude,
                lat: position.coords.latitude,
            })
            
            fetch (`https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${this.state.lat }&lon=${this.state.lng }`)
                .then (response => response.json())
                .then (data => {
                    this.setState({
                        lng:data.request.longitude,
                        lat: data.request.latitude,
                        altitude: data.request.altitude,
                        passes: data.request.passes,
                        datetime: data.request.datetime,
                        passTimes: data.response,
                        isLoading: false                    
                    })
                }) 
        });
    }

    render () {
        const { passTimes, isLoading } = this.state;

        if (isLoading) {
            return (
                <p>
                    Loading
                </p>
            )
        } 

        const formatRisetime = (utcSeconds) => {
            const date = new Date(utcSeconds * 1000);
                return '' + date;
        }

        const secondsToMs = (d) => {
            d = Number(d);
            let m = Math.floor(d % 3600 / 60);
            let s = Math.floor(d % 3600 % 60);
        
            let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
            let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
            return mDisplay + sDisplay; 
        }

        return (
            <div className="maincontent">
                <div className="sighting-board">
                    <div className="sighting-infos">
                        <h1> Spot ISS </h1>
                            <h2 className="sighting-subtitle"> These are the next opportunities to spot ISS from your location </h2>
                                {passTimes.map((passTime) => {
                                return(
                                    <div className="sighting-list">
                                        <ul>
                                            <li>{formatRisetime(passTime.risetime)} </li> 
                                        </ul>
                                    </div>
                                )
                            })} 
                    </div>
                    <div className="sighting-div-image">
                        <img className="sighting-image" src="https://i.imgur.com/2MsJGIo.jpg" title="source: imgur.com" alt=''/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Sighting
