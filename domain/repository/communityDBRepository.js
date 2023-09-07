const Community = require('../models/communityModel')


const createCommunity = async (data)=>{
    try {
        const community = await Community.create(data);
        return community;
    } catch (error) {
        throw new Error("error in creating community")
    }
}

module.exports = {
    createCommunity
}
