import React from 'react';
import logo from './static/logo.png'
import {Nav,Navbar,Container } from 'react-bootstrap';
import '../styles/Nav.css';
import search from './static/search.png';

const Navigation = (props) =>{
 return(
<Navbar sticky="top"  collapseOnSelect expand="lg" className='nav'>
    <Container>
  <Navbar.Toggle id='toggle'/>
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto" onClick={() => props.onRouteChange('all')}>
      <Nav.Link href="Trending">Trending</Nav.Link>
      <Nav.Link href="All">All</Nav.Link>
      <Nav.Link href="Sources">Sources</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Navbar.Brand href="#home" id='logo'><img src={logo} alt='logo' /></Navbar.Brand>
  <img src={search} alt='search' />
  </Container>
</Navbar>
        )
    }


export default Navigation;