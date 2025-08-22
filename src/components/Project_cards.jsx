import React from 'react';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Card = ({ data, index }) => {
  const { title, description, image, liveLink, codeLink } = data;
  const navigate = useNavigate();

  // Helper function to get responsive profile pic size
  const getProfilePicSize = () => {
    if (window.innerWidth < 480) {
      return { width: '60px', height: '60px' }; // Mobile
    } else if (window.innerWidth < 768) {
      return { width: '70px', height: '70px' }; // Tablet
    } else {
      return { width: '90px', height: '90px' }; // Desktop
    }
  };

  // Helper function to get responsive positioning
  const getProfilePicPosition = () => {
    if (window.innerWidth < 480) {
      return { top: '6px', left: '6px' }; // Mobile
    } else if (window.innerWidth < 768) {
      return { top: '7px', left: '7px' }; // Tablet
    } else {
      return { top: '8px', left: '8px' }; // Desktop
    }
  };

  // Helper function to get responsive image scale and position
  const getImageTransform = () => {
    if (window.innerWidth < 480) {
      return { 
        scale: 'scale(1.8)', 
        objectPosition: '0px 15px' 
      }; // Mobile
    } else if (window.innerWidth < 768) {
      return { 
        scale: 'scale(2.1)', 
        objectPosition: '0px 20px' 
      }; // Tablet
    } else {
      return { 
        scale: 'scale(2.5)', 
        objectPosition: '0px 25px' 
      }; // Desktop
    }
  };

  // Helper function to get responsive border radius
  const getBorderRadius = () => {
    if (window.innerWidth < 480) {
      return '50px 15px 15px 15px'; // Mobile
    } else if (window.innerWidth < 768) {
      return '55px 16px 16px 16px'; // Tablet
    } else {
      return '65px 18px 18px 18px'; // Desktop
    }
  };

  const cardStyle = {
    width: '100%',
    aspectRatio: '1',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    borderRadius: '24px',
    padding: '3px',
    position: 'relative',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    transition: 'all 0.5s ease-in-out',
    maxWidth: window.innerWidth < 480 ? '280px' : '320px', // Larger on mobile
    margin: '0 auto',
    border: '1px solid rgba(139, 69, 19, 0.2)'
  };

  const mailStyle = {
    position: 'absolute',
    right: '1.5rem',
    top: '1.2rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    padding: '8px',
    cursor: 'pointer',
    zIndex: 4,
    transition: 'all 0.3s ease'
  };

  const profilePicStyle = {
    position: 'absolute',
    width: 'calc(100% - 6px)',
    height: 'calc(100% - 6px)',
    top: '3px',
    left: '3px',
    borderRadius: '21px',
    zIndex: 1,
    border: '0px solid #dc2626',
    overflow: 'hidden',
    background: '#f8f8f8',
    transition: 'all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s'
  };

  const imgStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    objectPosition: '0px 0px',
    transition: 'all 0.5s ease-in-out 0s'
  };

  const bottomStyle = {
    position: 'absolute',
    bottom: '3px',
    left: '3px',
    right: '3px',
    background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
    top: '80%',
    borderRadius: '21px',
    zIndex: 0,
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1rem 1rem',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  };

  const contentStyle = {
    color: 'white',
    display: 'none'
  };

  const nameStyle = {
    display: 'block',
    fontSize: window.innerWidth < 480 ? '0.9rem' : 'clamp(1rem, 2.5vw, 1.2rem)', // Smaller on mobile
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: window.innerWidth < 480 ? '0.5rem' : '1rem', // Reduced margin on mobile
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
  };

  const aboutMeStyle = {
    display: 'block',
    fontSize: window.innerWidth < 480 ? '0.75rem' : 'clamp(0.8rem, 2vw, 0.9rem)', // Smaller on mobile
    color: '#e5e5e5',
    textAlign: 'left',
    lineHeight: '1.4', // Slightly reduced line height
    opacity: 0.9
  };

  const bottomBottomStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: window.innerWidth < 480 ? '0.5rem' : '1rem', // Smaller gap on mobile
    marginTop: '0'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: window.innerWidth < 480 ? '0.65rem' : 'clamp(0.7rem, 1.8vw, 0.9rem)', // Smaller on mobile
    padding: window.innerWidth < 480 ? '0.4rem 0.8rem' : '0.6rem 1.2rem', // Smaller padding on mobile
    margin: 0,
    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    minWidth: window.innerWidth < 480 ? '50px' : '70px', // Smaller minimum width on mobile
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  return (
    <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div 
        className="card" 
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderTopLeftRadius = '45px';
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 35px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(220, 38, 38, 0.3)';
          
          const bottom = e.currentTarget.querySelector('.bottom');
          if (bottom) {
            bottom.style.top = '20%';
            bottom.style.zIndex = '2';
            bottom.style.borderRadius = getBorderRadius();
            bottom.style.justifyContent = 'flex-start';
            // Responsive padding for mobile
            const padding = window.innerWidth < 480 ? '1.5rem 0.8rem 0.8rem 0.8rem' : '2rem 1rem 1rem 1rem';
            bottom.style.padding = padding;
            bottom.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)';
          }
          
          const profilePic = e.currentTarget.querySelector('.profile-pic');
          if (profilePic) {
            const size = getProfilePicSize();
            const position = getProfilePicPosition();
            profilePic.style.width = size.width;
            profilePic.style.height = size.height;
            profilePic.style.top = position.top;
            profilePic.style.left = position.left;
            profilePic.style.borderRadius = '50%';
            profilePic.style.zIndex = '3';
            profilePic.style.border = '3px solid #dc2626';
            profilePic.style.boxShadow = '0 8px 16px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            profilePic.style.aspectRatio = '1';
          }
          
          const img = e.currentTarget.querySelector('.profile-pic img');
          if (img) {
            const transform = getImageTransform();
            img.style.transform = transform.scale;
            img.style.objectPosition = transform.objectPosition;
            img.style.transition = 'all 0.5s ease-in-out 0.5s';
          }
          
          const content = e.currentTarget.querySelector('.content');
          if (content) {
            content.style.display = 'block';
            content.style.flex = '1';
            content.style.overflow = 'auto';
            // Responsive max height for mobile
            const maxHeight = window.innerWidth < 480 ? '100px' : '120px';
            content.style.maxHeight = maxHeight;
            const marginBottom = window.innerWidth < 480 ? '0.5rem' : '1rem';
            const marginTop = window.innerWidth < 480 ? '0.5rem' : '1rem';
            content.style.marginBottom = marginBottom;
            content.style.marginTop = marginTop;
            content.style.scrollbarWidth = 'thin';
            content.style.scrollbarColor = 'rgba(220, 38, 38, 0.5) transparent';
          }
          
          const bottomBottom = e.currentTarget.querySelector('.bottom-bottom');
          if (bottomBottom) {
            bottomBottom.style.flexShrink = '0';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderTopLeftRadius = '24px';
          e.currentTarget.style.transform = 'translateY(0px) scale(1)';
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)';
          
          const bottom = e.currentTarget.querySelector('.bottom');
          if (bottom) {
            bottom.style.top = '80%';
            bottom.style.zIndex = '0';
            bottom.style.borderRadius = '21px';
            bottom.style.justifyContent = 'flex-end';
            bottom.style.padding = '1rem 1rem';
            bottom.style.background = 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)';
          }
          
          const profilePic = e.currentTarget.querySelector('.profile-pic');
          if (profilePic) {
            profilePic.style.width = 'calc(100% - 6px)';
            profilePic.style.height = 'calc(100% - 6px)';
            profilePic.style.top = '3px';
            profilePic.style.left = '3px';
            profilePic.style.borderRadius = '21px';
            profilePic.style.zIndex = '1';
            profilePic.style.border = '0px solid #dc2626';
            profilePic.style.boxShadow = 'none';
            profilePic.style.aspectRatio = 'auto';
          }
          
          const img = e.currentTarget.querySelector('.profile-pic img');
          if (img) {
            img.style.transform = 'scale(1)';
            img.style.objectPosition = '0px 0px';
            img.style.transition = 'all 0.5s ease-in-out 0s';
          }
          
          const content = e.currentTarget.querySelector('.content');
          if (content) {
            content.style.display = 'none';
          }
          
          const bottomBottom = e.currentTarget.querySelector('.bottom-bottom');
          if (bottomBottom) {
            bottomBottom.style.flexShrink = 'initial';
          }
        }}
      >
        <button 
          className="mail" 
          style={mailStyle}
          onClick={() => {navigate('/#contact', { state: { openModal: true } }),toast.info("DM if any query")}}
          
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(220, 38, 38, 0.2)';
            e.currentTarget.style.border = '1px solid rgba(220, 38, 38, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
            const svg = e.currentTarget.querySelector('svg');
            if (svg) svg.style.stroke = '#dc2626';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
            const svg = e.currentTarget.querySelector('svg');
            if (svg) svg.style.stroke = '#fff';
          }}
        >
          <svg 
            style={{ stroke: '#fff', strokeWidth: '2px', transition: 'all 0.3s ease' }}
            className="lucide lucide-mail" 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth={2} 
            fill="none" 
            viewBox="0 0 24 24" 
            height={18} 
            width={18} 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect rx={2} y={4} x={2} height={16} width={20} />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>

        <div className="profile-pic" style={profilePicStyle}>
          <img src={image} alt={title} style={imgStyle} />
        </div>

        <div className="bottom" style={bottomStyle}>
          <div className="content" style={contentStyle}>
            <span className="name" style={nameStyle}>{title}</span>
            <span className="about-me" style={aboutMeStyle}>{description}</span>
          </div>
          <div className="bottom-bottom" style={bottomBottomStyle}>
  <button 
    className="button" 
    style={buttonStyle}
    onClick={(e) => {
      e.preventDefault();
      if (liveLink === "#") {
        toast.error("The project is not live now.");
      } else {
        window.open(liveLink, '_blank');
      }
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
      e.currentTarget.style.color = '#ffffff';
      e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
      e.currentTarget.style.color = '#ffffff';
      e.currentTarget.style.transform = 'translateY(0px) scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    }}
  >
    Live
  </button>
  <button 
    className="button" 
    style={buttonStyle}
    onClick={(e) => {
      e.preventDefault();
      if (codeLink === "#") {
        alert("Source code is not available yet");
      } else {
        window.open(codeLink, '_blank');
      }
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
      e.currentTarget.style.color = '#ffffff';
      e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
      e.currentTarget.style.color = '#ffffff';
      e.currentTarget.style.transform = 'translateY(0px) scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    }}
  >
    Code
  </button>
</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;