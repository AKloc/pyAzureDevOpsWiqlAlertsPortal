import React from "react";

function Alert() {
  const handleSubmit = (event) => {
    alert("Button clicked.");
  };

  const handleFieldChanged = (event) => {
    alert("Field changed");
  };

  return (
    <>
      <h1>Here's the Alerts page.</h1>
      <form onSubmit={(e) => handleSubmit()}>
        <div className="form-group">
          <label for="alertNameInput">
            Alert Name:
            <input
              type="text"
              id="alertNameInput"
              class="form-control"
              value={"d"}
              onChange={(e) => handleFieldChanged()}
            />
          </label>
        </div>
        <div className="form-group">
          <label for="queryIdInput">
            Query ID:
            <input
              type="text"
              id="queryIdInput"
              class="form-control"
              value={"d"}
              onChange={(e) => handleFieldChanged()}
            />
          </label>
        </div>
        <div className="form-group">
          <label for="queryUriInput">
            Query URI:
            <input
              type="text"
              id="queryUriInput"
              class="form-control"
              value={"d"}
              onChange={(e) => handleFieldChanged()}
            />
          </label>
        </div>
        <div className="form-group">
          <label for="apiTokenInput">
            API Token:
            <input
              type="text"
              id="apiTokenInput"
              class="form-control"
              value={"d"}
              onChange={(e) => handleFieldChanged()}
            />
          </label>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Alert;
