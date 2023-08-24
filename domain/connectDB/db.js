const mongoose = require("mongoose")
const configKeys = require("../../application/config/config")

const connectDB = async()=>{
    try {
        const dbURI = configKeys.MONGO_URI
        const conn = await mongoose.connect(dbURI)
        console.log(`Database connected to ${conn.connection.host}`);
        
    } catch (error) {
      console.error(`Error in database connection: ${error.message}`);
      process.exit(1);
        
    }
}

module.exports = connectDB;