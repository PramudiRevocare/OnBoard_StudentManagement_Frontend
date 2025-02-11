import React from "react";
import { toast } from "react-toastify";

interface DeletePopupProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  onDeleteApiCall: (id: string) => Promise<any>; 
  itemId: string; 
  title: string; 
}

const DeletePopupComponent: React.FC<DeletePopupProps> = ({
  isDialogOpen,
  setIsDialogOpen,
  onDeleteApiCall,
  itemId,
  title,
}) => {
  const handleDelete = async () => {
    try {
      await onDeleteApiCall(itemId);
      toast.success(`${title} deleted successfully!`);
      setIsDialogOpen(false);
    } catch (error) {
      toast.error(`Failed to delete ${title.toLowerCase()}.`);
    }
  };

  return (
    isDialogOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 text-center">
          <img
            src="/delete-icon.png" 
            alt="Delete Icon"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h2 className="text-lg font-bold mb-2">{`Are you sure you want to delete ${itemId}?`}</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeletePopupComponent;
