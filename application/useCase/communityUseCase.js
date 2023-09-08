const communityDBRepository = require('../../domain/repository/communityDBRepository')
const user = require('../../interfaces/models/user')

const createCommunityUseCase = async (data)=>{
    try {
        const communityData = user.communityData(data)
        const status = await communityDBRepository.createCommunity(communityData)
        return status
    } catch (error) {
        throw new Error(error.message)
    }
}

const joinCommunityUseCase = async (data)=>{
    try {
        const status = await communityDBRepository.joinCommunity(data)
        return status
    } catch (error) {
        throw new Error(error.message)
    }
}

const leaveCommunityUseCase = async (data)=>{
    try {
        const status = await communityDBRepository.leaveCommunity(data)
        if(status){
            return {status:true,message:"successfully leaved"}
        }else{
            return {status:false,message:"unable to leave"}
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

const acceptJoinCommunity = async (data)=>{
    try {
        const status = await communityDBRepository.acceptJoinCommunity(data)
        if(status){
            return {status:true,message:"user has been added to community"}
        } 
        return {status:false,message:"you are not admin"}
    } catch (error) {
        throw new Error(error)
    }
}

const removeMember = async (data)=>{
    try {
        const status = await communityDBRepository.removeMember(data)
        return status
    } catch (error) {
        throw new Error(error)
    }
}

const addModerator = async (data)=>{
    try {
        const status = await communityDBRepository.addModeratorByAdmin(data)
        return status
    } catch (error) {
        throw new Error(error)
    }
}

const addMember = async (data)=>{
    try {
        const status = await communityDBRepository.addMember(data)
        return status
    } catch (error) {
        throw new Error(error)
    }
}

const deleteCommunity = async (data)=>{
    try {
        const status = await communityDBRepository.deleteCommunity(data)
        return status
    } catch (error) {
        throw new Error(error)
    }
}

const changeCommunityStatus = async (data)=>{
    try {
        const status = await communityDBRepository.changeCommunityStatus(data)
        return status
    } catch (error) {
        throw new Error(error)
    }
}


module.exports ={
    createCommunityUseCase,
    joinCommunityUseCase,
    leaveCommunityUseCase,
    acceptJoinCommunity,
    removeMember,
    addModerator,
    addMember,
    deleteCommunity,
    changeCommunityStatus
}