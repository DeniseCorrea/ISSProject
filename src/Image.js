import React from 'react';
import './Image.css';
import { Accordion, Card, Button } from 'react-bootstrap';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copyright: '',
            date: '',
            title: '',
            explanation: '',
            url: '',
            isLoading: true,
        }
    }


    componentDidMount() {
        this.getImages();
    }


    getImages = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DOJuuz8rSQdh6swCcE5Gk3NLsuMGNTBX8ubSheVQ')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    copyright: data.copyright,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    url: data.url,
                    isLoading: false,
                })
            })
    }



    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <p>
                    Loading
                </p>
            )
        }

        return (
            <div className="homepage">
                <div className="homepage-title">
                    <h1>FlyBy</h1>
                    <p>Out Of This World App</p>
                </div>
                <div className="image-picture">

                    <img src={this.state.url} alt='' />
                    <div className="image-title">
                        <p>Picture of the day: {this.state.title}</p>
                    </div>
                </div>

                <div className='accordion'>
                <Accordion defaultActiveKey="0">
                    <Card style={{ backgroundColor: 'black' }}>
                        <Card.Header style={{ backgroundColor: 'black' }}>
                            <Accordion.Toggle className='accordion' style={{ backgroundColor: 'black' }} as={Button} variant="link" eventKey="1">
                                Want To Know More?
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse style={{ backgroundColor: 'black' }} eventKey="1">
                            <Card.Body>
                                <div background-color='black' className="image-infos">
                                    <p>Copyright: {this.state.copyright}</p>
                                    <p>{this.state.date}</p>
                                    <p>{this.state.explanation}</p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </div>
            </div>
        )
    }
};


export default Image