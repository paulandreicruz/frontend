// TeacherPage.js
import React, { useState } from "react";
import * as api from "../Api/api";
import StudGrades from "./UserGradesById";
import GetAllStudentGrades from "./GetAllStudentGrades";

function TeacherPage() {
  const [formData, setFormData] = useState({
    studentid: "",
    subject: "",
    score: "",
  });

  const [showdata, setShowData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.addGrade(formData);
      console.log(response);
      alert("Grade submitted");
    } catch (error) {
      console.log(error);
    }
    console.log("Grade submitted:", formData);
  };

  const handleGetAllStudents = () => {
    // Add your logic for getting all students with grades here
    console.log("Getting all students with grades...");
  };

  const handleGetStudentGrade = () => {
    // Add your logic for getting a specific student's grade here
    console.log("Getting student grade for:");
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Teacher Page</h2>

      <div className="flex items-center justify-center">
        <p className="text-lg text-gray-600">
          Welcome to the Teacher Page. Explore your teaching tools and features
          here.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Add Student Grade</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="mb-2">
            Student ID:
            <input
              type="text"
              name="studentid"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <label className="mb-2">
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <label className="mb-2">
            Score:
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 mt-4"
          >
            Add Grade
          </button>
        </form>
      </div>

      <div className="mt-8">
        <StudGrades />
      </div>

      <div className="mt-8">
        <GetAllStudentGrades />
      </div>
    </div>
  );
}

export default TeacherPage;
