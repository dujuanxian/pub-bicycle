/** @jsx React.DOM */

var React = require('react');
var SearchForm = require('./SearchForm');

var ControlPanel = React.createClass({
    locationSearch: function(e) {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.props.onFetchStations({"lat": position.coords.latitude, "lng": position.coords.longitude});
        }.bind(this));
    },
    idsSearch: function(e) {
        this.props.onFetchStations({"ids": localStorage["bookmarks"]});
    },
    render: function () {
        return (
            <SearchForm onFetchStations={this.props.onFetchStations} />
        );
    }
});

module.exports = ControlPanel;