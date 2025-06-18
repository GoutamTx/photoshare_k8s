"use client";

import { useState } from "react";
import UploadForm from "./UploadForm";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  LayoutGrid,
  List,
  Rows,
  Search,
  Filter,
  XCircle,
} from "lucide-react";

interface SidebarProps {
  onViewChange: (view: "tiles" | "list" | "compact") => void;
  onSearch?: (query: string) => void;
  onFilterType?: (type: string) => void;
  onClearFilters?: () => void;
}

export default function Sidebar({
  onViewChange,
  onSearch,
  onFilterType,
  onClearFilters,
}: SidebarProps) {
  const [search, setSearch] = useState("");
  const [fileType, setFileType] = useState("");

  const handleSearch = () => {
    onSearch?.(search);
  };

  const handleFilter = () => {
    onFilterType?.(fileType);
  };

  return (
    <aside className="w-80 bg-white border-r p-6 shadow-sm h-screen sticky top-0 flex flex-col gap-6">
      <h2 className="text-xl font-semibold tracking-tight">Upload & Manage</h2>

      <UploadForm />

      <div>
        <Label className="mb-2 block text-sm font-medium">View Mode</Label>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onViewChange("tiles")}
            title="Tile View"
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            onClick={() => onViewChange("list")}
            title="List View"
          >
            <List className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            onClick={() => onViewChange("compact")}
            title="Compact View"
          >
            <Rows className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div>
        <Label htmlFor="search" className="block text-sm font-medium mb-2">
          Search
        </Label>
        <div className="flex gap-2">
          <Input
            id="search"
            placeholder="Search by filename"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch} variant="secondary">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <Label htmlFor="type" className="block text-sm font-medium mb-2">
          Filter by Type
        </Label>
        <div className="flex gap-2">
          <Input
            id="type"
            placeholder="e.g., image/jpeg"
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
          />
          <Button onClick={handleFilter} variant="secondary">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button onClick={onClearFilters} variant="ghost" className="mt-2 w-full">
        <XCircle className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </aside>
  );
}
