import { 
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineMail
} from "react-icons/hi";

export default function GetStarted() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/bxowgkwa", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Clear all form fields with proper type casting
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((element) => {
          const input = element as HTMLInputElement | HTMLTextAreaElement;
          if (input instanceof HTMLInputElement && input.type === 'checkbox') {
            input.checked = false;
          } else {
            input.value = '';
          }
        });

        // Optional: Show success message
        alert('Message sent successfully!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="relative bg-white py-24 mt-24" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-5xl font-medium mb-6">Get in touch</h2>
          <p className="text-xl text-gray-700 mb-12">
            If you have any questions or you'd like to find out more about our services, please get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Contact Details */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact details:</h3>
                <a 
                  href="mailto:hello@myporsia.com"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  hello@myporsia.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Office address:</h3>
                <address className="text-gray-700 not-italic">
                  Bengaluru, Karnataka<br />
                  India
                </address>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Follow us:</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/porsiaofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/porsia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-blue transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
            {/* Form Section */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm md:col-span-2">
              <form 
                action="https://getform.io/f/bxowgkwa"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Please tell us a bit about your site
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-colors"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    I agree with the privacy statement
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-700 transition-all"
                >
                  Send Message
                  <HiOutlineArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 