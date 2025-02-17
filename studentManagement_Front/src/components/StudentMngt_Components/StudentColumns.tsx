import { FaEdit, FaTrash } from "react-icons/fa";

export interface Column<T> {
  header: string;
  accessor: keyof T | "action";
  render?: (
    value: any,
    row: T,
    handlers?: { edit: (row: T) => void; delete: (row: T) => void }
  ) => React.ReactNode;
}

export interface Student {
  studentName: string;
  email: string;
  contactNo: string;
  course: string;
  department: string;
  enrollmentDate?: string;
  address?: string;
}

export const studentColumns: Column<Student>[] = [
  { header: "Student Name", accessor: "studentName" },
  { header: "Email", accessor: "email" },
  { header: "Contact No", accessor: "contactNo" },
  { header: "Course", accessor: "course" },
  { header: "Department", accessor: "department" },
  { header: "Enrollment Date", accessor: "enrollmentDate" },
  { header: "Address", accessor: "address" },
  {
    header: "Action",
    accessor: "action" as keyof Student,
    render: (_value, row, handlers) => (
      <div className="flex space-x-4">
        <FaEdit
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
          onClick={() => handlers?.edit(row)}
        />
        <FaTrash
          className="text-red-600 hover:text-red-800 cursor-pointer"
          onClick={() => handlers?.delete(row)}
        />
      </div>
    ),
  },
];
