import { ResponseData, Story } from "@/interface";
import { NextRequest, NextResponse } from "next/server";
import { stories } from "@/utils/sample-data";

// To handle a GET request to /api
export async function GET(request: NextRequest, response: NextResponse<Story>) {
    // Do whatever you want
    return NextResponse.json(stories, { status: 200 });
}