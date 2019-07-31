import React from 'react';
import logo from '../Component/static/logo.png';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Search from './Search';

const Navigation = (props) => {
    return(
        <Navbar sticky="top"  collapseOnSelect expand="lg" className='nav'>
        <Container>
      <Navbar.Toggle id='toggle'/>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><div onClick={() =>props.onRouteChange('trending')}>Trending</div></Nav.Link>
          <Nav.Link><div onClick={() =>props.onRouteChange('all')}>All</div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home" id='logo'><img src={logo} alt='logo' /></Navbar.Brand>
      <Search
        searchHandler = {props.searchHandler}
        onQueryChange = {props.onQueryChange}
        query = {props.query}
       />
      </Container>
    </Navbar>
    )
}

export default Navigation;