import { MongoClient } from "mongodb";

let client;
let db;

async function connectDatabase() {
  if (!client || !client.isConnected()) {
    client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
  }

  db = client.db(process.env.DB_NAME);

  return db;
}

export { connectDatabase };
