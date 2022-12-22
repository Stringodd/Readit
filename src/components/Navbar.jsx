import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="secondary" expand="lg" style={{ height: 80 }}>
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#home">
                    <img
                        src={process.env.PUBLIC_URL + "/images/movie.png"}
                        width="70"
                        height="auto"
                        className="d-flex-inline-block align-top"
                        alt="Site logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end align-items-center">
                    <Nav className="justify-content-center">
                        <Nav.Link
                            className="nav-list-link text-white small"
                        >
                            FİLMLER
                        </Nav.Link>

                        <Nav.Link
                            className="nav-list-link text-white small"
                        >
                            DİZİLER
                        </Nav.Link>
                        <Nav.Link
                            className="nav-list-link text-white small"
                        >
                            TÜRLER
                        </Nav.Link>
                        <Nav.Link
                            className="nav-list-link text-white small"
                        >
                            LİSTELER
                        </Nav.Link>
                        <button type="button" class="btn btn-secondary">GİRİŞ YAP</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;