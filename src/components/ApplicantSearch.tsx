
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ApplicantSearchProps {
  onSearch: (value: string) => void;
  onSuitabilityFilter: (value: "All" | "High" | "Medium" | "Low") => void;
}

export function ApplicantSearch({ onSearch, onSuitabilityFilter }: ApplicantSearchProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
        <Input
          type="text"
          placeholder="Search applicants..."
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <select
        onChange={(e) => onSuitabilityFilter(e.target.value as "All" | "High" | "Medium" | "Low")}
        className="px-4 py-2 rounded-lg border border-input bg-background"
      >
        <option value="All">All Ratings</option>
        <option value="High">High Suitability</option>
        <option value="Medium">Medium Suitability</option>
        <option value="Low">Low Suitability</option>
      </select>
    </div>
  );
}
