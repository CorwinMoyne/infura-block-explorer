"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-lg mx-auto p-24 text-white">
      <h2 className="mb-4">Something went wrong!</h2>
      <button
        className="underline"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => window.location.reload()
        }
      >
        Try again
      </button>
    </div>
  );
}
