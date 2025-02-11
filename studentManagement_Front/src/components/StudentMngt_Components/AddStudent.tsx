import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentSchema } from "../../schema/StudentSchema"; 
import { StudentFormValues } from "../../schema/StudentSchema";

interface AddStudentProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  onAddStudent: (data: StudentFormValues) => void;
}

const AddStudent: React.FC<AddStudentProps> = ({
  isDialogOpen,
  setIsDialogOpen,
  onAddStudent,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormValues>({
    resolver: zodResolver(StudentSchema), 
  });

  const onSubmit: SubmitHandler<StudentFormValues> = (data) => {
    onAddStudent(data);
    setIsDialogOpen(false); 
  };

  if (!isDialogOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Student</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setIsDialogOpen(false)}
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Student Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Student Name
            </label>
            <input
              type="text"
              {...register("studentName")}
              placeholder="Enter Student Name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.studentName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.studentName && (
              <p className="text-red-500 text-sm">{errors.studentName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Contact No
            </label>
            <input
              type="text"
              {...register("contactNo")}
              placeholder="Enter Contact Number"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.contactNo ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.contactNo && (
              <p className="text-red-500 text-sm">{errors.contactNo.message}</p>
            )}
          </div>

          {/* Course */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Course</label>
            <input
              type="text"
              {...register("course")}
              placeholder="Enter Course"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.course ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.course && (
              <p className="text-red-500 text-sm">{errors.course.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <input
              type="text"
              {...register("address")}
              placeholder="Enter Address"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              onClick={() => setIsDialogOpen(false)}
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
  );
};

export default AddStudent;
