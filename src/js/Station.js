/** @jsx React.DOM */

var React = require('react');

var Station = React.createClass({
    render: function () {
        var info = this.props.info;
        var title = info.sitename + " (" + (parseInt(info.locknum) - parseInt(info.emptynum)) + "/" + parseInt(info.locknum) + ")";
        if (info.distance !== undefined) {
            title = title + " - " + Math.round(info.distance) + "m";
        }
        return (
            <article className="station">
                <section className="info">
                    <h1>{title}</h1>
                    <p>{this.props.info.location}</p>
                </section>
            </article>
        );
    }
});

module.exports = Station;
