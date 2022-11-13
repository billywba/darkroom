import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Spline from "@splinetool/react-spline";

function SplinePage() {
  function pressKey(key) {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: key }));
  }
  function gotoStep(step) {
    setPage(step);
    if (data[step].command) {
      console.log(data[step].command);
      pressKey(data[step].command);
    }
  }

  const [page, setPage] = useState(0);

  const data = [
    {
      step: "Start",
      text: "Click Next to begin",
      command: "z",
    },
    {
      step: "First Step",
      text: "Firstly in the darkroom the lights are turned off and the night vision goggles are equipped to be able to see the film and around the darkroom.",
      command: "a",
    },
    {
      step: "Second Step",
      text: "Film is then unrolled from the camera and installed into the lightproof drum to stop the film from being damaged from any light.",
      img: "jobo.png",
      command: "b",
    },
    {
      step: "Third Step",
      text: "The lightproof drum is then installed into the JOBO CPP3 processor.",
      command: "c",
    },
    {
      step: "Fourth Step",
      text: "The JOBO is used to hold the temperature of the C41 “processing chemical” at 38 degrees as well as a water bath at 38 degrees.\nThe light drum is ran through a set of processes in the JOBO including all of the chemicals which develops the film.",
      img: "c41.png",
    },
    {
      step: "Fifth Step",
      text: "The film is then removed from the light drum and inserted into the Marutt drying cabinet and held at 30 degrees for 15 minutes.",
      img: "marutt.png",
      command: "d",
    },
    {
      step: "Sixth Step",
      text: "Once the film is dried it is then cut into segments.",
      command: "e",
    },
    {
      step: "Seventh Step",
      text: "Once segmented, the film is put into an enlarger “De Vere 504 Enlarger” which can be seen as a reversed camera as it takes the film and prints it onto graphic paper.",
      img: "devere.png",
      command: "f",
    },
    {
      step: "Eighth Step",
      text: "The Enlarger shines light through the film for 1-10 seconds onto graphic paper where it is then printed.",
      command: "g",
    },
    {
      step: "Ninth Step",
      text: "Once the enlargement process has taken place, it is ran through the three chemicals which are developer(black), fixer(white) and stop(red).",
      command: "h",
    },
    {
      step: "Tenth Step",
      text: "The film  is then taken out the chemicals and put into a cold water rinse for 5-30 minutes.",
      command: "i",
    },
    {
      step: "Eleventh Step",
      text: "This is then archive ready, if black and white the film can last 400 years and if it is colourised it can last 200 years.",
      command: "j",
    },
  ];

  return (
    <div style={{}}>
      <Row>
        <Spline
          id="spline"
          scene="https://prod.spline.design/lQqNvehZUYUdCHgU/scene.splinecode"
          width={1600}
          height={1000}
        />
      </Row>

            <Row style={{paddingTop: '16px'}}>
                <Col xs={8}>
                    <h1>{data[page].step}</h1>
                    <p>{data[page].text}</p>
                </Col>
                <Col xs={4}>
                    <img src='bot.png' style={{height: '256px', width: '256px'}}/>
                </Col>
            </Row>

      <Row>
        <button
          onClick={() => gotoStep(page - 1)}
          disabled={page > 0 ? false : true}
        >
          Back
        </button>
        <button
          onClick={() => gotoStep(page + 1)}
          disabled={page < data.length - 1 ? false : true}
        >
          Next
        </button>
      </Row>
    </div>
  );
}

export default SplinePage;
