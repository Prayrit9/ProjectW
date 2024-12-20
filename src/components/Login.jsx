import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication logic
    if (!username || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== "hello") { // Replace with your authentication logic
      setError("Incorrect password. Please try again.");
      return;
    }

    // Redirect user based on role
    switch (role) {
      case "ngo":
        navigate("/ngo");
        break;
      case "restaurant":
        navigate("/restaurant");
        break;
      case "delivery-partner":
        navigate("/delivery-partner");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        setError("Invalid role selected.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <div className="mb-4">
        <label className="block mb-2 text-lg">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="p-2 w-80 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="p-2 w-80 bg-gray-800 border border-gray-700 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg">Select Your Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 w-80 bg-gray-800 border border-gray-700 rounded"
        >
          <option value="">Select Role</option>
          <option value="ngo">NGO</option>
          <option value="restaurant">Restaurant</option>
          <option value="delivery-partner">Delivery Partner</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
