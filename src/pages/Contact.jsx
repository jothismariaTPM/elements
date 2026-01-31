import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react"

const Contact = () => {
  return (
    <div>
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16 mt-14">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border border-gray-200 rounded-3xl shadow-xl p-8 md:p-14">
        
        {/* Left Content */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            We'd love to hear from you. Whether you have a question, a project,
            or just want to connect — feel free to reach out.
          </p>

          <div className="space-y-3  text-gray-700 text-lg font-medium justify-center">
            <p className="max-w-xs leading-relaxed">📍 343/3 Rajaji Salai, Ganga Sagar Near Kochar Villa, SH 49, near Mathsya Narayana Temple, Panaiyur, Chennai, Tamil Nadu 600119</p>
            <p>📧 contact@elementscoast.com</p>
            <p>📞 +91 80731 50719</p>
          </div>
          <div className="flex gap-4 mt-4">
              <a className="group w-9 h-9 flex items-center justify-center rounded-full bg-[#4267B2] hover:-translate-y-0.5 transition-all">
                <Facebook className="text-white transition" size={18} strokeWidth={1.5} />
              </a>

              <a className="group w-9 h-9 flex items-center justify-center rounded-full bg-[#C13584] hover:-translate-y-0.5 transition-all">
                <Instagram className="text-white transition" size={18} strokeWidth={1.5} />
              </a>

              <a className="group w-9 h-9 flex items-center justify-center rounded-full bg-[#FF0000] hover:-translate-y-0.5 transition-all">
                <Youtube className="text-white transition" size={18} strokeWidth={1.5} />
              </a>
            </div>
        </div>

        {/* Right Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-transparent transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 text-white py-3 font-medium hover:bg-gray-800 transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div className="overflow-hidden rounded-md border border-black/10">
    <iframe
      title="Elements Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.431364791372!2d80.24753270886474!3d12.879960787374573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525be43caed5b7%3A0x47153ba402dfabeb!2sElements%20on%20East%20Coast!5e0!3m2!1sen!2sin!4v1769581955367!5m2!1sen!2sin"
      className="w-full h-[400px] transition duration-500"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
    </div>
  );
};

export default Contact;
