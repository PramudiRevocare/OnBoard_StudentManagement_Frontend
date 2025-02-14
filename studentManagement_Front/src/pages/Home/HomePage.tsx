import React from "react";
import Sidebar from "../../components/SideBar/SideBar.tsx";
import OverviewCard from "../../components/Home/OverviewCard.tsx";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
        {/* Header */}
        <header className="relative flex items-center justify-between px-4 py-6 mb-6 overflow-hidden bg-white rounded-lg shadow-md">
          <div className="z-10">
            <h2 className="mb-2 text-4xl font-bold text-gray-800 font-inter">
              Welcome back to <span className="font-semibold text-blue-500">Academix</span>.
            </h2>
            <p className="text-gray-600 text-md font-inter">
              <span className="block mt-1 text-xl text-gray-500">
                Empowering Students <span className="font-medium text-green-500">One step</span> at a <span className="font-medium text-yellow-500">Time</span>.
              </span>
            </p>
          </div>

          {/* Background Decoration */}
          <div className="absolute w-32 h-32 bg-blue-100 rounded-full opacity-50 -top-10 -right-10 blur-2xl"></div>
          <div className="absolute w-48 h-48 bg-blue-200 rounded-full opacity-50 -bottom-8 -left-12 blur-2xl"></div>
        </header>

        {/* Overview Cards */}
        <main>
          <section className="grid grid-cols-1 gap-6 mb-2 md:grid-cols-3">
            <OverviewCard
              title="Total Courses"
              subtitle="Available"
              value={"50"}
              className="h-full bg-white border-l-8 border-blue-500"
              icon={<svg className="w-8 h-8 text-blue-500"><circle cx="12" cy="12" r="10" /></svg>}
            />
            <OverviewCard
              title="Total Lecturers"
              subtitle="Registered"
              value={"36"}
              className="h-full bg-white border-l-8 border-yellow-500"
              icon={<svg className="w-8 h-8 text-yellow-500"><circle cx="12" cy="12" r="10" /></svg>}
            />
            <OverviewCard
              title="Total Departments"
              subtitle="Active"
              value={"8"}
              className="h-full bg-white border-l-8 border-green-500"
              icon={<svg className="w-8 h-8 text-green-500"><circle cx="12" cy="12" r="10" /></svg>}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;

