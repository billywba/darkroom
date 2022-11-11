import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InfoFrame() {
  return (
    <>
      <h2>First Step</h2>

      <Row>
        <Col xs={6}>

          <p>
            Firstly in the darkroom the lights are turned off and the night vision goggles are equipped film is then unrolled from the camera and installed into the lightproof drum
          </p>
        </Col>
        <Col xs={6}><p>IMG HERE</p></Col>
      </Row>
    </>
  );
}

export default InfoFrame;
