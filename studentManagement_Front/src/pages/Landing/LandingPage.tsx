import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/logo.tsx";
import Title from "../../components/Title/Title.tsx";
import ProgressDots from "../../components/Progress dots/ProgressDots.tsx";
import Button from "../../components/Button/Button.tsx";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      
      <Logo />

      
      <Title />

      
      <ProgressDots />

     
      <div className="flex space-x-4">
        <Button text="Get Started" variant="secondary" onClick={handleGetStarted} />
      </div>
    </div>
  );
};

export default LandingPage;
