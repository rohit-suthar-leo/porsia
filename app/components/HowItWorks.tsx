import { 
  HiOutlineSparkles,
  HiOutlinePencilAlt,
  HiOutlineCode,
  HiOutlineChartSquareBar,
  HiOutlineGift,
  HiOutlineCheck
} from "react-icons/hi";

export default function HowItWorks() {
  return (
    <div className="relative bg-gray-50 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Card */}
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
              <HiOutlineSparkles className="w-6 h-6 text-brand-blue" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">How It Works</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            We don't just build your site — we guide you on how to grow your credibility, build trust, and convert more leads across all touchpoints.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-100">
                <HiOutlinePencilAlt className="w-6 h-6 text-brand-purple" />
              </div>
              <div className="text-xl font-semibold text-brand-purple">Step 1</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Share What You Do</h3>
            <p className="text-gray-600">Send us your experience, services, and goals — we'll shape them into a strong online narrative.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
                <HiOutlineCode className="w-6 h-6 text-brand-blue" />
              </div>
              <div className="text-xl font-semibold text-brand-blue">Step 2</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">We Build Your Portfolio</h3>
            <p className="text-gray-600">We create a personalized, high-converting portfolio designed to earn trust and attract the right clients.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-100">
                <HiOutlineChartSquareBar className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-xl font-semibold text-indigo-600">Step 3</div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Strategic Growth Guidance</h3>
            <p className="text-gray-600">We'll guide you on how to boost your credibility across platforms (LinkedIn, Instagram, etc.) and turn traffic into sales even beyond your website.</p>
          </div>

          {/* Bonus Card */}
          {/* <div className="md:col-span-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
                <HiOutlineGift className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">What You'll Get</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <HiOutlineCheck className="w-5 h-5 text-brand-purple" />
                <p className="text-gray-600">Portfolio? Done.</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCheck className="w-5 h-5 text-brand-blue" />
                <p className="text-gray-600">Personal brand? Growing.</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCheck className="w-5 h-5 text-indigo-600" />
                <p className="text-gray-600">Leads? On the way.</p>
              </div>
            </div>
          </div> */}

          {/* Get Started Card */}
          {/* <div className="md:col-span-3 bg-brand-blue rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between">
              {/* <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">Ready to Transform Your Online Presence?</h3>
                <p className="text-blue-100">Join our early access program and start turning your audience into action.</p>
              </div> */}
              {/* <a
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 bg-white text-brand-blue rounded-xl hover:bg-blue-50 transition-all"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a> */}
            {/* </div>  */}
          {/* </div>  */}
        </div>
      </div>
    </div>
  );
} 