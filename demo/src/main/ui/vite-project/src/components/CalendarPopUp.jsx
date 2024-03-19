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
                Launch demo modal
            </Button>

            <Modal fullscreen={true} show={show} onHide={handleClose}>
                <Modal.Body>
                    <iframe style={{"width" : "100%", "height" : "100%"}}
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ05OV25ijboz6fGPXNBTy000vQyYqw_MpH6kjkKZ2SP97ryXIuU5AhaJHzx436c5iOCwfGQBdfa?gv=true"
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
