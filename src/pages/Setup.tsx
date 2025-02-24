
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Upload, ArrowRight } from "lucide-react";

const Setup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    description: "",
    values: "",
    trainingData: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    // For now, we'll just navigate to the dashboard
    navigate("/dashboard");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary-200">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="font-display text-2xl font-bold text-primary-900">Zenith</h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Company Setup
            </span>
            <h1 className="mt-6 text-4xl font-display font-bold text-primary-900">
              Tell us about your company
            </h1>
            <p className="mt-4 text-primary-600">
              This information will help us optimize your recruitment process
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="glass-card rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="industry">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select an industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="companySize">
                  Company Size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="description">
                  Company Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="values">
                  Company Values
                </label>
                <textarea
                  id="values"
                  name="values"
                  value={formData.values}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]"
                  placeholder="Enter your company's core values..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-700" htmlFor="trainingData">
                  Training Data
                </label>
                <textarea
                  id="trainingData"
                  name="trainingData"
                  value={formData.trainingData}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]"
                  placeholder="Enter any specific requirements, past successful hires, or other relevant information..."
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Continue to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default Setup;
