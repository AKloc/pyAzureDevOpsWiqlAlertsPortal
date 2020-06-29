import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Alerts() {
  const [alertsItems, setAlertsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://2nik86g1lf.execute-api.us-east-1.amazonaws.com/prod/alerts/`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setAlertsItems(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR!!!");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Here are all of the alerts...</h1>
      {isLoading && <p>Loading...</p>}
      {alertsItems.map((c, index) => (
        <div key={index}>
          {c.owner}:{" "}
          <NavLink to={"/alert/" + c.alert_name}>{c.alert_name}</NavLink>
        </div>
      ))}
    </div>
  );
}

export default Alerts;
