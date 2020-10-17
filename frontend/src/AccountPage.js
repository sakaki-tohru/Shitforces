import React from "react";
import HttpRequest from "./share-func/HttpRequest";
import PropTypes from 'prop-types';


// URL: /accounts/$accountName

function AccountInformationBody(props, accountName) {
  return (
    <div>
      <p>{accountName}</p>
      <p>{props.rating}</p>
    </div>
  );
}
AccountInformationBody.propTypes = {
  rating: PropTypes.number
};
export default class AccountPage extends React.component {
  constructor(props) {
    super(props);
    const splitUrl = window.location.href.split("/");
    const accountName = splitUrl[splitUrl.length - 1];
    this.getAccountInformation = this.getAccountInformation.bind(this);
    this.state = {
      accountName: accountName
    };
  }
  async getAccountInformation() {
    const fetchTo = window.location.protocol + "db-access/get-by-name/" + this.state.accountName;
    const accountInfo =  await HttpRequest(fetchTo, "", "GET")
      .then(value => {
        return value;
      })
      .catch(e => {
        alert(e);
      });
    return AccountInformationBody(accountInfo, this.state.accountName);
  }
  render() {
    return (
      <div>
        {this.getAccountInformation()}
      </div>
    );
  }
}