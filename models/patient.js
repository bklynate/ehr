var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamp');

var PatientSchema = new Schema({
    first_name: { type : String, required : true},
    last_name: {type : String, required : true},  
    age : {type : String },
    race : {type : String},
    height : {type : Number},
    weight : {type : Number},
    bloodtype : {type : String},
    __v : {type : Number, select : false}
}); 

PatientSchema.plugin(timestamps);

module.exports = mongoose.model('Patient', PatientSchema);   
