export default function HowItWorks() {
  return (
    <div className="relative bg-[#F3F0FF] py-24">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200"></div>

      {/* Background curve */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 w-full h-full"
          viewBox="0 0 1482 532"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M1482 532
               C 1300 482, 1200 32, 1000 132
               C 800 232, 700 282, 600 282
               C 400 282, 300 182, 200 132
               C 100 82, 50 132, 0 132
               L 0 0
               L 1482 0 Z"
            fill="#4553CC"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Right now, we design your site manually. Soon, AI will handle everything — from structure to content.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">1. Upload Your Work</h3>
              <p className="text-gray-600">
                Share your projects, experience, and achievements
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">2. AI Enhancement</h3>
              <p className="text-gray-600">
                Our AI optimizes your content and design
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">3. Launch & Grow</h3>
              <p className="text-gray-600">
                Your portfolio goes live with ongoing AI improvements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 