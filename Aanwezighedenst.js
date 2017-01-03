
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
    aanwezigheden.find(callback);
  },
  findAanwezigheid : function(id){
    return this.Aanwezigheden[id];
  }
};
