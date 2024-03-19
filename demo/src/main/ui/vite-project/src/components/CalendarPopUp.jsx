import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";

export default function CalendarPopUp({link}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Check available appointments
            </Button>

            <Modal fullscreen={true} show={show} onHide={handleClose}>
                <Modal.Body>cd
                    <iframe style={{"width" : "100%", "height" : "100%"}}
                        src={link}
                        ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
