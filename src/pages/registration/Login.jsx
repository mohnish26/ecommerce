import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Firebaseconfig";
import { toast } from "react-toastify";
import myContext from "../../context/data/Mycontext";
import Loader from "../../loader/Loader";

const Login = () => {
  const response = useContext(myContext);
  const { loading, setLoading } = response;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    setLoading(true);
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      toast.success("SignIn succesfull");
      window.location.href= '/'
    } catch (error) {
      setLoading(false);
      toast.error("Login failed");
    }
  };
  return (
    <div className="flex h-screen justify-center items-center  ">
      {loading && <Loader />}
      <div className=" flex flex-col items-center justify-center gap-10 bg-neutral-700 p-5 rounded-xl">
        <h2 className="text-white font-semibold text-5xl">Login</h2>
        <div className="flex flex-col gap-2 text-2xl">
          <p className="text-white">Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <p className="text-white">Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />

          <button
            onClick={login}
            className="bg-red-500 mt-5 md:p-3 rounded-xl py-2"
          >
            Login
          </button>
        </div>
        <p className="text-white">
          Don't have account{" "}
          <span className="text-blue-300">
            <Link to="/signup">Singup</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
