// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");


// Create the Search component
var Services = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>Services Component</h1>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Services;
