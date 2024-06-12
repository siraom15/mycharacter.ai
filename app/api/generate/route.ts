import { ResponseData } from "@/interface";
import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest, response: NextResponse<ResponseData>) {
    // Do whatever you want
    return NextResponse.json({ message: "OK" }, { status: 200 });
}

interface CreateCharacter {
    name: string;
    prompt: string;
    cover: string;
    story_id: string;
}
export async function POST(request: NextRequest, response: NextResponse<ResponseData>) {
    // Do whatever you want
    return NextResponse.json({ message: "OK" }, { status: 200 });
}