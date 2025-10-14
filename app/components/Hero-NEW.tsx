import { Link } from '@remix-run/react';
import {
  HiOutlineSparkles,
  HiOutlinePlay,
  HiOutlineLightningBolt,
  HiOutlineArrowRight,
  HiOutlineCheckCircle
} from "react-icons/hi";

export default function HeroNew() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0">
      {/* Main Hero Content */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        {/* Urgency Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 backdrop-blur rounded-full border border-orange-200">
          <div className="flex items-center gap-2">
            <HiOutlineLightningBolt className="w-4 h-4 text-orange-600 animate-bounce" />
            <span className="text-orange-700 font-medium">₹50/month offer ends in 7 days • Price increases to ₹100</span>
          </div>
        </div>

        {/* NEW HEADLINE - CRYSTAL CLEAR */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build Your Professional Website{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            in 5 Minutes
          </span>
        </h1>

        {/* SUB-HEADLINE - ADDRESSES OBJECTIONS */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          No coding. No designer. No ₹50,000 fees.
        </p>

        <p className="text-lg text-gray-500 mb-8">
          Join <span className="font-bold text-gray-900">2,847 Indian professionals</span> who got online this month
        </p>

        {/* CTA BUTTONS - FRICTION-FREE */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <a
            href="#instant-demo"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <HiOutlinePlay className="mr-2 w-6 h-6" />
            See Your Website in 60 Seconds
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            View Pricing (Starting ₹50/mo)
            <HiOutlineArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>Free 7-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF - WITH REAL FACES */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 mb-12">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Real Results from Real People
          </h3>
          <p className="text-gray-600">Join thousands of successful professionals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Tuition Teacher, Delhi</p>
              </div>
            </div>
            <p className="text-gray-600 mb-3">"Got 15 new students in first month. Worth every rupee!"</p>
            <div className="flex items-center gap-1 text-yellow-400">
              ★★★★★
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div>
                <p className="font-semibold text-gray-900">Priya Sharma</p>
                <p className="text-sm text-gray-500">Yoga Instructor, Mumbai</p>
              </div>
            </div>
            <p className="text-gray-600 mb-3">"Built my website in 10 minutes. Clients love the professional look!"</p>
            <div className="flex items-center gap-1 text-yellow-400">
              ★★★★★
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <p className="font-semibold text-gray-900">Amit Patel</p>
                <p className="text-sm text-gray-500">Freelance Designer, Bangalore</p>
              </div>
            </div>
            <p className="text-gray-600 mb-3">"Cheapest website builder I found. AI features are amazing!"</p>
            <div className="flex items-center gap-1 text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
      </div>

      {/* INSTANT DEMO SECTION */}
      <div id="instant-demo" className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            See How It Works in 47 Seconds
          </h2>
          <p className="text-gray-600">No signup required. Just watch.</p>
        </div>

        {/* VIDEO PLACEHOLDER - YOU NEED TO RECORD THIS */}
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
              <HiOutlinePlay className="w-10 h-10" />
            </div>
            <p className="text-lg font-semibold">Watch: Website Built in 47 Seconds</p>
            <p className="text-sm text-gray-300 mt-2">Record this with Loom (free) - I'll show you how</p>
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-blue-600">47s</p>
            <p className="text-sm text-gray-600">Average build time</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-600">₹50</p>
            <p className="text-sm text-gray-600">Per month only</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-green-600">2,847</p>
            <p className="text-sm text-gray-600">Happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
