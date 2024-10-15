const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    id:{
        type:Number,
        required: true,
        unique: true
    }
})

const User = mongoose.model('User', UserSchema, 'newusers');
module.exports = User;