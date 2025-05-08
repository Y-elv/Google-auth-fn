import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GoogleCallback from "./components/GoogleCallback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth-verification" element={<GoogleCallback />} />
      </Routes>
    </>
  );
}

export default App;
