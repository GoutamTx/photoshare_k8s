"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      console.log("Uploaded:", data.filename);
      setFile(null);
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="photo" className="text-sm font-medium">
        Upload Photo
      </Label>
      <Input
        id="photo"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
      />
      <Button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full flex items-center gap-2"
      >
        <UploadCloud className="h-4 w-4" />
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
}
