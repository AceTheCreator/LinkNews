import React, {Component} from 'react';
import logo from './static/logo.png'
import {Nav,Navbar,Container } from 'react-bootstrap';
import '../styles/Nav.css';
import search from './static/search.png';

class Header extends Component {
    render(){
        return(
            <div className='navs'>
<Navbar collapseOnSelect expand="lg">
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
<Nav className="justify-content-center" variant="pills" style={{borderRadius:'0px'}} defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Tech</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Science</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-2">Business</Nav.Link>
  </Nav.Item>
</Nav>
</div>
        )
    }
}


export default Header