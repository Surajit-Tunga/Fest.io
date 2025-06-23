import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 pt-24 pb-10 bg-black">
      <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-orange-400">Contact Our Team</h2>
        <p className="text-center text-gray-400 mb-8">We’ll get back to you within 24 hours</p>

        {/* Replace action URL with your real Formspree endpoint */}
        <form
          action="https://formspree.io/f/mnqwe123"
          method="POST"
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300"
          >
            Send →
          </button>
        </form>

        <div className="mt-10">
          <p className="mb-4 text-gray-400 text-center">Follow us on</p>
          <div className="flex justify-center gap-6 text-xl text-gray-300">
            <a href="#" className="hover:text-orange-400 transition" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400 transition" title="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
