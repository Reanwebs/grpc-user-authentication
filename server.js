const server = require("./application/services/autharizationService")
const connectDB = require("./domain/connectDB/db")
const configKeys = require("./application/config/config")
const grpc = require("@grpc/grpc-js")
const fs = require('fs')
const tls = require('tls')


connectDB();

const caPem = fs.readFileSync('ca-cert.pem')

const certPool = tls.createSecureContext({
   ca:caPem
})

const serverCert = fs.readFileSync('server-cert.pem')
const serverKey = fs.readFileSync('server-key.pem')

const serverSecureContext = tls.createSecureContext({
  key: serverKey,
  cert: serverCert
});


const conf = tls.createServer({
  secureContext: serverSecureContext,
  requestCert: true,             // Require client certificate
  rejectUnauthorized: true,     // Reject unauthorized clients (optional)
  ca: [caPem],                   // Specify the CA certificate for client verification
}, (cleartextStream) => {
  // Handle incoming TLS connections
  // `cleartextStream` is the readable and writable stream for the connection
  console.log(cleartextStream);
});

const tlsCredentials  = grpc.credentials.createSsl()





// const serverCredentials = grpc.ServerCredentials.createSsl(
//     fs.readFileSync("server-cert.pem"), // Your server certificate
//     [{
//       private_key: fs.readFileSync("server-key.pem"), // Your server private key
//       cert_chain: fs.readFileSync("ca-cert.pem"), // Your CA certificate
//     }],
//     true // Check client certificate
//   );

server.bindAsync(`0.0.0.0:${configKeys.PORT}`,serverCredentials,(err,port)=>{
    if(err){
        console.error('Error binding :', err)
    }else{
        console.log('gRPC server running at http://0.0.0.0:' + port);
        server.start();
    }
})