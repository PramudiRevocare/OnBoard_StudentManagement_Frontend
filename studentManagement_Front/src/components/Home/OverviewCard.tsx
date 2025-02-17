import React from "react";

interface OverviewCardProps {
  title: string;
  subtitle: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  subtitle,
  value,
  icon,
  className,
}) => {
  return (
    <div className={`flex items-center p-4 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-semibold text-gray-600">{subtitle}</h3>
        <h2 className="text-lg font-bold text-gray-800">{value}</h2>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
