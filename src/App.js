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
            <Nav.Link className="menuItem"href="#why">Pourquoi</Nav.Link>
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
            <p className="align-middle sub mb-1 px-4 mt-3">Je suis dans le groupe whatsapp popmart, des fois je ne trouve plus les popmarts que les gens veulent échanger, et les nouveaux membres ne vois pas les anciens messages.</p>
            <Row className="mx-0 justify-content-center mt-3">
              <Image className="appIcon" src={apple} onClick={() => {}}/>
              <Image className="appIcon" src={google} onClick={() => {}}/>
            </Row>
          </div>
        </Col>
      </Row>
      <Col className="mx-0 howRow"  id="how">
        <h2 className="desc py-3 ">Comment ça marche ?</h2>
        <Row className="mx-0 py-4 py-2">
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={add} />
              <h4 className="desc mt-4">Ajoute</h4>
              <p className="mt-3 desc">Crée toi un compte et ajoute le popmart en remplissant bien les caractéristiques pour qu'on puisse mieux les retrouver.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={exchange} />
              <h4 className="desc mt-4">Échanger ou recherche</h4>
              <p className="mt-3 desc">Défini si tu veux l'échanger ou tu recherche ce modèle, pour faciliter tu peux aussi mettre une image qui contient tout ceux que tu recherche.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={glass} />
              <h4 className="desc  mt-4">Recherche</h4>
              <p className="mt-3 desc">Cherche le popmart qui t'intéresse par nom de série/modèle ou juste regarde si y 'en a un qui t'intéresse qui est publié dans la journée.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={chat} />
              <h4 className="desc mt-4">Message</h4>
              <p className="mt-3 desc">Envoi un message à la personne qui échange, tu peux aussi regarde sur son profil ceux qu'elle recherche. Le popmart peut aussi être réserver.</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="mx-0 rowMission"  id="why">
        <h2 className="desc py-3 ">Pourquoi utilisé Amapop</h2>
        <Row className="mx-0 py-4 justify-content-center">
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={whatsapp} />
              <h4 className="desc  mt-4">Surcharge message</h4>
              <p className=" desc">Des fois il y a trop de messages, tu ne trouve plus les popmart à échanger.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={user} />
              <h4 className="desc  mt-4">Nouveaux membre</h4>
              <p className=" desc">Les nouveaux membres ne vois pas les anciens messages, donc les anciens popmart à échanger.</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="cardBg gelatine p-4">
              <Image className="howIcon" src={like} />
              <h4 className="desc  mt-4">Filtrer</h4>
              <p className=" desc">Tu veux voir que les série de popmart qui t'intéresse.</p>
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
