const nodemailer = require('nodemailer')
const configKeys = require('../../application/config/config')

const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:configKeys.EMAIL_NODE_MAILER,
        pass:configKeys.PASS_NODE_MAILER
    }
})

let otp ;

const sendEmail = (email)=>{
     otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(email,"email",otp,"otp");

    setTimeout(()=>{
        otp=null;
    })

    const mailOptions = {
        from:'ajithvkallada@gmail.com',
        to: email,
        subject: 'OTP for Login',
        text: `Your OTP for verify email: ${otp}`,
      };

      transport.sendMail(mailOptions,(error,info)=>{
        if(error){
            throw new Error("error in sending mail",error);
        }else{
            console.log("email sent" ,info.response);
            return true
        }
      })
}

const verifyOTP = (enteredOtp)=>{
    if(enteredOtp === otp){
        return {status:true,message:`OTP verified`}
    }else if(otp === null){
        return{status:false,message:'OTP is expired'}
      }else{
        return {status:false,message:'OTP is invalid'}
      }
}

module.exports = {
    sendEmail,verifyOTP
}