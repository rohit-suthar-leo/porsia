import { useEffect } from 'react';
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

declare global {
  interface Window {
    tf: any;
  }
}

export default function GetStarted() {
  // Generate random bubbles
  const bubbles: Bubble[] = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 150 + 100,
    color: i % 2 === 0 ? "#DA9CEA" : "#4553CC",
    duration: Math.random() * 20 + 15
  }));

  useEffect(() => {
    // Create and load the Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    
    script.onload = () => {
      // Initialize Typeform after script loads
      if (window.tf) {
        window.tf.createWidget();
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#F3F0FF] py-24 overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200"></div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full blur-lg"
          style={{
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: 0.25,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backdropFilter: 'blur(8px)',
            mixBlendMode: 'multiply',
          }}
          animate={{
            y: [0, -70, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Get Started Today</h2>
          <p className="text-gray-600 text-lg">
            Want to be an early user? We're currently offering personalized profiles while building the AI experience.
          </p>
        </div>

        {/* Typeform */}
        <div className="max-w-3xl mx-auto">
          <div data-tf-live="01JQE71XQ9HYQDQ458N1VEB6GB"></div>
        </div>
      </div>
    </div>
  );
} 