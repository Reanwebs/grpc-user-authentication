const Interest = require("../models/interestModel")
const mongoose = require("mongoose")

module.exports={
    getActiveInterests : async ()=>{
        try {
            const interest = await Interest.find({isBlocked:false})
            return interest
            
        } catch (error) {
            throw new Error('error in fetching interests for user')   
        } 
    }
}