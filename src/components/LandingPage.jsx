import React from 'react';
import nPaxImage from '../assets/N-Pax.png';
import { Globe } from 'lucide-react';


export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-black/80">
        <div className="flex items-center">
          <img src={nPaxImage} alt="N-PAX Logo" className="h-12 w-auto" />
        </div>
        
        <div className="flex items-center space-x-12">
          <a href="#home" className="text-white hover:text-blue-500 transition">Home</a>
          <a href="#services" className="text-white hover:text-blue-500 transition">Services</a>
          <a href="#blogs" className="text-white hover:text-blue-500 transition">Blogs</a>
          <a href="#careers" className="text-white hover:text-blue-500 transition">Careers</a>
          <a href="#about" className="text-white hover:text-blue-500 transition">Abouts Us</a>
        </div>
        
        <Globe className="w-8 h-8 text-white cursor-pointer hover:text-blue-500 transition" />
      </nav>

      {/* Hero Section */}
      <div className="relative px-8 py-16 overflow-hidden h-auto">
        {/* Video Background */}
        <video
          src="npax.mp4"
          className="absolute inset-0 w-full object-cover opacity-40"
          style={{ height: '600px' }}
          autoPlay
          muted
          loop
        />

        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="text-blue-500">Technology Moves Fast.</span>
            <br />
            <span className="text-blue-500">But You Can Too.</span>
          </h1>

          <p className="text-2xl text-white mb-8">
            Evolve Your IT with First Focus
          </p>

          <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-lg text-xl font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 mb-12">
            Get Started
          </button>

          <p className="text-xl text-white mb-8">23 years in excellence</p>

          {/* Awards Section */}
          <div className="flex items-center space-x-4">
            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((year, index) => (
              <div
                key={year}
                className={`flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 ${
                  index === 3 || index === 7 ? 'border-blue-400 bg-blue-500/20' : 'border-white'
                } relative`}
              >
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M 50,10 L 55,25 L 70,25 L 58,35 L 62,50 L 50,42 L 38,50 L 42,35 L 30,25 L 45,25 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className={index === 3 || index === 7 ? 'text-blue-400' : 'text-white'}
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold z-10">{year}</span>
                <span className="text-xs z-10">#1 IN</span>
                <span className="text-xs z-10">
                  {index === 7 ? 'STRALIA' : 'AUSTRALIA'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section with Animation */}
      <div className="px-8 py-12 border-t border-gray-800 overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center justify-around min-w-full px-8">
            <div className="text-center px-12">
              <div className="text-3xl font-bold text-white">AAP</div>
              <div className="text-xs text-gray-400 mt-1">ADVISORY PARTNERS</div>
            </div>
            
            <div className="text-center px-12">
              <div className="text-3xl font-bold">
                <span className="text-white">Intime</span>
                <span className="text-blue-500">GDT</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">Global Data Tracker</div>
            </div>
            
            <div className="flex items-center space-x-2 px-12">
              <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
                <div className="w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              <div className="text-2xl font-light text-white">ecclesiastical</div>
            </div>
            
            <div className="flex items-center space-x-3 px-12">
              <div className="text-4xl text-white">🏛️</div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">Athena</div>
                <div className="text-sm text-gray-400">Intelligence</div>
              </div>
            </div>
            
            <div className="text-center px-12">
              <div className="text-2xl font-bold text-white">Survey</div>
              <div className="text-xs text-gray-400 mt-1">SURVEY SERVICES</div>
            </div>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-around min-w-full px-8">
            <div className="text-center px-12">
              <div className="text-3xl font-bold text-white">AAP</div>
              <div className="text-xs text-gray-400 mt-1">ADVISORY PARTNERS</div>
            </div>
            
            <div className="text-center px-12">
              <div className="text-3xl font-bold">
                <span className="text-white">Intime</span>
                <span className="text-blue-500">GDT</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">Global Data Tracker</div>
            </div>
            
            <div className="flex items-center space-x-2 px-12">
              <div className="w-8 h-8 bg-blue-500 flex items-center justify-center">
                <div className="w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              <div className="text-2xl font-light text-white">ecclesiastical</div>
            </div>
            
            <div className="flex items-center space-x-3 px-12">
              <div className="text-4xl text-white">🏛️</div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">Athena</div>
                <div className="text-sm text-gray-400">Intelligence</div>
              </div>
            </div>
            
            <div className="text-center px-12">
              <div className="text-2xl font-bold text-white">Survey</div>
              <div className="text-xs text-gray-400 mt-1">SURVEY SERVICES</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-8 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">Our Services</h3>
            
            <h2 className="text-5xl font-bold text-blue-500 leading-tight mb-8">
              We Help People Use Technology to Make a Difference
            </h2>
            
            <p className="text-white text-lg mb-12 leading-relaxed">
              As a leading Managed Service Provider for mid-market businesses, 
              First Focus provides high-quality and reliable managed IT services 
              to help organisations between 50-200 staff succeed with IT.
            </p>
            
            {/* Dashboard Mockup */}
            <div className="relative">
              {/* Top Navigation Bar */}
              <div className="bg-gray-900 rounded-t-xl p-4 flex items-center space-x-6 border border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">INITIAL ACCESS</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">LATERAL MOVEMENT</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">LATERAL MOVEMENT</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Main Dashboard */}
              <div className="bg-gray-900 rounded-b-xl p-8 border-l border-r border-b border-gray-700">
                <div className="flex gap-8">
                  {/* Donut Chart */}
                  <div className="flex-1">
                    <svg width="280" height="280" viewBox="0 0 280 280">
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#1f2937" strokeWidth="40"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#ef4444" strokeWidth="40" strokeDasharray="157 471" transform="rotate(-90 140 140)"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#f97316" strokeWidth="40" strokeDasharray="94 534" strokeDashoffset="-157" transform="rotate(-90 140 140)"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#eab308" strokeWidth="40" strokeDasharray="78 550" strokeDashoffset="-251" transform="rotate(-90 140 140)"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#22c55e" strokeWidth="40" strokeDasharray="63 565" strokeDashoffset="-329" transform="rotate(-90 140 140)"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#06b6d4" strokeWidth="40" strokeDasharray="47 581" strokeDashoffset="-392" transform="rotate(-90 140 140)"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#8b5cf6" strokeWidth="40" strokeDasharray="31 597" strokeDashoffset="-439" transform="rotate(-90 140 140)"/>
                      <circle cx="140" cy="140" r="100" fill="none" stroke="#ec4899" strokeWidth="40" strokeDasharray="157 471" strokeDashoffset="-470" transform="rotate(-90 140 140)"/>
                    </svg>
                  </div>
                  
                  {/* Risk Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-6xl font-bold text-white mb-2">63</div>
                    <div className="text-sm text-gray-400 mb-8">Medium risk</div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">Account compromise</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">Vulnerabilities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">Activity and behaviors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">Cloud app activity</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">System configuration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="text-sm text-gray-300">XDR detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-300">Threat detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">Security configuration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Charts */}
              <div className="mt-4 flex gap-4">
                {/* Bar Chart */}
                <div className="bg-gray-900 rounded-xl p-4 flex-1 border border-gray-700">
                  <div className="flex items-end justify-around h-24 space-x-2">
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 bg-purple-500 h-16"></div>
                      <div className="w-8 bg-blue-500 h-20"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 bg-purple-500 h-12"></div>
                      <div className="w-8 bg-blue-500 h-16"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-8 bg-purple-500 h-20"></div>
                      <div className="w-8 bg-blue-500 h-24"></div>
                    </div>
                  </div>
                </div>
                
                {/* Line Chart */}
                <div className="bg-gray-900 rounded-xl p-4 flex-1 border border-gray-700 relative overflow-hidden">
                  <svg width="100%" height="100" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#eab308" />
                      </linearGradient>
                    </defs>
                    <path d="M 0,80 L 50,60 L 100,70 L 150,40 L 200,50 L 250,30 L 300,40" 
                          stroke="url(#lineGradient)" 
                          strokeWidth="3" 
                          fill="none"/>
                    <circle cx="300" cy="40" r="6" fill="#eab308"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            {/* Service List */}
            <div className="space-y-6 mb-16">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-2xl font-semibold text-white">ERP Systems</h3>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-2xl font-semibold text-white">HRIS Systems</h3>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-2xl font-semibold text-white">Accounting Systems</h3>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-2xl font-semibold text-white">IoT Systems</h3>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-2xl font-semibold text-white">IT Services</h3>
              </div>
            </div>
            
            {/* Threat Intelligence Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Predict, prevent, and protect with elite actionable threat intelligence
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Stay ahead of emerging threats with deep insights from Trend™ Research, 
                one of the world's largest cyber security research networks.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Proactive defense strategies
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                Stay ahead of adversaries with industry leading{' '}
                <span className="text-white font-semibold">Trend Zero Day Initiative™</span>
                <br />
                (ZDI) intelligence, detecting and mitigating vulnerabilities before they can be exploited, 
                up to 3 months ahead of a patch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs and Insights Section */}
      <div className="px-8 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">BLOGS AND INSIGHTS</h2>
            <p className="text-3xl text-gray-300">CURRENT Updates</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-red-900 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
                  alt="Event performance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Latest Event Highlights</h3>
                <p className="text-gray-400 text-sm">Showcasing innovation and technology solutions at our recent event</p>
              </div>
            </div>
            
            {/* Blog Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop" 
                  alt="HRC Booth" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">HRC Partnership Success</h3>
                <p className="text-gray-400 text-sm">Expanding our human resource solutions and technology integrations</p>
              </div>
            </div>
            
            {/* Blog Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-yellow-900 to-orange-900 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Team Excellence Award</h3>
                <p className="text-gray-400 text-sm">Celebrating our achievements and commitment to innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Bot */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-2 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 border-2 border-gray-600">
          <svg width="40" height="40" viewBox="0 0 60 60" className="text-white">
            {/* Bot head */}
            <rect x="10" y="20" width="40" height="30" rx="8" fill="currentColor"/>

            {/* Antennas */}
            <circle cx="18" cy="15" r="3" fill="#60a5fa"/>
            <line x1="18" y1="18" x2="18" y2="20" stroke="currentColor" strokeWidth="2"/>
            <circle cx="42" cy="15" r="3" fill="#60a5fa"/>
            <line x1="42" y1="18" x2="42" y2="20" stroke="currentColor" strokeWidth="2"/>

            {/* Eyes */}
            <circle cx="22" cy="32" r="4" fill="#60a5fa"/>
            <circle cx="38" cy="32" r="4" fill="#60a5fa"/>

            {/* Smile */}
            <path d="M 20,40 Q 30,46 40,40" stroke="#60a5fa" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={nPaxImage} alt="N-PAX Logo" className="h-10 w-auto" />
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-base">
            2025 CodeAI Solutions. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}