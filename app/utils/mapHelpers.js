// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var mapHelpers = {

  // **** NEW ROUTES ****//
  // This will return any dog friendly bars from our database
  getBars: function() {
    return axios.get("/api/bars")
      .then(function(results) {
        return results;
      });
  },
  //*********************//
};


// We export the helpers function
module.exports = mapHelpers;
