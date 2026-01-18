import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();

const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI;
const EXPENSE_COMPANION_DB = process.env.EXPENSE_COMPANION_DB;

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_ATLAS_URI!, { dbName: EXPENSE_COMPANION_DB})
    console.log("Connection established")
  } catch (error) {
    console.log(`Error when connecting to DB: ${error}`)
  }
}

export { connectDb }
