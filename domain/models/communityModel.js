const mongoose = require('mongoose');

const CommunitySchema = mongoose.Schema({
    communityName:{
        type:String,
        required:true
    },
    adminId:{
        type:String,
        required:true
    },
    moderators:[
        {type:String}
    ],
    members:[
        {type:String}
    ],
    description:{
        type:String,
        required:true
    },
    joinType:{
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true
})

const Community = mongoose.model('Community',CommunitySchema)

module.exports = Community;

