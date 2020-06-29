import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlertEdit() {
  let params = useParams();

  // On the database, the alert object is nested - root and query parameters.
  // So, use a separate state for the root alerts item and the query properties
  // to make the "handleInputChange" method take care of everything.
  const [alertsItem, setAlertsItem] = useState({});
  const [itemQueryProperties, setItemQueryProperties] = useState({});
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
        setAlertsItem(response[0]);
        setItemQueryProperties(response[0].azure_devops_query);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    alert("Button clicked.");
  };

  // This one is key. "setter" is the state setter method for the state we want
  // to modify. Because of the way the input fields are setup, we know the target
  // name will be the name of the property we want to change, so use a spreader
  const handleInputChange = (setter, event) => {
    let propertyName = event.target.name;
    let propertyValue = event.target.value;

    debugger;

    setter((itemState) => ({
      ...itemState,
      [propertyName]: propertyValue,
    }));
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
              name="alertName"
              className="form-control"
              value={alertsItem.alert_name || ""}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="queryId">
            Query ID:
            <input
              type="text"
              id="queryId"
              name="query_id"
              className="form-control"
              value={!isLoading && itemQueryProperties.query_id}
              onChange={(event) =>
                handleInputChange(setItemQueryProperties, event)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="queryUri">
            Query URI:
            <input
              type="text"
              id="queryUri"
              name="query_uri"
              className="form-control"
              value={!isLoading && itemQueryProperties.query_uri}
              onChange={(event) =>
                handleInputChange(setItemQueryProperties, event)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="apiToken">
            API Token:
            <input
              type="text"
              id="apiToken"
              name="api_token"
              className="form-control"
              value={!isLoading && itemQueryProperties.api_token}
              onChange={(event) =>
                handleInputChange(setItemQueryProperties, event)
              }
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
