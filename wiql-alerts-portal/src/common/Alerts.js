import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

function Alerts() {
  const [alertsItems, setAlertsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://22mwpclc8f.execute-api.us-east-1.amazonaws.com/Alerts`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setAlertsItems(response);
        debugger;
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSubmit() {
    alert("You submitted.");
  }

  return (
    <div>
      <h1>Here are all of the alerts...</h1>
      {isLoading && <p>Loading...</p>}
      {alertsItems.map((c, index) => (
        <div key={index}>
          {c.owner}: {c.alert_name}
        </div>
      ))}
    </div>
  );
}

export default Alerts;
