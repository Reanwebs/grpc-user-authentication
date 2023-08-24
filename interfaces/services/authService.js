const bcrypt = require("bcryptjs")

const hashPassword =async (password)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const  hashedPassword = await bcrypt.hash(password,salt)
        return hashedPassword
    }catch(error){
        console.log(error);
        // throw new Error("error in password hashing")

    }
}

const comparePassword = (password,hashPassword)=>{
    return bcrypt.compare(password,hashPassword)
}

module.exports = {
    hashPassword,comparePassword
}
