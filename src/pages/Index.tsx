
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseIcon, Users, Building } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-primary-50 to-primary-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-primary-900">Zenith</h1>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-primary-600 hover:text-primary-800 transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-primary-600 hover:text-primary-800 transition-colors">
              Solutions
            </a>
            <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Revolutionizing Recruitment
          </span>
          <h1 className="mt-6 text-5xl font-display font-bold text-primary-900 leading-tight">
            Transform Your Hiring Process with AI-Powered Intelligence
          </h1>
          <p className="mt-6 text-lg text-primary-600">
            Streamline your recruitment workflow with cutting-edge AI technology, making hiring faster,
            smarter, and more efficient than ever before.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-white text-primary-900 rounded-lg hover:bg-primary-50 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center">
              <BriefcaseIcon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">
              AI-Powered Screening
            </h3>
            <p className="mt-2 text-primary-600">
              Automatically screen and rank candidates based on skills and experience
            </p>
          </div>

          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">
              Smart Matching
            </h3>
            <p className="mt-2 text-primary-600">
              Match candidates with the perfect role using advanced AI algorithms
            </p>
          </div>

          <div className="glass-card rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">
              Company Integration
            </h3>
            <p className="mt-2 text-primary-600">
              Seamlessly integrate with your existing workflows and systems
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
