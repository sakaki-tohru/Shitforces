import React from "react";

// URL: /login
export default class LoginPage extends React.Component {
  render() {
    return(
      <div>
        <input type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"/>
      </div>
    );
  }
}