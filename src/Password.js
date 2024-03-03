
import './App.css';
import Col from 'react-bootstrap/Col';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Password() {
  return (
    <div className="App pt-4">
        <Col className="m-4 passBody">
            <h1 className="desc title text-white mb-4">Réinitialisation de votre mot de passe</h1>
            <Form className="cardBg mx-auto p-4 w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="desc">Nouveau mot de passe</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="desc">Nouveau mot de passe</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button className="pinkBtn" type="submit">
                    <p className="desc text-white mb-0">Réinitialiser</p>
                </Button>
            </Form>
        </Col>
        <Footer />
    </div>
  );
}

export default Password;
