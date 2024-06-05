import { ResponseData } from "@/interface";
import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest, response: NextResponse<ResponseData>) {
    // Do whatever you want
    return NextResponse.json({ message: "OK" }, { status: 200 });
}