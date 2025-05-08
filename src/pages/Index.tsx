import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new home page
    navigate("/", { replace: true });
  }, [navigate]);

  // Render the Home component while redirecting
  return <Home />;
};

export default Index;
