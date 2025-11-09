import React from "react";
import { ArrowRight, User, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Globe from "../assets/Globe.png";
import nPaxImage from "../assets/N-Pax.png";
import BusinessImage from "../assets/LP1.png";
import Chatbot from "./Chatbot.jsx";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section with Globe Background */}
      <div
        className="p-0 relative"
        style={{
          backgroundImage: `url(${Globe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "115vh",
        }}
      >
        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-10 py-10">
          <div className="flex items-center">
            <img src={nPaxImage} alt="N-PAX Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link to="/AboutUs" className="text-gray hover:text-blue-300 transition">
              ABOUT US
            </Link>

            {/* SOFTWARE PRODUCTS & SERVICES Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                SOFTWARE PRODUCTS AND SERVICES
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[350px] bg-slate-900/95 border border-gray-700 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 shadow-xl">
                <h3 className="font-semibold mb-4 text-gray-200">
                  Software Products and Services
                </h3>
                <div className="space-y-3 text-sm">
                  <a href="advance_analytics.php" className="block hover:text-blue-300 text-white">
                    Advanced Analytics Solutions
                  </a>
                  <a href="motionboard.php" className="block hover:text-blue-300 text-white">
                    BI and Dashboarding
                  </a>
                  <a href="digital_transformation.php" className="block hover:text-blue-300 text-white">
                    Digital Transformation Services
                  </a>
                  <a href="hrc.php" className="block hover:text-blue-300 text-white">
                    HRIS / Payroll System
                  </a>
                  <a href="nxpert.php" className="block hover:text-blue-300 text-white">
                    ERP System
                  </a>
                  <a href="mcframega.php" className="block hover:text-blue-300 text-white">
                    Accounting System
                  </a>
                  <a href="mcframe_iot.php" className="block hover:text-blue-300 text-white">
                    IoT System
                  </a>
                  <a href="manage_services.php" className="block hover:text-blue-300 text-white">
                    Managed IT Services
                  </a>
                  <a href="https://www.paxyroll.com" className="block hover:text-blue-300 text-white">
                    Paxyroll Cloud Timekeeping
                  </a>
                </div>
              </div>
            </div>

            {/* INSIGHTS AND BLOGS Mega Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                INSIGHTS AND BLOGS
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[700px] bg-slate-900/95 border border-gray-700 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 shadow-xl grid grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-200 mb-3">News and Insights</h3>
                  <a href="update/category_news?category=23" className="block hover:text-blue-300 text-white">
                    News & Events
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-3">Recent Blogs</h3>
                  <a href="update/category?category=17" className="block hover:text-blue-300 text-white">
                    Advanced Analytics
                  </a>
                  <a href="update/category?category=21" className="block hover:text-blue-300 text-white">
                    Digital Transformation
                  </a>
                  <a href="update/category?category=18" className="block hover:text-blue-300 text-white">
                    Human Resource Information
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-3">&nbsp;</h3>
                  <a href="update/category?category=19" className="block hover:text-blue-300 text-white">
                    Enterprise Resource Planning
                  </a>
                  <a href="update/category?category=20" className="block hover:text-blue-300 ">
                    Accounting
                  </a>
                </div>
              </div>
            </div>

            <Link to="/career" className="text-gray hover:text-blue-300 transition">
              CAREERS
            </Link>
            <a href="#contact" className="text-gray hover:text-blue-300 transition">
              CONTACT US
            </a>

            <button className="px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-gray-700 transition">
              Language ▼
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-4xl font-bold text-black leading-tight">
              Be future-proof with our <br />
              <span className="text-black">Amazing Solutions™</span>
            </h1>
            <p className="text-lg text-black leading-relaxed">
              As trusted by our partners worldwide, our end-to-end business IT solutions will help you reach your organization's next milestones.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section on Separate White Background */}
      <div className="relative z-10 container mx-auto px-8 py-16 bg-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-2">
            OUR SOLUTIONS
          </h2>
          <p className="text-2xl text-gray-700">
            AMAZING THINGS MADE POSSIBLE BY{" "}
            <span className="font-bold text-gray-900">GREAT PEOPLE™</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Companion to HR Management */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Companion to HR Management
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Streamline HR process using an end-to-end packaged solution.
                Fast and accurate payroll, customizable to business compliance,
                integratable with 100% support.
              </p>
              <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                EXPLORE SOLUTION
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Talent Management */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Talent Management
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Secure business future for a new generation of management.
                </p>
              </div>
            </div>

            {/* Advanced Business Intelligence */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Advance Business Intelligence
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Pinpoint and identify performance trends before they impact your business.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={BusinessImage}
              alt="Business Logo"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-8 right-8 z-50">
        <Chatbot isDark={false} />
      </div>
    </>
  );
}
