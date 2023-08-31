const mongoose = require('mongoose');

const InterestSchema = mongoose.Schema({
    interest:{
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        required:true
    }
},{
     timestamps:true
})

const Interest = mongoose.model('Interest',InterestSchema)

module.exports = Interest;
