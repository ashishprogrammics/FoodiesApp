require("./config/database").connect();
const express = require("express");
const app = express();
app.use(express.json());
const nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
const cookieparser =require('cookie-parser')
const hbs = require("hbs")


// app.use(urlencoded({ extended :false}))
app.use(cookieparser())
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}))
// app.set('view engine', 'ejs')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname+'/views/login.html')); 
  res.render("login") 
})
app.get('/index', (req, res) => {
  res.render("index") 
})
// app.get('/user', (req, res) => {
//   res.render("user/profile") 
// })

const userRegistration = require('./routers/userRegistrationRoutes')
app.use('/user', userRegistration);

const Products = require('./routers/productsRoutes');
app.use('/product', Products);


const { urlencoded } = require("body-parser");


module.exports = app;