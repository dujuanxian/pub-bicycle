/** @jsx React.DOM */

var React = require('react');
var SearchForm = require('./SearchForm');
var LocationButton = require('./LocationButton');
var BookmarkButton = require('./BookmarkButton');

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
            <section className="controlPanel">
                <SearchForm onFetchStations={this.props.onFetchStations} />
                <LocationButton onFetchStations={this.props.onFetchStations} />
                <BookmarkButton onFetchStations={this.props.onFetchStations} />
            </section>
        );
    }
});

module.exports = ControlPanel;