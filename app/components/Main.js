// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function () {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container no-padding">
                  <div id="waggs-world-icon"></div>
                  <div className="navbar-brand text-uppercase">

                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button> <Link className="titleFont" to="/">WaggsWorld</Link></div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li><Link to="/dogmap">DogMap</Link></li>
                          <li><Link to="/dogdate">WaggDates</Link></li>
                          <li><Link to="/services">Services</Link></li>
                          <li><Link to="/events">Events</Link></li>
                          <li><Link to="/breeding">WaggMates</Link></li>
                          <li><Link to="/login">Login</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>

          {/* Here we will deploy the sub components Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="text-center copyright-font">&copy;2017 Team Fuji
            </p>
          </footer>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
