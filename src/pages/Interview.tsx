
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface InterviewState {
  fullName: string;
  jobTitle: string;
}

const Interview = () => {
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const interviewState = location.state as InterviewState;
  const [questionCount, setQuestionCount] = useState(0);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi ${interviewState?.fullName || "there"}! I'll be conducting your initial interview for the ${interviewState?.jobTitle || "position"}. Let's start with a few questions to get to know you better.`,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const userMessage = { role: "user", content: currentMessage };
    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);
    setQuestionCount((prev) => prev + 1);

    // Simulate AI response - in a real app, this would call your AI endpoint
    setTimeout(() => {
      if (questionCount >= 4) {
        // After 5 questions (including initial greeting), end the interview
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Thank you for your time! We've completed the initial interview process.",
          },
        ]);
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          navigate("/thank-you", {
            state: {
              fullName: interviewState?.fullName,
              jobTitle: interviewState?.jobTitle,
            },
          });
        }, 2000);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Thank you for your response. Here's another question related to your experience...",
          },
        ]);
      }
      setIsLoading(false);
    }, 1000);
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
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              AI Interview
            </span>
            <h1 className="mt-6 text-4xl font-display font-bold text-primary-900">
              Initial Interview
            </h1>
            <p className="mt-4 text-primary-600">
              Please answer the questions honestly and thoroughly
            </p>
          </div>

          <div className="glass-card rounded-lg p-8">
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-accent text-white"
                        : "bg-white border border-primary-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-lg bg-white border border-primary-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary-300 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary-300 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-primary-300 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Type your response..."
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !currentMessage.trim()}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Interview;
