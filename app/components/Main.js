var React = require('react');
var Navigation = require('../containers/NavContainer');

var Main = React.createClass({
  componentDidMount: function() {

  },
  componentDidUpdate: function() {

  },
  render: function() {
    return (
      <div className="main-container">
        <Navigation path={this.props.route.path} />
        {/* {React.cloneElement(this.props.children, { regions: this.state.myRegions })} */}
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
