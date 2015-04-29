/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var ControlPanel = React.createClass({
    handleSearch: function(e) {
        e.preventDefault();
        var term = React.findDOMNode(this.refs.term).value.trim();
        if (_.isEmpty(term)) {
            this.locationSearch();
        }
        this.props.onFetchStations({"term":term});
    },
    locationSearch: function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.props.onFetchStations({"lat": position.coords.latitude, "lng": position.coords.longitude});
        }.bind(this));
    },
    render: function () {
        return (
            <section className="controlPanel">
                <form className="searchForm" onSubmit={this.handleSearch}>
                    <input className="searchBox icon-location" type="text" placeholder="Current Location" ref="term"/>
                    <button className="icon-search searchButton" type="submit"/>
                </form>
            </section>
        );
    }
});

module.exports = ControlPanel;