// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");


// Create the Search component
var Login = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function () {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>User Login</h1>
        <form action="/api/users/login" method="post">
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Login" />
        </form>

        <Link to="/registration">Sign up Here!</Link>
      </div>
    );
  }

});

// Export the module back to the route
module.exports = Login;
