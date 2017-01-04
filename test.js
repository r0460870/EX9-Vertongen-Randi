var express = require("express");
var parser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var dalLocations = require("./Locationst.js")
//var dalAanwezigheden= require("./Aanwezighedenst.js")
// var daldroneid = require (./Droneid.js") Laten we nog even achterwege.
var dalAanwezigheden = require("./Aanwezighedenst.js")

var app = express();
// https://expressjs.com/en/guide/routing.html
// express is een manier om http requests te sturen via NODEJS
// Minimalistisch framework dat veel gebruikt wordt.


app.use(parser.json());
app.get("/locations",function( req,res){
    dalLocations.listAllLocations(function (err,locations){
        if (err){
            throw err;
        }
        res.send(locations);
        res.send('testloc');

  // response --> alle locaties worden gestuurd via send kunnen ook bijvoorbeeld tekstconfirmaties meegegeven worden
    });
});

var Location = function (locid,naam,stad){
  this.locid = locid;
  this.naam = naam;
  this.stad = stad;
  // dit word gezet zodat deze kan worden aangeroepen bij post en put om nieuwe waarde in te zetten
};
app.post("/locations",function(req,res){
//req.body holds parameters that are sent up from the client as part of a POST request
//hieronder dus.
    var Locatie = new Location(req.body.locid,req.body.naam,req.body.stad);
    dalLocations.createLocation(locatie,function(err,locatie){
        if (err){
        console.log(err);
        }
    res.send(locatie);
// creeren van nieuwe locatie via post, puit voor updates.
    });
});
app.put("/locations/:locid",function(req,res){
  // verdergaand op locid omdat hierop check moet uitgevoerd worden.
    var Locatie = new Location(req.body.locid,req.body.naam,req.body.stad);
    dalLocations.updateLocation(req.params.locid, Locatie,function(err,locatie){
    // Eerste locatieid die overeenkomt met req.params.locid wordt vervangen door de nieuwe Locatie variabele.
    //req.params
//This property is an object containing properties mapped to the
// named route “parameters”. For example, if you have the route /user/:name,
//then the “name” property is available as req.params.name.
//This object defaults to {}.
// hier is .params dus locations
        if (err) {
          console.log (err);
        }
      res.send(locatie);
    });
});
//Aanwezigheden

app.get("/aanwezigheden", function(req,res){
dalAanwezigheden.ListAllAanwezigheden(function(err,aanwezigheden){
    if(err){
      throw err;
    }
    response.send(aanwezigheden);
});
});

app.get("aanwezigheden/:naam", function( req, res) {
    dalAanwezigheden.findAanwezigheid(req.params.naam,function(err,aanwezigheid){
    if (err) {
      throw err;
    }
    response.send(location);
  });

});

var Aanwezigheid = function (aanwid,naam){
    this.aanwid = aanwid;
    this.naam = naam;
    // dit word gezet zodat deze kan worden aangeroepen bij post en put om nieuwe waarde in te zetten
};
app.post("/aanwezigheid", function(req,res){
    var aanwezigheid = new Aanwezigheid(req.body.aanwid,req.body.naam)
    dalAanwezigheden.CreateAanwezigheid(aanwezigheid,function(err,aanw){
    // Functie van aanwezighedenst oproeepen
        if (err){
        throw err;
        }
      response.send(aanw);
    });
});

app.put("/aanwezigheid/:aanwid", function(req,res){
    var aanwezigheid = new Aanwezigheid(req.params.aanwid,req.body.naam);
    dalAanwezigheden.UpdateAanwezigheid(request.params.aanwid,aanwezigheid,function(err,aanw){
        if (err){
          throw err
        }
        response.send(aanw)

  });

});

app.listen(3000);
console.log("start");
