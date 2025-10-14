import { Link } from '@remix-run/react';
import {
  HiOutlineSparkles,
  HiOutlinePlay,
  HiOutlineLightningBolt,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyRupee
} from "react-icons/hi";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0">
      {/* Main Hero Content */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        {/* Urgency Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 backdrop-blur rounded-full border border-orange-200 animate-pulse">
          <div className="flex items-center gap-2">
            <HiOutlineLightningBolt className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 font-semibold">₹50/month • Early Access Pricing • Limited Slots</span>
          </div>
        </div>

        {/* CRYSTAL CLEAR HEADLINE */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
          Professional Website{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            in 5 Minutes
          </span>
        </h1>

        {/* SUB-HEADLINE - KILLS OBJECTIONS */}
        <p className="text-xl md:text-2xl text-gray-600 mb-3 font-medium">
          Stop paying ₹50,000 to designers. Stop waiting 3 months.
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          AI builds your website while you make coffee. <span className="font-bold text-gray-900">₹50/month.</span> That's it.
        </p>

        {/* SOCIAL PROOF */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm">R</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm">P</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm">A</div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm">+</div>
          </div>
          <p className="text-gray-600">
            Join <span className="font-bold text-gray-900">2,847+ Indian professionals</span> online this month
          </p>
        </div>

        {/* CTA BUTTONS - ZERO FRICTION */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <a
            href="#waitlist"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-lg"
          >
            <HiOutlinePlay className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
            Build My Website FREE
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            See How It Works
            <HiOutlineArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* TRUST BADGES - REMOVE ALL FRICTION */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-12">
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCheckCircle className="w-5 h-5 text-green-500" />
            <span>Live in 5 minutes</span>
          </div>
        </div>

        {/* COMPARISON SHOCK - THIS WILL CONVERT LIKE CRAZY */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Old Way vs MyPorsia</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* OLD WAY - Red tint */}
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <div className="text-red-600 font-bold text-lg mb-4">❌ The Old Way (Sucks)</div>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">Pay designer ₹50,000</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">Wait 3 months minimum</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">Learn coding to update</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">Hosting: ₹2,000/month</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-gray-700">Still looks generic</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-300">
                <div className="text-2xl font-bold text-red-600">Total: ₹74,000</div>
                <div className="text-sm text-red-600">Per year</div>
              </div>
            </div>

            {/* NEW WAY - Green tint */}
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-300 relative">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                97% CHEAPER
              </div>
              <div className="text-green-600 font-bold text-lg mb-4">✅ The MyPorsia Way</div>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">AI builds website free</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Live in 5 minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Update with 1 click</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Hosting included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">AI-optimized design</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-300">
                <div className="text-2xl font-bold text-green-600">Total: ₹600</div>
                <div className="text-sm text-green-600">Per year (₹50/month)</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-lg">
              You save <span className="font-bold text-green-600">₹73,400</span> in year 1 alone 🤯
            </p>
          </div>
        </div>

        {/* QUICK STATS - BUILD CREDIBILITY */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center gap-1 mb-2">
              <HiOutlineClock className="w-5 h-5 text-blue-600" />
              <p className="text-3xl font-bold text-blue-600">5m</p>
            </div>
            <p className="text-sm text-gray-600">Average setup</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center gap-1 mb-2">
              <HiOutlineCurrencyRupee className="w-5 h-5 text-purple-600" />
              <p className="text-3xl font-bold text-purple-600">50</p>
            </div>
            <p className="text-sm text-gray-600">Per month only</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center gap-1 mb-2">
              <HiOutlineSparkles className="w-5 h-5 text-green-600" />
              <p className="text-3xl font-bold text-green-600">2.8k</p>
            </div>
            <p className="text-sm text-gray-600">Happy users</p>
          </div>
        </div>
      </div>
    </section>
  );
}