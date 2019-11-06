import React, { Component } from 'react';
import './Crew.css';


class Crew extends Component {
   constructor(props) {
       super(props);
       this.state = {
           name: [],         
       };
   }
   

   componentDidMount() {
    this.getCrew();
}
   
   getCrew = () => {
       fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.people,
            });
        });
   }   
   
   
   
   
    render() {
    return (
            <div className="CrewList">
                <ul> 
                    {this.state.name.map(person =>  <li>{person.name}</li> )}
                   
                    
                 </ul>
            </div>
    )
    }
}

export default Crew;
