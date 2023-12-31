const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    mobNo:{
        type:Number,
    },
    avatarId:{
        type:String,
    },
    isGoogle:{
        type:Boolean,
        required:true
    },
    lastLogin:{
        type:Date,
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    interest:[
        {type:String}
    ],
    referCode:{
        type:String,
        required:true
    }
       
},{
    timestamps:true
});

const User = mongoose.model('User',UserSchema);

module.exports =User;