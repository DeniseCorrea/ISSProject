import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (

    <>
        <div className="footer">

            <ul className="contact">
                <div><li><NavLink exact to="/Contact" >ABOUT US</NavLink></li></div>
            </ul>

            <div className="social">
                <ul >
                    <li><a href="https://www.instagram.com/nasa/?hl=en"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkh9W8gx7D4smk8lf52SVKoHiXnCsaH14nbT5_-6SOupeEyB1Bg&s" alt=""></img></a></li>
                    <li><a href="https://www.facebook.com/nasasolarsystem/"><img src='data:image/png;base64,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' alt=""></img></a></li>
                </ul>
            </div>
        </div>
    </>
);


export default Footer;