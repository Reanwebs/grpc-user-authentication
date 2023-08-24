const User = require("../models/userModel")


const findUserName =async (userName)=>{
    try {
        const user = await User.findOne({userName:userName})
        return user;   
    } catch (error) {
        throw new Error("Error in finding user by name")        
    }
}

const findExistingUser = async (email,number)=>{
    try{
        console.log(email,number);
        const user = await User.findOne({$or:[{email:email},{mobNo:number}]})
        console.log(user);
        return user;

    }catch{
        throw new Error("Error in validating user data") 
    }
}

module.exports = {
    findUserName,
    findExistingUser
}