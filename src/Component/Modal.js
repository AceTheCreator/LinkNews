import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../styles/Modal.css';

function FeedModal(props) {
    let author = props.content.author ? props.content.author : 'Unknown'
    const ts = new Date(`${props.content.publishedAt}`)
    const date = ts.toDateString();
    const time = ts.toLocaleTimeString();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.content.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className='date'>{time}, {date}</h6>
          <p>
            {props.content.content}
            <br />
            <a href = {props.content.url} >read more</a>
            <br />
            Posted by {author}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default FeedModal;