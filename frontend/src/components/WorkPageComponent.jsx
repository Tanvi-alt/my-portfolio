import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const WorkPageComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex py-[40px] px-[30px] flex-col items-center gap-[100px] self-stretch bg-[#FFFF]"
      >
        <p className="text-[#2D2D2D] text-center text-[32px] not-italic font-semibold leading-[42px]">
          My Latest Work
        </p>
        <div className="flex flex-col md:gap-x-[67.5px] md:gap-y-[100px] items-start gap-[60px]">
          {/* First work */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:w-screen px-6 md:px-20 md:gap-x-40 gap-[30px]"
          >
            <div className="w-[315px] h-[315px] flex-shrink-0">
              <img
                className="w-[315px] h-[315px] bg-center bg-cover bg-no-repeat"
                src="/Image1.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start md:w-[315px] gap-[10px]">
              <p className="md:w-[915px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
                Forever - MERN Stack E-commerce Application
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                {" "}
                I developed a fully functional E-Commerce website using the MERN
                stack (MongoDB, Express.js, React.js, Node.js) to provide users
                with a seamless and secure online shopping experience. The
                platform allows customers to browse products, view detailed
                information, add items to their cart, and complete purchases
                through an integrated payment gateway. The project focuses on
                creating a smooth user experience with a clean, responsive, and
                modern interface optimized for all devices.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                The backend is built with Node.js and Express.js, which handle
                all API requests, authentication, and business logic
                efficiently. Data is securely stored and managed using MongoDB,
                ensuring scalability and reliability. The frontend, developed
                with React.js, offers an intuitive layout that enables users to
                navigate easily between products, categories, and checkout
                pages. Secure JWT-based authentication allows users to register,
                log in, and manage their profiles, while role-based access
                control enables administrators to manage products, track orders,
                and update inventory seamlessly.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                For payment processing, the application integrates with Stripe
                (or Razorpay) to handle real-time, secure transactions, ensuring
                user data protection and smooth checkout flow. Additional
                features include smart product search, dynamic filtering, order
                history, and admin dashboards for analytics and management. The
                entire application is deployed on Vercel, leveraging environment
                variables for API keys and database connections to maintain
                security and performance.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                This project demonstrates end-to-end proficiency in full-stack
                web development, from frontend design and backend API creation
                to database management, payment integration, and cloud
                deployment. It highlights my ability to build scalable,
                production-ready applications using modern web technologies and
                best practices.
              </p>
            </div>
          </motion.div>
          {/* Second work */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row-reverse px-6 md:px-20 max-w-7xl mx-auto gap-12 items-start"
          >
            <div className="w-[315px] h-[315px] flex-shrink-0">
              <img
                className="w-[315px] h-[315px] bg-center bg-cover bg-no-repeat"
                src="/Image6.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start gap-[10px]">
              <p className=" text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
                MERN Stack Real-Time Chat Application with WebSockets
              </p>
              <p className=" text-[17px] not-italic font-normal leading-[27px]">
                I developed a Real-Time Chat Application that enables instant
                messaging between users using WebSockets for continuous,
                bi-directional communication. The application allows users to
                send and receive messages instantly without refreshing the page,
                creating a seamless chatting experience similar to modern
                platforms like WhatsApp or Slack.
              </p>
              <p className=" text-[17px] not-italic font-normal leading-[27px]">
                The frontend is built using React.js, which provides a
                responsive and interactive interface for smooth message
                rendering and dynamic updates. The backend is developed with
                Node.js and Express.js, while WebSocket (implemented using the
                Socket.io library) handles real-time communication between the
                server and connected clients. This architecture ensures
                low-latency message delivery and efficient connection management
                even with multiple users online simultaneously.
              </p>
              <p className=" text-[17px] not-italic font-normal leading-[27px]">
                The project includes features such as user authentication,
                private and group chats, message timestamps, and online/offline
                indicators. Messages are stored in MongoDB, ensuring persistence
                and reliability across sessions. Additionally, the app includes
                typing indicators, message read receipts, and user presence
                tracking to enhance user interaction and engagement.
              </p>
              <p className=" text-[17px] not-italic font-normal leading-[27px]">
                For deployment, the frontend and backend are hosted on Vercel
                and Render/Heroku respectively, ensuring scalability and
                performance. This project demonstrates a strong understanding of
                real-time communication, event-driven architecture, and
                full-stack web development, showcasing the ability to build
                interactive, production-ready applications that handle live data
                updates efficiently.
              </p>
            </div>
          </motion.div>
          {/* Third work */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:w-screen px-6 md:px-20 md:gap-x-40 gap-[30px]"
          >
            <div className="w-[315px] h-[315px] flex-shrink-0">
              <img
                className="w-[315px] h-[315px] bg-center bg-cover bg-no-repeat"
                src="/Image3.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start md:w-[315px] gap-[10px]">
              <p className="md:w-[915px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
                MERN Stack Text Manipulation Utility Tool
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                I developed a Text Manipulation Utility Tool using the MERN
                stack (MongoDB, Express.js, React.js, and Node.js) that allows
                users to perform various text operations efficiently through a
                clean and responsive interface. The tool enables users to
                transform text in multiple ways — such as converting case
                (uppercase, lowercase, title case), removing extra spaces,
                counting words and characters, and copying or clearing text
                instantly. It provides real-time feedback and results without
                requiring page reloads, ensuring a smooth and interactive user
                experience.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                The frontend is built with React.js, offering dynamic updates
                and a user-friendly layout optimized for both desktop and mobile
                screens. The backend, powered by Node.js and Express.js, handles
                text processing, user requests, and stores usage logs in MongoDB
                for analytics and tracking. The application also includes user
                authentication, allowing registered users to save frequently
                used text snippets or view their recent text operations.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                Deployed on Vercel, the application demonstrates strong
                integration of frontend and backend technologies within the MERN
                architecture. This project highlights my skills in building
                full-stack applications, managing data flow between client and
                server, and creating practical tools that enhance productivity
                and efficiency through modern web technologies.
              </p>
            </div>
          </motion.div>
          {/* Fourth work */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row-reverse px-6 md:px-20 max-w-7xl mx-auto gap-12 items-start"
          >
            <div className="w-[315px] h-[315px] flex-shrink-0">
              <img
                className="w-[315px] h-[315px] bg-center bg-cover bg-no-repeat"
                src="/Image2.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start gap-[10px]">
              <p className="text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
                MERN Stack Latest News Aggregator
              </p>
              <p className="text-[17px] not-italic font-normal leading-[27px]">
                I developed a Latest News Aggregation Website that collects and
                displays real-time news articles from multiple sources using the
                News API. The application is designed to provide users with the
                most recent and relevant news updates across various categories
                such as technology, sports, business, entertainment, and health.
                With an intuitive and responsive interface built using React.js,
                users can easily navigate between categories, search for
                specific topics, and read summarized articles with direct links
                to full news sources.
              </p>
              <p className="text-[17px] not-italic font-normal leading-[27px]">
                The backend, powered by Node.js and Express.js, manages API
                calls efficiently, caches responses for performance
                optimization, and handles data filtering and sorting. The
                platform uses MongoDB to store user preferences, bookmarked
                articles, and browsing history, allowing a personalized news
                experience. Real-time data fetching ensures that the content
                remains up to date without requiring manual refreshes.
              </p>
              <p className="text-[17px] not-italic font-normal leading-[27px]">
                The project also includes features like infinite scrolling,
                dark/light mode, and country or language-based filtering for a
                more customized experience. The entire application is deployed
                on Vercel, offering fast performance and reliability. This
                project showcases my ability to work with external APIs, manage
                real-time data, and build dynamic, user-focused applications
                using modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Five work */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:w-screen px-6 md:px-20 md:gap-x-40 gap-[30px]"
          >
            <div className="w-[315px] h-[315px] flex-shrink-0">
              <img
                className="w-[315px] h-[315px] bg-center bg-cover bg-no-repeat"
                src="/Image5.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start md:w-[315px] gap-[10px]">
              <p className="md:w-[915px] text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
                MERN Stack Personal iNotebook Application
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                I developed a Personal iNotebook Application using the MERN
                stack (MongoDB, Express.js, React.js, and Node.js) that allows
                users to securely create, update, delete, and manage their
                personal notes online. The application features JWT-based
                authentication to ensure data privacy, enabling each user to
                access only their own notes after secure login and signup. The
                backend, built with Node.js and Express.js, handles user
                authentication, API routing, and CRUD operations, while MongoDB
                efficiently stores user data and notes.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                The frontend, built using React.js, provides a clean and
                intuitive interface for users to easily organize and edit their
                notes in real time. The app supports features like search
                functionality, auto-save, and responsive design for seamless
                usage across devices. Additionally, it incorporates RESTful APIs
                for smooth client-server communication and context-based state
                management for efficient data flow.
              </p>
              <p className="md:w-[915px] text-[17px] not-italic font-normal leading-[27px]">
                The project is deployed on Vercel, ensuring fast performance and
                accessibility. This application demonstrates my ability to build
                secure, full-stack, data-driven web applications with a strong
                focus on authentication, user experience, and scalability.
              </p>
            </div>
          </motion.div>

          {/* Six work */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row-reverse px-6 md:px-20 max-w-7xl mx-auto gap-12 items-start"
          >
            <div className="w-[315px] h-[315px] flex-shrink-0">
              <img
                className="w-[315px] h-[315px] bg-center bg-cover bg-no-repeat"
                src="/Image4.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start gap-[10px]">
              <p className="text-[#2D2D2D] text-[20px] not-italic font-semibold leading-[30px]">
                Cynthia Ugwu UI Clone (HTML, CSS, JS)
              </p>
              <p className="text-[17px] not-italic font-normal leading-[27px]">
                A visually appealing and responsive clone of Cynthia Ugwu’s
                personal or portfolio website, recreated using HTML, CSS, and
                JavaScript. This project focuses on replicating the original UI
                design with attention to layout, typography, colors, and
                interactive elements. Key features include smooth navigation,
                hover effects, responsive sections, and an engaging user
                interface that mirrors the original design.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkPageComponent;
