/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
require('jquery-ui/sortable');

var SortableList = module.exports = React.createClass({
  componentDidMount: function () {
    var node = this.refs.myList.getDOMNode();
    $(node).sortable();
  },

  render: function () {
    var children = this.props.children.map(function (child) {
      return <li key={child.props.key}>{child}</li>;
    });
    return (
      <ul ref="myList">
        {children}
      </ul>
    );
  },

  componentWillUnmount: function () {
    var node = this.refs.myList.getDOMNode();
    $(node).sortable('destroy');
  }
});
