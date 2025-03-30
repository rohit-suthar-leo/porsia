export default function Features() {
  return (
    <div className="relative">
      {/* Background curve */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 w-full h-full"
          viewBox="0 0 1482 532"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 
               C 200 0, 300 0, 400 150
               C 500 300, 600 250, 740 250
               C 880 250, 1000 300, 1100 400
               C 1200 500, 1300 450, 1482 400
               L 1482 532 
               L 0 532 Z"
            fill="#DA9CEA"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">What We're Building</h2>
            <p className="text-gray-600 text-lg">
              Currently in development — working with real professionals to shape what comes next
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* SEO Optimization */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                AI-powered SEO tools to help your portfolio rank higher in search results
              </p>
            </div>

            {/* Professional Credibility */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Professional Credibility</h3>
              <p className="text-gray-600">
                Build trust with a polished online presence that showcases your expertise
              </p>
            </div>

            {/* Enhanced Visibility */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Enhanced Visibility</h3>
              <p className="text-gray-600">
                Get discovered by potential clients with AI-optimized content
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
    </div>
  );
} 