import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';

const Body = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className='flex bg-[#FFF] py-[120px] px-[30px] justify-center items-center gap-[10px] self-stretch md:px-[320px]'>
      <motion.div  initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex w-[315px] flex-col items-start gap-[60px] self-stretch md:w-[880px]'>
        <div className='flex flex-col items-start gap-[60px] self-stretch'>
            <p className='self-stretch text-[#2D2D2D] text-[24px] not-italic font-medium leading-[36px] tracking-[1px]'>I believe in clean code, efficient architecture, and building MERN stack applications that deliver real value through great user experiences.</p>
            <div className='flex flex-col items-start self-stretch'>

                <div className='flex py-[10px] px-[5px] items-start gap-[10px] self-stretch bg-[#009379]'>
                <p className='text-[#F6DCE9] text-[16px] not-italic font-semibold leading-[26px] flex-[1_0_0]'>I build solutions, not just applications. My MERN code is clean, efficient, and scalable.
                </p></div>

                <div className='flex py-[5px] px-[0px] items-start gap-[10px] self-stretch'>
                <p className='flex-[1_0_0] text-[#2D2D2D] text-[16px] not-italic font-normal leading-[26px]'>I am currently available for part-time roles and dedicated contract positions. I specialize in building MERN Stack applications, including e-commerce platforms, news aggregators, and custom APIs, and I’m eager to contribute to a team that values innovation and technical excellence. Let’s connect to discuss your long-term goals.
                </p></div>

                <div className='flex py-[10px] px-[5px] items-start gap-[10px] self-stretch bg-[#009379]'>
                <p className='text-[#F6DCE9] text-[16px] not-italic font-semibold leading-[26px] flex-[1_0_0]'>Complex requirements don't scare me. I turn challenging ideas into elegant, production-ready software.
                </p></div>

                <div className='flex py-[5px] px-[0px] items-start gap-[10px] self-stretch'>
                <p className='flex-[1_0_0] text-[#2D2D2D] text-[16px] not-italic font-normal leading-[26px]'>Available for freelance and contract projects with flexible scheduling. My services include full-stack development, custom API design, database modeling, and front-end modernization using React. If your project involves MERN, let's talk about turning your concept into a production-ready application.
                </p></div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Body
