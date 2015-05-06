/** @jsx React.DOM */

var React = require('react');

var LocationButton = React.createClass({
    locationSearch: function(e) {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(function(position) {
            this.props.onFetchStations({"lat": position.coords.latitude, "lng": position.coords.longitude});
        }.bind(this));
    },
    render: function () {
        return (
            <button className="icon-location locationButton" onClick={this.locationSearch}/>
        );
    }
});

module.exports = LocationButton;
