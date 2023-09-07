const communityDBRepository = require('../../domain/repository/communityDBRepository')

const createCommunityUseCase = async (data)=>{
    try {
        const {adminId,communityName,moderators,members,description,joinedType} = data;
        console.log(data);
        const community = await communityDBRepository.createCommunity(data)
    } catch (error) {
        throw new Error(error.message)
    }
}

const joinCommunityUseCase = async (data)=>{
    try {
        console.log(data);
        const {userId,communityId} = data;
        const community = await communityDBRepository.joinCommunity(data)
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports ={
    createCommunityUseCase,
    joinCommunity
}