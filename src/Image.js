import React from 'react';
import './Image.css';

class Image extends React.Component {
  constructor(props){
  super(props); 
  this.state = {
      copyright: "Josep M. DrudisDon Goldman",
      date:"2019-10-30",
      title:"M42: Inside the Orion Nebula",
      explanation: "The Great Nebula in Orion, an immense, nearby starbirth region, is probably the most famous of all astronomical nebulas.  Here, glowing gas surrounds hot young stars at the edge of an immense interstellar molecular cloud only 1500 light-years away.  In the featured deep image in assigned colors highlighted by emission in oxygen and hydrogen, wisps and sheets of dust and gas are particularly evident.  The Great Nebula in Orion can be found with the unaided eye near the easily identifiable belt of three stars in the popular constellation Orion.  In addition to housing a bright open cluster of stars known as the Trapezium, the Orion Nebula contains many stellar nurseries.   These nurseries contain much hydrogen gas, hot young stars, proplyds, and stellar jets spewing material at high speeds.  Also known as M42, the Orion Nebula spans about 40 light years and is located in the same spiral arm of our Galaxy as the Sun.",
      url: "https://apod.nasa.gov/apod/image/1910/M42Detailed_DrudisGoldman_960.jpg",
      }
  }

  componentDidMount() {
    this.getImages();
  }


  getImages = () => {
      fetch ('https://api.nasa.gov/planetary/apod?api_key=DOJuuz8rSQdh6swCcE5Gk3NLsuMGNTBX8ubSheVQ')
      .then (response => response.json())
      .then (data => {
          this.setState({
              copyright:data.copyright,
              date: data.date,
              title: data.title,
              explanation: data.explanation,
              url: data.url,
          })
      })
  }

  
  render () {
      return (
        <div className="homepage">
            <div className="homepage-title">
                <h1>Fly By</h1>
            </div>
            <div className="image-title">
                <p>{this.state.title}</p>
            </div>
            <div className="image-picture">
                <img src={this.state.url} alt='' />
            </div>
            <div className="image-infos">
                <p>Copyright: {this.state.copyright}</p> 
                <p>{this.state.date}</p>
                <p>{this.state.explanation}</p>
            </div>
        </div>
    )
  }
};


export default Image