const mongoose = require('mongoose');

const CommunitySchema = mongoose.Schema({
    communityName:{
        type:String,
        required:true
    },
    communityImage:{
        type:String,
    },
    adminId:{
        type:String,
        required:true
    },
    members:[
       {
        member:{
            userId:{
                type:String,
                required:true
            },
            isModerator:{
                type:Boolean,
                default:false
            }
        }
       }
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

