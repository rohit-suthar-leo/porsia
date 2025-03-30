export default function Benefits() {
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
            d="M1482 0 
               C 1282 0, 1182 0, 1082 150
               C 982 300, 882 250, 742 250
               C 602 250, 482 300, 382 400
               C 282 500, 182 450, 0 400
               L 0 532 
               L 1482 532 Z"
            fill="#DA9CEA"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4">Benefits</h2>
            <p className="text-gray-600 text-lg">
              Why professionals choose our AI-powered platform
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Save Time */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Save Time</h3>
              <p className="text-gray-600">
                Create in minutes, not days
              </p>
            </div>

            {/* Stand Out */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Stand Out</h3>
              <p className="text-gray-600">
                Unique AI-generated content
              </p>
            </div>

            {/* Always Updated */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Always Updated</h3>
              <p className="text-gray-600">
                Automatic content updates
              </p>
            </div>

            {/* Analytics */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 mb-6">
                <svg 
                  className="w-8 h-8 text-purple-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Analytics</h3>
              <p className="text-gray-600">
                Track your performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}