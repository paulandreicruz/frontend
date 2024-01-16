// RegistrationForm.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Api from "../Api/api";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    try {
      console.log("FormData:", formData);
      const response = Api.registerStudent(formData);
      console.log("API Response:", response);
      navigate("/");
    } catch (error) {
      console.log("error:", error.response?.data);
    }
  }

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between gap-5 mb-4">
        <h2 className="text-2xl font-semibold">User Registration</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>

      <form onSubmit={handleRegister}>
        <label className="block mb-2">
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          Middle Name:
          <input
            type="text"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </label>

        <label className="block mb-2">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
