import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className=" text-white mt-40 min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">Contact Us</h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-400">Follow us on</p>
          <div className="flex justify-center gap-6 text-xl">
            <a href="#" className="hover:text-orange-400 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-400 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
