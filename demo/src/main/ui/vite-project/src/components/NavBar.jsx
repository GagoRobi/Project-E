import {Container, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";
import {Outlet} from "react-router-dom";

function NavBar() {


    return (
        <div>

            <Navbar style={{zIndex : 15}} expand="lg" className="nav opacity-100">
                <Container>
                    <Navbar.Brand href="#home">Brand-Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Kezdőlap</Nav.Link>
                            <Nav.Link href="/events">Események</Nav.Link>
                            <NavDropdown  title="Tanfolyamok" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Spinner className="invisible">
                                        <span className="visible">o</span>
                                        </Spinner>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )

}

export default NavBar;
