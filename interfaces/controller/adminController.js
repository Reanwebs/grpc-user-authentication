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
          replay.setUid(status.uid)
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

const getUsers = async (call,response)=>{
    try {
        const users = await adminUseCase.getAllUsers();
        console.log(users,"insidesss  controller");
        const replay = new auth_pb.GetUsersResponse()
        replay.setStatus(200);
        replay.setUsersList(users);
        replay.setMessage("user list fetched successfully");
        response(null,replay)
        
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:"error in fetching users list"
        }
        response(error,null)
    }
}

const manageUser = async (call,response)=>{
    try {
        const[userId] = call.request.array;
        const status = await adminUseCase.manageUser(userId);
        const replay = new auth_pb.ManageUserResponse()
        if(status){
            replay.setStatus(200);
            replay.setMessage("user updated successfully")
            response(null,replay)
        }
        
    } catch (err) {

          const error = {
            code:grpc.status.ABORTED,
            details:"error in blocking / unblocking user"
        }
        response(error,null)
    }

}

const getInterest = async (call,response)=>{
    try {
        const interests = await adminUseCase.getAllInterest();
        const replay = new auth_pb.GetInterestResponse()
        replay.setStatus(200);
        replay.setInterestsList(interests);
        replay.setMessage("interest fetched successfully");
        response(null,replay)
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:"error in fetching interests"
        }
        response(error,null)
        
    }
}

const addInterest = async (call,response)=>{
    try{
        const [interest] = call.request.array
        await adminUseCase.addInterest(interest)
        const replay = new auth_pb.AddInterestResponse();
        replay.setStatus(200);
        replay.setMessage("interest addedd successfully");
        response(null,replay)
    }catch(err){
        const error = {
            code:grpc.status.ABORTED,
            details:"error adding interests"
        }
        response(error,null)
    }
}

const manageInterest = async (call,response)=>{
    try {
        const [id] = call.request.array;
        const status = await adminUseCase.manageInterest(id)
        const replay = new auth_pb.ManageInterestResponse()
        if(status){
            replay.setStatus(200);
            replay.setMessage("interest updated successfully")
            response(null,replay)
        }else{
            const error = {
                code:grpc.status.UNAVAILABLE,
                details:"error updating interests"
            }
            response(error,null)

        }   
    } catch (err) {
        const error = {
            code:grpc.status.ABORTED,
            details:"error updating interests"
        }
        response(error,null)
        
    }
}

module.exports={
    adminLogin,
    getUsers,
    manageUser,
    getInterest,
    addInterest,
    manageInterest
}


