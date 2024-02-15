import { connectDatabase } from "../../../../db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDatabase();
  // const posts = await db.collection("portfolio").find({}).toArray();
  const posts = await db.collection("allData").find({}).toArray();

  return NextResponse.json(posts);
};
