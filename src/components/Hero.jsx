import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/src/vanta.net";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { toast } from "react-toastify";
import resumePDF from '../assets/Srijith vy - 714022202053.pdf'



const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState("");

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'Srijith_Resume.pdf'
    link.click()
    toast.success('Glad that you recognized me😊 Explore my skills below...!')
  }

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/your-profile', '_blank');
  }

  const handleGitHubClick = () => {
    window.open('https://github.com/your-username', '_blank');
  }

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x0,
        points: 13.0,
        maxDistance: 23.0,
        spacing: 18.0,
        showDots: false,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        className="h-screen w-screen flex flex-col justify-center items-center text-white"
      >
        <motion.h1
          className="text-4xl text-center font-bold z-10 mb-6"
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          Welcome to My <span className="text-red-600">Portfolio</span>
        </motion.h1>

        {/* Main Button Container */}
        <div 
          className="relative z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveTooltip("");
          }}
        >
          {/* Main Button */}
          <button
            className="text-zinc-700 hover:text-red-600 backdrop-blur-lg 
                       bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] 
                       to-transparent rounded-md py-2 px-6 shadow 
                       hover:shadow-red-600 duration-700"
          >
            My Links
          </button>

          {/* Invisible Bridge */}
          <div className="absolute top-full w-full h-4 left-0"></div>

          {/* Hover Menu */}
          <div 
            className={`absolute top-full mt-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isHovered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            {/* Menu container with padding for easier hover */}
            <div className="pt-4 pb-2 px-8">
              <div className="flex space-x-4">
              {/* LinkedIn Button */}
              <div className="relative">
                <button
                  onClick={handleLinkedInClick}
                  onMouseEnter={() => setActiveTooltip("linkedin")}
                  onMouseLeave={() => setActiveTooltip("")}
                  className="w-12 h-12 rounded-full backdrop-blur-lg bg-gradient-to-tr from-transparent 
                           via-[rgba(121,121,121,0.16)] to-transparent hover:bg-red-600 
                           transition-all duration-300 flex items-center justify-center
                           hover:scale-110 hover:shadow-lg hover:shadow-red-600/30"
                >
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                {activeTooltip === "linkedin" && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                                bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    LinkedIn Profile
                  </div>
                )}
              </div>

              {/* GitHub Button */}
              <div className="relative">
                <button
                  onClick={handleGitHubClick}
                  onMouseEnter={() => setActiveTooltip("github")}
                  onMouseLeave={() => setActiveTooltip("")}
                  className="w-12 h-12 rounded-full backdrop-blur-lg bg-gradient-to-tr from-transparent 
                           via-[rgba(121,121,121,0.16)] to-transparent hover:bg-gray-700 
                           transition-all duration-300 flex items-center justify-center
                           hover:scale-110 hover:shadow-lg hover:shadow-gray-600/30"
                >
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
                {activeTooltip === "github" && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                                bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    GitHub Profile
                  </div>
                )}
              </div>

              {/* Resume Button */}
              <div className="relative">
                <button
                  onClick={handleResumeDownload}
                  onMouseEnter={() => setActiveTooltip("resume")}
                  onMouseLeave={() => setActiveTooltip("")}
                  className="w-12 h-12 rounded-full backdrop-blur-lg bg-gradient-to-tr from-transparent 
                           via-[rgba(121,121,121,0.16)] to-transparent hover:bg-red-600 
                           transition-all duration-300 flex items-center justify-center
                           hover:scale-110 hover:shadow-lg hover:shadow-red-600/30"
                >
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </button>
                {activeTooltip === "resume" && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                                bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Download Resume
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;