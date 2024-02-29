import logo from './assets/logo.png';
import amapops1 from './assets/amapops1.png';
import amapops2 from './assets/amapops2.png';
import google from './assets/google.png';
import apple from './assets/apple.png';
import add from './assets/add.png';
import glass from './assets/glass.png';
import chat from './assets/chat.png';
import exchange from './assets/exchange.png';
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
      <Navbar className="navbarTop justify-content-center" sticky="top">
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
            <Nav.Link className="menuItem" href="#about">À propos</Nav.Link>
            <Nav.Link className="menuItem"href="#how">Comment ça marche</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row className="mx-0 py-4 aboutRow" id="about">
        <Col md={3}>
          <Image className="mockup bounce-in-left" src={amapops1} />
        </Col>
        <Col md={3}>
          <Image className="mockup bounce-in-left" src={amapops2} />
        </Col>
        <Col md={6} className="colDesc">
          <div>
            <h3 className="align-middle desc">AMAPOP</h3>
            <p className="align-middle desc mb-1">L'application parfait pour faire des échanges de popmart qu'on a en doublon sur Paris 📍.</p>
            <p className="align-middle desc mb-1">Si l'app est un succès, j'ajouterais le messagerie, un forum et pourquoi pas split set 😊.</p>
            <p className="align-middle sub mb-1 px-4 mt-3">Je fais parti du groupe whatsapp popmart, le but est de faciliter les échanges sans avoir trop de messages qui font partir les popmart à échanger.</p>
            <Row className="mx-0 justify-content-center mt-3">
              <Image className="appIcon" src={apple} onClick={() => {}}/>
              <Image className="appIcon" src={google} onClick={() => {}}/>
            </Row>
          </div>
        </Col>
      </Row>
      <Col className="mx-0 howRow"  id="how">
        <h2 className="desc py-3 text-white">Comment ça marche ?</h2>
        <Row className="mx-0 py-4">
          <Col md={3} sm={6}>
            <Image className="howIcon rotate-in-up-left" src={add} />
            <h4 className="desc text-white mt-4">Ajoute</h4>
            <p className="text-white desc">Crée toi un compte et ajoute le popmart en remplissant bien les caractéristiques pour qu'on puisse mieux les retrouver.</p>
          </Col>
          <Col md={3} sm={6}>
            <Image className="howIcon rotate-in-up-left" src={exchange} />
            <h4 className="desc text-white mt-4">Échanger ou recherche</h4>
            <p className="text-white desc">Défini si tu veux l'échanger ou tu recherche ce modèle, pour faciliter tu peux aussi mettre une image qui contient tout ceux que tu recherche.</p>
          </Col>
          <Col md={3} sm={6}>
            <Image className="howIcon rotate-in-up-left" src={glass} />
            <h4 className="desc text-white mt-4">Recherche</h4>
            <p className="text-white desc">Cherche le popmart qui t'intéresse par nom de série/modèle ou juste regarde si y 'en a un qui t'intéresse qui est publié dans la journée.</p>
          </Col>
          <Col md={3} sm={6}>
            <Image className="howIcon rotate-in-up-left" src={chat} />
            <h4 className="desc text-white mt-4">Message</h4>
            <p className="text-white desc">Envoi un message à la personne qui échange, tu peux aussi regarde sur son profil ceux qu'elle recherche. Le popmart peut aussi être réserver.</p>
          </Col>
        </Row>
      </Col>
      <Row className="mx-0 footer p-2">
        <p className="mb-0 text-white text-footer">Copyright @ 2024 AMAPOP. Tout droit réservé.</p>
      </Row>
    </div>
  );
}

export default App;
