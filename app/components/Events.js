// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/eventHelper");

// Create the Search component
var DogDate = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="main-container">
        <div className="row">
            <section id="blog" className="section">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="text-uppercase">Dog Date</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div id="my_news" className="mrg_top80 row-eq-height">
                        <div className="row">


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
module.exports = DogDate;
