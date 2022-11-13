import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Spline from "@splinetool/react-spline";

function SplinePage() {
    return (
        <div style={{ }}>
            <Row>
                <Spline scene="https://prod.spline.design/lQqNvehZUYUdCHgU/scene.splinecode" width={900} height={450}/>
            </Row>

            <Row style={{paddingTop: '16px'}}>
                <Col xs={6}>
                    <h3>Step</h3>
                </Col>
            </Row>
        </div>
    );
}

export default SplinePage;
