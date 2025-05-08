import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem("user") || "{}");
  } catch (error) {
    console.error("Error parsing user data:", error);
  }

  // Type guard to check if user object has expected properties
  const isValidUser = (
    user: any
  ): user is {
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
  } => {
    return user && typeof user === "object" && "email" in user;
  };

  if (!isValidUser(user)) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>User not logged in.</p>
        <button
          onClick={() => navigate("/login")}
          style={{
            backgroundColor: "#4285F4",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      {user.picture && (
        <img
          src={user.picture}
          alt="Profile"
          style={{ borderRadius: "50%", width: "100px", marginBottom: "20px" }}
        />
      )}
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>{user.email}</p>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
