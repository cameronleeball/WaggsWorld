var user = require("../models/user");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
module.exports = {
  // This method handles retrieving user data from the db

  find: function (req, res) {
    var query = req.params.id;
    User.find({ username: query })
      .exec(function (err, doc) {
        res.json(doc);
      });
  },


  register: function (req, res) {
    newUser = new User(req.body);
    User.register(newUser, req.body.password, function (err, newUser) {
      if (err) {
        console.log('An error occured', err);
        res.redirect('/register');
      } else {
        console.log('User ' + newUser.username + ' created succesfully');
        req.login(newUser, function (err) {
          if (!err) {
            res.redirect('/');
          }
          else {
            console.log(err);
          }
        })
      }
    });
  },

  login: function (req, res) {
    var query = {
      'username': req.user.username
    };
    var update = {
      last: Date.now(),
      loggedIn: true
    };
    var options = {
      new: true
    };
    User.findOneAndUpdate(query, update, options, function (err, user) {
      if (err) {
        console.log(err);
      }
      console.log('User ' + req.body.username + ' authenticated succesfully');

      res.redirect('/');
    });
  },

  logout: function(req, res) {

  }




};



// This method handles creating new quotes
// create: function (req, res) {
//   Quote.create(req.body).then(function (doc) {
//     res.json(doc);
//   }).catch(function (err) {
//     res.json(err);
//   });
// },
// // This method handles updating quotes
// update: function (req, res) {
//   Quote.update({
//     _id: req.params.id
//   },
//     req.body
//   ).then(function (doc) {
//     res.json(doc);
//   }).catch(function (err) {
//     res.json(err);
//   });
// },
// // This method handles deleting quotes
// destroy: function (req, res) {
//   Quote.remove({
//     _id: req.params.id
//   }).then(function (doc) {
//     res.json(doc);
//   }).catch(function (err) {
//     res.json(err);
//   });
// // }
//   index: function (req, res) {
//     var query;
//     if (req.query) {
//       query = req.query;
//     }
//     else {
//       query = req.params.id ? { _id: req.params.id } : {};
//     }
//     Quote.find(query)
//       .then(function (doc) {
//         res.json(doc);
//       }).catch(function (err) {
//         res.json(err);
//       });
//   }

// };
