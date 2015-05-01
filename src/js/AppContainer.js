/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var ControlPanel = require('./control_panel/ControlPanel');
var StationList = require('./station_list/StationList');

var AppContainer = React.createClass({
    fetchStations: function(query) {
        $.ajax({
            url: 'https://xian-pub-bicycle.herokuapp.com/api?query=' + encodeURI(JSON.stringify(query)),
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    render: function () {
        return (
            <div className="appContainer">
                <ControlPanel onFetchStations={this.fetchStations} />
                <StationList data={this.state.data}/>
            </div>
        );
    }
});

module.exports = AppContainer;