import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Row>
        <Col className="lead">
          Use your Wiql queries in Azure DevOps to send messages in Slack! Built
          using:
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>Python</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>AWS Lambdas</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default Home;
