"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import PhotoList from "@/components/PhotoList";

export default function HomePage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [view, setView] = useState<"tiles" | "list" | "compact">("tiles");

  // Fetch photos from backend
  useEffect(() => {
    fetch("http://localhost:4000/photos")
      .then((res) => res.json())
      .then(setPhotos)
      .catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onViewChange={setView} />

      {/* Photo Gallery */}
      <section className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Your Uploaded Photos</h1>
        <PhotoList photos={photos} view={view} />
      </section>
    </main>
  );
}
