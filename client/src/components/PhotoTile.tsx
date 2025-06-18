"use client";

import Image from "next/image";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";

interface PhotoTileProps {
  url: string;
  filename?: string;
  onPreview?: () => void;
  onDownload?: () => void;
}

export default function PhotoTile({ url, filename, onPreview, onDownload }: PhotoTileProps) {
  const displayName = filename ?? url.split("/").pop();

  return (
    <Card className="overflow-hidden shadow-md">
      <CardContent className="p-0">
        <Image
          src={url}
          alt={displayName ?? "Photo"}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
      </CardContent>
      <CardFooter className="flex items-center justify-between p-3 bg-muted">
        <span className="text-xs text-muted-foreground truncate">{displayName}</span>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" onClick={onPreview}>
            <Eye className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={onDownload}>
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
