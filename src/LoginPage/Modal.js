import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modalone(props) {
//   const [show, setShow] = useState(false);

  const handleClose = () => props.setShow(false);
//   

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modalone />);