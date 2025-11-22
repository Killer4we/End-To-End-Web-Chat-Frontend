import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 text-center">
      
      {/* Main Card */}
      <div className="bg-gray-800/60 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-md w-full">
        
        <h1 className="text-5xl font-extrabold text-white mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-200 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          to="/signin"
          className="block w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Go to Login
        </Link>

        {/* Small Link */}
        <p className="mt-4 text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
