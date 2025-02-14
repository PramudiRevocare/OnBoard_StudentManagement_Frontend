import * as yup from "yup";

export interface Student {
  id: number; 
  studentName: string; 
  email: string;
  contactNo: string; 
  department: string;
  address: string;
}

export const StudentSchema = yup.object().shape({
  studentName: yup.string().required("Student name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  contactNo: yup.string().matches(/^\d{10,}$/, "Contact number must be at least 10 digits").required("Contact number is required"),
  department: yup.string().required("Department is required"),
  address: yup.string().optional(),
});
