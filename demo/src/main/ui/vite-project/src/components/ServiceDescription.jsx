import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Collapse} from "react-bootstrap";

export default function ServiceDescription ({title, description}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {description}
                </div>
            </Collapse>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Details(expand)
            </Button>
        </>
    );
}
