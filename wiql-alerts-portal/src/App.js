import React from "react";
import Header from "./common/Header";
import Home from "./common/Home";
import About from "./common/About";
import Alert from "./common/Alert";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <Router>
            <div>
              <nav class="navbar navbar-light bg-light">
                <ul>
                  <Link to="/">Home</Link>
                </ul>
                <ul>
                  <Link to="/alert">Alerts</Link>
                </ul>
                <ul>
                  <Link to="/about">About</Link>
                </ul>
              </nav>
            </div>
            <Switch>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/alert" exact>
                <Alert />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

// Part of ES6. Basically says "If someone does a import x from 'module',
//   set x to be whatever the default was set to."
export default App;
