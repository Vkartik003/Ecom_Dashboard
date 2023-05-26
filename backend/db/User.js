const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:Number
});
module.exports = mongoose.model('users',userSchema);