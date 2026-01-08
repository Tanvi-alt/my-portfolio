import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex pt-[50px] pr-[30px] pb-[60px] pl-[30px] justify-center items-center gap-[10px] self-stretch bg-[#FFFF] md:p-25 md:h-[624px] md:flex-col"
    >
      <div className="flex items-center gap-[60px] flex-col md:w-[1080px] md:gap-[30px] md:flex-row md:justify-center">
        <div className="flex flex-col items-start gap-[20px] md:gap-[40px]">
          <div className="flex flex-col items-start gap-[30px] md:gap-[40px]">
            <p className="w-[315px] text-[#2D2D2D] text-center text-[18px] not-italic font-semibold leading-[30px] md:w-[557px] md:text-left">
             MERN Stack Developer |  Machine Learning |  <br />Deep Learning 
            </p>
            <p className="w-[320px] text-[#2D2D2D] text-center text-[48px] not-italic font-semibold leading-normal md:w-[557px] md:leading-[90px] md:text-[80px] md:text-left">
              Hey! It's <br /> me  <br />Tanvi
            </p>
          </div>
          <p className="w-[315px] text-[#2D2D2D] text-center not-italic text-[17px] font-normal leading-[27px] md:w-[557px] md:text-left">
           Modern web development with a machine-learning edge.
          </p>
        </div>
     <video
            src='/video.mp4'
            autoPlay
            muted
            loop
            playsInline
            className=' h-[424px] rounded-2xl' />
      </div>
    </motion.div>
  );
};

export default Hero;
