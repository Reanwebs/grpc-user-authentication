const grpc = require("@grpc/grpc-js")
const auth_grpc = require("../../interfaces/proto/pb/auth/auth_grpc_pb")
const {validName,
      otpRequest,
      userSignup,
      userLogin,
      resendOtp,
      forgotPasswordOtp,
      forgotPasswordValidateOtp,
      forgotPasswordChangePassword,
      googleLogin,
      validateUser
    } = require("../../interfaces/controller/autherizationController")
const {adminLogin,getUsers,manageUser,getInterest,addInterest,manageInterest} =  require("../../interfaces/controller/adminController")
const {changeUserName,changeEmail,changeEmailVerifyOtp,changePassword,changePhoneNumberOtp,changePhoneNumber} = require('../../interfaces/controller/userProfileController')

const server = new grpc.Server();

server.addService(auth_grpc.AutharizationService,{
    validName,
    otpRequest,
    userSignup,
    userLogin,
    resendOtp,
    adminLogin,
    getUsers,
    manageUser,
    getInterest,
    addInterest,
    manageInterest,
    forgotPasswordOtp,
    forgotPasswordValidateOtp,
    forgotPasswordChangePassword,
    googleLogin,
    validateUser,
    changeUserName,
    changeEmail,
    changeEmailVerifyOtp,
    changePassword,
    changePhoneNumberOtp,
    changePhoneNumber
    
})

module.exports = server;