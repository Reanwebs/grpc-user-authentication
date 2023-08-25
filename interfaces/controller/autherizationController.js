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

const  userSignup = async(call,callback)=>{
    try{
        const[userName,email,number,password,cPassword,otp,referral] = call.request.array;
        const status = await autherizationUseCase.createUser(userName,email,number,password,otp,referral)
        const replay = new auth_pb.SignupResponse()
        if(status){
            replay.setStatus(201)
            replay.setMessage("account created successfully")
            callback(null,replay)
        }else{
            const error = {
                code: grpc.status.ALREADY_EXISTS,
                details: "please provide valid otp"
            };
            callback(error,null)
        }
    }catch(err){
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       callback(error,null)
    }
}

const  userLogin = async (call,callback)=>{
    try {
    const [email,password] = call.request.array;
    const status = await autherizationUseCase.loginUser(email,password)
    const replay = new auth_pb.LoginResponse()
    if(status.status){
        replay.setStatus(200)
        replay.setUsername(status.userName)
        replay.setEmail(status.email)
        replay.setPhonenumber(status.number)
        replay.setUid(status.userId)
        replay.setMessage(status.message)
        callback(null,replay)
    }else{
        const error = {
            code: grpc.status.UNAUTHENTICATED,
            details: status.message
        };
        callback(error,null)

    }
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       callback(error,null)
        
    }
}

const resendOtp = async (call,callback)=>{
    try {
        const [number] = call.request.array
        const status = await autherizationUseCase.resendOtp(number)  
        const replay = new auth_pb.resendOtpResponse()
        if(status){
            replay.setStatus(201);
            replay.setMessage("otp send successfully")
            callback(null,replay)
        }      
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
       callback(error,null)
        
    }

}


module.exports = {
    validName,otpRequest,userSignup,userLogin,resendOtp
}