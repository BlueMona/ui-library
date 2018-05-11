import React from 'react';
import ReactDOM from 'react-dom';
export class Index extends React.Component {
    render() {
        return (React.createElement("div", null, "TESTING"));
    }
}
ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));
