import { motion } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

export default function Vision() {
  // Generate random bubbles
  const bubbles: Bubble[] = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 150 + 100,
    color: i % 2 === 0 ? "#DA9CEA" : "#4553CC",
    duration: Math.random() * 20 + 15
  }));

  return (
    <div className="relative py-24 overflow-hidden">
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

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              The future of AI-powered portfolio creation
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            {/* Phase 1 - Left */}
            <div className="flex items-center mb-16">
              <div className="w-1/2 pr-12 text-right">
                <h3 className="text-xl font-medium mb-2">Phase 1: Foundation</h3>
                <p className="text-gray-600">Custom-built portfolios & user research</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-purple-600 relative">
                <div className="absolute w-px h-full bg-purple-200 left-1/2 -translate-x-1/2 top-4"></div>
              </div>
              <div className="w-1/2 pl-12"></div>
            </div>

            {/* Phase 2 - Right */}
            <div className="flex items-center mb-16">
              <div className="w-1/2 pr-12"></div>
              <div className="w-4 h-4 rounded-full bg-purple-600 relative">
                <div className="absolute w-px h-full bg-purple-200 left-1/2 -translate-x-1/2 top-4"></div>
              </div>
              <div className="w-1/2 pl-12">
                <h3 className="text-xl font-medium mb-2">Phase 2: Advanced AI</h3>
                <p className="text-gray-600">Automation & personalization (coming soon)</p>
              </div>
            </div>

            {/* Phase 3 - Left */}
            <div className="flex items-center">
              <div className="w-1/2 pr-12 text-right">
                <h3 className="text-xl font-medium mb-2">Phase 3: Integration</h3>
                <p className="text-gray-600">Integration – Ecosystem & platform tools</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="w-1/2 pl-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 