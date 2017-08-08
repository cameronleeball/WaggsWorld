// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Require Schemas
var User = require("./server/models/user");
var Bars = require("./server/models/bars");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener
app.use(express.static("./public"));

var dbUrl = "mongodb://webuser:webuser@ds129023.mlab.com:29023/waggsworld"
// MongoDB Configuration configuration
mongoose.connect(dbUrl);

var db = mongoose.connection;

db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function () {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

var hour = 3600000;
var store = new MongoDBStore(
  {
    uri: dbUrl,
    collection: 'userSessions'
  }
);

store.on('error', function (error) {
  assert.ifError(error);
  assert.ok(false);
});



// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(session({
  secret: 'cats rule dogs drool',
  cookie: {
    secure: true,
    expires: new Date(Date.now() + hour)
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser(function (user, done) {
  var sessionUser = {
    _id: user._id,
    name: user.personal.first,
    email: user.contact.email,
    roles: user.roles
  }
  done(null, sessionUser)
}));
passport.deserializeUser(User.deserializeUser(function (sessionUser, done) {
  done(null, sessionUser)
}
));

User.createStrategy();


app.post("/api/users/registration",
  function (req, res) {

    newUser = new User(req.body);

    User.register(newUser, req.body.password, function (err) {
      if (err) {
        console.log('An error occured', err)
      } else {
        console.log('User ' + newUser.username + ' created succesfully');
      };
    }),
      function (req, res) {
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
      };
  });

// app.get('/api/users/login', function (req, res, next) {
//   passport.authenticate('local', function (err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function (err) {
//       if (err) { return next(err); }
//       //need to finish adding tracking metric info for user login info... lastLogin, attempts, etc. 
//       // return res.redirect('/users/' + user.username);
//     });
//   });
// });

app.post('/api/users/login',
  passport.authenticate('local'),
  function (req, res) {
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

  });




app.get("/api/bars", function (req, res) {
     var METERS_PER_MILE = 1609.34;
     Bars.find({ geometry: { $nearSphere: { $geometry: { type: "Point", coordinates: [ -80.790111, 35.069135 ] }, $maxDistance: 3 * METERS_PER_MILE } } })

     .exec(function (err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});



// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});



// // Route to get all saved articles
// app.get("/api/saved", function (req, res) {

//   Article.find({})
//     .exec(function (err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// Route to add an article to saved list
// app.post("/api/saved", function (req, res) {
//   var newArticle = new Article(req.body);

//   console.log(req.body);

//   newArticle.save(function (err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });


//   if (err) {
//     console.log('The following error occured:');
//     console.log(err);
//   }
//   console.log('User ' + req.body.username + ' authenticated succesfully');
//   res.redirect('/');

// });






// console.log(newUser);



// Route to delete an article from saved list
// app.delete("/api/saved/", function (req, res) {

//   var url = req.param("url");

//   Article.find({ url: url }).remove().exec(function (err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });