const CommunityRequest = require('../models/communityRequestModel')

const createRequest = async (data)=>{
    try{
        await CommunityRequest.create(data)
    }catch(error){
        throw new Error(error)
    }
}

const removeRequest = async (communityId,userId)=>{
    try{
        await CommunityRequest.deleteOne({communityId:communityId,userId:userId})
    }catch(error){
        throw new Error(error)
    }
}

module.exports={
    createRequest,
    removeRequest
}