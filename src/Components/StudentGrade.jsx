// StudentGrade.js
import { Link } from "react-router-dom";

function StudentGrade() {
  const grades = [
    { subject: "Mathematics", grade: 95 },
    { subject: "Science", grade: 88 },
    { subject: "History", grade: 75 },
    // Add more subjects and grades as needed
  ];

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between gap-5 mb-4">
        <h2 className="text-2xl font-semibold">Your Grades</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="py-4 px-6 text-left font-medium">Subject</th>
            <th className="py-4 px-6 text-left font-medium">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-6">{item.subject}</td>
              <td className="py-2 px-6">{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Print Report Card
        </button>
      </div>
    </div>
  );
}

export default StudentGrade;
