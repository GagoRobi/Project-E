import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalDialog} from "react-bootstrap";

export default function CenteredModal(props) {

    const {name, price, description, pictureUrl} = props.item;


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header  closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={pictureUrl} style={{width: "75%", textAlign:"center", display:"flex", margin:"auto"}} alt="picture"/>
                <h3 className="m-2">Description:</h3>
                <p style={{wordWrap:"break-word"}}>
                    {description}
                </p>
                <h4>Price:</h4><p>{price}.-</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
