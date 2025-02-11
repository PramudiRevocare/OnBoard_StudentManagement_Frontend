import * as yup from "yup";

export interface Student {
  studentId: string;
  studentName: string;
  email: string;
  contactNo: string;
  course: string;
  department: string;
  enrollmentDate: string;
  address: string;
}

export const StudentSchema = yup.object().shape({
  studentName: yup.string().required("Student name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  contactNo: yup
    .string()
    .matches(/^\d{10,}$/, "Contact number must be at least 10 digits")
    .required("Contact number is required"),
  course: yup.string().required("Course is required"),
  address: yup.string().optional(),
  enrollmentDate: yup.string().optional(),
});

export type StudentFormValues = yup.InferType<typeof StudentSchema>;
