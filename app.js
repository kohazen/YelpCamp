const express = require('express');
const app = express();
const path = require('path');
const Campground = require('./models/campground');

//path module, a built-in module in Node.js 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
//Assigns the connection object from the imported mongoose library to a constant named db. 
//The connection object represents the established connection to your MongoDB database
db.on("error",console.error.bind(console,"connection error:"));
//sets up an event listener on the db object,  listens for the "error" event emitted by the connection.
//creates a function using the .bind() method. This method is used to pre-configure the function's this context 
//(in this case, set to console) and arguments (the error message "connection error:"). 
db.once("open",()=>{
    console.log("Database connected");
})

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'))//need to require path module to use path

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/makecampground', async (req,res)=>{
    const camp = new Campground({title:"My Backyard",description:'Cheap Camping'});
    await camp.save();
    res.send(camp);
})



app.listen(3000, ()=>{
    console.log('serving on port 3000');
})