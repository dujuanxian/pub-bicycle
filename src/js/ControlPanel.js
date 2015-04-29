/** @jsx React.DOM */

var React = require('react');

var ControlPanel = React.createClass({
    handleSearch: function(e) {
        e.preventDefault();
        var term = React.findDOMNode(this.refs.term).value.trim();
        this.props.onFetchStations({"term":term});
    },
    locationSearch: function(e) {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.props.onFetchStations({"lat": position.coords.latitude, "lng": position.coords.longitude});
        }.bind(this));
    },
    render: function () {
        return (
            <section className="controlPanel">
                <form className="searchForm" onSubmit={this.handleSearch}>
                    <input className="searchBox" type="text" placeholder="Street name or Landmark" ref="term"/>
                    <button className="icon-search searchButton" type="submit"/>
                </form>
                <button className="icon-location locationButton" onClick={this.locationSearch}/>
            </section>
        );
    }
});

module.exports = ControlPanel;