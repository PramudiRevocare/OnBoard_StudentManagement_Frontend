import React from 'react';

interface SaveButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  label = 'Save',
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`w-20 px-4 py-2 text-white transition duration-150 rounded-md bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SaveButton;

