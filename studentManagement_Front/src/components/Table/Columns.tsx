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
  studentId: string;
  studentName: string;
  email: string;
  contactNo: string;
  course: string;
  department: string;
  enrollmentDate?: string;
  address?: string;
}

export const studentColumns: Column<Student>[] = [
  { header: "Student ID", accessor: "studentId" },
  { header: "Student Name", accessor: "studentName" },
  { header: "Email", accessor: "email" },
  { header: "Contact No", accessor: "contactNo" },
  { header: "Course", accessor: "course" },
  { header: "Department", accessor: "department" },
  { header: "Address", accessor: "address" },
  {
    header: "Action",
    accessor: "action" as keyof Student,
    render: (_value, row: Student, handlers) => (
      <div className="flex space-x-4">
        <FaEdit
          className="text-[#23A3DA] hover:text-blue-700 cursor-pointer"
          onClick={() => handlers?.edit(row)}
          aria-label="Edit Student"
        />
        <FaTrash
          className="text-[#EB1313]/70 hover:text-red-700 cursor-pointer"
          onClick={() => handlers?.delete(row)}
          aria-label="Delete Student"
        />
      </div>
    ),
  },
];






