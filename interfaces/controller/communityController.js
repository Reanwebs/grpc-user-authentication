const grpc = require('@grpc/grpc-js')
const communityUseCase = require('../../application/useCase/communityUseCase')
const auth_pb = require('../../interfaces/proto/pb/auth/auth_pb')

const createCommunity = async (call,response)=>{
    try {
        const status = await communityUseCase.createCommunityUseCase(call.request.array)
         const replay = new auth_pb.CreateCommunityResponse();
         if(status.status){
         replay.setStatus(201);
         replay.setMessage("community created successfully");
         response(null,replay)

         }else{
            const  error = {
                code: grpc.status.ALREADY_EXISTS,
                details: "community already exists"
            }
            response(error,null)
         }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const joinCommunity = async (call,response)=>{
    try {
         const [userId,communityId,message] = call.request.array;
         const status = await communityUseCase.joinCommunityUseCase({userId,communityId,message})
         if (status.status) {
            const replay = new auth_pb.JoinCommunityResponse();
            replay.setStatus(201);
            replay.setMessage(status.message);
            response(null,replay)
         }else{
            const  error = {
                code: grpc.status.NOT_FOUND,
                details: status.message
            }
            response(error,null)
         }
         
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const leaveCommunity = async (call,response)=>{
    try {
        const [userId,communityId] = call.request.array;
        const status = await communityUseCase.leaveCommunityUseCase({userId,communityId})
        const replay = new auth_pb.LeaveCommunityResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.NOT_FOUND,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}


const acceptJoinCommunity = async (call,response)=>{
    try {
        const [communityId,adminId,userId] = call.request.array;

        const status = await communityUseCase.acceptJoinCommunity({communityId,adminId,userId})
        const replay = new auth_pb.AcceptJoinCommunityResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.NOT_FOUND,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const removeMember = async (call,response)=>{
    try {
        const [userId,adminId,communityId] = call.request.array;
        const status = await communityUseCase.removeMember({userId,adminId,communityId})
        const replay = new auth_pb.RemoveMemberResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.ABORTED,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const addModerator = async (call,response)=>{
    try {
        const [userId,adminId,communityId] = call.request.array;
        const status = await communityUseCase.addModerator({userId,adminId,communityId})
        const replay = new auth_pb.AddModeratorResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.PERMISSION_DENIED,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const addMember = async (call,response)=>{
    try {
        const [userId,adminId,communityId] = call.request.array;
        const status = await communityUseCase.addMember({userId,adminId,communityId})
        const replay = new auth_pb.AddMemberResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.PERMISSION_DENIED,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const deleteCommunity = async (call,response)=>{
    try {
        const [adminId,communityId] = call.request.array;
        const status = await communityUseCase.deleteCommunity({adminId,communityId})
        const replay = new auth_pb.DeleteCommunityResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.PERMISSION_DENIED,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const manageCommunity = async (call,response)=>{
    try {
        const [communityId] = call.request.array;
        const status = await communityUseCase.manageCommunity(communityId)
        const replay = new auth_pb.ManageCommunityResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.PERMISSION_DENIED,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const getActiveCommunity  = async (call,response)=>{
    try {
        const [userId] = call.request.array;
        const data = await communityUseCase.getActiveCommunities(userId)
        const replay = new auth_pb.GetActiveCommunityResponse();
        const community = data.map(community=>{
            const communityMsg = new auth_pb.Community();
            communityMsg.setId(community?._id.toString())
            communityMsg.setCommunityname(community?.communityName);
            communityMsg.setCommunitydescription(community?.description);
            communityMsg.setCommunityavatar(community?.communityImage);
            communityMsg.setMembercount(community?.members.length)
            return communityMsg;
        })  
        replay.setCommunityList(community)
        replay.setStatus(200);
        replay.setMessage('active communities fetched successfully')
        response(null,replay)
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const validateCommunityName = async (call,response)=>{
    try {
        const [communityName] = call.request.array
        const status = await communityUseCase.validateCommunityName(communityName)
        const replay = new auth_pb.ValidateCommunityNameResponse();
        if(status.status){
            replay.setStatus(200);
            replay.setMessage(status.message);
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.ALREADY_EXISTS,
                details: status.message
            }
            response(error,null)
        }
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const getCommunityById =  async (call,response)=>{
    try {
        const [id] = call.request.array
        const data = await communityUseCase.getCommunityDetails(id)
        const replay = new auth_pb.GetCommunityByIdResponse();
        if(data.status){
            const communityMsg = new auth_pb.Community();
            communityMsg.setId(data?.data?._id.toString())
            communityMsg.setCommunityname(data?.data?.communityName);
            communityMsg.setCommunitydescription(data?.data?.description);
            communityMsg.setCommunityavatar(data?.data?.communityImage);
            communityMsg.setMembercount(data?.data?.members.length)
            communityMsg.setCommunityadmin(data?.data?.adminId?.userName)
            const memberMsg = data?.data?.members.map((member)=>{
                const memberList = new auth_pb.Participants()
                memberList.setUsername(member?.userId?.userName)
                memberList.setUserid(member?.userId?._id.toString())
                memberList.setAvatarid(member?.userId?.avatarId ?member?.userId?.avatarId : '' )
                
                return memberList
            })
            replay.setCommunity(communityMsg)
            replay.setMembersList(memberMsg)
            replay.setStatus(200);
            replay.setMessage(data.message)
            response(null,replay)
        }else{
            const  error = {
                code: grpc.status.INVALID_ARGUMENT,
                details: data.message
            }
            response(error,null)

        }
       
    } catch (err) {
         console.log(err);
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const getJoinedCommunity  = async (call,response)=>{
    try {
        const [userId] = call.request.array;
        const data = await communityUseCase.getUserJoinedCommunities(userId)
        const replay = new auth_pb.GetJoinedCommunityResponse();
        if(data){
            const community = data.map(community=>{
                const communityMsg = new auth_pb.Community();
                communityMsg.setId(community?._id.toString())
                communityMsg.setCommunityname(community?.communityName);
                communityMsg.setCommunitydescription(community?.description);
                communityMsg.setCommunityavatar(community?.communityImage);
                communityMsg.setMembercount(community?.members.length)
                return communityMsg;
            })  
            replay.setCommunityList(community)
        }
        
        replay.setStatus(200);
        replay.setMessage('joined communities fetched successfully')
        response(null,replay)
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const searchCommunity  = async (call,response)=>{
    try {
        const [communityName] = call.request.array;
        const data = await communityUseCase.searchCommunities(communityName)
        const replay = new auth_pb.SearchCommunityResponse();
        if(data){
            const community = data.map(community=>{
                const communityMsg = new auth_pb.Community();
                communityMsg.setId(community?._id.toString())
                communityMsg.setCommunityname(community?.communityName);
                communityMsg.setCommunitydescription(community?.description);
                communityMsg.setCommunityavatar(community?.communityImage);
                communityMsg.setMembercount(community?.members.length)
                return communityMsg;
            })  
            replay.setCommunityList(community)
        }
        
        replay.setStatus(200);
        replay.setMessage('communities fetched successfully')
        response(null,replay)
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}

const userGroupPermission = async (call,response)=>{
    try {
        const[userId,communityId] = call.request.array
        const status = await communityUseCase.checkUserPermission(userId,communityId)
        const replay = new auth_pb.UserGroupPermissionResponse();
        replay.setPermission(status.Permission)
        response(null,replay)
    } catch (err) {
        const  error = {
            code: grpc.status.ABORTED,
            details: err.message
        }
        response(error,null)
    }
}






module.exports = {
    createCommunity,
    joinCommunity,
    leaveCommunity,
    acceptJoinCommunity,
    removeMember,
    addModerator,
    addMember,
    deleteCommunity,
    manageCommunity,
    getActiveCommunity,
    validateCommunityName,
    getCommunityById,
    getJoinedCommunity,
    searchCommunity,
    userGroupPermission

}