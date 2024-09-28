import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (request) => {
  const id = await request.nextUrl.pathname.split("/").slice(-1)[0];
  try {
    const db = await connectDatabase();

    const maps = await db.collection("maps").findOne({ _id: new ObjectId(id) });

    if (!maps) {
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
