import { connectDatabase } from "../../../utils/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request) => {
  try {
    const db = await connectDatabase();
    const type = request.nextUrl.searchParams.get("type");

    if (!type) {
      return NextResponse.json(
        { error: "Name parameter is missing" },
        { status: 400 }
      );
    }

    const filter = { type: type };
    const hall = await db.collection("hall").find(filter).toArray();

    if (!hall.length) {
      return NextResponse.json(
        { message: "No records found" },
        { status: 404 }
      );
    }

    return NextResponse.json(hall);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
