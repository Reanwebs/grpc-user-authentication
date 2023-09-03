const {OAuth2Client} = require('google-auth-library');
const configKeys = require('../../application/config/config')


const client = new OAuth2Client(configKeys.GOOGLE_AUTH_CLIENT)

const verify = async(token)=>{
    const user = {
        userName:'',
        email:''
    }
    console.log(token,"token in verify");
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:configKeys.GOOGLE_AUTH_CLIENT
    })
    console.log(ticket,"ticket in verify");

    const payload = ticket.getPayload();

    console.log(payload,"payload in verify");
    if(payload?.given_name && payload?.email){
        user.userName=payload.given_name,
        user.email=payload.email;
    }
    return user;
}

module.exports = verify;


