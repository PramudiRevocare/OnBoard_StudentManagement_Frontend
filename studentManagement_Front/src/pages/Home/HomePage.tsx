import React from "react";
import Sidebar from "../../components/SideBar/SideBar.tsx";

const HomePage = () => {
  return (
    <div className="flex">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      {/* <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
        <p>This is the main content area for the Student Management System.</p>
      </div> */}
    </div>
  );
};

export default HomePage;

  