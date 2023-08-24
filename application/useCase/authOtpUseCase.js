const twilio = require("twilio")
const configKeys = require("../config/config")

const accountSid = configKeys.TWILIO_ACCOUNT_SID;
const authToken = configKeys.TWILIO_AUTH_TOKEN;
const verifySid = configKeys.TWILIO_SERVICE_SSID;
const client =  twilio(accountSid, authToken);

const sendOtp = async(number)=>{
    try {
     const response = await client.verify.v2.services(verifySid).verifications.create({to:`+91${number}`,channel:"sms"})
    if(response.status === "pending") return true  
    else return false 
    } catch (error) {
        throw new Error("error in sending otp")
    }
    
}

const validateOtp = async(number,otp)=>{
    try {
        let response = await client.verify.v2.services(verifySid ).verificationChecks.create({ to: `+91${number}`, code: otp })
        if(response.valid) return true
        else  return false
        
    } catch (error) {
        throw new Error("error in validating  otp")
    }
}

module.exports = {
    sendOtp,validateOtp
}


