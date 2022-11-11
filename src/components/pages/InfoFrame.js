import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useParams } from 'react-router-dom';

function InfoFrame() {

  const id = useParams();
  const data = require('./../../data/info.json');

  console.log(data.info[0].text);
  console.log(id)

  return (
    <>
      <h2>First Step</h2>

      <Row>
        <Col xs={6}>
          <p>
            {/* {data.info[id - 1].text} */}
            <p>{data.info[id].text}</p>
          </p>
        </Col>
        <Col xs={6}><p>IMG HERE</p></Col>
      </Row>
    </>
  );
}

export default InfoFrame;
