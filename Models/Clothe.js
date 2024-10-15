const mongoose = require('mongoose')
const ClotheSchema = new mongoose.Schema({
    clothename:{
        type: String,
        required: true
    },
    clotheprice:{
        type: Number,
        required: true
    }
})

const Clothe = mongoose.model('Clothe', ClotheSchema, 'clothing');
module.exports = Clothe;