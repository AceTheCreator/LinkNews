import React, {Component} from 'react';
import logo from './static/logo.png'
import {Nav,Navbar,Container } from 'react-bootstrap';
import '../styles/Nav.css';
import search from './static/search.png';

class Header extends Component {
    render(){
        return(
<Navbar sticky="top"  collapseOnSelect expand="lg" className='nav'>
    <Container>
  <Navbar.Toggle id='toggle'/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Trending</Nav.Link>
      <Nav.Link href="#pricing">All</Nav.Link>
      <Nav.Link href="#pricing">Sources</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Navbar.Brand href="#home" id='logo'><img src={logo} alt='logo' /></Navbar.Brand>
  <img src={search} alt='search' />
  </Container>
</Navbar>
        )
    }
}


export default Header