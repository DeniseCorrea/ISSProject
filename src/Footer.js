import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (

    <>
        <div className="footer">
            <ul className="contact">
                <li><NavLink exact to="/Contact" >Contact</NavLink></li>
                <li><NavLink exact to="/Contact" >About us</NavLink></li>
            </ul>
            <ul className="social">
                <li><a href="#"><img src="https://image.flaticon.com/icons/png/512/87/87390.png" alt=""></img></a></li>
                <li><a href="#"><img src="https://image.flaticon.com/icons/png/512/59/59439.png" alt=""></img></a></li>
            </ul>
        </div>
    </>
);


export default Footer;