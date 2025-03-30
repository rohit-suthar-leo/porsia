export default function Testimonials() {
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
            <h2 className="text-4xl font-medium mb-4">What Users Say</h2>
            <p className="text-gray-600 text-lg">
              Here's what early users are saying as we build the platform together.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm relative">
              <div className="flex items-center mb-6">
                <img 
                  src="/assets/images/img2.png"
                  alt="James Wilson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">James Wilson</h3>
                  <p className="text-gray-600 text-sm">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI-powered portfolio creator saved me countless hours. My new site looks professional and attracts more clients."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm relative">
              <div className="flex items-center mb-6">
                <img 
                  src="/assets/images/img.png"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">Sarah Chen</h3>
                  <p className="text-gray-600 text-sm">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI suggestions helped me highlight my achievements in ways I hadn't considered. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 