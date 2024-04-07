import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex h-screen justify-center items-center  ">
      <div className=" flex flex-col items-center justify-center gap-10 bg-neutral-700  md:p-5 p-5 rounded-xl">
        <h2 className="text-white font-semibold text-5xl">Signup</h2>
        <div className="flex flex-col gap-2 text-2xl">
          <p className="text-white">Name</p>
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <p className="text-white">Email</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <p className="text-white">Password</p>
          <input
            type="password"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <p className="text-white">Confirm Password</p>
          <input
            type="password"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <button className="bg-red-500 mt-5 md:p-3 rounded-xl py-2">
            Signup
          </button>
        </div>
        
        <p className="text-white">Already have an account <span className="text-blue-300"><Link to='/login'>Login</Link></span></p>
      </div>
    </div>
  );
};

export default Signup;
