import { Link } from '@remix-run/react';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
              <span className="text-purple-600">In Early Access</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-medium mb-6 leading-tight">
            Create Your Portfolio with AI Power
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            We're currently offering handcrafted portfolios for early users as we build the full AI-powered experience. Be among the first to shape the future of online presence.
          </p>
          
          <div className="flex gap-4 items-center">
            <a
              href="https://calendly.com/rohit-myporsia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Schedule a Call
            </a>
            <Link
              to="/learn-more"
              className="inline-flex items-center text-purple-600 hover:text-purple-700"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <img
            src="/assets/portfolio-preview.png"
            alt="Portfolio Preview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
} 