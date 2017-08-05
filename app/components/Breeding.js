// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Breeding = React.createClass({

  render: function() {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
	        <div className="row">
	            <section id="features" className="section">
	                <div className="container">
	                    <div className="title text-center">
	                        <h2 className="text-uppercase">WaggMates</h2>
	                        <p>Looking to pass down the genetics? Scroll down to see Waggs available in your area!</p>
	                    </div>
	                    <div id="my_feature" className="mrg_top80">
	                        <div className="row">

	                            <div className="col-sm-6 col-md-4">
	                                <div className="single_feature">
	                                    <ul className="list-unstyled list-inline">
	                                        <li><i className="fa fa-mobile"></i></li>
	                                        <li>
	                                            <h3 className="text-capitalize">UX Design</h3></li>
	                                    </ul>
	                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
	                                </div>
	                            </div>

	                            <div className="col-sm-6 col-md-4">
	                                <div className="single_feature">
	                                    <ul className="list-unstyled list-inline">
	                                        <li><i className="fa fa-laptop"></i></li>
	                                        <li>
	                                            <h3 className="text-capitalize">UI design</h3></li>
	                                    </ul>
	                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
	                                </div>
	                            </div>

	                            <div className="col-sm-6 col-md-4">
	                                <div className="single_feature">
	                                    <ul className="list-unstyled list-inline">
	                                        <li><i className="fa fa-code"></i></li>
	                                        <li>
	                                            <h3 className="text-capitalize">Clean Code</h3></li>
	                                    </ul>
	                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
	                                </div>
	                            </div>

	                            <div className="col-sm-6 col-md-4">
	                                <div className="single_feature">
	                                    <ul className="list-unstyled list-inline">
	                                        <li><i className="fa fa-windows"></i></li>
	                                        <li>
	                                            <h3 className="text-capitalize">Win App</h3></li>
	                                    </ul>
	                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
	                                </div>
	                            </div>

	                            <div className="col-sm-6 col-md-4">
	                                <div className="single_feature">
	                                    <ul className="list-unstyled list-inline">
	                                        <li><i className="fa fa-android"></i></li>
	                                        <li>
	                                            <h3 className="text-capitalize">Android App</h3></li>
	                                    </ul>
	                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
	                                </div>
	                            </div>

	                            <div className="col-sm-6 col-md-4">
	                                <div className="single_feature">
	                                    <ul className="list-unstyled list-inline">
	                                        <li><i className="fa fa-apple"></i></li>
	                                        <li>
	                                            <h3 className="text-capitalize">iOS App</h3></li>
	                                    </ul>
	                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </section>
        	</div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Breeding;
