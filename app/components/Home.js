// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Create the Search component
var Home = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="row">
        <section id="header">
         	<div id="header-info">
            	<h2 className="text-uppercase">WaggsWorld</h2>
             </div>
            </section>
        </div>
    );
  }
});

// Export the module back to the route
module.exports = Home;
