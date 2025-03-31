import { Link } from "@remix-run/react";

export default function BlogIndex() {
  const posts = [
    {
      id: '1',
      title: "Why Your Online Presence Matters",
      excerpt: "Your portfolio isn't just a showcase — it's your silent salesperson. Learn why showing up online the right way can boost your credibility, attract clients, and grow your income.",
      date: 'March 30, 2024',
      author: 'Rohit Suthar',
      role: 'Founder',
      image: '/images/thumbnail-blog1.jpeg'
    }
  ];

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden bg-[#F9F5FF]">
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-3xl p-6 md:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
              {/* Left Content */}
              <div className="flex-1 max-w-3xl">
                <div className="block">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-brand-purple mb-3 md:mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
                    {post.excerpt}
                  </p>

                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-sm sm:text-base text-brand-blue hover:text-brand-purple transition-colors mb-4 md:mb-6 inline-block"
                  >
                    Read More →
                  </Link>

                  <div className="flex items-center gap-2 md:gap-3 mt-2">
                    <img 
                      src="/images/rohit-suthar.png" 
                      alt={post.author}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="text-sm md:text-base font-medium text-gray-900">{post.author}, {post.role}</span>
                        <span className="text-sm md:text-base text-brand-purple">@ Porsia</span>
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Thumbnail */}
              <div className="w-full lg:w-[500px] lg:shrink-0">
                <Link to={`/blog/${post.id}`}>
                  <div className="rounded-2xl overflow-hidden h-[200px] sm:h-[280px] lg:h-[380px]">
                    <img
                      src={post.image}
                      alt={`${post.title} thumbnail`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 