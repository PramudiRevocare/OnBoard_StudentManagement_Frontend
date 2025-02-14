import React, { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import StudentMgmtTable from "../../components/StudentMngt_Components/StudentMgmtTable";
import { getAllStudents, searchStudentsByName } from "../../api/studentApi";
import AddNewButton from "../../components/Button/AddNewButton";
import SearchButton from "../../components/Button/SearchButton";
import { Student as StudentType } from "@/schema/StudentSchema";

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const [searchName, setSearchName] = useState(""); 
  useEffect(() => {
    fetchAllStudents();
  }, []);

 
  const fetchAllStudents = async () => {
    try {
      const apiStudents = await getAllStudents();
      console.log("API Response:", apiStudents);

      if (!apiStudents || apiStudents.length === 0) {
        console.error("No student data received from API.");
        return;
      }

 
      const formattedStudents: StudentType[] = apiStudents.map((student: any) => ({
        studentId: `S${student.id}`,
        studentName: student.name,
        email: student.email,
        contactNo: student.phone,
        department: student.departmentName,
        address: student.address,
      }));

      console.log("Formatted Students:", formattedStudents);
      setStudents([...formattedStudents]);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  /* Handle Search */
  const handleSearch = async () => {
    if (!searchName.trim()) {
      fetchAllStudents(); 
      return;
    }
  
    try {
      const searchedStudents = await searchStudentsByName(searchName);
      console.log("Search Results:", searchedStudents);
  
      if (!searchedStudents) {
        console.warn("No students found for the search query.");
        setStudents([]); 
        return;
      }
  
      let formattedStudents: StudentType[];
  
      if (Array.isArray(searchedStudents)) {
        formattedStudents = searchedStudents.map((student) => ({
          id: student.id, 
          studentName: student.name,
          email: student.email,
          contactNo: student.phone,
          department: student.departmentName,
          address: student.address,
        }));
      } else {
        formattedStudents = [
          {
            id: searchedStudents.id,  
            studentName: searchedStudents.name,
            email: searchedStudents.email,
            contactNo: searchedStudents.phone,
            department: searchedStudents.departmentName,
            address: searchedStudents.address,
          },
        ];
      }
  
      setStudents(formattedStudents);
    } catch (error) {
      console.error("Error fetching searched students:", error);
    }
  };
  
  

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Student Management</h1>
          <AddNewButton buttonLabel="Add New Student" buttonClassName="bg-blue-500 text-white px-4 py-2 rounded-md" />
        </div>

        {/* Search Filters */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by Student Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <SearchButton label="Search" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch} />
        </div>

        {/* Table */}
        <StudentMgmtTable data={students} onEdit={(student) => console.log("Edit:", student)} onDelete={(student) => console.log("Delete:", student)} />
      </div>
    </div>
  );
};

export default StudentManagement;
