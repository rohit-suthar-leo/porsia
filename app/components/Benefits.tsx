import { 
  HiOutlineClock,
  HiOutlineBadgeCheck,
  HiOutlineRefresh,
  HiOutlineChartSquareBar,
  HiOutlineLightBulb,
  HiOutlineSparkles
} from "react-icons/hi";

export default function Benefits() {
  return (
    <div className="relative bg-gray-50 pt-6" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
              <HiOutlineSparkles className="w-6 h-6 text-brand-blue" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Why Choose Porsia?</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            We help you turn trust into traffic, and traffic into clients — faster.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Save Time */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-100">
                <HiOutlineClock className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Save Time</h3>
            </div>
            <p className="text-gray-600"> Build a high-converting personal brand site in days. Highlight your expertise, gain client trust, and generate leads — all without the tech headache.</p>
          </div>

          {/* Build Credibility */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
                <HiOutlineBadgeCheck className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Build Credibility</h3>
            </div>
            <p className="text-gray-600">Stand out with a professional, trust-building personal site.</p>
          </div>

          {/* Stay Current */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-100">
                <HiOutlineRefresh className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Stay Current</h3>
            </div>
            <p className="text-gray-600">Easily update your content and stay relevant without coding.</p>
          </div>

          {/* Measure Growth */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-purple-100">
                <HiOutlineChartSquareBar className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Measure Growth</h3>
            </div>
            <p className="text-gray-600">Track who's visiting, what's working, and how your profile performs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}