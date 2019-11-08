import React, { Component } from 'react';
import './Crew.css';


class Crew extends Component {
   constructor(props) {
       super(props);
       this.state = {
        //    name: '',
        //    biophoto: '',
        //    biophotowidth: '',
        //    biophotoheight: '',
        //    country: '',
        //    countryflag: '',
        //    launchdate: '',
        //    title: '',
        //    biolink: '',
           CrewInfos: [],
           isLoading: true       
       };
   }
   

   componentDidMount() {
    this.getCrew();
}
   
   getCrew = () => {
       fetch('https://cors-anywhere.herokuapp.com/https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                // name: data.people.name,
                // biophoto: data.people.biophoto,
                // biophotowidth: data.people.biophotowidth,
                // biophotoheight: data.people.biophotoheight,
                // country: data.people.country,
                // countryflag: data.people.countryflag,
                // launchdate: data.people.launchdate,
                // title: data.people.title,
                // biolink: data.people.biolink,
                CrewInfos: data.people,
                isLoading: false

            });
        });
   }   
   
   
   
   
    render() {
        const { CrewInfos, isLoading } = this.state;

        if (isLoading) {
            return (
                <p>Loading</p>
            )
        }
    return (
            <div className="Crew">
                    <div className="CrewTitle">
                        <h1>Crew</h1>
                    </div>
                    <div className="CrewList">
                        <div className="listing"> 
                            {CrewInfos.map((info) =>  (
                                <div>
                                    <div className="Infos">
                                        <a href={info.biolink} target="_blank"> 
                                        {/* <img src={info.biophoto} height={info.biophotoheight} width={info.biophotowidth} className="biopic" /> */}
                                        <h2>{info.name}</h2>
                                        {/* {info.country} */}
                                        <img src={info.countryflag} className="flag" />
                                        <h3>{info.title}</h3> 
                                        </a>
                                    </div>
                                    <div className="Days">
                                        <p>Since</p>
                                        <h4>{info.launchdate}</h4>
                                        <p>In Space</p>
                                    </div>
                                </div>
                                
                             ) )} 
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Crew;
