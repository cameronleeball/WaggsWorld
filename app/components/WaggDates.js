// Include React as a dependency
var React = require("react");

// Create the Search component
var WaggDates = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>WaggDates</h1>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = WaggDates;
