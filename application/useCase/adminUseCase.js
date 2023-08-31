const adminDBRepository = require("../../domain/repository/adminDBRepository")
const authService = require("../../interfaces/services/authService")


const adminLogin = async (email,password)=>{
    try {
        const admin = await adminDBRepository.validateAdmin(email);
    if(admin){
        const status = await authService.comparePassword(password,admin.password);
        if(status) return {status:true,message:"login authentication passed"}
        else return {status:false,message:"invalid password"}
    }
    return {status:false,message:"invalid email"}
        
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    adminLogin ,
}