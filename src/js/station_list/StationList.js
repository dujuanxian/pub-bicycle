/** @jsx React.DOM */

var React = require('react');
var Station = require('./Station');

var StationList = React.createClass({
    render: function () {
        var stationList = this.props.data.map(function (station) {
            return (
                <Station info={station} />
            );
        });
        return (
            <section className="stationList">
                {stationList}
            </section>
        );
    }
});

module.exports = StationList;