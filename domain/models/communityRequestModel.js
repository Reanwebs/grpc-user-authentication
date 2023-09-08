const mongoose = require('mongoose');

const CommunityRequestSchema = mongoose.Schema({
    communityId:{
        type:String,
        required:[true,"please provide a community id"]
    },
    adminId:{
        type:String,
        required:[true,"please provide a admin  id"]
    },
    userId:{
        type:String,
        required:[true,"please provide a user id"]
    },
    message:{
        type:String,
    }
},{
     timestamps:true
})

const CommunityRequest = mongoose.model('CommunityRequest',CommunityRequestSchema)

module.exports = CommunityRequest;
