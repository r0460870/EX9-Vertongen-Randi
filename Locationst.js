var mongoose = require("mongoose");
var LocationSchema = mongoose.Schema({
  locid:{
    type: Number
  },
stad:{
  type: String
},
naam:{
type: String
}


// Schema & Model http://mongoosejs.com/docs/guide.html
});
var Locatie = mongoose.model('Locations',LocationSchema);



module.exports =  {
  //https://docs.mongodb.com/manual/reference/method/db.collection.find/
  listAllLocations: function (callback) {
      Locatie.find(callback);
  },

  findLocation: function(stad,callback){
Locatie.find({stad: stad},callback )
// Waar stad = stad --> callback van documenten die hiermee overeenkomen. Dus vinden van locatie
  }
  createLocation: function (locatie, callback) {
      Locatie.create(locatie, callback);
  },
  updateLocation: function (id, newloc, callback) {
      Locatie.findOneAndUpdate({locid: id}, newloc, callback);
      // mongodb functie -->https://docs.mongodb.com/v3.2/reference/method/db.collection.findOneAndUpdate/
      // Zoekt het eerste document dat overeenkomst met criteria ( in deze case: locatieid = id)
      // en newloc is nieuwe locatie -informatie
};
};
