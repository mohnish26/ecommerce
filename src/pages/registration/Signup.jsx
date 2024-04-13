import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, firestore } from "../../firebase/Firebaseconfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import myContext from "../../context/data/Mycontext";
import Loader from "../../loader/Loader";

const Signup = () => {
  const response = useContext(myContext);
  const { loading, setLoading } = response;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const submit = async () => {
    setLoading(true);
    if (
      name.trim().length < 3 ||
      name.trim() === "" ||
      email.trim() === "" ||
      (password.length < 6 && confirmpass.length < 6) ||
      password !== confirmpass ||
      password.trim() === "" ||
      confirmpass.trim() === ""
    ) {
      return toast.error("Please add all carefully");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        email: users.user.email,
        uid: users.user.uid,
        time: Timestamp.now(),
      };

      const userRef = collection(firestore, "users");
      await addDoc(userRef, user);
      setLoading(false);
      toast.success("Signup succesfull");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmpass("");
    } catch (error) {
      setLoading(false);
      return toast.error("something went wrong");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center  ">
      {loading && <Loader />}
      <div className=" flex flex-col items-center justify-center gap-10 bg-neutral-700  md:p-5 p-5 rounded-xl">
        <h2 className="text-white font-semibold text-5xl">Signup</h2>
        <div className="flex flex-col gap-2 text-2xl">
          <p className="text-white">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
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
            placeholder="Minimum 6 value"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <p className="text-white">Confirm Password</p>
          <input
            disabled={password.length < 6}
            value={confirmpass}
            onChange={(e) => setConfirmpass(e.target.value)}
            type="password"
            className="bg-gray-600 md:p-4 py-2 px-2 rounded-xl text-gray-400"
          />
          <button
            disabled={
              name.trim() === "" &&
              email.trim() === "" &&
              confirmpass.length < 6
            }
            onClick={submit}
            className="bg-red-500 mt-5 md:p-3 rounded-xl py-2"
          >
            Signup
          </button>
          {confirmpass !== password && confirmpass.length > 5 ? (
            <p className="bg-red-600 p-3 text-white rounded">
              Password doesn't match
            </p>
          ) : (
            ""
          )}
        </div>

        <p className="text-white">
          Already have an account{" "}
          <span className="text-blue-300">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
