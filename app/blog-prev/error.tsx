"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-medium mb-4">Something went wrong!</h2>
      <button
        className="bg-primary text-sm font-medium text-black py-2 px-6 rounded-full"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
