"use client";

import VideoModal from "@/components/modal/VideoModal";
import { useState } from "react";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsModalOpen(true)}
        className="inline-flex min-w-max items-center justify-center rounded-md px-8 py-2 cursor-pointer text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11"
      >
        <svg
          aria-hidden="true"
          className="h-3 w-3 flex-none fill-teal-500 group-active:fill-current"
        >
          <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
        </svg>
        <span className="ml-3">Watch video</span>
      </div>
      <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default VideoSection;
