
import { Student } from "@/schema/StudentSchema";

export interface Column<T> {
  header: string;
  accessor: keyof T | "action";
  render?: (
    value: any,
    row: T,
    handlers?: { edit: (row: T) => void; delete: (row: T) => void }
  ) => React.ReactNode;
}

export const studentColumns: Column<Student>[] = [
  { header: "STUDENT NAME", accessor: "studentName" },
  { header: "EMAIL", accessor: "email" },
  { header: "CONTACT NO", accessor: "contactNo" },
  { header: "DEPARTMENT", accessor: "department" },
  { header: "ADDRESS", accessor: "address" },
  {
    header: "ACTION",
    accessor: "action",
    render: (_value, row, handlers) => (
      <div className="flex space-x-4">
        <button onClick={() => handlers?.edit(row)}>✏️ Edit</button>
        <button onClick={() => handlers?.delete(row)}>🗑 Delete</button>
      </div>
    ),
  },
];
