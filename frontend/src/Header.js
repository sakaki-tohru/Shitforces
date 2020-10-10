import React from 'react';
import {Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";
/*
    TODO: It already appear at the top.
          If user doesn't log in, can login and sign in.
          else go user page.
          Left side, logo exist.
 */
export default class Header extends React.Component {
    render(){
        return(
            <Navbar bg="dark">
                <Navbar.Brand className="mr-auto">Brand text</Navbar.Brand>
                <Link to={"/signin"}>
                    <button
                        className="btn btn-primary"
                        type="submit">Signin</button>
                </Link>
                <Link to={"/login"}>
                    <button
                        className="btn btn-primary"
                        type="submit">Login</button>
                </Link>
            </Navbar>
        )
    }
}
