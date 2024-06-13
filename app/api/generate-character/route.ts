import { ResponseData } from "@/interface";
import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest, response: NextResponse<ResponseData>) {
    // Do whatever you want
    return NextResponse.json({ message: "OK" }, { status: 200 });
}

interface CreateCharacter {
    prompt: string;
}
export async function POST(request: NextRequest, response: NextResponse<ResponseData>) {
    // Do whatever you want
    try {
        const req = await request.json(); // possible internal error here if the request is not JSON format
        const { prompt } = req as CreateCharacter;
        if (!prompt) {
            throw new Error("Prompt is required");
        }

        // send prompt to api
        const url = process.env.WIZMODEL_API_ENDPOINT as string;
        console.log("url:", url);

        const data = {
            prompt: prompt,
            steps: 100,
        };
        console.log("data:", data);
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.WIZMODEL_TOKEN as string}`,
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        const image = result.images[0];
        return NextResponse.json({ message: "OK", image }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Fail to Create Character" }, { status: 500 });
    }
}

