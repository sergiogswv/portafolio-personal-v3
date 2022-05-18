import { motion } from "framer-motion";
import { useState } from "react";

const Layout = ({ children, encendido, setEncendido }) => {
  const handleEncendido = () => setEncendido(!encendido);

  return (
    <div
      className={`${
        !encendido ? "bg-[#0D0D0D]" : "bg-gray-50"
      } w-full  transition-all `}
    >
      <div className="grid">
        {!encendido ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-12 md:w-12 ml-2 mt-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-12 md:w-12 ml-2 mt-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
        <div
          className={`w-11 h-6 md:w-20 md:h-12 flex ${
            !encendido
              ? "justify-start bg-[#ffffff66]"
              : "justify-end bg-[#25252566]"
          } rounded-[50px] p-[4.5px] md:p-[10px] cursor-pointer absolute md:left-20 left-10 mt-2`}
          onClick={handleEncendido}
        >
          <motion.div
            className="w-4 h-4 md:w-7 md:h-7 bg-white rounded-full"
            layout
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
