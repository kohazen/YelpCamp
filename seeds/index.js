const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const {places,descriptors} = require('./seedHelpers');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
}

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random()*array.length)];
//sample function will take array as an argument eg:> sample(places); 


const seedDB = async()=>{
    await Campground.deleteMany({});
    //clears the complete database for fresh start
    for(let i =0;i<50;i++){
        const random1000 = Math.floor(Math.random()*1000);
        const camp = new Campground({
            location:`${cities[random1000].city},${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
    
}

seedDB().then(()=>{
    mongoose.connection.close();
});