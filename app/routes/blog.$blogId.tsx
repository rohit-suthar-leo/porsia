import { useParams, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineCalendar, HiOutlineTag } from "react-icons/hi";

export default function BlogPost() {
  const { blogId } = useParams();
  const [activeSection, setActiveSection] = useState("");

  // Tags for the blog post
  const tags = ["Online Presence", "Personal Branding", "Professional Growth", "Digital Marketing"];

  // Table of contents structure
  const tableOfContents = [
    { id: "intro", title: "Introduction" },
    { id: "what-is-online-presence", title: "What is \"online presence\"?" },
    { id: "why-it-matters-now", title: "Why it matters more than ever" },
    { id: "how-it-helps-you", title: "How it helps you" },
    { id: "strong-presence-looks-like", title: "What a strong presence looks like" },
    { id: "getting-started", title: "Getting started with yours" },
    { id: "final-thoughts", title: "Final thoughts" }
  ];

  // Update the scroll function to target correct positions
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this value based on your header height
      let elementPosition;

      if (id === "intro") {
        // For intro, scroll to the top of the content
        const contentTop = document.querySelector('.prose')?.getBoundingClientRect().top ?? 0;
        elementPosition = contentTop;
      } else {
        // For other sections, scroll to just above their titles
        elementPosition = element.getBoundingClientRect().top - 50; // Extra offset for titles
      }

      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update the scroll spy to match this behavior
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id || 
              (entry.target.tagName === 'SECTION' ? 'intro' : entry.target.id);
            if (currentId) {
              setActiveSection(currentId);
            }
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "-100px 0px -50% 0px"
      }
    );

    // Observe the intro section and all headings
    const introSection = document.querySelector('.prose');
    if (introSection) observer.observe(introSection);

    tableOfContents.forEach(({ id }) => {
      if (id !== "intro") {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Mock data - replace with your actual data fetching
  const post = {
    title: "How it started vs. how it's going",
    date: 'May 5, 2023',
    category: 'Design',
    content: "A short personal history as it relates to design and development, and how I've found value in the cross-section between both disciplines.",
    image: '/images/blog/post-1.jpg'
  };

  return (
    <div className="relative bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <HiOutlineArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article */}
          <article className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {post.image && (
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center text-gray-500">
                <HiOutlineCalendar className="w-5 h-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center text-brand-purple">
                <HiOutlineTag className="w-5 h-5 mr-2" />
                {post.category}
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/avatar.jpg"
                  alt="Author"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Author Name</h3>
                  <p className="text-sm text-gray-600">Product Designer</p>
                </div>
              </div>
              <p className="text-gray-600">
                Short bio about the author and their expertise in the field.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {/* Add related posts here */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
} 