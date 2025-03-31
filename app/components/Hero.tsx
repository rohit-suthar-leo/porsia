import { Link } from '@remix-run/react';
import { 
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineArrowRight
} from "react-icons/hi";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Feature Card */}
        <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-all">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-purple-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-purple-600 font-medium">In Early Access</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
              Turn Your Online Presence into Client Opportunities
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Build a website that converts visitors into leads. Perfect for coaches, freelancers, and professionals.
            </p>
            
            <div className="flex gap-4 items-center">
              <a
                href="https://calendly.com/rohit-myporsia/30min"
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all"
              >
                Book a free call
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
              >
                Learn More
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Trusted by Growing Professionals
            </h3>
            <HiOutlineUserGroup className="w-6 h-6 text-brand-purple" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border border-purple-100">
              <span className="text-gray-600">Professionals</span>
              <span className="text-xl font-bold text-brand-purple">500+</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
              <span className="text-gray-600">Sites Live</span>
              <span className="text-xl font-bold text-brand-blue">1.2k</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <span className="text-gray-600">Average Conversion</span>
              <span className="text-xl font-bold text-indigo-600">32%</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {/* AI Features Card */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col h-full">
              <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-purple-100">
                <HiOutlineSparkles className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">AI-Powered</h3>
              <p className="text-gray-600 text-sm">Smart portfolio generation with AI optimization</p>
            </div>
          </div>

          {/* Conversion Card */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col h-full">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-blue-100">
                <HiOutlineChartBar className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">High Converting</h3>
              <p className="text-gray-600 text-sm">Designed to turn visitors into clients</p>
            </div>
          </div>
        </div>

        {/* Quick Start Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-indigo-100">
                <HiOutlineLightningBolt className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Quick Start</h3>
              <p className="text-gray-600 text-sm mb-4">Fill this form to get started</p>
            </div>
            <a
              href="#contact-form"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              Start Now
              <HiOutlineArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}