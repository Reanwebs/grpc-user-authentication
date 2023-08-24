const server = require("./application/services/autharizationService")
const connectDB = require("./domain/connectDB/db")
const configKeys = require("./application/config/config")
const grpc = require("@grpc/grpc-js")


connectDB();

server.bindAsync(`0.0.0.0:${configKeys.PORT}`,grpc.ServerCredentials.createInsecure(),(err,port)=>{
    if(err){
        console.error('Error binding :', err)
    }else{
        console.log('gRPC server running at http://0.0.0.0:' + port);
        server.start();
    }
})