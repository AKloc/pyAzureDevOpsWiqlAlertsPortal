import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Jumbotron className="text-center">
      <h1>Wiql Alerts Portal</h1>
      <p className="lead">
        Send alerts generated from Azure DevOps' Wiql to Slack!
      </p>
      <Row>
        <Col>View Alerts</Col>
        <Col>Create New Alert</Col>
        <Col>About</Col>
      </Row>
    </Jumbotron>
  );
}

export default Header;
