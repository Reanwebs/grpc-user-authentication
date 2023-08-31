const Admin = require("../models/adminModel")
const Interest = require("../models/interestModel")

const validateAdmin = async (email)=>{
    try {
        const admin = await Admin.findOne({email})
        console.log(admin);
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