import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";

const Credits = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-7xl mx-auto px-6 space-y-8 lg:space-y-0">
      
        {/* Left Section - Brand & Contact */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Srijith VY</h2>
            <p className="text-xl italic text-red-500 font-medium">"Dream - Drive - Evolve"</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href="mailto:srijithvy@gmail.com" className="text-sm hover:text-red-400 transition-colors duration-300">
                  srijithvy@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href="tel:+916382251477" className="text-sm hover:text-red-400 transition-colors duration-300">
                  +91 6382251477
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Coimbatore, Tamil Nadu</p>
                  <p>India - 641033</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section - Rights & Time */}
        <div className="flex-1 text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-medium">
              © {currentYear} Srijith VY. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made with <Heart className="w-3 h-3 inline text-red-400 mx-1" /> in India
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg px-4 py-3 inline-block">
            <p className="text-xs text-gray-400 mb-1">
              {dateTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-sm text-white font-mono font-semibold">
              {dateTime.toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* Right Section - Connect */}
        <div className="flex-1 lg:text-right space-y-6">
          <h4 className="text-lg font-semibold text-white">Find Me Here</h4>
          
          {/* Social Links */}
          <div className="flex justify-start lg:justify-end space-x-4">
            <a 
              href="https://github.com/Srijith1881/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 transform"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/srijith-vy1881/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/a_of_olympus/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 transform"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h5 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Navigation</h5>
            <div className="flex flex-col space-y-2 lg:items-end">
              <a href="#about" className="text-sm hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform">About</a>
              <a href="#projects" className="text-sm hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform">Projects</a>
              <a href="#tech" className="text-sm hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform">Technologies</a>
              <a href="#contact" className="text-sm hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Credits;