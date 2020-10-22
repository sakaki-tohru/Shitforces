import React from "react";
import {Form, Button} from "react-bootstrap";
import HttpRequest from "./share-func/HttpRequest";
// URL: /sighin
const MAX_LENGTH = 20;
const MIN_LENGTH = 4;
const USABLE_PATTERN = /^[a-zA-Z_-]+$/g;
const TEXT_TERM = "アルファベットもしくは-_から成る、4字以上20字以下の文字列を入力して下さい。";

function isValidAccountNameOrPassWord(text) {
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
  async submitNewAccountCreate() {
    const accountName = this.accountNameInput.current.value;
    const password = this.passwordInput.current.value;
    if (!isValidAccountNameOrPassWord(accountName) || !isValidAccountNameOrPassWord(password)) {
      alert(TEXT_TERM);
    } else {
      const fetchTo = "/db-access/new-account";
      console.log(fetchTo);
      const jsonBody = JSON.stringify({
        "name": accountName,
        "password": password,
      });
      const response = await HttpRequest(fetchTo, jsonBody, "POST");
      if (response.result) {
        alert("アカウントの作成に成功しました");
      } else {
        alert("アカウントの作成に失敗しました 名前が重複しています");
      }
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