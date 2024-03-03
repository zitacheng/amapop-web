
import './App.css';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Row className="mx-0 footer p-2">
        <p className="mb-0 text-white text-footer">Copyright @ 2024 AMAPOP. Tout droit réservé.
          <Link to={"/politic"} unstable_viewTransition>
          <span className="cgu">CGU</span></Link>
        </p>
    </Row>
  );
}

export default Footer;
