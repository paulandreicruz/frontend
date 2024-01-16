/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import axios from "axios";

const PrivateRoute = () => {
  // * Context
  const [auth, setAuth] = useAuth();

  // * State
  const [ok, setOk] = useState(false);
  

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get("http://localhost:3000/api/v1/protected-route");
      
      if (data.ok) {
        console.log("Success");
        setOk(true);
      } else {
        setOk(false);
      }
    };

   if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <div>Loading...</div>;
};

export default PrivateRoute;