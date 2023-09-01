const Admin = require("../models/adminModel")
const Interest = require("../models/interestModel")
const mongoose = require("mongoose")

const validateAdmin = async (email)=>{
    try {
        const admin = await Admin.findOne({email})
        return admin
        
    } catch (error) {
        console.log(error,"errrr in admin db repository");
        throw new Error("error in logging admin")
    }
    
}

const getAllInterest = async ()=>{
    try {
        const interest = await Interest.find({},{_id:1,interest:1,isBlocked:1});
        return interest
    } catch (error) {
        throw new Error("error in fetching interests")
    }
    
}

const addInterest = async (interest)=>{
    try {
        interest = interest.toLowerCase();
        const interestExists = await Interest.findOne({interest})
        if(interestExists) return false
        const data = await Interest.create({
            interest,
            isBlocked:false
        })
        return true
    } catch (error) {
        throw new Error("Error in adding interests")
        
    }
}

const manageInterest = async(id)=>{
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return false
        }
        const interest = await Interest.findOne({_id:id});
        if(interest){
            const blocked = !interest.isBlocked;
        const status = await Interest.findByIdAndUpdate(id,{
            $set:{
                isBlocked:blocked
            }
        })
        return true
        }
        return false;
        
    } catch (error) {
        throw new Error("Error managing interest")
    }
}

module.exports={
    validateAdmin,
    getAllInterest,
    addInterest,
    manageInterest
}