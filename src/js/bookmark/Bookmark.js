/** @jsx React.DOM */

var React = require('react');

var Bookmark = React.createClass({
    idsSearch: function(e) {
        this.props.onFetchStations({"ids": localStorage["bookmarks"]});
    },
    render: function () {
        return (
            <header>
                <h1>Pub Bycicle</h1>
                <i className="icon-star-1 bookmark" onClick={this.idsSearch}/>
            </header>
        );
    }
});

module.exports = Bookmark;