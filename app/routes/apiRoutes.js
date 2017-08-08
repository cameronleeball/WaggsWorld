var express = require("express");

var userController = require("../controllers/userController");

var router = new express.Router();

// Get all users (or optionally a specific quote with an id)
router.get("/users/:id?", userController.find);

// Create a new quote using data passed in req.body
router.patch("/users/login",
    passport.authenticate('local'),
    userController.login);



// Update an existing quote with a speicified id param, using data in req.body
router.patch("/users/:id", userController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/users/:id", userController.destroy);

module.exports = router;
