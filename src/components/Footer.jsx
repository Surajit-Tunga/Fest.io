import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdCall, MdMessage } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-gray-900 px-5 text-white">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          {/* Branding Section */}
          <div className="py-8 px-4">
            <h1 className="text-3xl font-bold mb-2">Fes.io</h1>
            <p className="text-gray-300">Where Innovation Meets Celebration</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a className='hover:text-orange-400 transition' href="/">Home</a></li>
                <li><a className='hover:text-orange-400 transition' href="/events">Events</a></li>
                <li><a className='hover:text-orange-400 transition' href="/team">Team</a></li>
                <li><a className='hover:text-orange-400 transition' href="/contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">Contact Us</h1>
              <div className="space-y-4 text-sm leading-tight text-gray-300">
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="text-lg mt-0.5 text-orange-400" />
                  <p>Kolkata,WB</p>
                </div>
                <div className="flex items-start gap-3">
                  <MdMessage className="text-lg mt-0.5 text-orange-400" />
                  <p>abc@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <MdCall className="text-lg mt-0.5 text-orange-400" />
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="sm:block">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t-2 border-gray-700">
            <span className="text-sm text-gray-400">
              &copy; 2025 Fest.io | All Rights Reserved
            </span>
            <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
              <a
                href="https://www.instagram.com/surajit.tunga/profilecard/?igsh=MnpqdzhsN3QzazR0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-orange-400 transition" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092186147999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-orange-400 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/surajittunga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-orange-400 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
