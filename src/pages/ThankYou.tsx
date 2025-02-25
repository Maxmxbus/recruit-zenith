import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

interface ThankYouState {
  fullName?: string;
  jobTitle?: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ThankYou = () => {
  const location = useLocation();
  const state = location.state as ThankYouState;
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm here to help answer any questions you might have about the application process. Feel free to ask!",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const userMessage = { role: "user" as const, content: currentMessage };
    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);

    // Simulate AI response - in a real app, this would call your AI endpoint
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thank you for your question. Based on our HR policies, I'd be happy to help clarify the next steps in the process.",
        },
      ]);
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
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-accent" />
              </div>
            </div>

            <h1 className="text-4xl font-display font-bold text-primary-900 mb-4">
              Thank You for Applying!
            </h1>
          </div>
          
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
              If you have any questions in the meantime, please feel free to use the chat below to speak with our HR assistant.
            </p>
          </div>

          <div className="glass-card rounded-lg p-8">
            <h2 className="text-xl font-semibold text-primary-900 mb-6">HR Assistant Chat</h2>
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
                placeholder="Ask any questions about your application..."
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

          <div className="mt-8 text-center">
            <p className="text-sm text-primary-500 mb-4">
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
