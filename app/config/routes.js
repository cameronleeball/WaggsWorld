// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Home = require("../components/Home");

var Search = require("../components/Search");
var Saved = require("../components/Saved");

var Services = require("../components/Services");
var DogMap = require("../components/DogMap");
var Events = require("../components/Events");
var Breeding = require("../components/Breeding");
var DogDate = require("../components/WaggDates");
var Registration = require("../components/Registration");
var Login = require("../components/Login");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />
      <Route path="Services" component={Services} />
      <Route path="DogMap" component={DogMap} />
      <Route path="Events" component={Events} />
      <Route path="Breeding" component={Breeding} />
      <Route path="DogDate" component={DogDate} />
      <Route path="Registration" component={Registration} />
      <Route path="Login" component={Login} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Home} />

    </Route>
  </Router>
);
