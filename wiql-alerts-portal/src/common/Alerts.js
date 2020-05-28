import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

function Alerts() {
  const [alertsItems, setAlertsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=1`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setAlertsItems(response.items);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h1>Here are all of the alert...</h1>
      {isLoading && <p>Loading...</p>}
      {alertsItems.map((c, index) => (
        <div key={index}>
          {c.author.login}: {c.commit.message}
        </div>
      ))}
    </div>
  );
}

export default Alerts;
