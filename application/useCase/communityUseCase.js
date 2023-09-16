const communityDBRepository = require('../../domain/repository/communityDBRepository')
const communityRequestDBRepository = require('../../domain/repository/communityRequestDBRepository')
const user = require('../../interfaces/models/user')

module.exports={
     createCommunityUseCase :async (data)=>{
        try {
            const communityData = user.communityData(data)
            const communityExists = await communityDBRepository.findCommunityByName(communityData.communityName);
            if(communityExists) return {status:false,message:"community already exists "};
            else{
                await communityDBRepository.createCommunity(communityData);
                return {status:true,message:"community created successfully "};
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },

    joinCommunityUseCase:async (data)=>{
        try {
            const {communityId,userId} = data;
            const isValid = communityDBRepository.validateId(communityId);
            if(!isValid) return {status:false,message:"invalid communityid"};

            const parseId = communityDBRepository.parseId(communityId);

            const community = await communityDBRepository.findCommunityById(parseId);

            if(!community) return {status:false,message:"no community found"};

            const userExists = await communityDBRepository.userExistsInCommunity(parseId,userId)
            if(userExists) return {status:false,message:"you are already a member"};


            if(community.joinType === "open"){
                await communityDBRepository.addMemberToCommunity(parseId,{userId:userId})
                return {status:true,message:"you have been addedd to community"};
            }

            const requestData = {
                communityId:community._id,
                adminId:community.adminId,
                userId:data.userId,
                message:data?.message
            }

            await communityRequestDBRepository.createRequest(requestData);
            return {status:true,message:"request submitted successfully"}
            
        } catch (error) {
            throw new Error(error.message)
        }
    },
    leaveCommunityUseCase: async (data)=>{
        try {
            const {userId,communityId} = data;
            const isValidUser = communityDBRepository.validateId(userId);
            const isValidComId = communityDBRepository.validateId(communityId);
            if(!isValidUser || !isValidComId) return {status:false,message:"invalid id"};

            const parseCommId = communityDBRepository.parseId(communityId);

            await communityDBRepository.removeUserFromCommunity(parseCommId,userId);
            return {status:true,message:"successfully leaved community"}
        } catch (error) {
            throw new Error(error.message)
        }
    },
    acceptJoinCommunity: async (data)=>{
        try {
            const {communityId,adminId,userId} = data;
            const isValid = communityDBRepository.validateId(communityId);
             if(!isValid) return {status:false,message:"invalid communityid"};

             const parseCommId = communityDBRepository.parseId(communityId);

            const isAdmin = await communityDBRepository.findCommunityAdmin(parseCommId,adminId)
            if(!isAdmin) return {status:false,message:"no community found"};

            await communityDBRepository.addMemberToCommunity(parseCommId,{userId:userId});
            await communityRequestDBRepository.removeRequest(communityId,userId)
            return {status:true,message:"request accepted successfully"};

        } catch (error) {
            throw new Error(error.message)
        }   
    },
    removeMember: async (data)=>{
        try {
           const {userId,adminId,communityId} = data;
           const isValidComId = communityDBRepository.validateId(communityId);
           if(!isValidComId) return {status:false,message:"invalid communityid"};

           const parseId = communityDBRepository.parseId(communityId);
           await communityDBRepository.removeUserFromCommunity(parseId,userId);
            return {status:true,message:"user removed succesfully"};
        } catch (error) {
            throw new Error(error.message)
        }
    },

    addModerator: async (data)=>{
        try {
            const {userId,adminId,communityId} = data;
           const isValidComId = communityDBRepository.validateId(communityId);
           if(!isValidComId) return {status:false,message:"invalid communityid"};

           const parseId = communityDBRepository.parseId(communityId);
           await communityDBRepository.addModeratorByAdmin(parseId,userId);
           return {status:true,message:"user has been addedd as moderator"};
        } catch (error) {
            throw new Error(error.message)
        }
    },
    addMember: async (data)=>{
        try {
            const {userId,adminId,communityId} = data;
           const isValidComId = communityDBRepository.validateId(communityId);
           if(!isValidComId) return {status:false,message:"invalid communityid"};

           const parseId = communityDBRepository.parseId(communityId);
           await communityDBRepository.addMemberToCommunity(parseId,{userId:userId});
           return {status:true,message:"user has been addedd to community"};
        } catch (error) {
            throw new Error(error.message)
        }
    },
    deleteCommunity : async (data)=>{
        try {
            const {adminId,communityId} = data;
           const isValidComId = communityDBRepository.validateId(communityId);
           if(!isValidComId) return {status:false,message:"invalid communityid"};

           const parseId = communityDBRepository.parseId(communityId);
           const isAdmin = await communityDBRepository.findCommunityAdmin(parseId,adminId);
           if(!isAdmin) return {status:false,message:"no community found"}; 

           await communityDBRepository.deleteCommunity(parseId);
           return {status:true,message:"community removed successfully"};

        } catch (error) {
            throw new Error(error.message)
        }
    },

    manageCommunity : async (communityId)=>{
        try {
            const isValidComId = communityDBRepository.validateId(communityId);
            if(!isValidComId) return {status:false,message:"invalid communityid"};
 
            const parseId = communityDBRepository.parseId(communityId);
            const community = await communityDBRepository.findCommunityById(parseId);
            const state = !community.isBlocked;
            await communityDBRepository.manageCommunity(parseId,state);
            return {status:true,message:"community status changed successfully"};
            
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getActiveCommunities : async ()=>{
        try {
            const communities = await communityDBRepository.getActiveCommunities();
            return communities;
            
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getAllCommunities : async ()=>{
        try {
            const communities = await communityDBRepository.getAllCommunities();
            return communities;
            
        } catch (error) {
            throw new Error(error.message)
            
        }
    },
    validateCommunityName:async (communityName)=>{
        try {
            const community= await communityDBRepository.findCommunityByName(communityName);
            if(communitiy){
                return {status:false,message:"community name already exists"}
            }
            return {status:true,message:"community name available"}
           
            
        } catch (error) {
            throw new Error(error.message)
        }
    },
    getCommunityDetails :async (communityId)=>{
        try {

            const isValidComId = communityDBRepository.validateId(communityId);
            if(!isValidComId) return {status:false,message:"invalid communityid"};
 
            const parseId = communityDBRepository.parseId(communityId);
            const community = await communityDBRepository.getCommunityDetails(parseId)
            return {status:false,message:"invalid communityid",data:community};

            
        } catch (error) {

            throw new Error(error.message)
            
        }

        
    }

}

