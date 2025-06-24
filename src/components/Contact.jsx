import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-md space-y-6 mt-10" >
        <div className="text-center" >
          <h2 className="text-2xl font-bold" data-aos="fade-up">Contact <span className='text-orange-500'>Our Team</span></h2>
          <p className="text-sm text-gray-400" data-aos="fade-up"data-aos-delay="100" >Our team will get back to you within 24 hrs</p>
        </div>

        <form className="space-y-4" data-aos="fade-up" data-aos-delay="150">
          {/*  Name */}
          <div>
            <label htmlFor="Name" className="block text-sm mb-1"> Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter your  name"
              className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-orange-400 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@example.com"
              className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-orange-400 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="4"
              className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-1 focus:outline-none focus:border-orange-400 transition resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md py-2 
                         hover:bg-orange-400 hover:text-black hover:scale-105 transition-transform duration-300"
            >
              Send →
            </button>
          </div>
        </form>

        {/* Social Links Inline */}
        <div className="flex justify-center items-center gap-6 mt-6"data-aos="fade-up" data-aos-delay="250">
          <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition">
            <FaFacebook /> <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
