const grpc = require("@grpc/grpc-js")
const auth_grpc = require("../../interfaces/proto/pb/auth/auth_grpc_pb")
const autherizationController = require('../../interfaces/controller/autherizationController')
const userProfileController = require('../../interfaces/controller/userProfileController')
const adminController = require('../../interfaces/controller/adminController')
const communityController = require('../../interfaces/controller/communityController')
const conferenceController = require('../../interfaces/controller/userConferenceController')

const server = new grpc.Server();
 
server.addService(auth_grpc.AutharizationService,{
    validName:autherizationController.validName,
    otpRequest:autherizationController.otpRequest,
    userSignup:autherizationController.userSignup,
    userLogin:autherizationController.userLogin,
    resendOtp:autherizationController.resendOtp,
    adminLogin:adminController.adminLogin,
    getUsers:adminController.getUsers,
    manageUser:adminController.manageUser,
    getInterest:adminController.getInterest,
    addInterest:adminController.addInterest,
    manageInterest:adminController.manageInterest,
    forgotPasswordOtp:autherizationController.forgotPasswordOtp,
    forgotPasswordValidateOtp:autherizationController.forgotPasswordValidateOtp,
    forgotPasswordChangePassword:autherizationController.forgotPasswordChangePassword,
    googleLogin:autherizationController.googleLogin,
    validateUser:autherizationController.validateUser,
    changeUserName:userProfileController.changeUserName,
    changeEmail:userProfileController.changeEmail,
    changeEmailVerifyOtp:userProfileController.changeEmailVerifyOtp,
    changePassword:userProfileController.changePassword,
    changePhoneNumberOtp:userProfileController.changePhoneNumberOtp,
    changePhoneNumber:userProfileController.changePhoneNumber,
    changeAvatar:userProfileController.changeAvatar,
    removeAvatar:userProfileController.removeAvatar,
    createCommunity:communityController.createCommunity,
    joinCommunity:communityController.joinCommunity,
    leaveCommunity:communityController.leaveCommunity,
    acceptJoinCommunity:communityController.acceptJoinCommunity,
    removeMember:communityController.removeMember,
    addModerator:communityController.addModerator,
    addMember:communityController.addMember,
    deleteCommunity:communityController.deleteCommunity,
    manageCommunity:communityController.manageCommunity,
    getInterstsUser:conferenceController.getInterstsUser,
    getActiveCommunity:communityController.getActiveCommunity,
    getUserByName:autherizationController.getUserByName,
    getAllCommunity:adminController.getAllCommunity,
    validateCommunityName:communityController.validateCommunityName,
    getCommunityById:communityController.getCommunityById,
    getUserDetails:autherizationController.getUserDetails,
    getJoinedCommunity:communityController.getJoinedCommunity,
    searchCommunity:communityController.searchCommunity,
    userGroupPermission:communityController.userGroupPermission

})

module.exports = server;