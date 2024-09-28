import { MongoClient } from "mongodb";

let client;
let db;

async function connectDatabase() {
  try {
    if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
      throw new Error("Missing environment variables: MONGODB_URI or DB_NAME");
    }

    // Reuse the existing client if it's already connected
    if (!client) {
      client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      console.log("Connected to MongoDB");
    }

    // Reuse the existing db instance if available
    if (!db) {
      db = client.db(process.env.DB_NAME);
    }

    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; // Rethrow the error to handle it upstream
  }
}

export { connectDatabase };
