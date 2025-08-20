import { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import SR from '../assets/images/SR.png';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
// import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[150px] sm:w-[180px] md:w-[200px]">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        className="card-bg p-[1px] rounded-[15px] shadow-card">
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 200
          }} 
          className="bg-black rounded-[15px] py-4 px-6 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-10 sm:w-12 h-10 sm:h-12 object-contain" />
          <h3 className="text-white text-sm sm:text-base font-bold text-center mt-3">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="bg-black min-h-screen w-screen flex flex-col md:flex-row justify-between items-center text-white p-5">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <img src={SR} alt="Srijith Vy" className="w-2/3 sm:w-1/2 md:w-3/4 object-contain" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start">
        {/* Name and Paragraph Section */}
        <motion.div variants={textVariant(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">Srijith Vy</h1>
        </motion.div>
        <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-center md:text-left"
        variants={fadeIn("right", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show">
            A curious student combining creativity and technology to build impactful and robust solutions. 
            Pursuing a B.Tech in Artificial Intelligence & Machine Learning, 
            I am passionate about exploring new domains and leveraging my skills to solve real-world challenges.
        </motion.p>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
// export default SectionWrapper(About, "about");
