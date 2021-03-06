import React from 'react';
import Header from "./Header";
import ReactDOM from 'react-dom';
import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AccountPage from "./AccountPage";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path={"/"} component={MainPage} />
            <Route exact path={"/login"} component={LoginPage} />
            <Route exact path={"/signin"} component={SignInPage} />
            <Route exact path='/account/:id' component={AccountPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);