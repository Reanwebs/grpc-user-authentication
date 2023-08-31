const User = require("../models/userModel")
const Wallet = require("../models/walletModel")
const authService = require("../../interfaces/services/authService")
const generateCode = require("../../interfaces/services/generateReferralCode")


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
        const user = await User.findOne({$or:[{email:email},{mobNo:number}]})
        return user;
    }catch{
        throw new Error("Error in validating user data") 
    }
}

const createUser = async (userName,email,mobNo,password,)=>{
    try {
        const hashPassword = await authService.hashPassword(password);
        const referCode = await generateCode(userName)
       const user = await User.create({
            userName,
            email,
            mobNo,
            password:hashPassword,
            referCode,
            isGoogle:false
        })
         await Wallet.create({
        userId:user._id,
        coins:0
        })

        return user;
          
    } catch (error) {
        throw new Error("error in creating user")
    }
}

 const referalCoins = async(referral,userid)=>{
    try {
        const referUser = await User.findOne({referCode:referral})
        if(referUser){
          await Wallet.findOneAndUpdate(
             {userId:userid},
             {$set:{coins:5}
         })
        }
        
    } catch (error) {
        throw new Error("error in creating referral coins")
    }
}

const findUserByEmail =async (email)=>{
    try{
        const user = await User.findOne({email})
        return user
    }catch(error){
      throw new Error("error finding user by email")
    }
}

const allUsers = async ()=>{
    try {
       const users =  await User.find({},{_id:1,userName:1,email:1,mobNo:1})
        console.log(users);
        return users    
    } catch (error) {
        console.log(error);
        throw new Error("error finding all userss")
        
    }
}

const manageUser = async (userId)=>{
    try{
        const user = await User.findById(userId)
        const newStatus = !user.isBlocked
        const status = await User.findByIdAndUpdate(userId,{
            $set:{isBlocked:newStatus}
        })
        return true
    }catch(err){
        throw new Error("err in updating user")
    }
}



module.exports = {
    findUserName,
    findExistingUser,
    createUser,
    referalCoins,
    findUserByEmail,
    allUsers,
    manageUser
}