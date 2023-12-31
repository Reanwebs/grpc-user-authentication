const autherizationUseCase = require("../../application/useCase/autherizationUseCase")
const auth_pb = require("../proto/pb/auth/auth_pb")
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
        const data = await autherizationUseCase.createUser(userName,email,number,password,otp,referral)
        const replay = new auth_pb.SignupResponse()
        if(data.status){
            replay.setStatus(201)
            replay.setMessage("account created successfully")
            replay.setUserid(data.userId)
            if(data.reward){
                replay.setReward(data.reward);
                replay.setRecipientid(data.reciepantId)
                replay.setRecipientname(data.userName)
            }
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
        replay.setReferralcode(status.referralCode)
        replay.setMessage(status.message)
        if(status.avatarId){
            replay.setAvatarid(status.avatarId)
        }
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

const forgotPasswordOtp = async (call,callback)=>{
    try {
        const [email] = call.request.array;
        const status = await autherizationUseCase.forgotPasswordSendOtp(email)
        const replay = new auth_pb.ForgotPasswordOtpResponse()
        if(status){
            replay.setStatus(201);
            replay.setMessage('otp send successfully');
            callback(null,replay)
        }else{
            const error = {
                code: grpc.status.NOT_FOUND,
                details: "user not found"
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

const forgotPasswordValidateOtp = async (call,callback)=>{
    try {
        const [email,otp] = call.request.array;
        const status = await autherizationUseCase.forgotPasswordValidateOtp(otp);
        const replay = new auth_pb.ForgotPasswordValidateOtpResponse()
        if(status){
            replay.setStatus(200);
            replay.setMessage("proceed change password");
            callback(null,replay)
        }else{
            const error = {
                code: grpc.status.INVALID_ARGUMENT,
                details: "in valid otp"
            };
            callback(error,null)
        } 
    } catch (err) {
        const error = {
            code: grpc.status.ABORTED,
            details: err.message
        };
        callback(error,null)
    }
}

const forgotPasswordChangePassword = async (call,callback)=>{
    try {
        const [email,password] = call.request.array;
        const status = await autherizationUseCase.forgotChangePassword(email,password);
        const replay = new auth_pb.ForgotPasswordChangePasswordResponse()
        if(status){
            replay.setStatus(200);
            replay.setMessage("password changed successfully");
            callback(null,replay)
        } 
    } catch (err) {
        const error = {
            code: grpc.status.ABORTED,
            details: err.message
        };
        callback(error,null)
        
    }

}

const googleLogin = async(call,callback)=>{
    try {
        const [token] = call.request.array;
        const status = await autherizationUseCase.googleLogin(token)
        const replay = new auth_pb.GoogleLoginResponse()
        if(status.status){
            replay.setStatus(200)
            replay.setUsername(status.userName)
            replay.setEmail(status.email)
            replay.setUid(status.userId)
            replay.setMessage(status.message)
            replay.setPhonenumber(status?.number && null)
            replay.setReferralcode(status?.referralCode)
            if(status.avatarId){
                replay.setAvatarid(status?.avatarId)
            }
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

const validateUser = async (call,callback)=>{
    try {
        const [email] = call.request.array;
        const status = await autherizationUseCase.validateUserStatus(email);
        const replay = new auth_pb.ValidateUserResponse();
        replay.setStatus(200);
        replay.setMessage("validated user status");
        replay.setIsblocked(status)
        callback(null,replay)        
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
      callback(error,null)  
    }
}

const getUserByName =  async (call,callback)=>{
    try {
        const [userName] = call.request.array;
        const data = await autherizationUseCase.getUserDetails(userName);
        const replay = new auth_pb.GetUserByNameResponse();
        const userMsg = data.map(user => {
            const userMessage = new auth_pb.user();
            userMessage.setId(user.id);
            userMessage.setUsername(user.userName);
            userMessage.setAvatarid(user.avatarId);
            return userMessage;
        });
        replay.setStatus(200);
        replay.setUsersList(userMsg)

        callback(null,replay)        
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
      callback(error,null)  
    }
}

const getUserDetails = async (call,callback)=>{
    try {
        const [userId] = call.request.array;
        const data = await autherizationUseCase.getUserDetailsById(userId)
        const replay = new auth_pb.GetUserDetailsResponse();
        replay.setUsername(data.userName)
        replay.setAvatarid(data.avatarId)
        replay.setPermission(true)
        replay.setResult("successs")
        callback(null,replay)        
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        };
      callback(error,null)  
    }
}

module.exports = {
    validName,
    otpRequest,
    userSignup,
    userLogin,
    resendOtp,
    forgotPasswordOtp,
    forgotPasswordValidateOtp,
    forgotPasswordChangePassword,
    googleLogin,
    validateUser,
    getUserByName,
    getUserDetails
}