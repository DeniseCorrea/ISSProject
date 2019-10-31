import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';


class NavigationBar extends Component {
    render(){
        return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">Code Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

            <Nav.Item>
                <NavLink exact to="/" activeClassName="d-inline p-2 text-white">Homepage</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink exact to="/WhereISS" activeClassName="d-inline p-2 text-white">WhereISS</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink exact to="/Challenge" activeClassName="d-inline p-2 text-white">Challenge</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink exact to="/Crew" activeClassName="d-inline p-2 text-white">Crew</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink exact to="/Contact" activeClassName="d-inline p-2 text-white">Contact</NavLink>
            </Nav.Item>

        </Nav>
        </Navbar.Collapse>
        </Navbar>
   
        )
    }
}
export default NavigationBar;