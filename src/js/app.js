/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var AppContainer = React.createClass({
    render: function () {
        return (
            <div className="appContainer">app</div>
        );
    }
});

$(document).ready(function () {
    React.render(
        <AppContainer />,
        document.getElementById('content')
    )
});
