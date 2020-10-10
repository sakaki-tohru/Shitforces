import React from "react";

// URL: /sighin
export default class SignInPage extends React.Component {
    render() {
        return (
            <div>
                <input type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>
        );
    }
}