import { HiOutlineIdentification } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Features() {
  return (
    <div className="relative bg-gray-50 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Professional Online Presence */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
              <HiOutlineIdentification className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Online Presence</h3>
            <p className="text-gray-600">Create a personalized portfolio that builds trust and shows what you do best — even before the first call.</p>
          </div>

          {/* Lead Conversion Focus */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
              <HiOutlineChartBar className="w-6 h-6 text-brand-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Lead Conversion Focus</h3>
            <p className="text-gray-600">Turn visitors into clients with credibility-first design, social proof, and clear CTAs — built to convert.</p>
          </div>

          {/* Fast Setup */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-all">
            <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
              <HiOutlineLightningBolt className="w-6 h-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast, Frictionless Setup</h3>
            <p className="text-gray-600">Get your portfolio online in minutes, not days. No tech skills. Just content + click → you're live.</p>
          </div>

          {/* Credibility Stats */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100">
                <HiOutlineChartSquareBar className="w-6 h-6 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Credibility That Drives Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-brand-purple mb-2">95%</div>
                    <div className="text-gray-600 text-sm">say it helped them build client trust</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-brand-blue mb-2">80%</div>
                    <div className="text-gray-600 text-sm">less time to launch than building from scratch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started Card */}
          <div className="md:col-span-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <div>
                <div className="bg-white/80 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                  <HiOutlineSparkles className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Turn Your Presence into Performance</h3>
                <p className="text-gray-600 max-w-2xl">Join the early access program and start turning your audience into action.</p>
              </div>
              <a
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}