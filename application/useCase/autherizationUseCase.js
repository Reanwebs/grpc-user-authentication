const userDBRepository = require("../../domain/repository/userDBRepository")

const validateName = async (userName)=>{
    try {
     const user = await userDBRepository.findUserName(userName)
     if(user) return false;
     else return true;   
    } catch (error) {
        throw new Error("Error in finding user by name")
    }
}

module.exports = {
    validateName
}