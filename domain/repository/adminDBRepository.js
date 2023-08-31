const Admin = require("../models/adminModal")
const authService = require("../../interfaces/services/authService")

const validateAdmin = async (email)=>{
    const admin = await Admin.findOne({email})
    console.log(admin);
    return admin
}

module.exports={
    validateAdmin
}