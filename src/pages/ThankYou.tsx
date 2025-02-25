
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocation } from "react-router-dom";

interface ThankYouState {
  fullName?: string;
  jobTitle?: string;
}

const ThankYou = () => {
  const location = useLocation();
  const state = location.state as ThankYouState;

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
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-accent" />
            </div>
          </div>

          <h1 className="text-4xl font-display font-bold text-primary-900 mb-4">
            Thank You for Applying!
          </h1>
          
          <div className="glass-card rounded-lg p-8 mb-8">
            <p className="text-lg text-primary-600 mb-6">
              Dear {state?.fullName || "Candidate"},
            </p>
            <p className="text-primary-600 mb-4">
              Thank you for applying for the {state?.jobTitle || "position"} role. We appreciate the time you took to complete the application and interview process.
            </p>
            <p className="text-primary-600 mb-4">
              Our team will carefully review your application and get back to you within 5-7 business days regarding the next steps.
            </p>
            <p className="text-primary-600">
              If you have any questions in the meantime, please don't hesitate to reach out to our HR team.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-primary-500">
              A confirmation email has been sent to your registered email address.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Return to Homepage
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ThankYou;
