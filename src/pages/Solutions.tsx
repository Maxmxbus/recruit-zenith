
import { motion } from "framer-motion";
import { Building, Users, Briefcase, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
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
            Tailored Solutions for Every Business
          </h1>
          <p className="text-lg text-primary-600">
            Whether you're a startup or enterprise, our AI-powered recruitment platform adapts to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-lg p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Enterprise</h3>
            <ul className="space-y-3 text-primary-600 mb-8">
              <li>• Custom workflow automation</li>
              <li>• Advanced analytics and reporting</li>
              <li>• Multi-department management</li>
              <li>• API integration capabilities</li>
              <li>• Dedicated support team</li>
            </ul>
            <button 
              onClick={() => navigate("/setup")}
              className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-lg p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Growing Teams</h3>
            <ul className="space-y-3 text-primary-600 mb-8">
              <li>• Scalable hiring solutions</li>
              <li>• Team collaboration tools</li>
              <li>• Basic analytics</li>
              <li>• Interview scheduling</li>
              <li>• Email templates</li>
            </ul>
            <button 
              onClick={() => navigate("/setup")}
              className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-lg p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Startups</h3>
            <ul className="space-y-3 text-primary-600 mb-8">
              <li>• Essential AI features</li>
              <li>• Simple job posting</li>
              <li>• Basic candidate tracking</li>
              <li>• Interview assistance</li>
              <li>• Email notifications</li>
            </ul>
            <button 
              onClick={() => navigate("/setup")}
              className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Solutions;
