import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUser, AiFillBook } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-blue-900 text-white h-screen overflow-hidden transition-all duration-500 ${
        isCollapsed ? "max-w-[4rem] p-2" : "max-w-[16rem] p-4"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
       
        {!isCollapsed && (
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo.png" 
              alt="Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-lg font-bold whitespace-nowrap text-white">
              Academix
            </h1>
          </div>
        )}
        {/* Toggle Button */}
        <button className="text-white focus:outline-none" onClick={toggleSidebar}>
          {isCollapsed ? "☰" : "×"}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link
              to="/home"
              className="flex items-center px-3 py-2 rounded hover:bg-blue-800 transition"
            >
              <AiFillHome className="text-lg" />
              {!isCollapsed && <span className="ml-3">Home</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/students"
              className="flex items-center px-3 py-2 rounded hover:bg-blue-800 transition"
            >
              <AiOutlineUser className="text-lg" />
              {!isCollapsed && <span className="ml-3">Students</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="flex items-center px-3 py-2 rounded hover:bg-blue-800 transition"
            >
              <AiFillBook className="text-lg" />
              {!isCollapsed && <span className="ml-3">Courses</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/lecturers"
              className="flex items-center px-3 py-2 rounded hover:bg-blue-800 transition"
            >
              <FaChalkboardTeacher className="text-lg" />
              {!isCollapsed && <span className="ml-3">Lecturers</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/departments"
              className="flex items-center px-3 py-2 rounded hover:bg-blue-800 transition"
            >
              <BsBuilding className="text-lg" />
              {!isCollapsed && <span className="ml-3">Departments</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
