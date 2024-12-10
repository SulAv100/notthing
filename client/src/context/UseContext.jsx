import React, { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const userData = async (event, formData, process) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/auth/${process}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        navigate("/userList");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/verifyUser",
        {
          method: "GEt",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!response.ok) {
        return;
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    console.log("useAuth is outside the provider");
  }
  return authContextValue;
};
