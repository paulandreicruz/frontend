import React, { useState } from "react";
import * as api from "../Api/api";

const StudGrades = () => {
  const [grades, setGrades] = useState([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetStudentGrade = async () => {
    try {
      setLoading(true);
      const response = await api.getStudenGradeById(userId);

      // Check if 'grades' property exists in the response
      if (
        response.data &&
        response.data.grades &&
        Array.isArray(response.data.grades)
      ) {
        setGrades(response.data.grades);
      } else {
        setError("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching student grades:", error);
      setError("Error fetching student grades");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="userId">Enter User ID:</label>

        <input
          type="text"
          name="studentid"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-[250px] p-2 border rounded-md mb-4"
          required
        />
      </div>
      <button
        onClick={handleGetStudentGrade}
        className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300"
      >
        Get Student Grade
      </button>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h2>Student Grades</h2>
        <ul>
          {grades.map((grade) => (
            <li key={grade.id}>
              {grade.subject}: {grade.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudGrades;
