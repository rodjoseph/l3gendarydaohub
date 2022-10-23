import { Button, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function SiteNavbar() {
  return (
      <Navbar className='navbar-no-shadow'>
        <Container className='navbar-wrapper'>
          <Navbar.Brand href="#home">
            <img
              alt="L3GENDARY"
              src="../logo_white.svg"
              width="50"
              className="d-inline-block align-top fill-white"
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mx-auto">
              <Nav.Link href="#home" className='nav-link'>VISION</Nav.Link>
              <Nav.Link href="#link" className='nav-link'>GALLERY</Nav.Link>
              <Nav.Link href="#link" className='nav-link'>CONTACT</Nav.Link>
              <NavDropdown title="DOCS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Resource Link 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Resource Link 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Resource Link 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button className="button-primary">
            JOIN L3GENDARY
          </Button>
        </Container>
      </Navbar>
  );
}
