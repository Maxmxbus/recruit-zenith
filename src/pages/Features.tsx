
import { motion } from "framer-motion";
import { 
  BriefcaseIcon, 
  Users, 
  Building, 
  MessageSquare, 
  LineChart, 
  FileSpreadsheet,
  Search,
  Brain,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 onClick={() => navigate("/")} className="font-display text-2xl font-bold text-primary-900 cursor-pointer">
            Zenith
          </h1>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => navigate("/setup")}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-display font-bold text-primary-900 mb-6">
            Comprehensive Features for Modern Recruitment
          </h1>
          <p className="text-lg text-primary-600">
            Discover how our AI-powered platform transforms every aspect of your hiring process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">AI-Powered Screening</h3>
            <p className="text-primary-600">
              Automatically evaluate candidates using advanced AI algorithms that analyze skills, experience, and cultural fit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Interactive Interviews</h3>
            <p className="text-primary-600">
              Conduct AI-assisted interviews that adapt to candidates' responses while maintaining consistency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Analytics Dashboard</h3>
            <p className="text-primary-600">
              Track recruitment metrics and gain insights into your hiring pipeline with detailed analytics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Data Export</h3>
            <p className="text-primary-600">
              Export candidate data and analytics in multiple formats for easy sharing and analysis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Smart Search</h3>
            <p className="text-primary-600">
              Quickly find and filter candidates using advanced search capabilities and AI-powered matching
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Time-Saving Automation</h3>
            <p className="text-primary-600">
              Automate repetitive tasks and streamline your recruitment workflow for maximum efficiency
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Features;
