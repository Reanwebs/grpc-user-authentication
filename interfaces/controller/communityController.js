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
        const data = await communityUseCase.getActiveCommunities()
        const replay = new auth_pb.GetActiveCommunityResponse();
        console.log(data);
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
        const data = await communityUseCase.getActiveCommunities(id)
        console.log(data);
        // const replay = new auth_pb.GetActiveCommunityResponse();
        // console.log(data);
        // const community = data.map(community=>{
        //     const communityMsg = new auth_pb.Community();
        //     communityMsg.setId(community?._id.toString())
        //     communityMsg.setCommunityname(community?.communityName);
        //     communityMsg.setCommunitydescription(community?.description);
        //     communityMsg.setCommunityavatar(community?.communityImage);
        //     communityMsg.setMembercount(community?.members.length)
        //     return communityMsg;
        // })
        // replay.setCommunityList(community)
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
    getCommunityById

}