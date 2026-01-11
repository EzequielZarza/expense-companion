import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI;
const EXPENSES_DB = process.env.EXPENSES_DB;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_ATLAS_URI, { dbName: EXPENSES_DB})
    console.log("Connection established")
  } catch (error) {
    console.log(`Error when connecting to DB: ${error}`)
  }
}

export { connectDb }