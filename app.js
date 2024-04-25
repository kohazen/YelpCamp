const express = require('express');
const app = express();
const path = require('path');
//path module, a built-in module in Node.js 

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'))//need to require path module to use path

app.get('/',(req,res)=>{
    res.render('home');
})



app.listen(3000, ()=>{
    console.log('serving on port 3000');
})