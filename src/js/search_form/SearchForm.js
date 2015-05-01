/** @jsx React.DOM */

var React = require('react');
var LocationButton = require('./LocationButton');

var SearchForm = React.createClass({
    keywordSearch: function(e) {
        e.preventDefault();
        React.findDOMNode(this.refs.spinIcon).classList.remove('hidden');
        var term = React.findDOMNode(this.refs.term).value.trim();
        this.props.onFetchStations({"term":term});
    },
    render: function () {
        if (this.props.hasLoaded) {
            React.findDOMNode(this.refs.spinIcon).classList.add('hidden');
        }
        return (
            <form className="searchForm" onSubmit={this.keywordSearch}>
                <input className="searchBox" type="text" placeholder="Street name or Landmark" ref="term"/>
                <div className="buttons">
                    <button className="icon-search searchButton" type="submit"/>
                    <LocationButton onFetchStations={this.props.onFetchStations} />
                </div>
                <i className="icon-spin5 animate-spin hidden" ref="spinIcon"/>
            </form>
        );
    }
});

module.exports = SearchForm;