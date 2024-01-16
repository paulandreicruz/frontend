import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import axios from "axios"; // Import Axios

function TeacherLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [, setAuth] = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login/teacher",
        formData
      );

      const { user, token, isstudent } = response.data;

      // Update the auth context with the user and token
      setAuth({ user, token, isstudent });

      navigate("/teacher-page"); // Replace with your student route
    } catch (error) {
      console.error("Error during login:", error);
      alert("Invalid Credentials");
      // Handle login error (show an error message, etc.)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Teacher Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
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

          <label className="block">
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
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeacherLogin;
