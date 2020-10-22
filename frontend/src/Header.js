import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './index.css';
/*
    TODO: It already appear at the top.
          If user doesn't log in, can login and sign in.
          else go user page.
          Left side, logo exist.
 */
export default class Header extends React.Component {
  render() {
    return(
      <Navbar bg="dark" variant={"dark"}>
        <Nav className={"mr-auto"}>
          <Link to={"/"}>
            <Navbar.Brand>Shitforces</Navbar.Brand>
          </Link>
        </Nav>
        <Link to={"/signin"}>
          <Navbar.Brand variant={"primary"}>Signin</Navbar.Brand>
        </Link>
        <Link to={"login"}>
          <Navbar.Brand variant={"primary"}>Login</Navbar.Brand>
        </Link>
      </Navbar>
    );
  }
}
