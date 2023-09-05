const userDBRepository = require('../../domain/repository/userDBRepository')
const {sendEmail,verifyOTP} = require('../../interfaces/services/mailService')
const otpUseCase = require("../../interfaces/services/otpService")

 

const changeUserName = async (userId,userName)=>{
    try {
        const data = await userDBRepository.findUserById(userId);
        if(data && userName !== data.userName){
            const userNameExist = await userDBRepository.findUserName(userName);
            if(userNameExist) return {status:false,message:"user name not available"}
            else{
              const user = await userDBRepository.changeUserName(userId,userName);
              return {status:true,message:"user name updated successfully",userName:user?.userName,email:user?.email,number:user?.mobNo?.toString()
            }  
         }
        } return {status:true,message:"No change in user name",userName:data?.userName,email:data?.email,number:data?.mobNo?.toString()}
        
    } catch (error) {
        throw new Error(error.message)
        
    }
}

const changeEmail = async (userId,email)=>{
    try {
        const user = await userDBRepository.findUserById(userId);
        if(user && email !== user.email){
            const userExist = await  userDBRepository.findUserByEmail(email);
            if(userExist) return {status:false,message:"user already exists in email"}
            else{
                await sendEmail(email); 
                return {status:true,message:"please enter your otp send to email"}     
            }
        }
        return {status:true,message:"no change in email"}
        
    } catch (error) {
        throw new Error(error.message)
        
    }
    
}

const changeEmailOtpVerify = async (userId,email,otp)=>{
    try {
        const data = await verifyOTP(otp);
        if(data.status){
            const user = await userDBRepository.changeEmail(userId,email);
            return {status:true,message:"user name updated successfully",userName:user?.userName,email:user?.email,number:user?.mobNo?.toString()}
        }else return {status:false,message:data.message}
    } catch (error) {
        throw new Error(error.message)
    }
}

const changePassword = async (userId,email)=>{
    try {
        await userDBRepository.changePasswordProfile(userId,email)
    } catch (error) {
        throw new Error(error.message)  
    }
}

const requestOtpToChangeNumber = async (userId,phoneNumber)=>{
    try {
        const user = await userDBRepository.findUserById(userId);
        if(user && phoneNumber !== user?.mobNo?.toString()){
            const status = await userDBRepository.findUserByNumber(phoneNumber);
            if(!status) {
                await otpUseCase.sendOtp(phoneNumber);
                return {status:201,message:"otp send to your number"}
            }
            else return {status:false,message:"user already exists in phone number"}
        }
        return {status:true,message:"No change in phone number"}
    } catch (error) {
        throw new Error (error.message)
        
    }
}

const changePhoneNumber = async (userId,phoneNumber,otp)=>{
    try {
        const status = await otpUseCase.validateOtp(phoneNumber,otp)
        console.log(status,"status");
        if(status){
          const user = await userDBRepository.changePhoneNumber(userId,phoneNumber)
          return {status:true,message:"phone number  updated successfully",userName:user?.userName,email:user?.email,number:user?.mobNo?.toString()}
        }else{
          return {status:false,message:"invalid otp"}
        }   
    } catch (error) {
        throw new Error(error.message)     
    }
}

module.exports={
    changeUserName,changeEmail,changeEmailOtpVerify,changePassword,requestOtpToChangeNumber,changePhoneNumber
}