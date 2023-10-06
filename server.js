const server = require("./application/services/autharizationService")
const connectDB = require("./domain/connectDB/db")
const configKeys = require("./application/config/config")
const grpc = require("@grpc/grpc-js")
const fs = require('fs')


connectDB();

const serverCredentials = grpc.ServerCredentials.createSsl(
    fs.readFileSync("server-cert.pem"), // Your server certificate
    [{
      private_key: fs.readFileSync("server-key.pem"), // Your server private key
      cert_chain: fs.readFileSync("ca-cert.pem"), // Your CA certificate
    }],
    true // Check client certificate
  );

server.bindAsync(`0.0.0.0:${configKeys.PORT}`,serverCredentials,(err,port)=>{
    if(err){
        console.error('Error binding :', err)
    }else{
        console.log('gRPC server running at http://0.0.0.0:' + port);
        server.start();
    }
})