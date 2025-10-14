import {
  HiOutlineCurrencyRupee,
  HiOutlineLightningBolt,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineGlobe,
  HiOutlineCheckCircle
} from "react-icons/hi";

export default function Features() {
  return (
    <div className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why 2,847 Professionals Choose MyPorsia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another website builder. We're the weapon that levels the playing field.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MAIN BENEFIT - Price */}
          <div className="md:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200 shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              GAME CHANGER
            </div>
            <div className="bg-white/80 backdrop-blur w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-2 border-green-200">
              <HiOutlineCurrencyRupee className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">97% Cheaper Than Competitors</h3>
            <p className="text-gray-700 text-lg mb-6">
              Stop wasting ₹50,000 on designers. Our AI builds your website in 5 minutes for ₹50/month.
              That's less than your Netflix subscription.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">₹50</div>
                <div className="text-sm text-gray-600">MyPorsia</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-1 line-through">₹2,000</div>
                <div className="text-sm text-gray-600">Wix Premium</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-1 line-through">₹50k</div>
                <div className="text-sm text-gray-600">Designers</div>
              </div>
            </div>
          </div>

          {/* Speed */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-200">
              <HiOutlineLightningBolt className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Live in 5 Minutes</h3>
            <p className="text-gray-600 mb-4">
              Not 3 months. Not 3 days. <span className="font-bold text-blue-600">5 minutes</span>.
              Tell AI about your business, pick colors, go live.
            </p>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <div className="text-sm text-gray-600 mb-1">Average setup time:</div>
              <div className="text-3xl font-bold text-blue-600">4m 47s</div>
            </div>
          </div>

          {/* AI Powered */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-purple-200">
              <HiOutlineSparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">AI Does Everything</h3>
            <p className="text-gray-600 mb-4">
              You: "I'm a yoga teacher in Mumbai"
              <br />
              AI: *Builds entire professional website*
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <HiOutlineCheckCircle className="w-4 h-4 text-purple-600" />
                <span>AI writes all content</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <HiOutlineCheckCircle className="w-4 h-4 text-purple-600" />
                <span>AI picks perfect design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <HiOutlineCheckCircle className="w-4 h-4 text-purple-600" />
                <span>AI optimizes for Google</span>
              </div>
            </div>
          </div>

          {/* Results/ROI */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-start gap-6">
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-200 flex-shrink-0">
                <HiOutlineTrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Real Results from Real People</h3>
                <p className="text-gray-600 mb-6">
                  Our users aren't just getting websites. They're getting clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">₹45k</div>
                    <div className="text-gray-700 text-sm font-medium">Average income increase in first month</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-gray-700 text-sm font-medium">New clients per user on average</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">900x</div>
                    <div className="text-gray-700 text-sm font-medium">ROI (₹50 → ₹45,000)</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
                    <div className="text-3xl font-bold text-orange-600 mb-2">32%</div>
                    <div className="text-gray-700 text-sm font-medium">Average visitor-to-lead conversion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zero Technical Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-200">
              <HiOutlineGlobe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">No Skills Needed</h3>
            <p className="text-gray-600 mb-4">
              Can't code? No problem.
              <br />
              Not a designer? We got you.
              <br />
              Tech-phobic? Perfect.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="text-sm text-gray-600 mb-2">If you can type your name, you can build a website.</div>
              <div className="text-xs text-gray-500">Seriously. That's all it takes.</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Losing Clients to Competitors
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Every day without a website is money left on the table. Join 2,847 professionals who said "enough is enough."
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Build My Website FREE
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
          <p className="text-blue-100 text-sm mt-4">No credit card • 7-day free trial • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
}