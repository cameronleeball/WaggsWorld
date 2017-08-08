// Include React as a dependency
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router";
// Include the Query and Results components
// var Query = require("./search/Query");
// var Results = require("./search/Results");


// Create the Search component
import userHelpers from "../utils/userHelper.js";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      activeUser: ""
    };
    this.getSessionUser = this.getSessionUser.bind(this);
  }

  componentDidMount() {
    this.getSessionUser();

  }

  getSessionUser() {
    userHelpers.getSessionUser().then((res) => {
      this.setState({ activeUser: res.data });
      console.log(this.state);
    });
  };



  render() {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <div className="row">
          <section id="features" className="section">
            <div className="container">
              <div className="title text-center">
                <h2 className="text-uppercase">My Profile</h2>
                <p>Welcome {/*this.state.activeUser*/} !</p>
                <p>View/Edit your Account Information!</p>
              </div>
              <div id="my_feature" className="mrg_top80">
                <div className="row">

                  <div className="col-sm-6 col-md-4">
                    <div className="single_feature">
                      <ul className="list-unstyled list-inline">
                        <li><i className="fa fa-mobile"></i></li>
                        <li>
                          <h3 className="text-capitalize">Account Type</h3></li> {/* Roles*/}
                      </ul>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4">
                    <div className="single_feature">
                      <ul className="list-unstyled list-inline">
                        <li><i className="fa fa-laptop"></i></li>
                        <li>
                          <h3 className="text-capitalize">My Info</h3></li> {/*personal*/}
                      </ul>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4">
                    <div className="single_feature">
                      <ul className="list-unstyled list-inline">
                        <li><i className="fa fa-code"></i></li>
                        <li>
                          <h3 className="text-capitalize">Contact/Addresses</h3></li> {/*contact*/}
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
}

// Export the module back to the route
module.exports = Profile;
