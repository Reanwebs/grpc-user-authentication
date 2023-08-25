const grpc = require("@grpc/grpc-js")
const auth_grpc = require("../../interfaces/proto/pb/auth_grpc_pb")
const {validName,otpRequest,userSignup,userLogin,resendOtp} = require("../../interfaces/controller/autherizationController")

const server = new grpc.Server();

server.addService(auth_grpc.AutharizationService,{
    validName,
    otpRequest,
    userSignup,
    userLogin,
    resendOtp
    
})

module.exports = server;