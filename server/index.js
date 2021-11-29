const port = process.env.PORT || 8000 
const axios = require('axios')
const path = require('path');
const cheerio = require('cheerio')
const ehbs = require('express-handlebars');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fs = require('fs')
const tasksRoute = require('./routes/tasks');
if(typeof require !== 'undefined') XLSX = require('xlsx');

const cors = require('cors');
const { auth } = require('./validToken');
app.use(cors())
//use statics files 
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv = require('dotenv').config();

//useing handlebars
//hbs images
app.use(express.static('images')); 
//cookie parser
app.use(cookieParser());
//express handlebars
app.engine(
  "handlebars",
  ehbs({
    extname: "hbs",
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

//routes

//register and signin routes
app.use("/",authRoute);

//task routes
app.use('/api', tasksRoute);
app.use("/",authRoute);

//connect to db;
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },()=>{
    console.log("db connected");
  });




app.get('/dashboard',function (req, res) {
    res.render('dashboard',{layout:'dashboard'});
})

// Handle 404
app.use(function(req, res) {
  res.status(400);
 res.render('error-404');
 });
 
 // Handle 500
 app.use(function(error, req, res, next) {
   res.status(500);
 res.render('error-500', {title:'500: Internal Server Error', error: error});
 });

app.listen(port, () => console.log(`server running on PORT ${port}`))

