
import './App.css';
import logo from './assets/logoSquare.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function Password() {

  return (
    <Col className="App pt-4 mx-0 passBg w-100">
        <Row className="mx-0 justify-content-center mb-4">
            <Link to={"/"} unstable_viewTransition>
                <Image className="logo" src={logo} />
            </Link>
        </Row>
        <h1 className="desc title text-white mb-4">Réinitialisation de votre mot de passe</h1>
        <Row className="d-flex align-items-center mx-0">
        <Form className="cardBgPass mx-auto p-4 w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="desc">Nouveau mot de passe</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="desc">Confirmation mot de passe</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button className="pinkBtn" type="submit" onClick={() => {}}>
                <p className="desc text-white mb-0">Réinitialiser</p>
            </Button>
        </Form>
        </Row>
    </Col>
  );
}

export default Password;
