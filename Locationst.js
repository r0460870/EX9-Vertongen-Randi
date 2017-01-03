var mongoose = require("mongoose");
var LocationSchema = mongoose.Schema({
  id:{
    type: Number
  }
stad:{
  type: String
}
naam:{
type: String
}



});
var Locatie = mongoose.model('Locations',LocationSchema)



module.exports =  {
  Locations : {},

  saveLocation : function(Location){
    this.Locations[Location.id]= Location;
  },
  listAllLocations : function(){
    var rtnValue =[];
    for (var item in this.Locations) {
      rtnValue.push(this.Locations[item]);
    };
    return rtnValue;
  },
  findLocations : function(id){
    return this.Locations[id];
  }
};
