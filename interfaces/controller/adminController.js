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
        console.log(users);
        const replay = new auth_pb.GetUsersResponse()
        replay.setStatus(200);
        replay.setMessage("user list fetched successfully");
        const usermsg = users.map(user => {
            const userMessage = new auth_pb.user();
            userMessage.setId(user.id);
            userMessage.setUsername(user.userName);
            userMessage.setEmail(user.email);
            userMessage.setPhonenumber(user.phoneNumber);
            userMessage.setStatus(user.status)
            return userMessage;
        });
        replay.setUsersList(usermsg)
        response(null,replay)
        
    } catch (err) {
        console.log(err);
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
        }else{
            const error = {
                code:grpc.status.NOT_FOUND,
                details:"user not found"
            }
            response(error,null)
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
        replay.setMessage("interest fetched successfully");
        const interstMsg = interests.map(interest => {
            const interestMessage = new auth_pb.interest();
            interestMessage.setId(interest.id);
            interestMessage.setInterest(interest.interest);
            interestMessage.setStatus(interest.status);
            return interestMessage;
        });
        replay.setInterestsList(interstMsg)
        response(null,replay)
    } catch (err) {
        console.log(err);
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
        const status = await adminUseCase.addInterest(interest)
        const replay = new auth_pb.AddInterestResponse();
        if(status){
            replay.setStatus(200);
            replay.setMessage("interest addedd successfully");
            response(null,replay)
        }else{
            const error = {
                code:grpc.status.ALREADY_EXISTS,
                details:"interest already exists"
            }
            response(error,null)
        }
        
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
                details:"interest not fount"
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


