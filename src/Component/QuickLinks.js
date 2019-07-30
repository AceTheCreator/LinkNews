import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Nav.css';

class QuickLinks extends Component {
  handleClick = () => {
    this.props.cat();
  }
  render(){
    return(
      <Nav className="justify-content-center" variant="pills" style={{borderRadius:'0px'}} defaultActiveKey="/home">
<Nav.Item>
  <Nav.Link href="/home">Tech</Nav.Link>
</Nav.Item>
<Nav.Item onClick={this.props.onClick}>
  <Nav.Link eventKey="link-1">Sport</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2">Business</Nav.Link>
</Nav.Item>
</Nav>
  )
  
  }
}

export default QuickLinks;