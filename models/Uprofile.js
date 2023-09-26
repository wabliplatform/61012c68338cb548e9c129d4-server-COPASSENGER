
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uprofileSchema = new Schema({
Underscoreid:String , 


uemail:String , 


upassword:String , 


uname:String , 


ulastname:String , 


umale:String , 


uadress:String , 


udate:Date , 


uphone:Number 



})

module.exports = {
  Uprofile : mongoose.model('uprofile', uprofileSchema),
}

