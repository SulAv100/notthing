import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/UseContext";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    

  const { userData } = useAuth();

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="login-container">
      <section className="right-container">
        <h1>Login into an account</h1>
        <form
          className="login-form"
          onSubmit={(event) => userData(event, formData, "login")}
        >
         
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Make a password"
          />
        
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </section>
      <section className="left-container">
        <h2>Doesnt have an account?</h2>
        <Link to="/signup">
          <button className="sign-button">Sign Up</button>
        </Link>
      </section>
    </div>
  );
}

export default Login;
