"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SupabaseImageProps {
  url: string;
  width: number;
  height: number;
  aspectRatio?: "portrait" | "square";
}

export const SupabaseImage = ({
  url,
  width,
  height,
  aspectRatio = "portrait",
}: SupabaseImageProps) => {
  const supabase = createClient();
  const [imgUrl, setImgUrl] = useState<string>(url);
  const [loading, setLoading] = useState<boolean>(true);

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
  }, [url, supabase]);

  return (
    <div className="overflow-hidden rounded-md">
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
    </div>
  );
};
