import { 
  HiOutlineLightBulb,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineTrendingUp
} from "react-icons/hi";

export default function Vision() {
  return (
    <div className="relative bg-gray-50 pt-6" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
              <HiOutlineLightBulb className="w-6 h-6 text-brand-blue" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Empowering professionals to build trust and grow their business online.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Global Impact */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-100">
                <HiOutlineGlobe className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Impact</h3>
            </div>
            <p className="text-gray-600">Helping professionals worldwide showcase their expertise and build their online presence.</p>
          </div>

          {/* Community Growth */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
                <HiOutlineUserGroup className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community Growth</h3>
            </div>
            <p className="text-gray-600">Building a network of successful professionals who support and inspire each other.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 