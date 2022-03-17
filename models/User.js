const mongoose = require('mongoose');


// const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({

username:{

    type: String,
    unique : true,
    
    required:true
    

},

password:{
    type:String,
    
    required:true

},
name:{
    type:String,
    
    required:true
},
phone:{
    type:String,
   
    required:true
},
  
    
  });





const User = mongoose.model('user',UserSchema);




  module.exports= User;