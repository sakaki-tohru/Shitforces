import React from 'react';
import {Navbar} from 'react-bootstrap'
import './index.css'
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
                <button
                    className="btn btn-primary"
                    type="submit">SignIn</button>
                <button
                    className="btn btn-primary"
                    type="submit">LogIn</button>
            </Navbar>
        )
    }
}
