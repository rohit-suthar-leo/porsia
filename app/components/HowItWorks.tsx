import {
  HiOutlineSparkles,
  HiOutlinePencilAlt,
  HiOutlineCheckCircle,
  HiOutlineArrowRight
} from "react-icons/hi";

export default function HowItWorks() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            So Simple, It Feels Like Cheating
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3 steps. 5 minutes. Professional website. Done.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 hidden md:block"></div>

          {/* Step 1 */}
          <div className="relative mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1 md:text-right">
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                    STEP 1 • 30 seconds
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Tell AI About Your Business</h3>
                  <p className="text-gray-600 mb-4">
                    "I'm a yoga instructor in Mumbai. I teach Hatha and Vinyasa."
                  </p>
                  <p className="text-gray-500 text-sm">
                    That's it. AI understands and starts building.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                <HiOutlinePencilAlt className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1 hidden md:block"></div>
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                <HiOutlineSparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                  <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                    STEP 2 • 3 minutes
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Builds Your Website</h3>
                  <p className="text-gray-600 mb-4">
                    Watch AI write your content, design your layout, optimize for Google, and create your professional brand.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <HiOutlineCheckCircle className="w-5 h-5 text-purple-600" />
                      <span>Professional copy written</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <HiOutlineCheckCircle className="w-5 h-5 text-purple-600" />
                      <span>Beautiful design applied</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <HiOutlineCheckCircle className="w-5 h-5 text-purple-600" />
                      <span>SEO optimized automatically</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1 md:text-right">
                <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                    STEP 3 • 90 seconds
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Customize & Launch</h3>
                  <p className="text-gray-600 mb-4">
                    Pick your colors, upload logo (optional), and hit publish. Your professional website is live.
                  </p>
                  <p className="text-green-600 font-bold text-lg">
                    Done. That's the whole process. ✓
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                <HiOutlineCheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>
        </div>

        {/* Total Time Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="text-sm font-semibold mb-1">TOTAL TIME</div>
            <div className="text-4xl font-bold">5 Minutes</div>
            <div className="text-sm mt-1">From idea to live website</div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="mt-20 bg-white rounded-3xl p-10 border border-gray-200 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Get (For ₹50/month)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Professional Website</div>
                <div className="text-gray-600 text-sm">AI-designed, mobile-responsive, fast-loading</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">SEO Optimized</div>
                <div className="text-gray-600 text-sm">Show up on Google searches automatically</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Free Hosting</div>
                <div className="text-gray-600 text-sm">Lightning-fast servers included</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">1-Click Updates</div>
                <div className="text-gray-600 text-sm">Change anything anytime, no coding</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Contact Forms</div>
                <div className="text-gray-600 text-sm">Capture leads automatically</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-900 mb-1">Analytics Dashboard</div>
                <div className="text-gray-600 text-sm">See who visits and track performance</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Build My Website Now
            <HiOutlineArrowRight className="ml-2 w-6 h-6" />
          </a>
          <p className="text-gray-500 text-sm mt-4">5 minutes from now, you could be live</p>
        </div>
      </div>
    </div>
  );
} 