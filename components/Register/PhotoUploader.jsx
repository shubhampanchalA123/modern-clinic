"use client";

import { useRef, useState, useEffect } from "react";

export default function PhotoUploader({ file, onChange }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [file]);

  function handleFileChange(e) {
    const f = e.target.files?.[0];
    if (f) onChange(f);
  }

  function handleRemove() {
    onChange(null);
    if (inputRef.current) inputRef.current.value = null;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* Preview Box */}
      <div className="w-48 h-48 rounded-xl bg-muted flex items-center justify-center overflow-hidden shadow-soft border border-border">
        {preview ? (
          <img src={preview} alt="preview" className="object-cover w-full h-full" />
        ) : (
          <div className="text-center text-muted-foreground">No photo yet</div>
        )}
      </div>

      {/* Upload + Camera Buttons */}
      <div className="flex gap-3 w-full justify-center">

        {/* Upload Button */}
        <label className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card rounded text-sm cursor-pointer hover:bg-muted transition">
          Upload Scalp Photo
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>

        {/* Camera / Capture Button */}
        <label className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded text-sm cursor-pointer hover:opacity-90 transition shadow-soft">
          Take a Picture
          <input
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Remove Button */}
      {preview && (
        <div className="flex gap-3">
          <button
            onClick={handleRemove}
            className="px-4 py-2 bg-card border border-border rounded shadow-soft text-sm hover:bg-muted transition"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
