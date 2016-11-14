var React = require('react');

var DashboardContainer = React.createClass({
  getInitialState: function() {
    return {
      initialLoad: true
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getChildContext: function() {
    // Child Context Passes props to all children rather than passing down the chain.
    // At this point only widget container is catching the context and using it to switch WidgetContainer children
    return {
      routePath: this.props.route.path
    }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div>hello</div>
    )
  }
});

DashboardContainer.childContextTypes = {
  routePath: React.PropTypes.string
};

module.exports = DashboardContainer;
