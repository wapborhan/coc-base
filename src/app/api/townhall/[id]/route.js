import { connectDatabase } from "../../../../utils/db/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { id } = req.params;
  const filter = { id: id };

  const db = await connectDatabase();
  const post = await db.collection("townhall").findOne(filter);

  return NextResponse.json(post);
};
