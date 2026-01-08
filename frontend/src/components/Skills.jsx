import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';


const Skills = () => {
   const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className='flex py-[150px] px-[62px] justify-center items-start ga-[10px] self-stretch bg-[#FFFF] md:py-[180px] md:px-[140px] md:flex-col md:items-center'>
      <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col items-start gap-[125px] md:flex-row'>
        {/* First Skill */}
        <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col items-center gap-[56px]' >
            <div  className='flex flex-col items-center gap-[56px]'><img className='w-[130px] h-[130px] bg-center bg-cover bg-no-repeat' src="/Skill0.svg" alt="" /></div>
            <div className='flex flex-col items-start gap-[19px]'>
                <p className='w-[349.899px] text-center text-[27px] not-italic font-semibold leading-[42px] text-[#2D2D2D]'>Frontend Development</p>
                <p className='w-[349.899px] text-[17px] font-normal leading-[27px] not-italic text-center'>This area covers the creation of dynamic, fast, and responsive user interfaces. I use React.js to build modular components, manage complex application state with tools like Redux, and ensure a seamless, modern user experience (UX).</p>
            </div>
        </motion.div>
        {/* Second Skill */}
        <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col items-center gap-[54px]'>
             <div className='flex flex-col items-center gap-[56px]'><img className='w-[130px] h-[130px] bg-center bg-cover bg-no-repeat' src="/Skill1.svg" alt="" /></div>
            <div className='flex flex-col items-start gap-[19px]'>
                <p className='w-[399.899px] text-center text-[27px] not-italic font-semibold leading-[42px] text-[#2D2D2D]'>Backend & API Development</p>
                <p  className='w-[399.899px] text-[17px] font-normal leading-[27px] not-italic text-center'>My focus here is on building scalable, high-performance server-side logic using Node.js and Express.js. I design and implement robust RESTful APIs that efficiently handle authentication, data processing, and communication between the frontend and the database.</p>
            </div>
        </motion.div>
        {/* Third Skil  */}
        <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex flex-col items-center gap-[56px]'>
             <div className='flex flex-col items-center gap-[56px]'><img className='w-[130px] h-[130px] bg-center bg-cover bg-no-repeat' src="/Skill2.svg" alt="" /></div>
            <div  className='flex flex-col items-start gap-[19px]'>
                <p className='w-[349.899px] text-center text-[27px] not-italic font-semibold leading-[42px] text-[#2D2D2D]'>Database & Deployment</p>
                <p className='w-[349.899px] text-[17px] font-normal leading-[27px] not-italic text-center'>I manage flexible, non-relational data with MongoDB, including efficient schema design and querying. I ensure code integrity using Git and have experience deploying and hosting full-stack applications on cloud platforms like Vercel to deliver them to a live audience.</p>
            </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills
