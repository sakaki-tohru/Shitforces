import React from "react";
import {Form, Button} from "react-bootstrap";
// URL: /sighin
const MAX_LENGTH = 20;
const MIN_LENGTH = 4;
const USABLE_PATTERN = /^[a-zA-Z_-]+$/g;
const TEXT_TERM = "アルファベットもしくは-_から成る、4字以上20字以下の文字列を入力して下さい。";

function isValidUserNameOrPassWord(text) {
  const matchRes = text.match(USABLE_PATTERN);
  const strLen = text.length;
  let res = true;
  if (matchRes === null) {
    res = false;
  }
  if (strLen < MIN_LENGTH || strLen > MAX_LENGTH) {
    res = false;
  }
  return res;
}
export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.accountNameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.submitNewAccountCreate = this.submitNewAccountCreate.bind(this);
  }
  submitNewAccountCreate() {
    const accountName = this.accountNameInput.current.value;
    const password = this.passwordInput.current.value;
    if (!isValidUserNameOrPassWord(accountName) || !isValidUserNameOrPassWord(password)) {
      alert(TEXT_TERM);
    } else {
      const fetchTo = window.location.pathname + "/new-account";
      const jsonBody = JSON.stringify({
        "name": accountName,
        "password": password,
      });
      fetch(fetchTo, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonBody
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("サーバー接続の際にエラーが発生しました");
          }
          return response.text();
        })
        .then (responseText => {
          const resObject = JSON.parse(responseText);
          console.log(resObject);
        })
        .catch(error => {
          alert(error);
        });
    }
  }
  render() {
    return (
      <div>
        <p>{TEXT_TERM}</p>
        <Form>
          <Form.Group controlId={"formEmail"}>
            <Form.Label>ユーザーID</Form.Label>
            <Form.Control type={"email"} ref={this.accountNameInput}/>
          </Form.Group>
          <Form.Group controlId={"formPassword"}>
            <Form.Label>パスワード</Form.Label>
            <Form.Control type={"password"} ref={this.passwordInput}/>
          </Form.Group>
        </Form>
        <Button variant={"primary"}
          onClick={this.submitNewAccountCreate}>
          送信
        </Button>
      </div>
    );
  }
}