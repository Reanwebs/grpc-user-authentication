const grpc = require('@grpc/grpc-js')
const communityUseCase = require('../../application/useCase/communityUseCase')
const auth_pb = require('../../interfaces/proto/pb/auth/auth_pb')

const createCommunity = async (call,response)=>{
    try {
        const status = await communityUseCase.createCommunityUseCase(call.request.array)
         const replay = new auth_pb.CreateCommunityResponse();
         if(status){
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
         console.log(call.request.array)
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
        console.log(status);
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

const blockCommunity = async (call,response)=>{
    try {
        const [communityId] = call.request.array;
        const status = await communityUseCase.blockCommunity(communityId)
        const replay = new auth_pb.BlockCommunityResponse();
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


module.exports = {
    createCommunity,
    joinCommunity,
    leaveCommunity,
    acceptJoinCommunity,
    removeMember,
    addModerator,
    deleteCommunity,
    blockCommunity
}