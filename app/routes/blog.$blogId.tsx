import { useParams, Link } from "@remix-run/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";

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

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Tags */}
            <div className="flex gap-2 mb-8">
              {tags.map((tag, index) => (
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

            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/images/rohit-suthar.png"
                alt="Rohit Suthar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Rohit Suthar</span>
                  <span className="text-brand-purple">@Porsia</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>March 30, 2024</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-medium mb-8">
              Why Your Online Presence Matters (And How It Can Help You Grow)
            </h1>

            <div className="prose prose-lg">
              <section id="intro">
                <h1 className="text-3xl font-medium mb-6">
                  Why Your Online Presence Matters (And How It Can Help You Grow)
                </h1>
                <p>
                  Your portfolio isn't just a showcase — it's your silent salesperson. In today's digital age, your online presence can make or break opportunities before you even know they exist.
                </p>
              </section>

              <section id="what-is-online-presence">
                <h2 className="text-2xl font-medium mt-12 mb-6">
                  What is "online presence"?
                </h2>
                <p>
                  Your online presence is more than just having a website or social media profiles. It's the complete digital footprint that represents you professionally, including:
                </p>
                <ul className="space-y-2">
                  <li>• Your personal website or portfolio</li>
                  <li>• Professional social media profiles</li>
                  <li>• Published work and content</li>
                  <li>• Digital reputation and reviews</li>
                </ul>
              </section>

              <section id="why-it-matters-now">
                <h2 className="text-2xl font-medium mt-12 mb-6">
                  Why it matters more than ever
                </h2>
                <p>
                  In a post-pandemic world, digital first impressions matter more than ever:
                </p>
                <ul className="space-y-2">
                  <li>• 85% of clients research online before making decisions</li>
                  <li>• Remote work has made digital presence crucial</li>
                  <li>• Opportunities come through digital discovery</li>
                </ul>
              </section>

              <section id="how-it-helps-you">
                <h2 className="text-2xl font-medium mt-12 mb-6">
                  How it helps you
                </h2>
                <p>A strong online presence:</p>
                <ul className="space-y-2">
                  <li>• Builds credibility and trust</li>
                  <li>• Attracts better opportunities</li>
                  <li>• Showcases your expertise</li>
                  <li>• Works for you 24/7</li>
                </ul>
              </section>

              <section id="strong-presence-looks-like">
                <h2 className="text-2xl font-medium mt-12 mb-6">
                  What a strong presence looks like
                </h2>
                <p>A powerful online presence includes:</p>
                <ul className="space-y-2">
                  <li>• Professional portfolio website</li>
                  <li>• Consistent brand messaging</li>
                  <li>• Quality content that shows expertise</li>
                  <li>• Active professional network</li>
                </ul>
              </section>

              <section id="getting-started">
                <h2 className="text-2xl font-medium mt-12 mb-6">
                  Getting Started with Yours
                </h2>
                <p>You don't need to be a designer or a techie to build your presence.</p>
                <p>At Porsia, we help professionals like you:</p>
                <ul className="space-y-2">
                  <li>• Launch beautiful AI-powered portfolio websites</li>
                  <li>• Craft your message to attract clients</li>
                  <li>• Build digital trust that leads to results</li>
                </ul>
              </section>

              <section id="final-thoughts">
                <h2 className="text-2xl font-medium mt-12 mb-6">Final Thoughts</h2>
                <p>You don't have to be famous to be found — but you do have to show up well.</p>
                <p className="font-medium">
                  Your online presence is your proof, your pitch, and your power.<br />
                  Make it count.
                </p>
              </section>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 p-8 rounded-xl mt-12">
                <h3 className="text-xl font-medium mb-4">Ready to Build Your Presence?</h3>
                <p className="mb-6">
                  Want to be one of our early users? Let's build your presence together.
                </p>
                <a
                  href="https://calendly.com/rohit-myporsia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="hidden lg:block w-64">
            <div className="sticky top-24">
              <h3 className="text-sm font-medium text-gray-900 mb-4">ON THIS PAGE</h3>
              <nav className="space-y-3">
                {tableOfContents.map(({ id, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`block text-sm transition-colors ${
                      activeSection === id
                        ? "text-brand-purple font-medium"
                        : "text-gray-600 hover:text-brand-blue"
                    }`}
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 