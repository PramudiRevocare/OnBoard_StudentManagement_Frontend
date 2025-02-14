import React from "react";
import { Student } from "@/schema/StudentSchema";
import { studentColumns } from "../Table/Columns";

interface StudentTableProps {
  data: Student[];
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

const StudentMgmtTable: React.FC<StudentTableProps> = ({ data, onEdit, onDelete }) => {
  console.log("Table Data Rendering:", data); 

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            {studentColumns.map((column, index) => (
              <th key={index} className="px-6 py-3 text-left font-medium uppercase text-sm tracking-wider">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={studentColumns.length} className="text-center py-4">
                No students found.
              </td>
            </tr>
          ) : (
            data.map((student, rowIndex) => {
              console.log(`Rendering Student Row:`, student); 
              return (
                <tr key={rowIndex} className={`border-b ${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
                  {studentColumns.map((column, colIndex) => {
                    console.log(`Column: ${column.accessor}, Value:`, student[column.accessor as keyof Student] || "N/A");
                    let cellValue = student[column.accessor as keyof Student] || "N/A";

                    return (
                      <td key={colIndex} className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                        {column.accessor === "action" ? (
                          <div className="flex space-x-4">
                            <button onClick={() => onEdit(student)}>✏️</button>
                            <button onClick={() => onDelete(student)}>🗑</button>
                          </div>
                        ) : (
                          cellValue
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};



export default StudentMgmtTable;
