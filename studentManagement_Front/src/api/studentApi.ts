import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/students";

//Get All Students 
export async function getAllStudents() {
  try {
    const response = await axios.get(`${BASE_URL}/getAllStudents`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false, 
    });

    console.log("API Raw Data:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
}



//Get student by name
export async function searchStudentsByName(studentName: string) {
  try {
    const response = await axios.get(`${BASE_URL}/getStudentsByName/${encodeURIComponent(studentName)}`);
    console.log(`Searched Students: ${studentName}`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching students:", error);
    return [];
  }
}


export const deleteStudent = async (studentId: number) => {
  try {
    await axios.delete(`${BASE_URL}/deleteStudent/${studentId}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting student:", error);
    return { success: false };
  }
};



// /** Add New Student */
// export async function addStudent(student: Student): Promise<HttpResponse<Student>> {
//   try {
//     const response = await axios.post<HttpResponse<Student>>("/students/saveStudent", student);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding student:", error);
//     throw error;
//   }
// }

// /** Update Student */
// export async function updateStudent(studentId: number, student: Student): Promise<HttpResponse<Student>> {
//   try {
//     const response = await axios.put<HttpResponse<Student>>(`/students/updateStudent`, student);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating student with ID ${studentId}:`, error);
//     throw error;
//   }
// }


