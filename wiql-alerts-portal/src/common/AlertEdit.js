import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlertEdit() {
  let params = useParams();
  const [alertsItems, setAlertsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://2nik86g1lf.execute-api.us-east-1.amazonaws.com/prod/alerts/` +
        params.alertName,
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
      .catch((error) => console.log(error));
  }, []);

  const [alertName, setAlertName] = useState();
  const [queryId, setQueryId] = useState();
  const [queryUri, setQueryUri] = useState();
  const [apiToken, setApiToken] = useState();

  const handleSubmit = (event) => {
    alert("Button clicked.");
  };

  return (
    <>
      <h1>Here's the Alert Edit page for alert {params.alertName}</h1>
      <form onSubmit={(e) => handleSubmit()}>
        <div className="form-group">
          <label htmlFor="alertName">
            Alert Name:
            <input
              type="text"
              id="alertName"
              className="form-control"
              value={alertName}
              onChange={(e) => setAlertName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="queryId">
            Query ID:
            <input
              type="text"
              id="queryId"
              className="form-control"
              value={queryId}
              onChange={(e) => setQueryId(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="queryUri">
            Query URI:
            <input
              type="text"
              id="queryUri"
              className="form-control"
              value={queryUri}
              onChange={(e) => setQueryUri(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="apiToken">
            API Token:
            <input
              type="text"
              id="apiToken"
              className="form-control"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AlertEdit;
