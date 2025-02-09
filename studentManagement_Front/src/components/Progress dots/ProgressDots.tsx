// src/components/ProgressDots.tsx
import React from "react";

const ProgressDots = () => {
  return (
    <div className="flex space-x-2 mb-6">
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
    </div>
  );
};

export default ProgressDots;
