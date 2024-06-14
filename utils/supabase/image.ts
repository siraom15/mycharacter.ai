"use client";

import { createClient } from "./client";

interface UploadImageProps {
    bucket_name: string;
    filePath: string;
    file: File;
}
export async function uploadImage({ bucket_name, filePath, file }: UploadImageProps) {
    console.log("uploadImage", bucket_name, filePath, file);

    const supabase = createClient();
    const { data, error } = await supabase.storage.from(bucket_name).upload(filePath, file);
    if (error) {
        console.error(error);
        throw error;
    }
    return data;
}