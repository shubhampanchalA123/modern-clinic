"use client";

export default function useBaseURL() {
  if (typeof window !== "undefined") {
    return window.location.origin; // auto-detects IP + port
  }
  return "";
}
