import React, { useState } from "react";

function AlertEdit() {
  const [alertName, setAlertName] = useState();
  const [queryId, setQueryId] = useState();
  const [queryUri, setQueryUri] = useState();
  const [apiToken, setApiToken] = useState();

  const handleSubmit = (event) => {
    alert("Button clicked.");
  };

  return (
    <>
      <h1>Here's the Alerts page.</h1>
      <form onSubmit={(e) => handleSubmit()}>
        <div className="form-group">
          <label for="alertName">
            Alert Name:
            <input
              type="text"
              id="alertName"
              class="form-control"
              value={alertName}
              onChange={(e) => setAlertName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label for="queryId">
            Query ID:
            <input
              type="text"
              id="queryId"
              class="form-control"
              value={queryId}
              onChange={(e) => setQueryId(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label for="queryUri">
            Query URI:
            <input
              type="text"
              id="queryUri"
              class="form-control"
              value={queryUri}
              onChange={(e) => setQueryUri(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label for="apiToken">
            API Token:
            <input
              type="text"
              id="apiToken"
              class="form-control"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" class="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AlertEdit;
