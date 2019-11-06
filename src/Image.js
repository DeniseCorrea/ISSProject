import React from 'react';
import './Image.css';

class Image extends React.Component {
  constructor(props){
  super(props); 
  this.state = {
      copyright: '',
      date:'',
      title:'',
      explanation: '',
      url: '',
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