import logo from './assets/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Navbar expand="lg" className="navbarTop justify-content-center" sticky="top">
        <Container className="mx-0">
          <Navbar.Brand href="#home">
              <img
                src={logo}
                width="80"
                height="auto"
                className="d-inline-block align-center"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className="menuItem" href="#about">À propos</Nav.Link>
            <Nav.Link className="menuItem"href="#how">Comment ça marche</Nav.Link>
            <Nav.Link className="menuItem"href="#why">Pourquoi</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
