import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const RequestAccess = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger reveal animations on mount
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !reason.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both email and reason fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto link as fallback
    const subject = encodeURIComponent("Early Access Request - BlackLetter");
    const body = encodeURIComponent(`Email: ${email}\n\nReason for Request:\n${reason}`);
    
    window.location.href = `mailto:novaaestastech@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Request Initiated",
      description: "Your email client should open. Please send the email to complete your request.",
    });

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Back link */}
        <a 
          href="/"
          className="reveal inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <svg 
            className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm tracking-wide">Back to Home</span>
        </a>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl font-semibold mb-4">
            <span className="text-metallic">Request Access</span>
          </h1>
          <p className="reveal reveal-delay-2 text-muted-foreground text-lg max-w-md mx-auto">
            Join the future of legal intelligence. Tell us about yourself and why you'd like early access.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="reveal reveal-delay-3">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
              required
            />
          </div>

          <div className="reveal reveal-delay-4">
            <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
              Reason for Request
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Tell us about your practice and why BlackLetter would be valuable to you..."
              rows={5}
              className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
              required
            />
          </div>

          <div className="reveal reveal-delay-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>

        <p className="reveal reveal-delay-5 text-center text-muted-foreground text-sm mt-8">
          We'll review your request and get back to you within 48 hours.
        </p>
      </div>
    </main>
  );
};

export default RequestAccess;
