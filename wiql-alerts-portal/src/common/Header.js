import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <Jumbotron className="text-center">
      <h1>Wiql Alerts Portal</h1>
      <p className="lead">
        Send alerts generated from Azure DevOps' Wiql to Slack!
      </p>
    </Jumbotron>
  );
}

export default Header;
