import React from "react";
import Header from "./common/Header";
import Homepage from "./common/Homepage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Homepage />
        </Col>
      </Row>
    </Container>
  );
}

// Part of ES6. Basically says "If someone does a import x from 'module',
//   set x to be whatever the default was set to."
export default App;
