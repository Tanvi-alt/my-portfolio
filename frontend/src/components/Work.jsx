import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';


const Work = () => {
   const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className='bg-white' ref={ref}>
      <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}  className='flex py-[40px] px-[30px] flex-col items-center gap-[60px] self-stretch bg-[#FFFF]'>
      <p className='text-[#2D2D2D] text-center text-[32px] not-italic font-semibold leading-[42px]'>My Latest Work</p>
      <div className='flex flex-col md:grid md:grid-cols-3 md:gap-x-[67.5px] md:gap-y-[100px] items-center gap-[60px]'>
        {/* First work */}
      <div className='flex flex-col items-start gap-[25px]'>
        <div><img onClick={()=>window.open("https://forever-frontend-ecru.vercel.app/","blank")} className='w-[315px] h-[315px] bg-center bg-cover bg-no-repeat' src="/Image6.svg" alt="" /></div>
        <div className='flex flex-col items-start w-[315px] gap-[10px] pr-4'>
        <p className='w-[360px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>Forever - MERN Stack   <br /> E-commerce Application</p>
    
        </div>
      </div>
       {/* Second work */}
      <div className='flex flex-col items-start gap-[25px]'>
        <div>
          <img onClick={()=>window.open("https://chat-application-frontend-black.vercel.app/login","blank")} className='w-[315px] h-[315px] bg-center bg-cover bg-no-repeat' src="/Image1.svg" alt="" />
          </div>
        <div className='flex flex-col items-start w-[315px] gap-[10px]'>
        <p className='w-[315px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>MERN Stack Real-Time Chat Application with WebSockets</p>
     
        </div>
      </div>
       {/* Third work */}
      <div className='flex flex-col items-start gap-[25px]'>
        <div><img onClick={()=>window.open("https://myapp-gray-mu.vercel.app/","blank")} className='w-[315px] h-[315px] bg-center bg-cover bg-no-repeat' src="/Image2.svg" alt="" /></div>
        <div className='flex flex-col items-start w-[315px] gap-[10px]'>
        <p className='w-[315px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>MERN Stack Text Manipulation Utility Tool</p>
        </div>
      </div>
         {/* Fourth work */}
      <div className='flex flex-col items-start gap-[25px]'>
        <div><img onClick={()=>window.open("https://newsapp-ci6p.vercel.app/","blank")} className='w-[315px] h-[315px] bg-center bg-cover bg-no-repeat' src="/Image3.svg" alt="" /></div>
        <div className='flex flex-col items-start w-[315px] gap-[10px]'>
        <p className='w-[315px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>MERN Stack Latest News Aggregator</p>

        </div>
      </div>
         {/* Five work */}
      <div className='flex flex-col items-start gap-[25px]'>
        <div><img onClick={()=>window.open("https://inotebookfrontend-six.vercel.app/","blank")} className='w-[315px] h-[315px] bg-center bg-cover bg-no-repeat' src="/Image4.svg" alt="" /></div>
        <div className='flex flex-col items-start w-[315px] gap-[10px]'>
        <p className='w-[315px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>MERN Stack Personal iNotebook Application</p>

        </div>
      </div>
         {/* Six work */}
      <div className='flex flex-col items-start gap-[25px]'>
        <div><img onClick={()=>window.open("https://project-web-dun-six.vercel.app/","blank")} className='w-[315px] h-[315px] bg-center bg-cover bg-no-repeat' src="/Image5.svg" alt="" /></div>
        <div className='flex flex-col items-start w-[315px] gap-[10px]'>
        <p className='w-[315px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]'>Cynthia Ugwu UI Clone (HTML, CSS, JS)</p>

        </div>
      </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Work
