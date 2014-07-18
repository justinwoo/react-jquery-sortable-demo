/** @jsx React.DOM */
var React = require('react');

var Item = module.exports = React.createClass({
  getInitialState: function () {
    return {
      counter: this.props.counter || 0,
      name: 'child-' + this.props.counter || 0
    }
  },

  componentDidMount: function () {
    this.countInterval = setInterval(this.countUp, 1000);
  },

  countUp: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  render: function () {
    return (
      <span>{this.state.name} : {this.state.counter}</span>
    );
  },

  componentWillUnmount: function () {
    clearInterval(this.countInterval);
  }
});
