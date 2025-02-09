import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillBook, AiOutlineUser } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarContainerClasses = `fixed h-screen z-10 bg-blue-700 text-white flex flex-col transition-[width] duration-1000 ease-in-out ${
    isCollapsed ? "w-28" : "w-96"
  }`;

  const menuItemClasses = `flex items-center px-4 py-3 hover:bg-blue-600 transition-colors duration-300`;

  return (
    <div className={sidebarContainerClasses}>
      {/* Header Section */}
      <div className="flex items-center p-4 border-b border-blue-600">
        {/* Menu Icon */}
        <button
          onClick={toggleSidebarCollapse}
          className="text-white bg-transparent hover:text-blue-300"
        >
          <MdMenuOpen size="1.625rem" />
        </button>
        {/* Sidebar Title */}
        {!isCollapsed && (
          <h1 className="text-lg font-bold ml-6 whitespace-nowrap overflow-hidden">
            Student Management System
          </h1>
        )}
      </div>

      {/* Sidebar Menu Items */}
      <ul className="mt-6 space-y-2 flex-grow">
        <li>
          <Link to="/home" className={menuItemClasses}>
            <AiFillHome size="1.5rem" />
            {!isCollapsed && <span className="ml-4">Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/students" className={menuItemClasses}>
            <AiOutlineUser size="1.5rem" />
            {!isCollapsed && <span className="ml-4">Student Management</span>}
          </Link>
        </li>
        <li>
          <Link to="/courses" className={menuItemClasses}>
            <AiFillBook size="1.5rem" />
            {!isCollapsed && <span className="ml-4">Courses</span>}
          </Link>
        </li>
        <li>
          <Link to="/lecturers" className={menuItemClasses}>
            <FaChalkboardTeacher size="1.5rem" />
            {!isCollapsed && <span className="ml-4">Lecturers</span>}
          </Link>
        </li>
      </ul>

     
      <div className="flex items-center p-4 border-t border-blue-600">
        
        <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0"></div>
        
        {!isCollapsed && (
          <div className="ml-4">
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-xs text-gray-300">Admin</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
