import {Button, Container, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {gapi} from "gapi-script";
const clientID = "801331285763-0d1jm62ckr7rh40t111vrh0vthrjpc5l.apps.googleusercontent.com";

function NavBar() {
    const [sessionToken, setSessionToken] = useState(null);
    const [cartSize, setCartSize] = useState(0);
    const [cartRefreshTrigger, setCartRefreshTrigger] = useState(0);
    const [actualIds, setActualIds] = useState([]);
    const navigate = useNavigate();

    function countCartItems() {
        let counter = 0;
        if (localStorage.getItem("cart") != null) {
            for (const item of JSON.parse(localStorage.getItem("cart"))) {
                counter += item.count;
            }
        }
        return counter;
    }

    useEffect(() => {
        setSessionToken(sessionStorage.getItem("token"))
        if (localStorage.getItem("cart") != null) {
            const items = JSON.parse(localStorage.getItem("cart"));
            setCartSize(JSON.parse(localStorage.getItem("cart")).length)
            for (const es of items) {
                setActualIds([...actualIds, es]);

            }
            setCartSize(countCartItems());
        } else {
            setCartSize(0);
        }
    }, [cartRefreshTrigger, cartSize])

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId: clientID,
                scope: ""
            })
        };

        gapi.load('client:auth2',start);
    });
    //var accesToken = gapi.auth.getToken().access_token;
    return (
        <div>
            <Navbar style={{zIndex: 15}} expand="lg" className="nav opacity-75">
                <Container>
                    <Navbar.Brand href="/">Brand-Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="btn" to="/">Kezdőlap</Link>
                            <Link className="btn" to="/events">Események</Link>
                            <Link className="btn" to="/reviews">Értékelések</Link>
                            <Link className="btn">Szolgáltatások</Link>
                            <Link className="btn" to='/shop'>WebShop</Link>

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
                        {sessionStorage.getItem("token") != null ?
                            <Nav><Link className="btn" to="/admin">Admin</Link>

                                    <Link className="btn" to="/" onClick={() => sessionStorage.clear()}>Logout</Link></Nav>
                            : <Nav>
                                <Link className="btn" to="/login">Login</Link>
                                <Link className="btn" to="/register">Register</Link>
                            </Nav>}
                    </Navbar.Collapse>
                    <Nav>

                        <Button onClick={(e) => {
                            e.preventDefault();
                            if (localStorage.getItem("cart") !== null) {
                                navigate("/checkout");
                            }
                        }}>
                            {/*cart icon*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            {cartSize > 0 && cartSize + ""}
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet context={[cartRefreshTrigger, setCartRefreshTrigger]}/>
        </div>
    )

}

export default NavBar;
