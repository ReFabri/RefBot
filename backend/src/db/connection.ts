import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error(error);
    throw new Error("Cannot connect to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.error(error);
    throw new Error("Cannot disconnect from MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
