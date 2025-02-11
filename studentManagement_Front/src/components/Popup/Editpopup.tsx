import React from "react";
import { useForm, SubmitHandler, DefaultValues, Path } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";
import { toast } from "react-toastify";

interface FieldConfig<T> {
  label: string;
  name: Path<T>; // Ensures only string keys are used
  type: "text" | "number" | "email" | "password" | "date" | "textarea";
}

interface EditPopupProps<T extends Record<string, any>> {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  schema: ObjectSchema<T>;
  initialData: Partial<T>;
  onSubmitApiCall: (id: string, data: T) => Promise<any>;
  itemId: string;
  fields: FieldConfig<T>[];
  title: string;
}

const EditPopupComponent = <T extends Record<string, any>>({
  isDialogOpen,
  setIsDialogOpen,
  schema,
  initialData,
  onSubmitApiCall,
  itemId,
  fields,
  title,
}: EditPopupProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(schema) as any,
    defaultValues: initialData as unknown as DefaultValues<T>,
  });

  const onSubmit: SubmitHandler<T> = async (data) => {
    try {
      await onSubmitApiCall(itemId, data);
      toast.success(`${title} updated successfully!`);
      setIsDialogOpen(false);
    } catch (error) {
      toast.error(`Failed to update ${title.toLowerCase()}.`);
    }
  };

  return (
    isDialogOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-bold">{`Update ${title}`}</h2>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {fields.map((field) => (
              <div className="mb-4" key={field.name}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    {...register(field.name)}
                    className="w-full mt-1 px-4 py-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <input
                    {...register(field.name)}
                    type={field.type}
                    className="w-full mt-1 px-4 py-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
                {errors[field.name] && (
                  <span className="text-sm text-red-500">
                    {errors[field.name]?.message?.toString()}
                  </span>
                )}
              </div>
            ))}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditPopupComponent;
