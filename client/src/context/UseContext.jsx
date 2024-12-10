import React, { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userData = async (event,formData, process) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch(`http://localhost:3000/${process}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <AuthContext.Provider value={{userData}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    console.log("useAuth is outside the provider");
  }
  return authContextValue;
};
