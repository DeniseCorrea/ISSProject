import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (

    <>
        <footer>
            <ul className="contact">
                <li><NavLink exact to="/Contact" activeClassName="selected">Contact</NavLink></li>
                <li><NavLink exact to="/Contact" activeClassName="selected">About us</NavLink></li>
            </ul>
            <ul className="social">
                <li><NavLink exact to="#" activeClassName="selected">instagram logo</NavLink></li>
                <li><NavLink exact to="#" activeClassName="selected">facebook logo</NavLink></li>
            </ul>
        </footer>
    </>
);


export default Footer;