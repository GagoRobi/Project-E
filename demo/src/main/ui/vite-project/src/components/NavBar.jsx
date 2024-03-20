import {Button, Container, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {render} from "react-dom";

function NavBar() {
    const [sessionToken,setSessionToken] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [itemCount, setItemCount] = useState("")
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        if(sessionStorage.getItem("cart") != null){
            setCart([sessionStorage.getItem("cart")])
            console.log(sessionStorage.getItem("cart").at(0))
        }
        setSessionToken(sessionStorage.getItem("token"));
        console.log("cart")
        console.log(cart)
    },[loggedIn])

    return (
        <div>
            <Navbar style={{zIndex: 15}} expand="lg" className="nav opacity-75">
                <Container>
                    <Navbar.Brand href="/">Brand-Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Kezdőlap</Nav.Link>
                            <Nav.Link href="/events">Események</Nav.Link>
                            <Nav.Link href="/reviews">Értékelések</Nav.Link>
                            <Nav.Link href="/">Szolgáltatások</Nav.Link>
                            <Nav.Link href="/shop">WebShop</Nav.Link>

                            <NavDropdown title="Tanfolyamok" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item>
                                    <Spinner className="invisible">
                                        <span className="visible">°</span>
                                    </Spinner>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/*todo button*/}


                        {sessionToken != null ? <Nav><Nav.Link href="/admin">Admin</Nav.Link><Nav.Link href="/"
                                                                                                       onClick={() => sessionStorage.clear()}>Logout</Nav.Link></Nav>
                            : <Nav>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav>}
                    </Navbar.Collapse>
                    <Nav>

                        <Button onClick={(e)=>{e.preventDefault(); if(itemCount === ""){setItemCount(1)}else{setItemCount(itemCount+1)}}}>
                            {/*cart icon*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg> {itemCount}
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet context={[loggedIn, setLoggedIn, cart, setCart] } />
        </div>
    )

}

export default NavBar;
