import React,{ useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';
import  { feedback } from "../assets/assets";

const Client = () => {
    const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="flex pt-[60px] pr-[30px] pb-[90px] pl-[30px] justify-center items-center gap-[10px]  bg-[#FFFF]">
      <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center gap-[40px]">
        <p className="text-[#2D2D2D] text-center text-[32px] not-italic font-semibold leading-[42px]">
          Clients
        </p>
        <div className="flex flex-col items-start gap-[67.5px] md:flex-row">
          {/* Fisrt Client  */}
          {feedback.map((item, index) => (
            <div key={index} className="flex h-50 w-[315px] pt-[30px] pr-[50px] pb-[30px] pl-[30px] items-start gap-[10px] bg-[#FFFCF5] border-[1.5px] border-[#FFD285]">
              <div className="flex flex-col items-start gap-[80px] self-stretch">
                <p className="w-[263px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
               {item.comment}
                </p>
                <div className="flex items-start gap-[20px]">
                  <img
                    className="bg-[#D8D8D8] border-[#D8D8D8] border-[1px] w-[50px] h-[50px] rounded-[100px] bg-center bg-cover bg-no-repeat text-gray-300 text-opacity-50"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col items-start gap-[10px]">
                    <div className="flex items-start gap-[5px]">
                      <img
                        className="w-[20px] h-[20px]"
                        src="/Star.svg"
                        alt=""
                      />
                      <img
                        className="w-[20px] h-[20px]"
                        src="/Star.svg"
                        alt=""
                      />
                      <img
                        className="w-[20px] h-[20px]"
                        src="/Star.svg"
                        alt=""
                      />
                      <img
                        className="w-[20px] h-[20px]"
                        src="/Star.svg"
                        alt=""
                      />
                      <img
                        className="w-[20px] h-[20px]"
                        src="/Star.svg"
                        alt=""
                      />
                    </div>
                    <p className="w-[193px] text-[#2D2D2D] text-[17px] not-italic font-normal leading-[27px]">
                   {item.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Client;
