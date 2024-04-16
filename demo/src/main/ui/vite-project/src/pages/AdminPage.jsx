import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AdminPage() {

    return (
        <div style={{margin:"5px"}}>
            <Link to="/new-event" style={{display: "block", margin: "0.3rem"}}><Button>Add new Event</Button></Link>
            <Link to="/create/item" style={{display: "block", margin: "0.3rem"}}><Button>Add Item to Shop</Button></Link>
            <Link to="/event-type" style={{display: "block", margin: "0.3rem"}}><Button>Edit Event Type</Button></Link>
        </div>
    )
}
