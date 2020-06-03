import React from "react";
import Header from "./common/Header";
import Home from "./common/Home";
import About from "./common/About";
import AlertEdit from "./common/AlertEdit";
import Alerts from "./common/Alerts";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
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
              <nav className="navbar navbar-light bg-light">
                <ul>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </ul>
                <ul>
                  <NavLink exact to="/alerts" activeClassName="active">
                    View Alerts
                  </NavLink>
                </ul>
                <ul>
                  <NavLink exact to="/alert" activeClassName="active">
                    Create New Alert
                  </NavLink>
                </ul>
                <ul>
                  <NavLink exact to="/about" activeClassName="active">
                    About
                  </NavLink>
                </ul>
              </nav>
            </div>
            <Switch>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/alerts" exact>
                <Alerts />
              </Route>
              <Route path="/alert" exact>
                <AlertEdit />
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
