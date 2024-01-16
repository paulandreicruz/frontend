import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Welcome to Our Website!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our services and features.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="/student-registration"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Student Registration
        </Link>

        <Link
          to="/teacher-registration"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Teacher Registration
        </Link>
      </div>
    </div>
  );
}

export default Home;
