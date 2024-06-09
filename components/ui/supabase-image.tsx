"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface SupabaseImageProps {
  url: string;
  width: number;
  height: number;
  aspectRatio?: "portrait" | "square";
  canUpdate?: boolean;
  updateCallback?: (newPath: string) => void;
}

export const SupabaseImage = ({
  url,
  width,
  height,
  aspectRatio = "portrait",
  canUpdate = false,
  updateCallback,
}: SupabaseImageProps) => {
  const supabase = createClient();
  const [imgUrl, setImgUrl] = useState<string>(url);
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    const downloadImage = async (path: string) => {
      setLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from("images")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setImgUrl(url);
      } catch (error) {
        console.log(
          "Error downloading image: ",
          error,
          "Using dummy image instead",
        );
        setImgUrl("/img/dummy.png");
      } finally {
        setLoading(false);
      }
    };

    if (url) downloadImage(url);
  }, [url, canUpdate, supabase]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }
      if (!updateCallback) throw new Error("No update callback provided.");
      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${file.name}-${Math.random()}.${fileExt}`;

      if (file) {
        const { data, error } = await supabase.storage
          .from("images")
          .upload(filePath, file);

        if (error) {
          console.error("Error uploading file:", error);
        } else {
          const newUrl = URL.createObjectURL(file);
          setImgUrl(newUrl);
          if (updateCallback) updateCallback(filePath);
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-md relative">
      {loading ? (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      ) : (
        <Image
          src={imgUrl}
          alt="Story Cover"
          width={width}
          height={height}
          className={cn(
            "object-cover transition-all hover:scale-105 w-full",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          )}
        />
      )}
      {canUpdate && (
        <div className="rounded-full mt-5">
          <Label
            className={cn(
              uploading && "text-gray-500 animate-pulse",
              "cursor-pointer bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-teal-400 to-yellow-400 hover:bg-gradient-to-tr ",
            )}
            htmlFor="single"
          >
            <PencilSquareIcon className="h-5 w-5 mr-2" />
            {uploading ? "Updating" : "Update"} Image
          </Label>
          <input
            style={{
              visibility: "hidden",
              position: "absolute",
            }}
            type="file"
            id="single"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      )}
    </div>
  );
};
