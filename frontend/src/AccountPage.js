import React from "react";
import PropTypes from 'prop-types';
import HttpGetOrHeadRequest from "./share-func/HttpGetOrHeadRequest";


// URL: /accounts/$accountName

function AccountInformationBody(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.rating}</p>
    </div>
  );
}
function AccountNotFound() {
  return(
    <div>
      <p>アカウントが見つかりませんでした</p>
    </div>
  );
}
AccountInformationBody.propTypes = {
  rating: PropTypes.number,
  name: PropTypes.string
};

export default class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.getAccountInformation = this.getAccountInformation.bind(this);
    this.state = {
      accountInfo: <div/>
    };
    this.getAccountInformation();
  }
  getAccountInformation() {
    const splitUrl = window.location.href.split("/");
    const accountName = splitUrl[splitUrl.length - 1];
    const fetchTo = "/db-access/get-by-name/"  + accountName;
    HttpGetOrHeadRequest(fetchTo, "GET")
      .then(value => {
        if (value.result === false) {
          throw Error(value.statement);
        }
        const account = JSON.parse(value.statement);
        console.log(account);
        this.setState({
          accountInfo: <AccountInformationBody name={account.name} rating={account.rating}/>
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({
          accountInfo: <AccountNotFound />
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.accountInfo}
      </div>
    );
  }
}
