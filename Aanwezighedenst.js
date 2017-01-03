
var mongoose = require("mongoose");
var AanwezigheidSchema = mongoose.Schema({
  aanwid:{
    type: Number
  },
naam:{
type: String
}



// Schema & Model http://mongoosejs.com/docs/guide.html
});
var aanwezigheid = mongoose.model('aanwezigheden',AanwezigheidSchema);








module.exports =  {

  listAllAanwezigheden: function(callback){
    aanwezigheid.find(callback);
  },
  findAanwezigheid: function(naam,callback){
  aanwezigheid.find({naam: naam},callback )
  }
  CreateAanwezigheid: function(aanwezigheid,callback){
  aanwezigheid.create(aanwezigheid,callback)
  }
};
