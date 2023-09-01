const adminDBRepository = require("../../domain/repository/adminDBRepository")
const userDBRepository = require("../../domain/repository/userDBRepository")
const authService = require("../../interfaces/services/authService")


const adminLogin = async (email,password)=>{
    try {
        const admin = await adminDBRepository.validateAdmin(email);
    if(admin){
        const status = await authService.comparePassword(password,admin.password);
        if(status) return {status:true,message:"login authentication passed",uid:admin._id}
        else return {status:false,message:"invalid password"}
    }
    return {status:false,message:"invalid email"}
        
    } catch (error) {
        throw new Error(error.message)
    }
}

const getAllUsers = async ()=>{
    try {
        const users = await userDBRepository.allUsers(); 
        const parsedUsers = users.map(user => ({
            id: user._id.toString() ,
            userName :user.userName,
            email:user.email,
            phoneNumber:user.mobNo.toString(),
            status:user.isBlocked
            
        }));
        return parsedUsers  
    } catch (error) {
        throw new Error(error.message)
    }
}

const manageUser = async (userId)=>{
    try {
       return await userDBRepository.manageUser(userId)
 
    } catch (error) {
        throw new Error(error.message)
    }
}

const getAllInterest = async ()=>{
    try {
        const interests = await adminDBRepository.getAllInterest();
        const parsedInterest = interests.map(interest => ({
            id: interest._id.toString(),
            interest:interest.interest,
            status:interest.isBlocked
        }));

        return parsedInterest        
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
        
    }
}

const addInterest = async (interest)=>{
    try {
        const status = await adminDBRepository.addInterest(interest);
        return status  
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
}

const manageInterest = async (id)=>{
    try {
        const status = await adminDBRepository.manageInterest(id);
        return status        
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
}



module.exports = {
    adminLogin ,
    getAllUsers,
    manageUser,
    getAllInterest,
    addInterest,
    manageInterest

}