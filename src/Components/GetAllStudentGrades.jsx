import { useState, useEffect } from "react";
import * as api from "../Api/api";

function GetAllStudentGrades() {
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        setLoading(true);
        const response = await api.getAllStudents();

        // Ensure 'allStudents' is an array
        if (Array.isArray(response?.allStudents)) {
          setAllStudents(response.allStudents);
        } else {
          setError("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching all students:", error);
        setError("Error fetching all students");
      } finally {
        setLoading(false);
      }
    };

    fetchAllStudents();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h2>All Students</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Firstname</th>
            <th style={tableCellStyle}>Lastname</th>
            <th style={tableCellStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student) => (
            <tr key={student.studentid}>
              <td style={tableCellStyle}>
                {student.studentid || "No Student Id"}
              </td>
              <td style={tableCellStyle}>
                {student.firstname || "No Firstname"}
              </td>
              <td style={tableCellStyle}>
                {student.lastname || "No Lastname"}
              </td>
              <td style={tableCellStyle}>{student.email || "No Email"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};
export default GetAllStudentGrades;
