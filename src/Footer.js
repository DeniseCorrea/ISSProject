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
                    <li><a href="https://www.facebook.com/nasasolarsystem/"><img src='https://www.iconsdb.com/icons/preview/white/facebook-4-xxl.png' alt=""></img></a></li>
                </ul>
            </div>
        </div>
    </>
);


export default Footer;