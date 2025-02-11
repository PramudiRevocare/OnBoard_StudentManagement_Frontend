import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Table from "../../components/StudentMngt_Components/StudentMgmtTable";
import { studentColumns } from "../../components/Table/Columns";
import EditPopupComponent from "@/components/Popup/Editpopup";
import DeletePopupComponent from "../../components/Popup/deletepopup";
import AddStudent from "../../components/StudentMngt_Components/AddStudent"; // Corrected import
import AddNewButton from "../../components/Button/AddNewButton"; // Corrected import
import { Student, StudentSchema } from "../../schema/StudentSchema";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SearchButton from "../../components/Button/SearchButton";

const studentData: Student[] = [
  {
    studentId: "S001",
    studentName: "John Doe",
    email: "john.doe@example.com",
    contactNo: "123456789",
    course: "Computer Science",
    department: "Engineering",
    enrollmentDate: "2023-01-15",
    address: "123 Elm St",
  },
  {
    studentId: "S002",
    studentName: "Jane Smith",
    email: "jane.smith@example.com",
    contactNo: "987654321",
    course: "Mathematics",
    department: "Sciences",
    enrollmentDate: "2023-02-20",
    address: "456 Oak Ave",
  },
];

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState(studentData);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Filter state
  const [filters, setFilters] = useState({
    studentName: "",
    course: "",
    department: "",
  });

  // Handle Edit Popup
  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsEditDialogOpen(true);
  };

  // Handle Delete Popup
  const handleDelete = (student: Student) => {
    setSelectedStudent(student);
    setIsDeleteDialogOpen(true);
  };

  // Handle Add New Student
  const handleAddNew = (newStudent: Student) => {
    setStudents((prev) => [
      ...prev,
      { ...newStudent, studentId: `S${prev.length + 1}` },
    ]);
  };

  // Handle Search Filters
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filtered Data based on search
  const filteredData = students.filter((student) => {
    return (
      student.studentName.toLowerCase().includes(filters.studentName.toLowerCase()) &&
      student.course.toLowerCase().includes(filters.course.toLowerCase()) &&
      student.department.toLowerCase().includes(filters.department.toLowerCase())
    );
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Student Management</h1>
          <AddNewButton
            buttonLabel="Add New Student"
            buttonClassName="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setIsAddDialogOpen(true)}
          />
        </div>

        {/* Search Filters */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="studentName"
            placeholder="Search by Student Name"
            value={filters.studentName}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="course"
            placeholder="Search by Course"
            value={filters.course}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="department"
            placeholder="Search by Department"
            value={filters.department}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchButton label="Search" className="bg-blue-500 text-white px-4 py-2 rounded-md" />
        </div>

        {/* Table */}
        <Table<Student>
          columns={studentColumns.map((col) =>
            col.accessor === "action"
              ? {
                  ...col,
                  render: (_value, row) => (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(row)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit className="text-lg" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(row)}
                        className="flex items-center space-x-1 text-red-600 hover:text-red-800"
                      >
                        <MdDelete className="text-lg" />
                        <span>Delete</span>
                      </button>
                    </div>
                  ),
                }
              : col
          )}
          data={filteredData}
        />

        {/* Add New Student Popup */}
        {isAddDialogOpen && (
          <AddStudent
            isDialogOpen={isAddDialogOpen}
            setIsDialogOpen={setIsAddDialogOpen}
            onAddStudent={handleAddNew}
          />
        )}

        {/* Edit Student Popup */}
        {isEditDialogOpen && selectedStudent && (
          <EditPopupComponent
            isDialogOpen={isEditDialogOpen}
            setIsDialogOpen={setIsEditDialogOpen}
            schema={StudentSchema}
            initialData={{
              studentName: selectedStudent.studentName,
              email: selectedStudent.email,
              contactNo: selectedStudent.contactNo,
              course: selectedStudent.course,
              address: selectedStudent.address,
            }}
            onSubmitApiCall={async (id, data) => {
              setStudents((prev) =>
                prev.map((student) =>
                  student.studentId === id ? { ...student, ...data } : student
                )
              ); 
            }}
            itemId={selectedStudent.studentId}
            fields={[
              { label: "Student Name", name: "studentName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Contact No", name: "contactNo", type: "text" },
              { label: "Course", name: "course", type: "text" },
              { label: "Address", name: "address", type: "text" },
            ]}
            title="Edit Student"
          />
        )}

        {/* Delete Student Popup */}
        {isDeleteDialogOpen && selectedStudent && (
          <DeletePopupComponent
            isDialogOpen={isDeleteDialogOpen}
            setIsDialogOpen={setIsDeleteDialogOpen}
            onDeleteApiCall={async (id) => {
              setStudents((prev) =>
                prev.filter((student) => student.studentId !== id)
              );
            }}
            itemId={selectedStudent.studentId}
            title="Delete Student"
          />
        )}
      </div>
    </div>
  );
};

export default StudentManagement;
