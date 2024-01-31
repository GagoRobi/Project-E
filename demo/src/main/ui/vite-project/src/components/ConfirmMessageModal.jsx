import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {CloseButton} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {render} from "react-dom";

/*
  ConfirmMessageModal should get a callback function (onSubmit) that upon confirming our choice
  will run the chosen task (i.e.: deletion, closing a tab, etc..)
*/
export default function ConfirmMessageModal({onSubmit}) {
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
            <Button variant="primary" onClick={()=>{onSubmit(); handleClose()} }>
              Sure
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

