var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var barsSchema = new Schema({
    type: {type: String},
    'properties' : {
        'name' : String,
        'location.address1' : String,
        'location.city' : String,
        'location.state' : String,
        'location.zip_code' : String,
        'id' : String,
        'display_phone' : String,
        'image_url' : String,
        'url' : String,
        'review_count' : String,
        'rating' : String
    },
        'geometry' : {
             type: {type: String},
        'coordinates' : {
            'type' : [Number],
            'index' : '2dsphere',
            'required' : true
        }
    },
});

var Bars = mongoose.model("Bars", barsSchema);
module.exports = Bars;
