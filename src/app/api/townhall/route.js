import { connectDatabase } from "../../../utils/db/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDatabase();
  const posts = await db.collection("townhall").find({}).toArray();

  return NextResponse.json(posts);
};
