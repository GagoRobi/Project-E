import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AdminPage () {



    return (
        <>
            <Button href="/new-event">Add new Event</Button>
            <Link to="/create/item"><Button>Add Item to Shop</Button></Link>
        </>
    )
}
