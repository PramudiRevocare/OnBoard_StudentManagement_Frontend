import React from "react";

interface SearchButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  label = "Search",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`bg-blue-600 text-white py-3 px-5 flex flex-row items-center space-x-2 font-inter font-semibold hover:bg-white hover:text-blue-600 border border-blue-600 w-20 transition duration-200 ease-in-out ${className}`}
      onClick={onClick}
    >
      <span className="text-xs xl:text-sm">{label}</span>
    </button>
  );
};

export default SearchButton;
