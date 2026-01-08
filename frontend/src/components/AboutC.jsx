import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';

const AboutC = () => {
    const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className='flex flex-col py-[120px] px-[30px] justify-center items-center gap-[10px] self-stretch bg-[#F9E6F0] md:px-[320px]'>
      <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col items-start gap-[78px] md:w-[780px] md:gap-[70px] md:flex-row'>

        {/* persona */}

        <div className='flex flex-col items-start gap-[20px]'>
          <img className='w-[280px] h-[262px] border-[1.6px] border-solid border-[#2D2D2D]' src="/me.svg" alt="" />
          <p className='h-[82.524px] w-[195px] text-[17px] font-normal leading-[27px] not-italic'><b className='text-[#2D2D2D] font-epilogue text-[17px] font-bold leading-[27px] underline decoration-solid decoration-skip-ink-none'>Tanvi Pindkurwar<br /> </b>Full-Stack Developer (MERN Stack) , <br /> ML enthusiast</p>
        </div>

        {/* Bio */}
        <p className='w-[385px] text-[#2D2D2D] text-[17px] font-normal leading-[27px] not-italic md:w-[515px] md:shrink-0 md:py-[75px]'><b className='font-bold text-[#2D2D2D]'>Bio:</b><br />I am a Full-Stack Developer specializing in the MERN Stack (MongoDB, Express, React, Node.js), with experience building and deploying scalable, high-performance web applications, including secure e-commerce platforms and real-time communication systems. I focus on clean, maintainable code, strong architecture, and intuitive user experiences. Driven by problem-solving, I enjoy turning complex requirements into efficient technical solutions, while actively exploring Machine Learning to enhance modern full-stack applications.</p>
      </motion.div>
    </div>
  )
}

export default AboutC

