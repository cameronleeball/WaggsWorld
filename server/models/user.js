var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");


var userSchema = new Schema({

    username: String,
    access: {
        level: Number,
        group: String
    },
    personal: {
        first: String,
        last: String
    },
    contact: {
        email: String,
        phone: String,
        address: {
            line1: String,
            line2: String,
            city: String,
            state: String,
            zip: String
        }
    },
    created: {
        type: Date,
        default: Date.now
    },
    last: Date,
    loggedIn: Boolean,
    attempts: Number
});

userSchema.plugin(passportLocalMongoose,
    {
        limitAttempts: false,
        maxAttemps: 5
    })

var User = mongoose.model("User", userSchema);
module.exports = User;