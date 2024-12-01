import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (formData.id && formData.password) {
      console.log("Logging in with:", formData);
      navigate("/mobile"); // 로그인 성공 시 /mobile 경로로 이동
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleSignup = () => {
    navigate("/signup"); // 팝업 없이 바로 /signup으로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="mb-6">
        <img src="/mainlogo.png" alt="Logo" className="w-72 h-72" />
      </div>
      <div className="w-[90%] max-w-xs">
        <form className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
          />
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={handleSignup} // alert 없이 바로 이동
            className="w-full py-3 text-gray-500 font-bold rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
          >
            Sign up
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-green-600 font-semibold underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;