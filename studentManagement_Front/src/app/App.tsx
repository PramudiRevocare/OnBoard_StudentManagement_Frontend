import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import HomePage from "../pages/Home/HomePage";
import StudentManagement from "@/pages/StudentManagement/StudentManagement";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/home" element={<HomePage />} />

      <Route path="/students" element={<StudentManagement />} />
    </Routes>
  );
};

export default App;

