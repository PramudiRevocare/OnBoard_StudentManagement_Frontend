import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import HomePage from "../pages/Home/HomePage";

const App = () => {
  return (
    <Routes>
      {/* Landing Page as Default */}
      <Route path="/" element={<LandingPage />} />

      {/* Home Page */}
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default App;

