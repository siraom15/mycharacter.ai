import { ResponseData, Story } from "@/interface";
import { NextRequest, NextResponse } from "next/server";
import { stories } from "@/utils/sample-data";

// To handle a GET request to /api
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const story = stories.find(story => story.id == id);
    if (!story) {
        return NextResponse.json({ message: 'Story not found' }, { status: 404 });
    }

    return NextResponse.json(story, { status: 200 });
}