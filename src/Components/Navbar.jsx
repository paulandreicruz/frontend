import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [auth, , logoutUser] = useAuth();
  const navigate = useNavigate();
  console.log(auth, "ath");
  // console.log(auth.user.user.isstudent, "auth");

  const handleLogout = () => {
    // Call the logoutUser function to log out the user
    logoutUser();

    // You can also navigate to the home page or any other route after logout
    navigate("/");
  };

  return (
    <nav className="bg-blue-500 p-4 fixed w-full top-0 z-10">
      <div className="flex items-center">
        <div className="">
          <Link to="/" className="text-white font-semibold mr-4">
            Home
          </Link>
        </div>
        <div className="flex gap-3 items-center ml-auto">
          {auth.user ? (
            <button onClick={handleLogout} className="text-white font-semibold">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="text-white font-semibold">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
