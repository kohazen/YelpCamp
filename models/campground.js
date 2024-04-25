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