const Community = require('../models/communityModel')
const communityRequest = require('./communityRequestDBRepository')
const mongoose = require('mongoose')


const findCommunityByName = async (communityName)=>{
    try {
        const community = await Community.findOne({communityName})
        return community
    } catch (error) {
        throw new Error(error)
    }
}

const findCommunityById = async (communityId)=>{
    try {
        const community = await Community.findById(communityId);
        console.log(community,"uuuuuuuuuuuu");
        return community;
    } catch (error) {
        console.log(error);
        throw new Error("error in creating community")
    }
}

const userExistsInCommunity = async (userId, communityId)=> {
    try {
      const community = await findCommunityById(communityId);
      
      if (!community) {
         throw new Error("community not found");
      }
  
      if (community.members.includes(userId)) {
        console.log("usesrrrrrrrrrrrrr");
        return true;
      }
      return false; 
    } catch (error) {
      throw new Error(error)
    }
  }

const createCommunity = async (data)=>{
    try {
        const communityExists = await findCommunityByName(data.communityName)
        if(communityExists) return false
        const community = await Community.create(data);
        return true;
    } catch (error) {
        throw new Error("error in creating community")
    }
}

async function removeUserFromCommunity(userId, communityId) {
    try {
      const community = await findCommunityById(communityId);
      if (!community) {
        return false;
      }
      community.members = community.members.filter(memberId => memberId !== userId);
      community.moderators = community.moderators.filter(moderatorId => moderatorId !== userId);
      await community.save();
      return true; 
    } catch (error) {
      throw new Error(error)
    }
  }
  

 

const joinCommunity = async (data)=>{
    try {
        if(!mongoose.Types.ObjectId.isValid(data.communityId)){
            return {status:false,message:"in valid community id"}
        }
        const community = await findCommunityById(data.communityId);
        
        if(community){
            const status = await userExistsInCommunity(data.userId,community._id)
            if(community.joinType === "any one can join" && !status){
                await Community.updateOne({_id:data.communityId},{$push:{members:data.userId}})
                 return {status:true,message:"you have been addedd to community"}
            }else if(!status){
                await communityRequest.createRequest({
                    communityId:community._id,
                    adminId:community.adminId,
                    userId:data.userId,
                    message:data.message
                    })
                return {status:true,message:"request has been sent to community admin"}
            }else if(status){
                return {status:true,message:"you are already in the community"}
            }
        }else{
            return {status:false,message:"community not found"}
        }
    } catch (error) {
        throw new Error("error in creating community")
    }
}

const leaveCommunity = async (data)=>{
    try {
        const {userId,communityId} = data
        const status = await removeUserFromCommunity(userId,communityId);
        return status
    } catch (error) {
        throw new Error(error)
    }
}

const findCommunityAdmin = async (adminId)=>{
    try {
        const community = await Community.findOne({adminId:adminId})
        return community;
    } catch (error) {
        throw new Error(error)
    }
}

const acceptJoinCommunity = async(data)=>{
    try {
        const {communityId,adminId,userId} = data
        const community = await findCommunityAdmin(adminId);
        if(community){
            const data = await Community.updateOne({_id:community._id},{$push:{members:userId}})
            await communityRequest.removeRequest(community._id.toString(),userId)
            return true
        }
        return false
    } catch (error) {
        throw new Error(error)
    }
}

const removeMember = async (data)=>{
    try {
        const community = await Community.findOne({
           adminId:data.adminId,
            $or: [
                { adminId: data.adminId }, 
                { moderators: { $in: [data.adminId] } } 
              ]
          });      
        if(!community){
          return {status:false,message:"no community found you as admin or moderator"}
        }
        if(community.moderators.includes(data.userId) && community.adminId !== data.adminId){
            return {status:false,message:"you have no authority to remove moderator"}
        }
       const status = await removeUserFromCommunity(data.userId,community._id);
       if(status){
        return {status:true,message:"user has been removed successfully "}
       }
       return {status:false,message:"no community found "}

    } catch (error) {
        throw new Error(error)
    }
}

const addModeratorByAdmin = async(data)=>{
    try {
        const {communityId,adminId,userId} = data
        if(!mongoose.Types.ObjectId.isValid(communityId)){
            return {status:false,message:"in valid community id"}
        }
        const community = await Community.findById(new mongoose.Types.ObjectId(communityId))
        if(!community) return {status:false,message:"no community found"}
        if(community && community.adminId === adminId){
            community.moderators.push(userId)
            if(!community.members.includes(userId)){
                community.members.push(userId)
            }
            await community.save()
            return {status:true,message:"user addedd as moderator"}
        }
        return {status:false,message:"ypu have no authority"}
    } catch (error) {
        throw new Error(error)
    }
}

const addMember = async(data)=>{
    try {
        const {communityId,adminId,userId} = data
        if(!mongoose.Types.ObjectId.isValid(communityId)){
            return {status:false,message:"in valid community id"}
        }
        const community =await Community.findById(new mongoose.Types.ObjectId(communityId))
        if(!community) return {status:false,message:"cant find communtiy"}
        if(community && community.adminId === adminId){
            if(!community.members.includes(userId)){
                community.members.push(userId)
            }
            return {status:true,message:"user addedd to community"}
        }else if(community && community.moderators.includes(adminId)){
            if(!community.members.includes(userId)){
                community.members.push(userId)
            }
            return {status:true,message:"user addedd to community"}
        }
        return {status:false,message:"you have no authority"}
    } catch (error) {
        throw new Error(error)
    }
}

const deleteCommunity = async (data)=>{
    try { 
        const {adminId,communityId} = data
        if(!mongoose.Types.ObjectId.isValid(communityId)){
            return {status:false,message:"in valid community id"}
        }
        const community = await Community.findById(new mongoose.Types.ObjectId(data.communityId))
        if(!community){
            return {status:false,message:"cant find community"}
        }else if(community.adminId === adminId){
            await Community.updateOne({isActive:false})
            return {status:true,message:"community deleted successfully"}
        }
        return {status:false,message:"you have no authority for it"}
        
    } catch (error) {
        throw new Error(error)
    }
}

const changeCommunityStatus = async (communityId)=>{
    try {
        if(!mongoose.Types.ObjectId.isValid(communityId)){
            return {status:false,message:"in valid community id"}
        }
        const community = await Community.findById(new mongoose.Types.ObjectId(communityId))
        if(community){
            const state = !community.isBlocked
            await Community.findByIdAndUpdate(community._id,{
                $set:{
                    isBlocked:state
                }
            })
            return {status:true,message:"community status changed successfully"}
        }
        return {status:false,message:"unable to find community"}
        
    } catch (error) {
        
    }
}


module.exports = {
    createCommunity,
    joinCommunity,
    leaveCommunity,
    acceptJoinCommunity,
    removeMember,
    addModeratorByAdmin,
    addMember,
    deleteCommunity,
    changeCommunityStatus
}
