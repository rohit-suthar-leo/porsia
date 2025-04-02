import { Link } from "@remix-run/react";
import { HiOutlineCalendar, HiOutlineTag, HiOutlineArrowRight } from "react-icons/hi";

export default function BlogIndex() {
  const posts = [
    {
      id: 'fitness-coach-portfolio',
      title: "Why Fitness Coaches Need a Portfolio (Now More Than Ever)",
      excerpt: "In today's digital-first world, building a powerful online presence isn't optional — it's essential. Learn why fitness coaches need a professional portfolio to turn followers into clients.",
      date: 'April 2, 2024',
      author: 'Rohit Suthar',
      role: 'Founder',
      image: '/images/thumbnail-blog2.jpeg',
      tags: [
        "Personal Branding",
        "Online Presence",
        "Fitness Business",
        "Lead Generation",
        "Client Trust",
        "Fitness Marketing",
        "Coach Website"
      ]
    },
    {
      id: '1',
      title: "Why Your Online Presence Matters",
      excerpt: "Your portfolio isn't just a showcase — it's your silent salesperson. Learn why showing up online the right way can boost your credibility, attract clients, and grow your income.",
      date: 'March 30, 2024',
      author: 'Rohit Suthar',
      role: 'Founder',
      image: '/images/thumbnail-blog1.jpeg',
      tags: [
        "Online Presence",
        "Personal Branding",
        "Professional Growth",
        "Digital Marketing",
        "Lead Generation",
        "Client Trust",
        "Portfolio Website"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden bg-[#F9F5FF]">
      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Insights on building your professional presence and growing your business
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="block bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <article>
                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineTag className="w-4 h-4" />
                    <span>{post.tags[0]}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index % 2 === 0
                          ? "bg-brand-purple/10 text-brand-purple"
                          : "bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/images/rohit-suthar.png" 
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{post.author}</div>
                      <div className="text-sm text-brand-purple">{post.role} @ Porsia</div>
                    </div>
                  </div>

                  <div className="flex items-center text-brand-blue group-hover:text-brand-purple transition-colors">
                    Read Article
                    <HiOutlineArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 