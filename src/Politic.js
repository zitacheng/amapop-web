
import './App.css';
import Row from 'react-bootstrap/Row';
import pdf from "./assets/CGU.pdf";

function Politic() {
  return (
    <Row className="mx-0">
       <iframe src={pdf} style={{position:'fixed', top:0, left:0, bottom:0, right:0, width:'100%', height:'100%', border:'none', margin:0, padding:0, overflow:'hidden', zIndex:999999}} />
    </Row>
  );
}

export default Politic;
