var axios = require("axios");

axios.defaults.withCredentials = true;

var userHelpers = {
  getSessionUser: function() {
    return axios.get("/api/session/users")
      .then(function(results) {
        return results;
      });
  },
  //*********************//
};

module.exports = userHelpers;