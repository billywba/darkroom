import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";

function Home() {
    return (
      <Row>
        <Col>
          <h2>DE-LIGHT</h2>
          <Link to="/info">START</Link>
        </Col>
      </Row>
    );
  }
  
  export default Home;
  