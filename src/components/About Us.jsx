import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import AboutUsImage from "../assets/AboutUs.png";
import NPAX1IImage from "../assets/N-Pax1.png";
import NPAX3Image from "../assets/N-Pax3.png";
import TeamImage from "../assets/LP2.png";
import Chatbot from "./Chatbot.jsx";

export default function AboutUs() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image (Hero Section) */}
      <div
        className="absolute inset-0 bg-contain bg-bottom"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={NPAX1IImage} alt="N-PAX Logo" className="h-18 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-white">
            <a
              href="#about"
              className="hover:text-gray-300 transition-colors uppercase text-sm tracking-wide"
            >
              About Us
            </a>

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

            <Link to="/Career" className="text-gray hover:text-blue-300 transition">
                                     CAREERS
                                   </Link>
            <a href="#contact" className="hover:text-gray-300 transition-colors uppercase text-sm tracking-wide">Contact Us</a>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border border-white px-4 py-2 hover:bg-white hover:text-slate-800 transition-all uppercase text-sm tracking-wide"
            >
              Language
            </button>
          </div>
        </nav>

        {/* Hero / Header Logo */}
        <div className="flex flex-col items-center justify-center px-8 mt-20">
          <div className="flex items-center justify-center mb-12">
            <img src="/src/assets/N-Pax2.png" alt="n-pax" style={{ width: "60%" }} className="block" />
          </div>
        </div>

        {/* Stats */}
          <div className="flex items-center justify-around min-w-full px-10">
            {/* Block 1 */}
            <div className="text-center px-12">
              <img
                src={NPAX3Image}
                alt="n-pax"
                className="mx-auto relative top-13"
                style={{ width: "100%" }} // ✅ Bigger
              />
            </div>
          </div>

        {/* Main Content Section with White Background */}
        <div className="relative z-10 bg-white py-16 px-8 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content: Mission and Vision */}
              <div className="space-y-8">
                <div className="space-y-16">
                  <div>
                    <h2 className="text-4xl font-bold text-blue-400 mb-5">Our Mission</h2>
                    <p className="text-gray-700 text-lg leading-relaxed space-y-2">
                      We build trust and deliver value through the harmony of people and technology.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We aim to be a lasting IT partner that empowers the growth of our clients and our teams.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-blue-400 mb-6">Our Vision</h2>
                    <p className="text-gray-700 text-lg leading-relaxed space-y-2">
                      We combine diverse talents and technological strengths to deliver sustainable value to businesses around the world.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                      We aim to be a trusted presence that continuously creates new possibilities through collaboration and harmony.
                    </p>
                    <h2 className="text-4xl font-bold text-blue-400 mb-6">Our Core Values</h2>
                    <ul className="text-gray-700 text-lg leading-relaxed space-y-2">
                      <li>1. Sincere Contribution to Client Success</li>
                      <li>2. Long-Term Relationships Rooted in Trust</li>
                      <li>3. Culture of Diversity and Co-Creation</li>
                      <li>4. Embracing Change with Courage</li>
                      <li>5. Open and Healthy Organizational Management</li>
                      <li>6. Harmony of Support and Autonomy</li>
                      <li>7. Practicing Balance and Harmony</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Content: Image */}
              <div className="relative">
                <img
                  src={TeamImage}
                  alt="Team"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              {/* Floating Chatbot */}
                    <div className="fixed bottom-8 right-8 z-50">
                      <Chatbot isDark={false} />
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


