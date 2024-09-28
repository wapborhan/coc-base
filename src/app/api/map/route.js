import { connectDatabase } from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDatabase();

    const maps = await db.collection("maps").find({}).toArray();

    if (!maps.length) {
      return NextResponse.json(
        { message: "No records found" },
        { status: 404 }
      );
    }

    return NextResponse.json(maps);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  const mapData = await request.json();

  try {
    const db = await connectDatabase();

    const maps = await db.collection("maps").insertOne(mapData);

    return NextResponse.json(maps);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
