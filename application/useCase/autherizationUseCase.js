const userDBRepository = require("../../domain/repository/userDBRepository")
const otpUseCase = require("../../interfaces/services/otpService")
const authService = require("../../interfaces/services/authService")
const verify = require('../../interfaces/services/googleAuthService')


const validateName = async (userName)=>{
    try {
     const user = await userDBRepository.findUserName(userName)
     if(user) return false;
     else return true;   
    } catch (error) {
        throw new Error("Error in finding user by name")
    }
}

const validateData = async (email,number)=>{
    try {
        const user = await userDBRepository.findExistingUser(email,number)
        if(user) return false;
        else {
         await otpUseCase.sendOtp(number)
         return true
        }
    } catch (error) {
        console.log(error);
        throw new Error("Error in sending otp ")
    }
} 

const createUser = async (userName,email,number,password,otp,referral)=>{
    try{
        const status = await otpUseCase.validateOtp(number,otp)  
        if(status){
         const user =  await userDBRepository.createUser(userName,email,number,password) 
           if(referral){
             await userDBRepository.referalCoins(referral,user._id)
            }
        return true
        }else{
            return false
        }
    }catch(error){
        throw new Error(error.message)
    }
}

const loginUser = async(email,password)=>{
    try{
        const user = await userDBRepository.findUserByEmail(email)
        if(!user) return {status:false,message:"No account matches the entered email "}
        else{
          const status = await authService.comparePassword(password,user.password)
          if(!status) return {status:false,message:"Invalid password"}
        }
        return {status:true,message:"loggedin successfully",
        userName:user.userName,email:user.email,number:user.mobNo.toString(),userId:user._id.toString(),avatarId:user?.avatarId}
    }catch(error){
        console.log(error);
       throw new Error(error.message)
    }
}

const resendOtp = async (number)=>{
    try{       
      await otpUseCase.sendOtp(number)
      return true
    }catch(error){
        throw new Error("error in resend otp")
    }
}

const forgotPasswordSendOtp = async (number)=>{
    try {
        const status = await userDBRepository.findUserByNumber(number);
        if(status){
            await otpUseCase.sendOtp(number);
            return true
        }else return false
        
    } catch (error) {
        throw new Error(error.message)
        
    }

}

const forgotPasswordValidateOtp = async(number,otp)=>{
    try {
        const status = await otpUseCase.validateOtp(number,otp);
        if(status) return true;
        else return false;
    } catch (error) {
        throw new Error("error in validating otp") 
    }
}

const forgotChangePassword = async (number,password)=>{
    try {
        await userDBRepository.changePassword(number,password)
        return true
    } catch (error) {   
        throw new Error(error,message)
    }
}

const googleLogin = async (token)=>{
    try {
        const data = await verify(token);
        const user = await userDBRepository.createUserGoogle(data.userName,data.email);
        if(user)return {status:true,message:"loggedin successfully",
        userName:user?.userName,email:user?.email,number:user?.mobNo?.toString(),userId:user._id.toString(),avatarId:user?.avatarId}
        else return {status:false,message:"failed to create user"}
    } catch (error) {
        throw new Error(error.message)
        
    }

}

const validateUserStatus = async (email)=>{
    try {
        const user = await userDBRepository.findUserByEmail(email);
        if(user) return false
        else return true
    } catch (error) {
        throw new Error(error.message)
    }
}

const getUserDetails= async (userName)=>{
    try {
        const user = await userDBRepository.searchUser(userName);
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    validateName,
    validateData,
    createUser,
    loginUser,
    resendOtp,
    forgotPasswordSendOtp,
    forgotPasswordValidateOtp,
    forgotChangePassword,
    googleLogin,
    validateUserStatus,
    getUserDetails
}