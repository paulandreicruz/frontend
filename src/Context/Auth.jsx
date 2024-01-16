// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    isStudent: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsed = JSON.parse(data);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: parsed.user,
        token: parsed.token,
      }));
    }
  }, []);

  const loginUser = (user, token, isStudent) => {
    setAuth({ user, token, isStudent });
    localStorage.setItem("auth", JSON.stringify({ user, token, isStudent }));
  };

  const logoutUser = () => {
    setAuth({ user: null, token: "", isStudent: false });
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={[auth, loginUser, logoutUser]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
