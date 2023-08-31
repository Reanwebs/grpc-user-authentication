const grpc = require("@grpc/grpc-js")
const auth_grpc = require("../../interfaces/proto/pb/auth/auth_grpc_pb")
const {validName,otpRequest,userSignup,userLogin,resendOtp} = require("../../interfaces/controller/autherizationController")
const {adminLogin,getUsers,manageUser,getInterest,addInterest,manageInterest} =  require("../../interfaces/controller/adminController")

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
    manageInterest
})

module.exports = server;