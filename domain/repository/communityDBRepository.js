const Community = require('../models/communityModel')
const mongoose = require('mongoose')

module.exports ={
     validateId : (id)=> mongoose.Types.ObjectId.isValid(id),

     parseId :(id)=> new mongoose.Types.ObjectId(id),
     
    findCommunityByName  : async (communityName)=>{
        try {
        const community =  await Community.findOne({communityName}); 
        return community
        } catch (error) {
        throw new Error(error) 
        }
    } ,
    findCommunityById :async (id)=>{
        try {
            const community =  await Community.findById(id); 
            return community
        } catch (error) {
            throw new Error(error) 
        }
    } ,

    userExistsInCommunity : async(communityId,userId)=>{
        try {
            const userExists = await Community.findOne({
                _id:communityId,
                "members": { $elemMatch: { 'userId':userId } }
            });
            return userExists
        } catch (error) {
            throw new Error(error)
            
        }
    },
    createCommunity:async (data)=>{
        try {
            const community = await Community.create(data)
            return community
        } catch (error) {
            throw new Error(error)  
        }
    },
    removeUserFromCommunity: async (communityId,userId)=>{
        try {
            const result = await Community.updateOne(
             {_id:communityId},
             { $pull: { members: { 'userId': userId } } }
             )
            return result
        } catch (error) {
            throw new Error(error)  
        }
    },
    addMemberToCommunity: async (communityId,userData)=>{
        try {
            const result = await Community.updateOne(
                {_id:communityId},
                {$push:{members:userData}}
            )
        } catch (error) {
            throw new Error(error)  
        }
    },
    findCommunityAdmin: async (communityId,adminId)=>{
        try {
            const result = await Community.findOne({_id:communityId,adminId:adminId})
            return result
        } catch (error) {
            throw new Error(error)  
        }
    },
    addModeratorByAdmin: async (communityId,userId)=>{
        try {
            const result = await Community.updateOne(
                {
                    _id: communityId,
                    "members.userId": userId 
                  },
                  {
                    $set: {
                      "members.$.isModerator": true 
                    }
                  }
            )
            return result
        } catch (error) {
            throw new Error(error)  
        }
    },
    deleteCommunity: async (communityId)=>{
        try {
            const result = await Community.updateOne(
                {_id:communityId},
                {
                    $set:{
                        isActive:false
                    }
                }
            )
            return result
        } catch (error) {
            throw new Error(error)  
        }
    },
    manageCommunity:async(communityId,status)=>{
        try {
            const result = await Community.updateOne(
                {_id:communityId},
                {
                    $set:{
                        isBlocked:status
                    }
                }
            )
            return result
        } catch (error) {
            throw new Error(error)  
        }
    },
    getActiveCommunities :async ()=>{
        try {
            const communities = await Community.find({isBlocked:false,isActive:true})
            return communities;
        } catch (error) {
            throw new Error(error)  
        }
    }

}
