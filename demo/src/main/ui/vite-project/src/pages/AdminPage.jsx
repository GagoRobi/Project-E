import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AdminPage () {



    return (
        <>
            <Link to="/new-event" style={{margin :"0.3rem"}}><Button>Add new Event</Button></Link>
            <Link to="/create/item" style={{margin :"0.3rem"}}><Button>Add Item to Shop</Button></Link>
        </>
    )
}
