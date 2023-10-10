const mongoose = require("mongoose")
const configKeys = require("../../application/config/config")

const MAX_RETRY_ATTEMPTS = 3; 
const RETRY_DELAY_MS = 5000; 

const connectDBWithRetry = async (retryCount = 0) => {
  try {
    const dbURI = configKeys.MONGO_URI;
    const conn = await mongoose.connect(dbURI);
    console.log(`Database connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in database connection: ${error.message}`);

    if (retryCount < MAX_RETRY_ATTEMPTS) {
      console.log(`Retrying database connection in ${RETRY_DELAY_MS / 1000} seconds...`);
      setTimeout(() => {
        connectDBWithRetry(retryCount + 1); 
      }, RETRY_DELAY_MS);
    } else {
      console.error(`Maximum retry attempts reached. Exiting...`);
      process.exit(1);
    }
  }
};

module.exports = connectDBWithRetry;