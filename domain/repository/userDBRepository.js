const User = require("../models/userModel")


const findUserName =async (userName)=>{
    try {
        const user = await User.findOne({userName:userName})
        return user;   
    } catch (error) {
        throw new Error("Error in finding user by name")        
    }
}

module.exports = {
    findUserName
}