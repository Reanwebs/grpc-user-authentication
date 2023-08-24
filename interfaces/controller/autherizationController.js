const autherizationUseCase = require("../../application/useCase/autherizationUseCase")
const auth_pb = require("../proto/pb/auth_pb")
const grpc = require("@grpc/grpc-js")

const validName = async(call,callback)=>{
    try {
        const [userName] = call.request.array
        const status =  await autherizationUseCase.validateName(userName)
       const replay = new auth_pb.validNameResponse()
       if(status){
        replay.setStatus(200)
        replay.setMessage("user name available ")
        callback(null,replay)
       }else{
        const error = {
            code: grpc.status.ALREADY_EXISTS,
            details: "User name not available"
        };
        callback(error,null)
      }
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:"internal server error"
        };
       callback(error,null)
    }
}
 
const otpRequest =async (call,callback)=>{
    try {
    const [userName,email,number,password] = call.request.array;
    let status =await autherizationUseCase.validateData(email,number)
    const replay = new auth_pb.OtpSignUpResponse()
    if(status){
        replay.setStatus(200)
        replay.setMessage("otp send successfully")
        callback(null,replay)
    }else{
        const error = {
            code: grpc.status.ALREADY_EXISTS,
            details: "user exists in email or password"
        };
        callback(error,null)
    }
        
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:"internal server error"
        };
       callback(error,null)
        
    }
    

    
}



module.exports = {
    validName,otpRequest
}