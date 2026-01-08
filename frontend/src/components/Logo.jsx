import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';

const Logo = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleGmailClick = () => {
        const email = "p.tanvi235@gmail.com";
        const subject = "Portfolio Inquiry";
        const body = "Hi Tanvi,\n\nI just visited your portfolio and wanted to connect!";

        // Encode for safe URL usage
        const mailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            email
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail compose in a new tab
        window.open(mailURL, "_blank");
    };

  return (
    <div ref={ref} className='py-0 px-[66px] flex justify-center items-center gap-[10px] self-stretch bg-[#FFFF]'>
      <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex py-[60px] px-0 flex-col justify-center gap-[80px] self-stretch items-center border-t-2 border-b-2 border-black/20 border-l-0 border-r-0 md:w-[1078px] md:border-t-[rgba(0, 0, 0, 0.20)] md:bottom-b-[rgba(0, 0, 0, 0.20)] md:border-t-[2px] md:border-b-[2px] md:flex-row md:justify-around'>
            <div className='flex flex-row w-[221.972px] gap-[50px] md:gap-[100px]'>
            <img onClick={()=>window.open("https://github.com/Tanvi-alt","blank")} className='w-[103.287px] h-20 bg-[#FFFF] cursor-pointer' src="/github.svg" alt="github" />
            <img onClick={()=>window.open("https://www.linkedin.com/in/tanvi-pindkurwar-a01809381/","blank")} className='w-[53.685px] h-20 bg-[#FFFF] cursor-pointer' src="/linkedin.svg" alt="linkedin" />
            </div>
            <div className='flex flex-row w-[242.12px] gap-[60px] md:gap-[100px]'>
            <img  onClick={()=>window.open("https://dribbble.com/tanvi-pindkurwar","blank")} className='w-[139.008px] h-20 bg-[#FFFF] cursor-pointer' src="/Dribbble.svg" alt="dribble" />
           <img onClick={()=>window.open("https://vercel.com/tanvis-projects-2dbc562c","blank")} className='w-[100px] h-20 bg-[#FFFF] cursor-pointer ' src="/vercel.svg" alt="vercel" />
           </div>

            <div className='w-[213.854px] h-[34px] bg-[#FFFF] md:gap-[60px] pl-10'>
              <img onClick={handleGmailClick}className='h-18 cursor-pointer' src="/email.svg" alt="mail" />
    
              </div>
      </motion.div>
    </div>
  )
} 

export default Logo
