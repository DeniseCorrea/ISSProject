import React from 'react';
import './Contact.css';
import { CardDeck, Card } from 'react-bootstrap';

const Contact = () => (
  <div className='maincontent'>
      <h1>About us</h1>
          <p className="contact-text">We developed this project between October and November 2019, as students of Wild Code School, in Lisbon. It is our first React App, about a subject that we all love: the space. With this project, we improved our skills in React. </p>
    <CardDeck style={{ width: '45rem', margin: '3%', padding:'15px'}}>
      <Card style={{ width: '1rem', margin: '3%', padding:'15px'}}>
        <Card.Img variant="top" src='./raquel.png' alt='' height='150rem'/>
          <Card.Title>Raquel Marques</Card.Title>
            <Card.Link href="https://github.com/RaquelMarques97"><img src='./GitHub-Mark-120px-plus.png' alt="" height= '50rem' ></img></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/ana-raquel-marques-85162679/"><img src='./linkedin.png' alt="" height= '50rem'></img></Card.Link>
      </Card>
      <Card style={{ width: '1rem', margin: '3%', padding:'15px'}}>
        <Card.Img variant="top" src='./Janis.png' alt='' height='150rem'/>
          <Card.Title>Janis Ellerbrock</Card.Title>
          <Card.Text>
            <Card.Link href="https://github.com/Jxnis"><img src='./GitHub-Mark-120px-plus.png' alt="" height= '50rem'></img></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/janis-ellerbrock-2a6982187/"><img src='./linkedin.png' alt="" height= '50rem'></img></Card.Link>
          </Card.Text>
      </Card>
      <Card style={{ width: '1rem', margin: '3%', padding:'15px'}}>
        <Card.Img variant="top" src='./Denise.png'  alt='' height='150rem'/>
          <Card.Title>Denise<span>  Corrêa</span></Card.Title>
          <Card.Text>
            <Card.Link href="https://github.com/DeniseCorrea"><img src='./GitHub-Mark-120px-plus.png' alt="" height= '50rem'></img></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/denisewaskowcorrea/"><img src='./linkedin.png' alt="" height= '50rem'></img></Card.Link>
          </Card.Text>
      </Card>
    </CardDeck>
  </div>
);


export default Contact;