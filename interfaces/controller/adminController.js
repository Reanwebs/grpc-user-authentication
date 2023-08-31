const grpc = require('@grpc/grpc-js')
const auth_pb = require("../proto/pb/auth/auth_pb")
const adminUseCase = require("../../application/useCase/adminUseCase")


const adminLogin = async (call,response)=>{
    try {
        const [email,password] = call.request.array;
        const status = await adminUseCase.adminLogin(email,password);
        const replay = new auth_pb.AdminLoginResponse()
        if(status.status){
          replay.setStatus(200);
          replay.setMessage(status.message)
          response(null,replay)
        }else{
            const error = {
                code: grpc.status.UNAUTHENTICATED,
                details: status.message
            };
            response(error,null)
        }
      } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:err.message
        }
        response(error,null)
    }
}


