import React, { useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

interface AddNewButtonProps {
    buttonLabel?: string;
    buttonClassName?: string;
    modalContent?: ReactNode;
    modalClassName?: string;
    navigateTo?: string;
    onClick?: () => void;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({
    buttonLabel = 'New',
    buttonClassName = '',
    modalContent,
    modalClassName = '',
    navigateTo,
    onClick,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        }
        if (navigateTo) {
            navigate(navigateTo);
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <button
                className={`border border-gray-300 hover:border-[#0E56A0] hover:bg-gray-50 hover:text-black w-20 text-customSlate font-semibold py-3 px-4 flex items-center justify-center space-x-2 rounded-md transition duration-200 ease-in-out ${buttonClassName}`}
                onClick={handleButtonClick}
            >
                <span className="text-xs xl:text-sm">{buttonLabel}</span>
                <Plus className="w-4" />
            </button>
            
            {isModalOpen && modalContent && (
                <div className={modalClassName}>
                    {React.cloneElement(modalContent as React.ReactElement, {
                        onClose: () => setIsModalOpen(false),
                    })}
                </div>
            )}
        </>
    );
};

export default AddNewButton;
