const Community = require('../models/communityModel')


const createCommunity = async (data)=>{
    try {
        const community = await Community.create(data);
        return community;
    } catch (error) {
        throw new Error("error in creating community")
    }
}

const findCommunityById = async (communityId)=>{
    try {
        const community = await Community.findById(communityId);
        return community;
    } catch (error) {
        throw new Error("error in creating community")
    }
}

const joinCommunity = async (data)=>{
    try {
        const community = await findCommunityById(data.communityId);
        if(community && community.joinType === "any one can join"){
           await Community.updateOne({_id:data.communityId},{$push:{members:data.userId}})
        }
        return community;
    } catch (error) {
        throw new Error("error in creating community")
    }
}

module.exports = {
    createCommunity,
    joinCommunity
}
