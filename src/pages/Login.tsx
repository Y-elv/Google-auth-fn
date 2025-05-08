import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect the user to the backend Google OAuth flow
    window.location.href = "http://localhost:3000/api/v1/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          padding: "12px 24px",
          backgroundColor: "#fff",
          border: "1px solid #dadce0",
          borderRadius: "8px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#4285F4",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
