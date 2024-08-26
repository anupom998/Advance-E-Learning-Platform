import React from "react";
import logo from "../assets/site-logo.png";
import gatewayGateways from "../assets/payment-gateways.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-12">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <img src={logo} alt="Logo" />
            </div>

            {/* Description */}
            <p className="text-base lg:max-w-xs max-w-full">
              Learn how to use online social media in our society and how to
              earn online without wasting valuable time from online social
              media.
            </p>

            {/* Social media links */}
            <div className="flex mt-4 space-x-4 text-xl">
              <a href="#" className="text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="mb-8 lg:mb-0">
            <h4 className="font-semibold text-xl mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-base hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="mb-8 lg:mb-0">
            <h4 className="font-semibold text-xl mb-5">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-base hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:underline">
                  Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-xl mb-5">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-base flex items-center">
                <i className="bi bi-geo-alt-fill mr-3 text-lg text-purple-dark"></i>
                Mymensingh City
              </li>
              <li className="text-base flex items-center">
                <i className="bi bi-telephone-fill mr-3 text-lg text-purple-dark"></i>
                01870000000
              </li>
              <li className="text-base flex items-center">
                <i className="bi bi-envelope-fill mr-3 text-lg text-purple-dark"></i>
                adviceelearningplatform@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pb-4 pt-8 lg:space-y-0 space-y-4">
          {/* Payment gatways */}
          <img src={gatewayGateways}  alt="payment gateways" />

          {/* Copywrite */}
          <p className="text-xs">
            &copy; 2023 Advice E-learning Platform. All Rights Reserved.
          </p>

          <a href="#" className="text-xs hover:underline font-medium">
            Become Instructor
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
