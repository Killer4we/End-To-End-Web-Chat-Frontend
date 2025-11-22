import React, { useState } from "react";
import Input from "../components/Input";
// const {signupUser} = require("../services/auth.service");
import { signupUser } from "../services/auth.service";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await signupUser(username, email, password);
    console.log("Signup success:", res);

    alert("Account created successfully!");

    navigate("/signin");
  } catch (error: any) {
    console.error(error);
    alert(error.response?.data?.message || "Signup failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800/70 p-8 rounded-2xl shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create Account</h2>

        <form onSubmit={handleSignup}>
          <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
