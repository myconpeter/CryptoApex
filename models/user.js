const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({

fullname :{
      type  : String,
      required : true
  } ,

username :{
    type  : String,
    required : true
} ,
  email :{
    type  : String,
    required : true
} ,
telephone :{
    type  : Number,
    required : true
} ,

isAdmin :{
    type  : Boolean,
    default: false
    },
password :{
    type  : String,
    required : true
} ,

realEstate :{
    type  : String,
    default: '0'
},
cashInvestment :{
    type  : String,
    default: '0'
},
cryptoInvestment :{
    type  : String,
    default: '0'
},
assetIncome :{
    type  : String,
    default: '0'
},



}, {timestamps: true});




const User= mongoose.model('User' ,UserSchema);

module.exports = User;