"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
interface VideoPlayerProps {
  className?: string;
  thumbnailSrc: string;
  videoSrc: string;
}
const VideoPlayer = ({
  className,
  thumbnailSrc,
  videoSrc,
}: VideoPlayerProps) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState(false);

  return (
    <div
      className={twMerge(
        "max-w-5xl cursor-pointer relative max-h-[600px] mt-6 sm:mt-8 md:mt-12 border-[1px] border-brand-100 rounded-xl overflow-hidden",
        className
      )}
    >
      <Image
        src={thumbnailSrc}
        alt="hero"
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-auto ${playVideo ? "invisible" : "visible"}`}
      />
      <button
        onClick={() => setPlayVideo(true)}
        className={`absolute flex items-center justify-center w-10 h-10 p-0 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer md:p-5 md:w-16 md:h-16 hover:bg-background-hover bg-brand-100 top-1/2 left-1/2 ${playVideo ? "invisible" : "visible"}`}
      >
        <div className="w-3.5 h-3.5 mb-0.5 md:w-6 md:h-6">
          <Image
            src={"/icons/play.svg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            alt="play button"
          />
        </div>
      </button>
      <iframe
        width="100%"
        height="100%"
        className={`rounded-xl absolute inset-0 ${playVideo ? "block" : "hidden"}`}
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
