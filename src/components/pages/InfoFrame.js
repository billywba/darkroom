import { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { useParams } from 'react-router-dom';

function InfoFrame() {

  const [page, setPage] = useState(0);

  const data = [
    {
      "text": "Firstly in the darkroom the lights are turned off and the night vision goggles are equipped to be able to see the film and around the darkroom."
    },
    {
      "text": "Film is then unrolled from the camera and installed into the lightproof drum to stop the film from being damaged from any light."
    },
    {
      "text": "The lightproof drum is then installed into the JOBO CPP3 processor."
    },
    {
      "text": "The JOBO is used to hold the temperature of the C41 “processing chemical” at 38 degrees as well as a water bath at 38 degrees."
    },
    {
      "text": "The light drum is ran through a set of processes in the JOBO including all of the chemicals which develops the film."
    },
    {
      "text": "The film is then removed from the light drum and inserted into the Marutt drying cabinet and held at 30 degrees for 15 minutes."
    },
    {
      "text": "Once the film is dried it is then put into an enlarger “De Vere 504 Enlarger” which can be seen as a reversed camera as it takes the film and prints it onto graphic paper."
    },
    {
      "text": "The Enlarger shines light through the film for 1-10 seconds onto graphic paper where it is then printed."
    },
    {
      "text": "Once the enlargement process has taken place, it is ran through the three chemicals which are developer(black), fixer(white) and stop(red)."
    },
    {
      "text": "The film  is then taken out the chemicals and put into a cold water rinse for 5-30 minutes."
    },
    {
      "text": "This is then archive ready, if black and white the film can last 400 years and if it is colourised it can last 200 years."
    }
  ];

  return (
    <>
      <h2>First Step</h2>

      <Row>
        <Col xs={8} style={{height: '500px'}}>
          <p>
            {data[page].text}
          </p>
        </Col>
        <Col xs={4}><p>IMG HERE</p></Col>
      </Row>

      <Row>
        <button onClick={() => setPage(page - 1)}>Back</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </Row>
    </>
  );
}

export default InfoFrame;
