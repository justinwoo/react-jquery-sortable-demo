/** @jsx React.DOM */
var React = require('react');
var List = require('./sortable-list');
var Item = require('./item');

var App = module.exports = React.createClass({
  toggleList: function () {
    this.setState({
      showList: this.state.showList ? false : true
    });
  },

  getInitialState: function () {
    return {
      items: [],
      showList: true
    }
  },

  componentDidMount: function () {
    for (var i = 0, l = 5; i < l; i ++) {
      appendItem.call(this);
    }
    setInterval(appendItem.bind(this), 2000);
  },

  render: function () {
    var list = (
      <List>
        {this.state.items}
      </List>
    );

    return (
      <div>
        <h1>jquery sortable demo</h1>
        <button onClick={this.toggleList}>Toggle List</button>
        {this.state.showList ? list : null}
      </div>
    );
  }
});

function appendItem() {
  var items = this.state.items;
  if (counter > 10) {
    return false;
  }
  items.push(<Item key={Date.now()} counter={counter++}/>);
  this.setState({
    items: items
  });
}

var counter = 0;
