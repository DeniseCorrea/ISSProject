import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
    <nav>
        <ul>
            <li><NavLink exact to="/Homepage" activeClassName="selected">Homepage</NavLink></li>
            <li><NavLink exact to="/WhereISS" activeClassName="selected">WhereISS</NavLink></li>
            <li><NavLink exact to="/Challenge" activeClassName="selected">Challenge</NavLink></li>
            <li><NavLink exact to="/Crew" activeClassName="selected">Crew</NavLink></li>
            <li><NavLink exact to="/Contact" activeClassName="selected">Contact</NavLink></li>
            <li><NavLink exact to="/Footer" activeClassName="selected">Footer</NavLink></li>
        </ul>
    </nav>
);


export default Navbar;