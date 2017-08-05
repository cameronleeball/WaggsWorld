// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Create the Search component
var Registration = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function () {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>New User Registration Component</h1>
        <form action="/api/users/registration" method="post">
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <label>
            First Name:
            <input type="text" name="personal.first" />
          </label>
          <label>
            Last Name:
            <input type="text" name="personal.last" />
          </label>
          <label>
            E-mail:
            <input type="email" name="contact.email" />
          </label>
          <label>
            Phone:
            <input type="phone" name="contact.phone" />
          </label>
          <label>
            Address Line 1:
            <input type="text" name="contact.address.line1" />
          </label>
          <label>
            Address Line 2:
            <input type="text" name="contact.address.line2" />
          </label>
          <label>
            City:
            <input type="text" name="contact.address.city" />
          </label>
          <label>
            State:
            <input type="text" name="contact.address.state" />
          </label>
          <label>
            Zip:
            <input type="text" name="contact.address.zip" />
          </label>
          <select name="Account Type">
            <option label="Select Account Type:"></option>
            <option value="standard">Standard</option>
            <option value="provider">Provider</option>
            <option value="business">Business</option>
          </select>
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Registration;
