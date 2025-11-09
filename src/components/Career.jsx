import React, { useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NPAX1IImage from "../assets/N-Pax1.png";
import CareerImage from "../assets/Career.png";
import Chatbot from "./Chatbot.jsx";

export default function Career() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
  {/* Background Image (Hero Section) */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${CareerImage})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/50"></div>
  </div>

           

        {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={NPAX1IImage} alt="N-PAX Logo" className="h-14 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-white">
           <Link to="/AboutUs" className="text-gray hover:text-blue-300 transition">
                         ABOUT US
                       </Link>

            {/* SOFTWARE PRODUCTS & SERVICES Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                Software Products and Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[350px] bg-slate-900/95 border border-gray-700 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 shadow-xl">
                <h3 className="font-semibold mb-4 text-gray-200">
                  Software Products and Services
                </h3>
                <div className="space-y-3 text-sm">
                  <a href="advance_analytics.php" className="block hover:text-blue-300">Advanced Analytics Solutions</a>
                  <a href="motionboard.php" className="block hover:text-blue-300">BI and Dashboarding</a>
                  <a href="digital_transformation.php" className="block hover:text-blue-300">Digital Transformation Services</a>
                  <a href="hrc.php" className="block hover:text-blue-300">HRIS / Payroll System</a>
                  <a href="nxpert.php" className="block hover:text-blue-300">ERP System</a>
                  <a href="mcframega.php" className="block hover:text-blue-300">Accounting System</a>
                  <a href="mcframe_iot.php" className="block hover:text-blue-300">IoT System</a>
                  <a href="manage_services.php" className="block hover:text-blue-300">Managed IT Services</a>
                  <a href="https://www.paxyroll.com" className="block hover:text-blue-300">Paxyroll Cloud Timekeeping</a>
                </div>
              </div>
            </div>

            {/* INSIGHTS AND BLOGS (Mega Dropdown) */}
            <div className="relative group">
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                Insights and Blogs
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 right-0 mt-2 w-full max-w-[950px] mx-auto bg-slate-900/95 border border-gray-700 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-gray-200 mb-2">News and Insights</h3>
                  <a href="update/category_news?category=23" className="block hover:text-blue-300 text-white">News & Events</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-gray-200 mb-2">Recent Blogs</h3>
                  <a href="update/category?category=17" className="block hover:text-blue-300 text-white">Advanced Analytics</a>
                  <a href="update/category?category=21" className="block hover:text-blue-300 text-white">Digital Transformation</a>
                  <a href="update/category?category=18" className="block hover:text-blue-300 text-white">Human Resource Information</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-gray-200 mb-2">&nbsp;</h3>
                  <a href="update/category?category=19" className="block hover:text-blue-300 text-white">Enterprise Resource Planning</a>
                  <a href="update/category?category=20" className="block hover:text-blue-300 text-white">Accounting</a>
                </div>
              </div>
            </div>

            <Link to="/career" className="hover:text-gray-300 transition-colors uppercase text-sm tracking-wide">Careers</Link>
            <a href="#contact" className="hover:text-gray-300 transition-colors uppercase text-sm tracking-wide">Contact Us</a>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border border-white px-4 py-2 hover:bg-white hover:text-slate-800 transition-all uppercase text-sm tracking-wide"
            >
              Language
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="relative h-full flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div
      className="max-w-2xl animate-zoomIn opacity-0 mt-40 ml-20"
      style={{ animationDelay: "0.2s", animationDuration: "1.8s" }}
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-1"
         style={{ textShadow: "5px 5px 10px #fff" }}>
        Exciting things happen here..
      </p>

      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
         style={{ textShadow: "5px 5px 10px #fff" }}>
        Join us
      </p>

      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg transition-all"
      >
        SEE ALL JOBS
      </button>
    </div>
  </div>
</div>

      </div>

      {/* Floating Chatbot */}
            <div className="fixed bottom-8 right-8 z-50">
              <Chatbot isDark={false} />
            </div>
    </div>
  );
}