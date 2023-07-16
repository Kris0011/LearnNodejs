const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name :{
        type: String ,
        required : true
    } , 
    id :{
        type: String ,
        required : true
    } 
    , 
    mnumber :{
        type: Number ,
        required : true
    } ,
    password :{
        type: String ,
        required : true
    } ,
    cpassword :{
        type: String ,
        required : true
    } 
})


const student = mongoose.model('STUDENT' , userSchema);

module.exports = student ;


