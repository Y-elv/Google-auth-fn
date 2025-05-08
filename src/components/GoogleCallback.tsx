import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleCallback: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse the token from the URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const userData = queryParams.get("userData");

    if (token && userData) {
      try {
        // Store the token and user data in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", userData);

        // Redirect to dashboard
        navigate("/dashboard");
      } catch (err) {
        setError("Failed to process authentication data");
        console.error(err);
      }
    } else {
      setError("Authentication failed - missing token or user data");
    }
  }, [navigate, location]);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Authentication Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Authenticating...</h2>
      <p>Please wait while we complete your sign-in process.</p>
    </div>
  );
};

export default GoogleCallback;
