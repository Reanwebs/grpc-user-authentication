const auth_pb = require("../proto/pb/auth/auth_pb")
const grpc = require("@grpc/grpc-js")
const conferenceUseCase = require('../../application/useCase/conferenceUseCase')

const getInterstsUser = async  (call,response)=>{
    try {
        const data = conferenceUseCase.getInterests()
        const replay = new auth_pb.GetInterstsUser()
        const interst = data.map(data => {
            const interestMessage = new auth_pb.UserInterest();
            interestMessage.setInterest(data)
            return interestMessage;
        });
        replay.setInterstsListt(interst);
        replay.setStatus(200)
        replay.setMessage('interest fetched successfully')
        response(null,replay)
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       response(error,null)
    }
}

module.exports = {
    getInterstsUser
}