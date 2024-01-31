import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {CloseButton} from "react-bootstrap";

export default function ConfirmMessageModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
        <CloseButton style={{right : 0, top : 0}} className={"position-absolute"} onClick={handleShow}/>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Do you want to delete the event?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Sure
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

