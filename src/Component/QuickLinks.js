import React from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Nav.css';

const QuickLinks = (props) =>{
    return(
        <Nav className="justify-content-center" variant="pills" style={{borderRadius:'0px'}} defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Tech</Nav.Link>
  </Nav.Item>
  <Nav.Item onClick={props.cat}>
    <Nav.Link eventKey="link-1">Science</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-2">Business</Nav.Link>
  </Nav.Item>
</Nav>
    )
};

export default QuickLinks;