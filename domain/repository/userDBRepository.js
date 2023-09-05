const User = require("../models/userModel")
const Wallet = require("../models/walletModel")
const authService = require("../../interfaces/services/authService")
const generateCode = require("../../interfaces/services/generateReferralCode")
const mongoose = require('mongoose')



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
            isGoogle:false,
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
        const user = await User.findOne({email,isBlocked:false})
        console.log("user exist ",user);
        return user
    }catch(error){
      throw new Error("error finding user by email")
    }
}

const allUsers = async ()=>{
    try {
       const users =  await User.find({},{_id:1,userName:1,email:1,mobNo:1,isBlocked:1})
        return users    
    } catch (error) {
        throw new Error("error finding all userss")
        
    }
}

const manageUser = async (userId)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return false
        }
        const user = await User.findOne({_id:userId})
        if(!user) return false;
        const newStatus = !user.isBlocked
        const status = await User.findByIdAndUpdate(userId,{
            $set:{isBlocked:newStatus}
        })
        return true
    }catch(err){
        throw new Error("err in updating user")
    }
}

const findUserByNumber = async (number)=>{
    try {
        const user = await User.findOne({mobNo:number});
        if(user) return true;
        else return false;       
    } catch (error) {
        console.log(error);
        throw new Error('error in finding user by number')
    }
}

const changePassword = async (number,password)=>{
    try {
        const hashPassword = await authService.hashPassword(password);
        await User.findOneAndUpdate({mobNo:number},{$set:{password:hashPassword}})
    } catch (error) {
        throw new Error("error in changing password")
    }
}

const createUserGoogle =async  (userName,email)=>{
    try {
        const user = await findUserByEmail(email);
        if(user) return user;
        else{
          const referCode = await generateCode(userName);
          const user = await User.create({
            userName,
            email,
            referCode,
            isGoogle:true
          })
          await Wallet.create({
            userId:user._id,
            coins:0
            })
          return user;
        }
        
    } catch (error) {
        throw new Error("error in user google signup")
        
    }
}

const findUserById = async (userId)=>{
    try {
        const user = await User.findById(userId);
        return user; 
    } catch (error) {
        throw new Error('error in finding user by id')
    }
}

const changeUserName = async (userId,userName)=>{
    try {
        const user = await User.findByIdAndUpdate({_id:userId},
            {
                $set:{userName:userName}
            },
            { new: true }
            )
        return user;
    } catch (error) {
        throw new Error("error in changing user name")
    }
}

const changeEmail = async (userId,email)=>{
    try {
      const user = await User.findByIdAndUpdate({_id:userId},{
        $set:{email:email},
      },
      { new: true }
      )
        return user
    } catch (error) {
        throw new Error("error in changing email")
        
    }
}

const changePasswordProfile = async (userId,password)=>{
    try {
        const hashPassword = await authService.hashPassword(password);
        await User.findByIdAndUpdate({_id:userId},{
            $set:{password:hashPassword}
        })
        
    } catch (error) {

         throw new Error("error in changing password")
    }
}

const changePhoneNumber = async (userId,phoneNumber)=>{
    try {
        const user = await User.findByIdAndUpdate({_id:userId},{
            $set:{mobNo:phoneNumber}
        },
        { new: true }
        )
        return user;
    } catch (error) {
        
    }
}




module.exports = {
    findUserName,
    findExistingUser,
    createUser,
    referalCoins,
    findUserByEmail,
    allUsers,
    manageUser,
    findUserByNumber,
    changePassword,
    createUserGoogle,
    findUserById,
    changeUserName,
    changeEmail,
    changePasswordProfile,
    changePhoneNumber
}