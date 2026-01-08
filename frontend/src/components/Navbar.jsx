import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TypewriterWithLoop from './TypewriterWithLoop';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };
  const messages = ["Portfolio", "Tanvi Here !", "Take a look :)"];

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex h-[100px] md:px-6 px-[50px] py-[60px] justify-center items-center gap-[201px] self-stretch bg-white md:items-start md:gap-[830px]"
    >
      <div className="flex justify-center items-center w-[200px] h-[50px] pl-50">
       <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onClick={() => navigate('/')}
          className='group relative cursor-pointer'
        >
          <TypewriterWithLoop
            texts={messages}
            typeSpeed={100}
            eraseSpeed={50}
            pause={1500}
          />
        </motion.div>
      </div>
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <img className="w-[25px] h-[23px] md:hidden" src="/Menu.svg" alt="" />
        </motion.button>
      </div>
      <div className="flex flex-row justify-center items-center gap-[50px] w-[261px] h-[28px] max-md:hidden">
        <NavLink to="/">
          <p className={`not-italic text-[17px] font-normal leading-7 ${location.pathname === '/' ? 'bg-black text-white' : ''} transition-all hover:bg-black hover:text-white py-2 px-3 rounded-xl`}>Home</p>
        </NavLink>
        <NavLink to="/about">
          <p className={`not-italic text-[17px] font-normal leading-7 ${location.pathname === '/about' ? 'bg-black text-white' : ''} transition-all hover:bg-black hover:text-white py-2 px-3 rounded-xl`}>About</p>
        </NavLink>
        <NavLink to="/work">
          <p className={`not-italic text-[17px] font-normal leading-7 ${location.pathname === '/work' ? 'bg-black text-white' : ''} transition-all hover:bg-black hover:text-white py-2 px-3 rounded-xl`}>Work</p>
        </NavLink>
        <NavLink to="/contact">
          <p className={`not-italic text-[17px] font-normal leading-7 ${location.pathname === '/contact' ? 'bg-black text-white' : ''} transition-all hover:bg-black hover:text-white py-2 px-3 rounded-xl`}>
            Contact
          </p>
        </NavLink>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.aside
              className="fixed top-0 right-0 w-full h-full bg-white shadow-xl z-50 flex flex-col"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.4 }}
            >
              {/* Header with back icon */}
              <div className="flex items-center justify-between p-5 border-b">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </motion.button>
                <h2 className="text-lg font-semibold">Menu</h2>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col p-5 gap-4 text-gray-700">
                <button
                  onClick={() => {
                    navigate("/");
                    setSidebarOpen(false);
                  }}
                  className="text-left hover:text-blue-500 transition"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    navigate("/about");
                    setSidebarOpen(false);
                  }}
                  className="text-left hover:text-blue-500 transition"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    navigate("/work");
                    setSidebarOpen(false);
                  }}
                  className="text-left hover:text-blue-500 transition"
                >
                  Work
                </button>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setSidebarOpen(false);
                  }}
                  className="text-left hover:text-blue-500 transition"
                >
                  Contact
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
