
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
  Aanwezigheden : {},

  saveAanwezigheid : function(Aanwezigheid){
    this.Aanwezigheden[Aanwezigheid.id]= Aanwezigheid;
  },
  listAllAanwezigheden : function(){
    var rtnValue =[];
    for (var item in this.Aanwezigheden) {
      rtnValue.push(this.Aanwezigheden[item]);
    };
    return rtnValue;
  },
  findAanwezigheid : function(id){
    return this.Aanwezigheden[id];
  }
};
