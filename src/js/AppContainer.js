/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var SearchForm = require('./search_form/SearchForm');
var StationList = require('./station_list/StationList');
var Bookmark = require('./bookmark/Bookmark');

var AppContainer = React.createClass({
    fetchStations: function(query) {
        $.ajax({
            url: 'https://xian-pub-bicycle.herokuapp.com/api?query=' + encodeURI(JSON.stringify(query)),
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data,
                    hasLoaded: true
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: [], hasLoaded: false};
    },
    render: function () {
        return (
            <div className="appContainer">
                <Bookmark onFetchStations={this.props.onFetchStations} />
                <div className="searchContainer">
                    <SearchForm onFetchStations={this.fetchStations} hasLoaded={this.state.hasLoaded}/>
                    <StationList data={this.state.data}/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;