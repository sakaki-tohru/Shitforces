import React from 'react';
import ReactDOM from 'react-dom';
class Main extends React.Component {
    render() {
        return (
            <h>Hello World so cool react!!</h>
        )
    }
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);