import { motion } from "framer-motion";
import { Users, Briefcase, Link as LinkIcon, Plus, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Job {
  id: number;
  title: string;
  department: string;
  applicants: number;
  status: string;
}

const Dashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jobForm, setJobForm] = useState({
    title: "",
    department: "",
    description: "",
    requirements: "",
    location: "",
    type: "full-time",
  });

  const [openPositions, setOpenPositions] = useState<Job[]>([
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      applicants: 12,
      status: "active",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      applicants: 8,
      status: "active",
    },
  ]);

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob = {
      id: openPositions.length + 1,
      title: jobForm.title,
      department: jobForm.department,
      applicants: 0,
      status: "active",
    };
    
    setOpenPositions([...openPositions, newJob]);
    setIsDialogOpen(false);
    setJobForm({
      title: "",
      department: "",
      description: "",
      requirements: "",
      location: "",
      type: "full-time",
    });
    toast.success("Job posted successfully!");
  };

  const generateApplicationLink = (jobId: number) => {
    return `${window.location.origin}/apply/${jobId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-primary-900">Zenith</h1>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Post New Job
          </button>
        </div>
      </nav>

      {/* Job Posting Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg w-full max-w-2xl mx-4 overflow-hidden"
          >
            <div className="p-6 border-b border-primary-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-primary-900">Post New Job</h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-primary-400 hover:text-primary-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleJobSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="title">
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={jobForm.title}
                  onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="department">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  value={jobForm.department}
                  onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="description">
                  Job Description
                </label>
                <textarea
                  id="description"
                  value={jobForm.description}
                  onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="requirements">
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  value={jobForm.requirements}
                  onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-700" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-700" htmlFor="type">
                    Job Type
                  </label>
                  <select
                    id="type"
                    value={jobForm.type}
                    onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 py-2 text-primary-600 hover:text-primary-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Post Job
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <main className="container mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">20</h2>
                <p className="text-primary-600">Total Applicants</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">2</h2>
                <p className="text-primary-600">Open Positions</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold text-primary-900 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="p-4 bg-white rounded-lg border border-primary-100 hover:border-accent transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-primary-900">{position.title}</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                    {position.applicants} applicants
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-600">{position.department}</span>
                  <button
                    onClick={() => {
                      const link = generateApplicationLink(position.id);
                      navigator.clipboard.writeText(link);
                    }}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    <span className="text-sm">Copy Application Link</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
