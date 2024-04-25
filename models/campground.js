//we create and save database schema in a seperate file;
//it is for security perposes;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title:String,
    price:String,
    description:String,
    location:String
});

module.exports = mongoose.model('Campground',CampgroundSchema);
//we made a model from the schema and named it "Campground"

//Notes
//Each JavaScript file in your Node.js project is considered a module.
//module.exports is an object that holds the values or functions you want to make available for other parts of your application.
//



