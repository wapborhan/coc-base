import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const level = await request.nextUrl.pathname.split("/").slice(-1)[0];
  try {
    const db = await connectDatabase();

    const maps = await db.collection("maps").find({ level: level }).toArray();

    if (!maps) {
      return NextResponse.json(
        { message: `Townhall ${level} No Layout Found` },
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
