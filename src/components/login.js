import React, { useState } from "react";

const Login = () => {
	return(
		<div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* 로고 이미지 */}
      <div className="mb-6">
			  <img src="/mainlogo.png" alt="Logo" className="w-72 h-72" />  
        
      </div>

      {/* 로그인 폼 */}
      <div className="w-[90%] max-w-xs">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="id"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
          />
          <button
            type="button"
            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
          >
            Log In
          </button>
          <button
            type="button"
            className="w-full py-3 text-gray-500 font-bold rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* 비밀번호 찾기 */}
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

