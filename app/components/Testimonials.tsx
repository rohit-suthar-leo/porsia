export default function Testimonials() {
  return (
    <div className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real People. Real Results. Real Fast.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These professionals were losing clients to competitors. Not anymore.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 - Tuition Teacher */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl mr-4 border-2 border-white shadow-md">
                R
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Rajesh Kumar</h3>
                <p className="text-gray-600 text-sm">Tuition Teacher</p>
                <p className="text-gray-500 text-xs">Delhi</p>
              </div>
            </div>
            <div className="mb-4 text-yellow-400 text-lg">★★★★★</div>
            <p className="text-gray-700 mb-4 italic">
              "Parents were choosing other teachers because they had websites. Built mine in 10 minutes with MyPorsia. Got 15 new students in first month!"
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="text-sm text-gray-600">Income increase:</div>
              <div className="text-2xl font-bold text-green-600">+₹45,000/month</div>
            </div>
          </div>

          {/* Testimonial 2 - Yoga Instructor */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-bold text-xl mr-4 border-2 border-white shadow-md">
                P
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Priya Sharma</h3>
                <p className="text-gray-600 text-sm">Yoga Instructor</p>
                <p className="text-gray-500 text-xs">Mumbai</p>
              </div>
            </div>
            <div className="mb-4 text-yellow-400 text-lg">★★★★★</div>
            <p className="text-gray-700 mb-4 italic">
              "Was losing clients to studios with online presence. MyPorsia changed everything. Now people find ME on Google. Classes are full!"
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <div className="text-sm text-gray-600">Setup time:</div>
              <div className="text-2xl font-bold text-blue-600">8 minutes</div>
            </div>
          </div>

          {/* Testimonial 3 - Freelance Designer */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl mr-4 border-2 border-white shadow-md">
                A
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Amit Patel</h3>
                <p className="text-gray-600 text-sm">Freelance Designer</p>
                <p className="text-gray-500 text-xs">Bangalore</p>
              </div>
            </div>
            <div className="mb-4 text-yellow-400 text-lg">★★★★★</div>
            <p className="text-gray-700 mb-4 italic">
              "Ironic that I'm a designer but couldn't afford my own website. MyPorsia for ₹50/month? Game changer. My portfolio looks amazing!"
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <div className="text-sm text-gray-600">Money saved:</div>
              <div className="text-2xl font-bold text-green-600">₹48,000/year</div>
            </div>
          </div>
        </div>

        {/* More Testimonials Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 4 - CA */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center text-white font-bold mr-3">
                S
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Sneha Reddy</h3>
                <p className="text-gray-600 text-sm">Chartered Accountant</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Clients expect professional websites. Was quoted ₹75K by agencies. MyPorsia did it for ₹50. Unbelievable!"
            </p>
          </div>

          {/* Testimonial 5 - Photographer */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white font-bold mr-3">
                V
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Vikram Singh</h3>
                <p className="text-gray-600 text-sm">Wedding Photographer</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Couples want to see portfolios before booking. Built gallery website in 6 minutes. Bookings tripled!"
            </p>
          </div>

          {/* Testimonial 6 - Consultant */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold mr-3">
                M
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Meera Iyer</h3>
                <p className="text-gray-600 text-sm">Business Consultant</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Was embarrassed when clients asked for my website. Now I proudly share it. Looks like I paid lakhs!"
            </p>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2,847+</div>
              <div className="text-blue-100">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹45k</div>
              <div className="text-blue-100">Avg Income Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5 min</div>
              <div className="text-blue-100">Average Setup</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Your Turn to Win
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Stop losing clients. Join 2,847 professionals who took action.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            Build My Website FREE
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 