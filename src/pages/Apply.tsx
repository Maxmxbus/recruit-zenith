import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Apply = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  // In a real app, this would fetch the job details from an API
  const jobDetails = {
    title: "Senior Frontend Developer",
    department: "Engineering",
    description: "We are looking for an experienced frontend developer...",
    requirements: "5+ years of experience with React...",
    location: "Remote",
    type: "Full Time",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application to your backend
    toast.success("Application submitted successfully!");
    
    // Navigate to the interview page with the applicant's name and job title
    navigate(`/interview/${jobId}`, {
      state: {
        fullName: form.fullName,
        jobTitle: jobDetails.title,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary-200">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="font-display text-2xl font-bold text-primary-900">Zenith</h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Job Application
            </span>
            <h1 className="mt-6 text-4xl font-display font-bold text-primary-900">
              {jobDetails.title}
            </h1>
            <p className="mt-4 text-primary-600">
              {jobDetails.department} · {jobDetails.location} · {jobDetails.type}
            </p>
          </div>

          <div className="glass-card rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-primary-900 mb-4">Job Description</h2>
            <p className="text-primary-600 mb-6">{jobDetails.description}</p>
            
            <h2 className="text-xl font-semibold text-primary-900 mb-4">Requirements</h2>
            <p className="text-primary-600">{jobDetails.requirements}</p>
          </div>

          <div className="glass-card rounded-lg p-8">
            <h2 className="text-xl font-semibold text-primary-900 mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="resume">
                  Resume/CV Link
                </label>
                <input
                  type="url"
                  id="resume"
                  value={form.resume}
                  onChange={(e) => setForm({ ...form, resume: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="coverLetter">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  value={form.coverLetter}
                  onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[200px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Apply;
