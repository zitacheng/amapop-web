import logo from './assets/logo.png';
import amapops1 from './assets/amapops1.png';
import amapops2 from './assets/amapops2.png';
import google from './assets/google.png';
import apple from './assets/apple.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div className="App">
      <Navbar className="navbarTop justify-content-center">
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
          <Nav className="">
            <Nav.Link className="menuItem" href="#home">À propos</Nav.Link>
            <Nav.Link className="menuItem"href="#features">Comment ça marche</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row className="mx-0 py-4 aboutRow">
        <Col md={3}>
          <Image className="mockup" src={amapops1} />
        </Col>
        <Col md={3}>
          <Image className="mockup" src={amapops2} />
        </Col>
        <Col md={6} className="colDesc">
          <div>
            <h3 className="align-middle desc">AMAPOP</h3>
            <p className="align-middle desc">L'application parfait pour faire des échanges de popmart</p>
            <Row className="mx-0 justify-content-center">
              <Image className="appIcon" src={apple} />
              <Image className="appIcon" src={google} />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
