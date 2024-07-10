import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    const uri = process.env.CONNECTION_URL;
    if (!uri) {
      throw new Error("CONNECTION_URL is not defined in environment variables");
    }
    console.log(`Connecting to MongoDB with URI: ${uri}`); // Log the URI

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
