var axios = require("axios");

axios.defaults.withCredentials = true;

var userHelpers = {
  getUser: function() {
    return axios.get("/session/get")
      .then(function(results) {
        return results;
      });
  },
  //*********************//
};

module.exports = userHelpers;