import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
          Welcome to Your Amazing App
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up">
          Create something extraordinary with our powerful and intuitive platform.
          Start your journey today.
        </p>
        <Button
          className="animate-fade-up"
          size="lg"
          onClick={() => window.location.href = '#features'}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;