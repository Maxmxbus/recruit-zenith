
import { motion } from "framer-motion";
import { User, Download, Filter } from "lucide-react";
import { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface Applicant {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  resume: string;
  coverLetter: string;
  llmSuggestions: string;
  suitability: "High" | "Medium" | "Low";
}

interface ApplicantsListProps {
  applicants: Applicant[];
}

export function ApplicantsList({ applicants }: ApplicantsListProps) {
  const [selectedApplicants, setSelectedApplicants] = useState<number[]>([]);

  const handleSelectApplicant = (applicantId: number) => {
    setSelectedApplicants(prev => 
      prev.includes(applicantId) 
        ? prev.filter(id => id !== applicantId)
        : [...prev, applicantId]
    );
  };

  const handleSelectAll = () => {
    if (selectedApplicants.length === applicants.length) {
      setSelectedApplicants([]);
    } else {
      setSelectedApplicants(applicants.map(a => a.id));
    }
  };

  const exportToSpreadsheet = (exportSelected: boolean = false) => {
    try {
      const applicantsToExport = exportSelected 
        ? applicants.filter(a => selectedApplicants.includes(a.id))
        : applicants;

      if (exportSelected && selectedApplicants.length === 0) {
        toast.error("Please select at least one applicant to export");
        return;
      }

      const worksheet = XLSX.utils.json_to_sheet(applicantsToExport.map(applicant => ({
        "Full Name": applicant.fullName,
        "Email": applicant.email,
        "Phone": applicant.phone,
        "Position": applicant.position,
        "Resume Link": applicant.resume,
        "Cover Letter": applicant.coverLetter,
        "AI Assessment": applicant.llmSuggestions,
        "Suitability Rating": applicant.suitability
      })));

      // Adjust column widths
      const columnWidths = [
        { wch: 20 }, // Full Name
        { wch: 25 }, // Email
        { wch: 15 }, // Phone
        { wch: 20 }, // Position
        { wch: 30 }, // Resume Link
        { wch: 50 }, // Cover Letter
        { wch: 50 }, // AI Assessment
        { wch: 15 }, // Suitability Rating
      ];
      worksheet["!cols"] = columnWidths;

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");

      const fileName = `applicants-export-${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(workbook, fileName);
      
      toast.success(`Successfully exported ${applicantsToExport.length} applicant(s)`);
    } catch (error) {
      toast.error("Failed to export applicants");
      console.error("Export error:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Checkbox 
            checked={selectedApplicants.length === applicants.length}
            onCheckedChange={handleSelectAll}
            id="select-all"
          />
          <label htmlFor="select-all" className="text-sm text-primary-600">
            Select All ({selectedApplicants.length}/{applicants.length})
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => exportToSpreadsheet(true)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Export Selected
          </Button>
          <Button
            onClick={() => exportToSpreadsheet(false)}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export All
          </Button>
        </div>
      </div>

      {applicants.map((applicant) => (
        <motion.div
          key={applicant.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-lg p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-4">
              <Checkbox 
                checked={selectedApplicants.includes(applicant.id)}
                onCheckedChange={() => handleSelectApplicant(applicant.id)}
              />
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary-900">{applicant.fullName}</h3>
              <p className="text-primary-600">{applicant.position}</p>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-primary-700">Contact Information</p>
                  <p className="text-sm text-primary-600">{applicant.email}</p>
                  <p className="text-sm text-primary-600">{applicant.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-700">Application Materials</p>
                  <a href={applicant.resume} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">View Resume</a>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-primary-700">Cover Letter</p>
                <p className="text-sm text-primary-600 mt-1">{applicant.coverLetter}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-primary-700">AI Assessment</p>
                <p className="text-sm text-primary-600 mt-1">{applicant.llmSuggestions}</p>
                <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm
                  ${applicant.suitability === "High" ? "bg-green-100 text-green-700" : 
                    applicant.suitability === "Medium" ? "bg-yellow-100 text-yellow-700" : 
                    "bg-red-100 text-red-700"}`}
                >
                  {applicant.suitability} Suitability
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
