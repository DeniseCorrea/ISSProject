import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (

    <>
        <div className="footer">
            <ul className="contact">
                <li><NavLink exact to="/Contact" activeClassName="selected">Contact</NavLink></li>
                <li><NavLink exact to="/Contact" activeClassName="selected">About us</NavLink></li>
            </ul>
            <ul className="social">
                <li><img src="https://image.flaticon.com/icons/png/512/87/87390.png" alt=""></img></li>
                <li><img src="https://image.flaticon.com/icons/png/512/59/59439.png" alt=""></img></li>
            </ul>
        </div>
    </>
);


export default Footer;