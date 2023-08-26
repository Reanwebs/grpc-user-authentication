const referralCodes = require("referral-codes")

const generateCode = (userName)=>{
    const  referCode = referralCodes.generate({
                 prefix:userName,
                 length:3
           })
    return  referCode[0]
}

module.exports = generateCode