var mongoose = require('mongoose');

var schema_user= new mongoose.Schema({
    name:{type:String},
    id:{type:Number},
    email:{type:String},
    gender:{type:String},
    phone_no:{type:Number},
    designation:{type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date


});

module.exports=mongoose.model('uschema',schema_user);