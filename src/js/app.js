/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var AppContainer = require('./AppContainer');

$(document).ready(function () {
    if(localStorage["bookmarks"] === undefined) {
        localStorage["bookmarks"] = JSON.stringify([]);
    }

    React.render(
        <AppContainer />,
        document.getElementById('content')
    );
});
