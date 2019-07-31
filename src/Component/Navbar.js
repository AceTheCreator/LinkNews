import React, {Component} from 'react';
import logo from '../Component/static/logo.png';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Search from './Search';

const trending = 'Trending'
const all  = 'All'

class Navigation extends Component {
    render(){
        return(
            <Navbar sticky="top"  collapseOnSelect expand="lg" className='nav'>
            <Container>
          <Navbar.Toggle id='toggle'/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><div onClick={() =>this.props.onRouteChange('trending')}>{trending}</div></Nav.Link>
              <Nav.Link><div onClick={() =>this.props.onRouteChange('all')}>{all}</div></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" id='logo'><img src={logo} alt='logo' /></Navbar.Brand>
          <Search
            searchHandler = {this.props.searchHandler}
            onQueryChange = {this.props.onQueryChange}
            query = {this.props.query}
           />
          </Container>
        </Navbar>
        )
    }
}

export default Navigation;