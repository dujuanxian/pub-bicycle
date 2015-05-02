/** @jsx React.DOM */

var React = require('react');

var Bookmark = React.createClass({
    idsSearch: function(e) {
        this.props.onFetchStations({"ids": localStorage["bookmarks"]});
    },
    render: function () {
        if(localStorage["bookmarks"] === undefined) {
            localStorage["bookmarks"] = JSON.stringify([]);
        }

        return (
            <header>
                <h1>Pub Bycicle</h1>
                <i className="icon-star bookmark" onClick={this.idsSearch}/>
            </header>
        );
    }
});

module.exports = Bookmark;