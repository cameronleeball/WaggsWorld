import React from 'react';
import { render } from 'react-dom';
import ReactRedirect from 'react-redirect';

var WaggsMap = React.createClass({
  render: function () {
    // Redirect to "www.driftt.com" if no child overrides this 
    return (
      <ReactRedirect location='/waggsmap/index.html'>
        <this.props.activeRouteHandler />
      </ReactRedirect>
    );
  }
});

module.exports = WaggsMap;