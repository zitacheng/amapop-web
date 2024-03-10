import "./App.css";
import { useState } from "react";
import logo from "./assets/logoSquare.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "./Footer.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

function Password() {
  const [searchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  console.log("code ", searchParams.get("code"));

  const resetPass = () => {
    // Request API.
    axios
      .post("http://192.168.1.49:1337/api/auth/reset-password", {
        code: searchParams.get("code"),
        password: password,
        passwordConfirmation: passwordConf,
      })
      .then((response) => {
        console.log("Your user's password has been reset.");
        setSuccess(true);
      })
      .catch((error) => {
        setFailed(true);
        console.log("An error occurred:", error.response);
      });
  };

  console.log("password ", password);
  console.log("passwordConf ", passwordConf);

  return (
    <Col className="App pt-4 mx-0 passBg w-100">
      <Row className="mx-0 justify-content-center mb-4">
        <Link to={"/"} unstable_viewTransition>
          <Image className="logo" src={logo} />
        </Link>
      </Row>
      {failed ? (
        <h1 className="desc title text-white mb-4">
          {"Erreur du serveur, veuillez réessayer plus tard."}
        </h1>
      ) : (
        <h1 className="desc title text-white mb-4">
          {success
            ? "Votre changement de mot de passe a bien été prise en compte."
            : "Réinitialisation de votre mot de passe"}
        </h1>
      )}
      {!success && (
        <Row className="d-flex align-items-center mx-0">
          <Form className="cardBgPass mx-auto p-4 w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="desc">Nouveau mot de passe</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="desc">
                Confirmation mot de passe
              </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </Form.Group>
            <Button
              className="pinkBtn"
              disabled={!password || !passwordConf}
              onClick={() => {
                if (password && passwordConf && password == passwordConf) resetPass();
              }}
            >
              <p className="desc text-white mb-0">Réinitialiser</p>
            </Button>
          </Form>
        </Row>
      )}
    </Col>
  );
}

export default Password;
