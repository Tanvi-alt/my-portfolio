import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';
import { useState } from "react";

const Footer = () => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true, margin: "-100px" });

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name,
    email,
    message,
  };

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <div ref={ref} className='flex pt-0 pr-[30px] pb-[70px] pl-[30px] flex-col items-center self-stretch gap-[10px] bg-[#FFFF] md:pr-[100px] md:pl-[100px]'>
        <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='flex pt-[70px] flex-col items-center gap-[70px] border-t-[2px] border-t-[rgba(0,0,0,0.20)] md:w-[1078px]'>
            <div className='flex flex-col w-[315px] md:flex-row items-start gap-[80px] md:gap-[190px] justify-center'>
                {/*contact info */}
                <div className='flex w-[315px] flex-col items-start gap-[60px]'>
                    <div className='flex w-[315px] flex-col items-start gap-[40px]'>
                        <p className='w-[315px] text-[#2D2D2D] text-[32px] not-italic font-semibold leading-[42px] md:w-[360px] md:h-[42px]'>Let’s work together</p>
                        <p className='w-[315px] text-[#2D2D2D] text-[17px] not-italic font-normal leading-[27px] md:w-[360px] md-[135px]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    </div>
                    {/* Socials */}
                    <div className='w-[232px] h-[36px] flex justify-center items-center gap-[13px]'>
                        <img className='w-[36px] h-[36px]' src="/discord.svg" alt="" />
                        <img className='w-[36px] h-[36px]' src="/nstagram.svg" alt="" />
                        <img className='w-[36px] h-[36px]' src="/behance.svg" alt="" />
                        <img className='w-[36px] h-[36px]' src="/facebook.svg" alt="" />
                        <img className='w-[36px] h-[36px]' src="/dribbble1.svg" alt="" />
                    </div>
                </div>
                 {/* Text fields */}
                <form onSubmit={handleSubmit} className='flex flex-col items-start gap-[40px]'>
                    <div className='flex w-[315px] flex-col items-start gap-[20px]'>
                       <input value={name} onChange={(e) => setName(e.target.value)} className='flex w-[315px] py-[21px] px-[30px] items-start gap-[10px] bg-[#F3F3F3] text-[#2D2D2D] text-[17px] font-normal not-italic leading-[27px]' type="text" placeholder='Name' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='flex w-[315px] py-[21px] px-[30px] items-start gap-[10px] bg-[#F3F3F3] text-[#2D2D2D] text-[17px] font-normal not-italic leading-[27px]' type="text" placeholder='Email' />
                         <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='flex w-[315px] py-[21px] px-[30px] items-start gap-[10px] bg-[#F3F3F3] text-[#2D2D2D] text-[17px] font-normal not-italic leading-[27px]' type="text" placeholder='Type your message here'/>
                    </div>
                   
                    <button className='flex py-[25px] px-[82px] items-start gap-[10px] bg-[#2D2D2D]'>
                        <p className='flex-[1_0_0] text-[#FFFF] text-center text-[20px] not-italic font-semibold leading-[30px]'>Submit</p>
                    </button>
                </form>

            </div>
        </motion.div> 
    </div>
  )
}

export default Footer
