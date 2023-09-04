const userProfileUseCase = require('../../application/useCase/userProfileUseCase')
const auth_pb = require("../proto/pb/auth/auth_pb")
const grpc = require("@grpc/grpc-js")


const changeUserName = async (call,response)=>{
    try {
        const [userId,userName] = call.request.array;
        const data = await userProfileUseCase.changeUserName(userId,userName);
        const replay = new auth_pb.ChangeUserNameResponse()
        if(data.status){
            replay.setStatus(200)
            replay.setUsername(data.userName)
            replay.setEmail(data.email)
            replay.setPhonenumber(data.number)
            replay.setMessage(data.message)
            response(null,replay)
        }else{
            const error = {
                code: grpc.status.ALREADY_EXISTS,
                details: data.message
            };
            response(error,null)
        }
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       response(error,null)
        
    }
}

const changeEmail = async (call,response)=>{
    try {
      const[userId,email] = call.request.array;
      const data = await userProfileUseCase.changeEmail(userId,email);
      const replay = new auth_pb.ChangeEmailResponse()
      if(data.status){
        replay.setStatus(201);
        replay.setMessage(data.message)
        response(null,replay)
      }else{
        const error = {
            code: grpc.status.ALREADY_EXISTS,
            details: data.message
        };
        response(error,null)
      } 
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       response(error,null)
        
    }
    
}

const changeEmailVerifyOtp = async (call,response)=>{
    try {
        const [userId,email,otp] = call.request.array;
        const data = await userProfileUseCase.changeEmailOtpVerify(userId,email,otp);
        const replay = new auth_pb.ChangeEmailVerifyOtpResponse();
        if(data.status){
            replay.setStatus(200)
            replay.setUsername(data.userName)
            replay.setEmail(data.email)
            replay.setPhonenumber(data.number)
            replay.setMessage(data.message)
            response(null,replay)
        }else{
            const error = {
                code: grpc.status.INVALID_ARGUMENT,
                details: data.message
            };
            response(error,null)
        }  
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       response(error,null)
        
    }
}

const changePassword = async (call,response)=>{
    try {
        const [userId,password] = call.request.array;
         await userProfileUseCase.changePassword(userId,password)
        const replay = new auth_pb.ChangePasswordResponse();
            replay.setStatus(200)
            replay.setMessage("password changed successfully")
            response(null,replay)
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       response(error,null)
        
    }
}

module.exports = {changeUserName,changeEmail,changeEmailVerifyOtp,changePassword}