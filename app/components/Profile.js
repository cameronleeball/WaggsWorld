// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");


// Create the Search component
var Profile = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function () {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        
      </div>
    );
  }

});

// Export the module back to the route
module.exports = Profile;
