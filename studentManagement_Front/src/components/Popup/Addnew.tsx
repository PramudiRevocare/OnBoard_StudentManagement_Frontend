import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FieldConfig {
  label: string;
  name: string;
  type: "text" | "number" | "textarea";
}

interface AddNewPopupProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  onAddNew: (data: any) => void;
  fields: FieldConfig[];
  schema: yup.ObjectSchema<any>; // Corrected type for Yup validation
  title: string;
}

const AddNewPopupComponent: React.FC<AddNewPopupProps> = ({
  isDialogOpen,
  setIsDialogOpen,
  onAddNew,
  fields,
  schema,
  title,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    onAddNew(data);
    setIsDialogOpen(false);
  };

  return (
    isDialogOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Dynamically Render Fields */}
            <div className="grid grid-cols-1 gap-4">
              {fields.map((field) => (
                <div key={field.name}>
                  {field.type === "textarea" ? (
                    <textarea
                      {...register(field.name)}
                      placeholder={field.label}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    <input
                      {...register(field.name)}
                      type={field.type}
                      placeholder={field.label}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm">
                      {errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddNewPopupComponent;
