const grpc = require('@grpc/grpc-js')
const CommunityUseCase = require('../../application/useCase/communityUseCase')
const auth_pb = require('../../interfaces/proto/pb/auth/auth_pb')

const createCommunity = async (call,response)=>{
    try {
         const [adminId,communityName,moderators,members,description,joinedType] = call.request.array;
         const status = await CommunityUseCase.createCommunityUseCase({adminId,communityName,moderators,members,description,joinedType})
         console.log(status);
         const replay = new auth_pb.CreateCommunityResponse();
         replay.setStatus(200);
         replay.setMessage("community created successfully");
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
    createCommunity
}