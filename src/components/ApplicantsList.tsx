
import { motion } from "framer-motion";
import { User } from "lucide-react";

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
  return (
    <div className="space-y-4">
      {applicants.map((applicant) => (
        <motion.div
          key={applicant.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-lg p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <User className="w-6 h-6 text-accent" />
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
