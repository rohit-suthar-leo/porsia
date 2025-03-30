import { Link } from "@remix-run/react";

export default function BlogIndex() {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden bg-[#F9F5FF]">
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <div className="flex gap-24">
            {/* Left Content */}
            <div className="flex-1 max-w-3xl">
              <Link to="/blog/why-online-presence-matters" className="block">
                <h2 className="text-3xl font-medium text-brand-purple mb-4">
                  Why Your Online Presence Matters (And How It Can Help You Grow)
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Your portfolio isn't just a showcase — it's your silent salesperson. Learn why showing up online the right way can boost your credibility, attract clients, and grow your income.
                </p>

                <Link 
                  to="/blog/why-online-presence-matters" 
                  className="text-brand-blue hover:text-brand-purple transition-colors mb-6 inline-block"
                >
                  Read More →
                </Link>

                <div className="flex items-center gap-3 mt-2">
                  <img 
                    src="/images/rohit-suthar.png" 
                    alt="Rohit Suthar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">Rohit Suthar, Founder</span>
                      <span className="text-brand-purple">@ Porsia</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      30 march 2025
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Thumbnail */}
            <div className="w-[500px] shrink-0">
              <div className="rounded-2xl overflow-hidden h-[380px]">
                <img
                  src="/images/thumbnail-blog1.jpeg"
                  alt="Blog thumbnail showing online presence visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 