import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/UseContext";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
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
      <section className="left-container">
        <h2>Already have an account?</h2>
        <Link to="/">
          <button className="sign-button">Login</button>
        </Link>
      </section>
      <section className="right-container">
        <h1>Create an account</h1>
        <form
          className="login-form"
          onSubmit={(event) => userData(event, formData, "signup")}
        >
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter your name"
          />
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
          <input
            onChange={handleChange}
            name="rePassword"
            type="password"
            placeholder="Re enter the password"
          />

          <button className="login-button" type="submit">
            Signup
          </button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
