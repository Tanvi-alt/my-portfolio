import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';

const ContactComponent = () => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
<div ref={ref} className='bg-white'>
     <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}  className='flex py-[40px] px-[30px] flex-col items-center gap-[100px] self-stretch bg-[#FFFF]'>
      <p className='text-[#2D2D2D] text-center text-[32px] not-italic font-semibold leading-[42px]'>My Contact Details </p>
      <div className='flex flex-col items-center w-screen justify-center md:flex-row md:gap-x-20 gap-[50px]'>
   <div className=''><img className='w-[315px] h-[360px] flex-shrink-0' src="/contact.svg" alt="" /></div>
        <div className='flex flex-col items-center justify-center gap-20'>
            <div className='flex flex-col gap-5'>
                <p className='px-5 w-[350px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>Contact Details</p>
                <p className='px-5 w-[350px] text-[17px] not-italic font-normal leading-[27px]'>Mail: p.tanvi235@gmail.com</p>
                <p className='px-5 w-[350px] text-[17px] not-italic font-normal leading-[27px]'>Mobile: 7841047997</p>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='px-5 w-[350px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>My CV/Resume</p>
                <p className='px-5 w-[350px] text-[17px] not-italic font-normal leading-[27px]'>Click below to down load my CV/Resume :</p>
               <a href="TanviPResume.pdf" download="TanviPResume.pdf" ><button className=' m-4 px-6 flex items-start w-fit border border-black py-2 font-semibold'>Click Me</button></a> 
            </div>
        </div>
      </div>
      </motion.div>
</div>
  )
}

export default ContactComponent
