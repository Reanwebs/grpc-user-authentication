const userDBRepository = require("../../domain/repository/userDBRepository")
const otpUseCase = require("./authOtpUseCase")

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
        throw new Error("Error in sending otp ")
    }
} 




module.exports = {
    validateName,
    validateData
}