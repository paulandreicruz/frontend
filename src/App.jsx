import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import TeacherRegistration from "./Auth/TeacherRegistration";
import UserRegistration from "./Auth/UserRegistration";
import StudentGrade from "./Components/StudentGrade";
import TeacherPage from "./Components/TeacherPage";
import Navbar from "./Components/Navbar";
import Login from "./Auth/Login";
import TeacherLogin from "./Auth/TeacherLogin";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container bg-blue-100 min-h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-registration" element={<UserRegistration />} />
          <Route
            path="/teacher-registration"
            element={<TeacherRegistration />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/login/teacher" element={<TeacherLogin />} />

          <Route path="/student-page" element={<StudentGrade />} />

          <Route path="/teacher-page" element={<TeacherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
