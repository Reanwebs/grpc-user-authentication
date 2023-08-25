const twilio = require("twilio")
const configKeys = require("../../application/config/config")

const accountSid = configKeys.TWILIO_ACCOUNT_SID;
const authToken = configKeys.TWILIO_AUTH_TOKEN;
const verifySid = configKeys.TWILIO_SERVICE_SSID;
const client =  twilio(accountSid, authToken);

const sendOtp = async(number)=>{
    try {
      await client.verify.v2.services(verifySid).verifications.create({to:`+91${number}`,channel:"sms"})
    } catch (error) {
        throw new Error("error in sending otp")
    }
}

const validateOtp = async(number,otp)=>{
    try {
        let response = await client.verify.v2.services(verifySid).verificationChecks.create({ to: `+91${number}`, code: otp })
        return response.valid    
    } catch (error) {  
        throw new Error("error in validating otp")
    }
}

module.exports = {
    sendOtp,validateOtp
}


