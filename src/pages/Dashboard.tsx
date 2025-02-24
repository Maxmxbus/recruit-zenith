
import { motion } from "framer-motion";
import { Users, Briefcase, Link as LinkIcon, Plus } from "lucide-react";

const Dashboard = () => {
  const openPositions = [
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
  ];

  const generateApplicationLink = (jobId: number) => {
    // In a real app, this would generate a unique application link
    return `https://yourdomain.com/apply/${jobId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-primary-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-primary-900">Zenith</h1>
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Post New Job
          </button>
        </div>
      </nav>

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
