var express = require("express");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var dalLocations = require("./Locationst.js")
//var dalAanwezigheden= require("./Aanwezighedenst.js")
// var daldroneid = require (./Droneid.js") Laten we nog even achterwege.


var app = express();
// https://expressjs.com/en/guide/routing.html
// express is een manier om http requests te sturen via NODEJS
// Minimalistisch framework dat veel gebruikt wordt.

app.get("/locations",function( req,res){
dalLocations.listAllLocations(function (err,Locations){
  if (err){
    throw err;
  }
  res.send(locations);
});
});
