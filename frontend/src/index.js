import React from 'react';
import Header from "./Header";
import ReactDOM from 'react-dom';
import MainPage from "./MainPage";
/*
    TODO: index.js is root of all page.
          This page is switcher and puts header.
 */
class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainPage />
            </div>
        )
    }
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);