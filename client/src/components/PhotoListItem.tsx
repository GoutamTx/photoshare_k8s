"use client";

import Image from "next/image";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "../components/ui/card";

interface PhotoListItemProps {
  url: string;
  filename?: string;
  onPreview?: () => void;
  onDownload?: () => void;
}

export default function PhotoListItem({
  url,
  filename,
  onPreview,
  onDownload,
}: PhotoListItemProps) {
  const displayName = filename ?? url.split("/").pop();

  return (
    <Card className="flex items-center justify-between p-3 gap-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-md border">
          <Image
            src={url}
            alt={displayName ?? "Photo"}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-sm font-medium truncate max-w-[200px]">
          {displayName}
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="icon" variant="ghost" onClick={onPreview}>
          <Eye className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" onClick={onDownload}>
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
