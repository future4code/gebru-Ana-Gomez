import { useEffect } from "react";
import { goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      goToLogin(navigate);
    }
  }, [navigate]);
};
