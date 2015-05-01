/** @jsx React.DOM */

var React = require('react');
var LocationButton = require('./LocationButton');

var SearchForm = React.createClass({
    keywordSearch: function(e) {
        e.preventDefault();
        var term = React.findDOMNode(this.refs.term).value.trim();
        this.props.onFetchStations({"term":term});
    },
    render: function () {
        return (
            <form className="searchForm" onSubmit={this.keywordSearch}>
                <input className="searchBox" type="text" placeholder="Street name or Landmark" ref="term"/>
                <div className="buttons">
                    <button className="icon-search searchButton" type="submit"/>
                    <LocationButton onFetchStations={this.props.onFetchStations} />
                </div>
            </form>
        );
    }
});

module.exports = SearchForm;