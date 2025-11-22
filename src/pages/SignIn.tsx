import React, { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { loginUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginUser(email, password);

      console.log("Login success:", res.data);
 // Check token exists
      if (!res.token) {
        alert("Invalid server response – token missing");
        return;
      }

      // Save token
      localStorage.setItem("token", res.token);

      alert("Logged in successfully!");
      navigate("/chat");
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800/70 p-8 rounded-2xl shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>

        <form onSubmit={handleSignIn}>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
