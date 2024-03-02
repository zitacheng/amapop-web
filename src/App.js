import logo from './assets/logo.png';
import amapops1 from './assets/amapops1.png';
import amapops2 from './assets/amapops2.png';
import google from './assets/google.png';
import apple from './assets/apple.png';
import add from './assets/add.png';
import glass from './assets/glass.png';
import chat from './assets/chat.png';
import exchange from './assets/exchange.png';
import whatsapp from './assets/whatsapp.png';
import like from './assets/like.png';
import user from './assets/user.png';
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
      <Row className="mx-0 py-4 aboutRow" id="about">
        <Col md={3}>
          <Image className="mockup bounce-in-left" src={amapops1} />
        </Col>
        <Col md={3}>
          <Image className="mockup bounce-in-left" src={amapops2} />
        </Col>
        <Col md={6} className="colDesc">
          <div>
            <h1 className="align-middle desc title text-white">AMAPOP</h1>
            <h5 className="align-middle desc mb-1 text-white">L'application parfait pour faire des échanges de popmart qu'on a en doublon sur Paris📍.</h5>
            <h5 className="align-middle sub mb-1 text-white">Fonctionnalités incoming: messagerie, forum et pourquoi pas split set 😊.</h5>
            <Row className="mx-0 justify-content-center mt-3">
              <Image className="appIcon" src={apple} onClick={() => {}}/>
              <Image className="appIcon" src={google} onClick={() => {}}/>
            </Row>
          </div>
        </Col>
      </Row>
      <Col className="mx-0 howRow"  id="how">
        <h1 className="desc text-white py-3 title">Comment ça marche ?</h1>
        <Row className="mx-0 py-4 py-2">
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={add} />
              <h4 className="desc mt-4">Ajoute</h4>
              <p className="mt-3 desc">Crée toi un compte et ajoute le popmart en remplissant bien les caractéristiques pour qu'on puisse mieux les retrouver.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={exchange} />
              <h4 className="desc mt-4">Échanger ou recherche</h4>
              <p className="mt-3 desc">Défini si tu veux l'échanger ou tu recherche ce modèle, pour faciliter tu peux aussi mettre une image qui contient tout ceux que tu recherche.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={glass} />
              <h4 className="desc  mt-4">Recherche</h4>
              <p className="mt-3 desc">Cherche le popmart qui t'intéresse par nom de série/modèle ou juste regarde si y 'en a un qui t'intéresse qui est publié dans la journée.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={chat} />
              <h4 className="desc mt-4">Message</h4>
              <p className="mt-3 desc">Envoi un message à la personne qui échange, tu peux aussi regarde sur son profil ceux qu'elle recherche. Le popmart peut aussi être réserver.</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="mx-0 rowMission"  id="why">
        <h1 className="desc py-3 text-white title">Pourquoi utiliser Amapop</h1>
        <Row className="mx-0 py-4 justify-content-center">
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={whatsapp} />
              <h4 className="desc  mt-4">Surcharge message</h4>
              <p className=" desc">Il existe un groupe whatsapp, mais des fois il y a trop de messages, tu ne trouve plus les popmart à échanger.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={user} />
              <h4 className="desc  mt-4">Nouveaux membre</h4>
              <p className=" desc">Les nouveaux membres ne vois pas les anciens messages, donc les anciens popmart à échanger.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg mb-3 gelatine p-4 mx-auto">
              <Image className="howIcon" src={like} />
              <h4 className="desc  mt-4">Filtrer</h4>
              <p className=" desc">Grâce aux filtrage de l'application retrouve les popmart qui t'intéresse rapidement et simplement.</p>
            </div>
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
